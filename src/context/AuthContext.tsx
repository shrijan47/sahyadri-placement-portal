import React, { createContext, useContext, useEffect, useState } from 'react';
import type { User, Session } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import type { UserProfile, UserRole } from '../types';
import { authenticateDemoCredentials } from '../data/demoAccounts';

export interface AuthResponse {
  success: boolean;
  error?: string;
  profile?: UserProfile;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: UserProfile | null;
  isLoading: boolean;
  isConfigured: boolean;
  isDemoMode: boolean;
  signIn: (identifier: string, password: string, requiredRole: 'student' | 'faculty') => Promise<AuthResponse>;
  updatePassword: (newPassword: string) => Promise<{ success: boolean; error?: string }>;
  resetPassword: (email: string) => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Check for active demo session or real Supabase session on mount
  useEffect(() => {
    const savedDemo = sessionStorage.getItem('sahyadri_demo_session');
    if (savedDemo) {
      try {
        const parsed = JSON.parse(savedDemo);
        setUser(parsed.user);
        setProfile(parsed.profile);
        setIsLoading(false);
        return;
      } catch {
        sessionStorage.removeItem('sahyadri_demo_session');
      }
    }

    if (!isSupabaseConfigured) {
      setIsLoading(false);
      return;
    }

    // Get initial session from real Supabase instance
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      } else {
        setIsLoading(false);
      }
    });

    // Listen to real Supabase auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      } else {
        setProfile(null);
        setIsLoading(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const fetchProfile = async (userId: string): Promise<UserProfile | null> => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (!error && data) {
        const userProfile = data as unknown as UserProfile;
        setProfile(userProfile);
        return userProfile;
      }
      return null;
    } catch (err) {
      console.error('[Auth] Error fetching user profile:', err);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Dual Authentication Engine:
   * 1. Validates against local Demo Mode dataset if demo credentials are supplied or demo is active.
   * 2. Otherwise routes to real Supabase Auth with deterministic USN resolution and role verification.
   */
  const signIn = async (
    identifier: string,
    password: string,
    requiredRole: 'student' | 'faculty'
  ): Promise<AuthResponse> => {
    const cleanId = identifier.trim().toUpperCase().replace(/\s+/g, '');
    const rawId = identifier.trim().toLowerCase();

    // Check if identifier or password matches Demo Dataset
    const isDemoId =
      rawId === 'admin1.exam@gmail.com' ||
      ['4SF24CI160', '4SF24CI161', '4SF24CI162', '4SF24CI163', '4SF24CI167'].includes(cleanId) ||
      [
        '4sf24ci160@sahyadri.edu.in',
        '4sf24ci161@sahyadri.edu.in',
        '4sf24ci162@sahyadri.edu.in',
        '4sf24ci163@sahyadri.edu.in',
        '4sf24ci167@sahyadri.edu.in',
      ].includes(rawId);

    const isDemoPass = password === 'AdminDemo@123' || password === 'StudentDemo@123';

    if (isDemoId || isDemoPass) {
      const demoResult = authenticateDemoCredentials(identifier, password, requiredRole);
      if ('error' in demoResult) {
        return { success: false, error: demoResult.error };
      }

      setUser(demoResult.user);
      setProfile(demoResult.profile);
      sessionStorage.setItem('sahyadri_demo_session', JSON.stringify(demoResult));
      return { success: true, profile: demoResult.profile };
    }

    if (!isSupabaseConfigured) {
      return {
        success: false,
        error:
          'Supabase backend keys are not configured. You can log in using the DEMO accounts (Students: 4SF24CI160, 4SF24CI161, 4SF24CI162, 4SF24CI163, 4SF24CI167 with password StudentDemo@123; Administrator: admin1.exam@gmail.com with AdminDemo@123).',
      };
    }

    try {
      let emailToAuth = identifier.trim();

      // Secure deterministic USN resolution for students
      if (!emailToAuth.includes('@')) {
        const cleanUSN = emailToAuth.toUpperCase().replace(/\s+/g, '');
        emailToAuth = `${cleanUSN.toLowerCase()}@sahyadri.edu.in`;
      } else {
        emailToAuth = emailToAuth.toLowerCase();
      }

      // Real Supabase Authentication
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email: emailToAuth,
        password,
      });

      if (authError || !authData.user) {
        return {
          success: false,
          error:
            authError?.message === 'Invalid login credentials'
              ? requiredRole === 'student'
                ? 'Invalid USN or temporary password. Please double-check your credentials.'
                : 'Invalid administrator credentials or password.'
              : authError?.message || 'Authentication failed. Please check your credentials.',
        };
      }

      // Strict Role Verification from database profile
      const userProfile = await fetchProfile(authData.user.id);

      if (userProfile) {
        const actualRole: UserRole = userProfile.role;

        if (requiredRole === 'faculty' && actualRole === 'student') {
          await supabase.auth.signOut();
          setUser(null);
          setSession(null);
          setProfile(null);
          return {
            success: false,
            error:
              'Access Restricted: This account is registered with Student privileges. Please switch to the Student Login tab to access your dashboard.',
          };
        }

        if (requiredRole === 'student' && (actualRole === 'faculty' || actualRole === 'admin')) {
          await supabase.auth.signOut();
          setUser(null);
          setSession(null);
          setProfile(null);
          return {
            success: false,
            error:
              'Administrator / Faculty Account Detected: Please switch to the Faculty / Administrator Login tab to proceed.',
          };
        }
      }

      return { success: true, profile: userProfile || undefined };
    } catch (err) {
      return {
        success: false,
        error: err instanceof Error ? err.message : 'Authentication failed unexpectedly.',
      };
    }
  };

  const updatePassword = async (newPassword: string): Promise<{ success: boolean; error?: string }> => {
    // If Demo Session
    if (profile?.is_demo) {
      const updatedProfile = { ...profile, must_change_password: false };
      setProfile(updatedProfile);
      sessionStorage.setItem(
        'sahyadri_demo_session',
        JSON.stringify({ user, profile: updatedProfile })
      );
      return { success: true };
    }

    if (!isSupabaseConfigured) {
      return {
        success: false,
        error: 'Supabase configuration is required to update passwords.',
      };
    }

    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) {
        return { success: false, error: error.message };
      }

      if (user) {
        await (supabase.from('profiles') as any)
          .update({ must_change_password: false })
          .eq('id', user.id);

        setProfile((prev) => (prev ? { ...prev, must_change_password: false } : null));
      }

      return { success: true };
    } catch (err) {
      return {
        success: false,
        error: err instanceof Error ? err.message : 'Failed to update password.',
      };
    }
  };

  const resetPassword = async (email: string): Promise<{ success: boolean; error?: string }> => {
    if (!isSupabaseConfigured) {
      return {
        success: false,
        error:
          'Supabase credentials required. In DEMO MODE, test credentials are fixed: StudentDemo@123 and AdminDemo@123.',
      };
    }

    try {
      const redirectUrl = `${window.location.origin}/login`;
      const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
        redirectTo: redirectUrl,
      });

      if (error) {
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (err) {
      return {
        success: false,
        error: err instanceof Error ? err.message : 'Failed to send password reset email.',
      };
    }
  };

  const signOut = async () => {
    sessionStorage.removeItem('sahyadri_demo_session');
    if (isSupabaseConfigured) {
      try {
        await supabase.auth.signOut();
      } catch {
        // Ignore signout error
      }
    }
    setUser(null);
    setSession(null);
    setProfile(null);
  };

  const isDemoMode = Boolean(
    profile?.is_demo ||
      (typeof window !== 'undefined' && sessionStorage.getItem('sahyadri_demo_session'))
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        profile,
        isLoading,
        isConfigured: isSupabaseConfigured,
        isDemoMode,
        signIn,
        updatePassword,
        resetPassword,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
