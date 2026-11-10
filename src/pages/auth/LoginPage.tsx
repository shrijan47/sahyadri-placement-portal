import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  ArrowLeft,
  X,
  ShieldAlert,
} from 'lucide-react';
import { SahyadriLogo } from '../../components/common/SahyadriLogo';
import { SegmentedToggle } from '../../components/common/SegmentedToggle';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { MustChangePasswordModal } from '../../components/common/MustChangePasswordModal';
import { COLLEGE_INFO } from '../../constants/tokens';
import { useAuth } from '../../hooks/useAuth';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { signIn, resetPassword, isConfigured, user, profile } = useAuth();

  // Redirect already-authenticated users
  useEffect(() => {
    if (user && profile) {
      if (profile.role === 'admin' || profile.role === 'faculty') {
        navigate('/admin', { replace: true });
      } else {
        navigate('/dashboard', { replace: true });
      }
    }
  }, [user, profile, navigate]);

  // State
  const [role, setRole] = useState<'faculty' | 'student'>('student');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Validation & Error Handling
  const [errors, setErrors] = useState<{ identifier?: string; password?: string; general?: string }>({});
  const [authSuccessMessage, setAuthSuccessMessage] = useState<string | null>(null);

  // Rate Limiting Security Lockout
  const [lockoutRemainingSeconds, setLockoutRemainingSeconds] = useState<number>(0);

  // First-Time Password Change Modal (Required for temporary student passwords)
  const [showPasswordChangeModal, setShowPasswordChangeModal] = useState(false);

  // Forgot Password Modal/Mode
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotLoading, setForgotLoading] = useState(false);
  const [forgotMessage, setForgotMessage] = useState<{
    type: 'success' | 'error' | 'info';
    text: string;
  } | null>(null);

  // Backend Setup Details Drawer
  const [showConfigGuide, setShowConfigGuide] = useState(false);

  const isStudent = role === 'student';

  // Check rate-limiting lockout on mount and start timer if locked
  useEffect(() => {
    const checkLockout = () => {
      const stored = localStorage.getItem('sahyadri_auth_lockout');
      if (stored) {
        try {
          const { lockoutUntil } = JSON.parse(stored);
          const diff = Math.ceil((lockoutUntil - Date.now()) / 1000);
          if (diff > 0) {
            setLockoutRemainingSeconds(diff);
          } else {
            localStorage.removeItem('sahyadri_auth_lockout');
            setLockoutRemainingSeconds(0);
          }
        } catch {
          localStorage.removeItem('sahyadri_auth_lockout');
        }
      }
    };

    checkLockout();
  }, []);

  // Lockout countdown timer
  useEffect(() => {
    if (lockoutRemainingSeconds <= 0) return;

    const timer = setInterval(() => {
      setLockoutRemainingSeconds((prev) => {
        if (prev <= 1) {
          localStorage.removeItem('sahyadri_auth_lockout');
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [lockoutRemainingSeconds]);

  // Load "Remember Me" credentials on mount
  useEffect(() => {
    const savedIdentifier = localStorage.getItem('sahyadri_remember_identifier');
    const savedRole = localStorage.getItem('sahyadri_remember_role') as 'faculty' | 'student' | null;

    if (savedIdentifier) {
      setIdentifier(savedIdentifier);
      setRememberMe(true);
    }
    if (savedRole && (savedRole === 'student' || savedRole === 'faculty')) {
      setRole(savedRole);
    }
  }, []);

  // Record failed attempt for rate limiting
  const recordFailedAttempt = () => {
    const stored = localStorage.getItem('sahyadri_auth_attempts');
    let attempts = 1;
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Date.now() - parsed.timestamp < 300000) {
          // within 5 mins
          attempts = parsed.count + 1;
        }
      } catch {
        attempts = 1;
      }
    }

    if (attempts >= 5) {
      const lockoutUntil = Date.now() + 300000; // 5 minute lockout
      localStorage.setItem('sahyadri_auth_lockout', JSON.stringify({ lockoutUntil }));
      localStorage.removeItem('sahyadri_auth_attempts');
      setLockoutRemainingSeconds(300);
    } else {
      localStorage.setItem('sahyadri_auth_attempts', JSON.stringify({ count: attempts, timestamp: Date.now() }));
    }
  };

  const clearFailedAttempts = () => {
    localStorage.removeItem('sahyadri_auth_attempts');
    localStorage.removeItem('sahyadri_auth_lockout');
    setLockoutRemainingSeconds(0);
  };

  // Form Validation
  const validateForm = (): boolean => {
    const newErrors: { identifier?: string; password?: string } = {};

    if (!identifier.trim()) {
      newErrors.identifier = isStudent
        ? 'Please enter your USN (e.g. 4SF24CI160) or campus email.'
        : 'Please enter your administrator username or email.';
    } else if (isStudent && !identifier.includes('@')) {
      const usnPattern = /^4SF\d{2}[A-Z]{2}\d{3}$/i;
      if (!usnPattern.test(identifier.trim())) {
        newErrors.identifier = 'Please enter a valid Sahyadri USN format (e.g. 4SF24CI160).';
      }
    }

    if (!password) {
      newErrors.password = 'Please enter your password.';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Login Submit
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthSuccessMessage(null);

    if (lockoutRemainingSeconds > 0) {
      setErrors({
        general: `Account locked due to multiple failed attempts. Please wait ${lockoutRemainingSeconds} seconds before trying again.`,
      });
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      const result = await signIn(identifier.trim(), password, role);

      if (!result.success) {
        recordFailedAttempt();
        setErrors({ general: result.error || 'Authentication failed. Please verify your credentials.' });
        setIsLoading(false);
        return;
      }

      // Successful authentication clears rate-limiting
      clearFailedAttempts();

      // Handle "Remember Me"
      if (rememberMe) {
        localStorage.setItem('sahyadri_remember_identifier', identifier.trim());
        localStorage.setItem('sahyadri_remember_role', role);
      } else {
        localStorage.removeItem('sahyadri_remember_identifier');
        localStorage.removeItem('sahyadri_remember_role');
      }

      // Check if temporary student password change is required
      if (result.profile?.must_change_password) {
        setIsLoading(false);
        setShowPasswordChangeModal(true);
        return;
      }

      setAuthSuccessMessage(
        `Authenticated successfully as ${result.profile?.full_name || result.profile?.role || 'User'}.`
      );

      // Redirect to respective dashboard
      setTimeout(() => {
        if (result.profile?.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/dashboard');
        }
      }, 600);
    } catch (err) {
      recordFailedAttempt();
      setErrors({
        general: err instanceof Error ? err.message : 'An unexpected error occurred during login.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Password Recovery Submit
  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setForgotMessage(null);

    const emailInput = forgotEmail.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if input is a USN or student institutional address
    const isUSN = /^4SF\d{2}[A-Z]{2}\d{3}$/i.test(emailInput);
    const isStudentEmail = emailInput.endsWith('@sahyadri.edu.in') || isUSN;

    if (isStudentEmail) {
      setForgotMessage({
        type: 'info',
        text: 'Institutional Student Accounts: To prevent unauthorized lockouts, password resets for student institutional accounts are processed directly by the Placement & Examination Cell. Please contact your Department Placement Coordinator or email placements@sahyadri.edu.in with your USN and Student ID for immediate credential verification and reissue.',
      });
      return;
    }

    if (!emailInput || !emailRegex.test(emailInput)) {
      setForgotMessage({
        type: 'error',
        text: 'Please enter a valid registered administrator email address.',
      });
      return;
    }

    setForgotLoading(true);

    try {
      const result = await resetPassword(emailInput);

      if (result.success) {
        setForgotMessage({
          type: 'success',
          text: `Password reset instructions dispatched to ${emailInput}. Please verify your inbox (requires configured custom SMTP in Supabase).`,
        });
        setForgotEmail('');
      } else {
        setForgotMessage({
          type: 'error',
          text: result.error || 'Unable to send password reset email. Ensure custom SMTP provider is active in Supabase.',
        });
      }
    } catch {
      setForgotMessage({
        type: 'error',
        text: 'An error occurred while requesting password reset.',
      });
    } finally {
      setForgotLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[430px] mx-auto transition-all duration-300">
      {/* Backend Config Notice Badge (visible if Supabase is pending setup) */}
      {!isConfigured && (
        <div className="mb-3">
          <button
            type="button"
            onClick={() => setShowConfigGuide(!showConfigGuide)}
            className="w-full flex items-center justify-between p-2.5 bg-amber-500/90 hover:bg-amber-600 text-white text-xs font-semibold rounded-xl shadow-md backdrop-blur-sm transition-colors text-left"
          >
            <span className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>Backend Configuration Required (.env.local)</span>
            </span>
            <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold">
              {showConfigGuide ? 'Close' : 'View Setup'}
            </span>
          </button>

          {showConfigGuide && (
            <div className="mt-2 p-3.5 bg-slate-900/95 text-white rounded-xl text-xs space-y-2.5 shadow-xl border border-slate-700 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-slate-700 pb-1.5">
                <span className="font-bold text-amber-400">Supabase Backend Setup</span>
                <button
                  type="button"
                  onClick={() => setShowConfigGuide(false)}
                  className="text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Add your project credentials into <code className="bg-slate-800 px-1 py-0.5 rounded text-amber-300">.env.local</code>:
              </p>
              <pre className="p-2 bg-slate-950 rounded text-[10px] font-mono text-emerald-400 overflow-x-auto">
{`VITE_SUPABASE_URL=https://oeqgunoybxiozwbkhuxx.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your_actual_publishable_key`}
              </pre>
            </div>
          )}
        </div>
      )}

      {/* Main Authentication Card */}
      <div className="shadow-2xl rounded-2xl overflow-hidden bg-white border border-slate-200/80 transition-all duration-300 animate-zoom-in">
        {/* Top Institutional Header */}
        <div className="pt-7 pb-6 px-6 text-center bg-gradient-to-br from-[#174B36] via-[#205A40] to-[#174B36] relative border-b border-emerald-900/40">
          {/* Sahyadri Emblem */}
          <SahyadriLogo size="md" useSvg={true} className="mb-2" />

          <h2 className="text-white text-base font-semibold tracking-wide">
            Welcome to
          </h2>
          <h1 className="text-white text-sm font-extrabold tracking-wider uppercase mt-0.5">
            {COLLEGE_INFO.portalName}
          </h1>
          <p className="text-white/85 text-[11px] font-medium tracking-wide mt-0.5">
            {COLLEGE_INFO.tagline}
          </p>
        </div>

        {/* Main Form Body */}
        <div className="bg-white px-6 pt-5 pb-7 relative z-10">
          {!isForgotPassword ? (
            /* --- LOGIN MODE --- */
            <div>
              {/* Institutional Sign-In Presets for Review / Evaluation */}
              <div className="mb-4 p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-600">
                    Quick Sign-In Presets:
                  </span>
                  <span className="text-[10px] text-[#205A40] font-bold bg-[#EBF3EF] px-2 py-0.5 rounded-md border border-[#205A40]/20">
                    Autofill
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      setRole('faculty');
                      setIdentifier('admin1.exam@gmail.com');
                      setPassword('AdminDemo@123');
                      setErrors({});
                    }}
                    className="px-2.5 py-1 text-[11px] font-medium bg-white text-slate-700 rounded-lg border border-slate-200 hover:border-[#205A40] hover:text-[#205A40] transition-colors shadow-2xs"
                  >
                    Administrator
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setRole('student');
                      setIdentifier('4SF24CI160');
                      setPassword('StudentDemo@123');
                      setErrors({});
                    }}
                    className="px-2.5 py-1 text-[11px] font-medium bg-white text-slate-700 rounded-lg border border-slate-200 hover:border-[#205A40] hover:text-[#205A40] transition-colors shadow-2xs"
                  >
                    4SF24CI160 (Aarav)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setRole('student');
                      setIdentifier('4SF24CI161');
                      setPassword('StudentDemo@123');
                      setErrors({});
                    }}
                    className="px-2.5 py-1 text-[11px] font-medium bg-white text-slate-700 rounded-lg border border-slate-200 hover:border-[#205A40] hover:text-[#205A40] transition-colors shadow-2xs"
                  >
                    4SF24CI161 (Ananya)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setRole('student');
                      setIdentifier('4SF24CI162');
                      setPassword('StudentDemo@123');
                      setErrors({});
                    }}
                    className="px-2.5 py-1 text-[11px] font-medium bg-white text-slate-700 rounded-lg border border-slate-200 hover:border-[#205A40] hover:text-[#205A40] transition-colors shadow-2xs"
                  >
                    4SF24CI162 (Rohan)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setRole('student');
                      setIdentifier('4SF24CI163');
                      setPassword('StudentDemo@123');
                      setErrors({});
                    }}
                    className="px-2.5 py-1 text-[11px] font-medium bg-white text-slate-700 rounded-lg border border-slate-200 hover:border-[#205A40] hover:text-[#205A40] transition-colors shadow-2xs"
                  >
                    4SF24CI163 (Sneha)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setRole('student');
                      setIdentifier('4SF24CI167');
                      setPassword('StudentDemo@123');
                      setErrors({});
                    }}
                    className="px-2.5 py-1 text-[11px] font-medium bg-white text-slate-700 rounded-lg border border-slate-200 hover:border-[#205A40] hover:text-[#205A40] transition-colors shadow-2xs"
                  >
                    4SF24CI167 (Rahul)
                  </button>
                </div>
              </div>

              {/* Role Switcher Toggle */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Account Type
                </span>
                <SegmentedToggle
                  value={role}
                  onChange={(val) => {
                    setRole(val);
                    setErrors({});
                    setAuthSuccessMessage(null);
                  }}
                  options={[
                    { label: 'Faculty / Admin', value: 'faculty' },
                    { label: 'Student', value: 'student' },
                  ]}
                />
              </div>

              {/* Section Heading */}
              <h3 className="text-center text-lg font-bold text-slate-800 mb-3">
                {isStudent ? 'Student Login' : 'Faculty & Administrator Login'}
              </h3>

              {/* Student Support Alert Notice */}
              {isStudent && (
                <div className="mb-4 p-2.5 bg-[#EBF3EF] border-l-4 border-[#205A40] rounded text-[11px] text-[#174B36] leading-snug">
                  Use your University Seat Number (USN) to log in. For assistance, contact{' '}
                  <a
                    href={`mailto:${COLLEGE_INFO.supportEmail}`}
                    className="font-bold underline hover:text-black"
                  >
                    {COLLEGE_INFO.supportEmail}
                  </a>
                </div>
              )}

              {/* Rate Limiting Lockout Warning */}
              {lockoutRemainingSeconds > 0 && (
                <div className="mb-4 p-3 bg-red-50 border border-red-300 rounded-xl flex items-start gap-2.5 text-xs text-red-900 animate-fadeIn">
                  <ShieldAlert className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div className="flex-1 leading-snug">
                    <strong>Security Lockout:</strong> Too many failed login attempts. System locked for{' '}
                    <span className="font-mono font-bold text-red-700">{lockoutRemainingSeconds}s</span> to protect account integrity.
                  </div>
                </div>
              )}

              {/* General Error Banner */}
              {errors.general && lockoutRemainingSeconds === 0 && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2.5 text-xs text-red-800 animate-fadeIn">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div className="flex-1 leading-snug">{errors.general}</div>
                  <button
                    type="button"
                    onClick={() => setErrors((prev) => ({ ...prev, general: undefined }))}
                    className="text-red-400 hover:text-red-700"
                    aria-label="Dismiss error"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Auth Success Banner */}
              {authSuccessMessage && (
                <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2.5 text-xs text-emerald-800 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{authSuccessMessage}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-3.5" noValidate>
                {/* Username / USN Input */}
                <div>
                  <Input
                    id="identifier"
                    name="identifier"
                    type="text"
                    label={isStudent ? 'University Seat No (USN)' : 'Administrator Username or Email'}
                    placeholder={isStudent ? 'e.g. 4SF24CI160' : 'e.g. admin1.exam@gmail.com'}
                    value={identifier}
                    disabled={isLoading || lockoutRemainingSeconds > 0}
                    error={errors.identifier}
                    onChange={(e) => {
                      setIdentifier(e.target.value);
                      if (errors.identifier) {
                        setErrors((prev) => ({ ...prev, identifier: undefined }));
                      }
                    }}
                    leftIcon={
                      <Mail
                        className="w-4 h-4 text-[#205A40]"
                      />
                    }
                  />
                </div>

                {/* Password Input */}
                <div>
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                    placeholder="Enter password"
                    value={password}
                    disabled={isLoading || lockoutRemainingSeconds > 0}
                    error={errors.password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) {
                        setErrors((prev) => ({ ...prev, password: undefined }));
                      }
                    }}
                    leftIcon={
                      <Lock
                        className="w-4 h-4 text-[#205A40]"
                      />
                    }
                    rightIcon={
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-slate-400 hover:text-slate-600 focus:outline-none p-1"
                        tabIndex={-1}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    }
                  />
                </div>

                {/* Form Controls */}
                <div className="flex flex-col gap-2 pt-1 text-xs">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-1.5 text-slate-600 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={showPassword}
                        onChange={(e) => setShowPassword(e.target.checked)}
                        className="rounded border-slate-300 text-[#205A40] focus:ring-[#205A40] w-3.5 h-3.5"
                      />
                      <span>Show Password</span>
                    </label>

                    <button
                      type="button"
                      onClick={() => {
                        setIsForgotPassword(true);
                        setForgotEmail(identifier.includes('@') ? identifier : '');
                        setForgotMessage(null);
                      }}
                      className="text-[#205A40] hover:text-[#174B36] font-medium hover:underline focus:outline-none"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-0.5">
                    <label className="flex items-center gap-1.5 text-slate-600 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="rounded border-slate-300 text-[#205A40] focus:ring-[#205A40] w-3.5 h-3.5"
                      />
                      <span>Remember Me</span>
                    </label>
                  </div>
                </div>

                {/* Action Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary-green"
                    fullWidth={true}
                    size="md"
                    isLoading={isLoading}
                    disabled={lockoutRemainingSeconds > 0}
                  >
                    SIGN IN
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            /* --- FORGOT PASSWORD MODE --- */
            <div className="space-y-4 animate-fadeIn">
              <button
                type="button"
                onClick={() => {
                  setIsForgotPassword(false);
                  setForgotMessage(null);
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Login</span>
              </button>

              <div className="text-center space-y-1">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 mx-auto flex items-center justify-center mb-2">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">Reset Your Password</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                  Enter your registered email address and we will send you a password recovery link.
                </p>
              </div>

              {forgotMessage && (
                <div
                  className={`p-3 rounded-xl text-xs flex items-start gap-2.5 ${
                    forgotMessage.type === 'success'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : forgotMessage.type === 'info'
                      ? 'bg-amber-50 text-amber-900 border border-amber-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {forgotMessage.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : forgotMessage.type === 'info' ? (
                    <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  )}
                  <span className="flex-1 leading-snug">{forgotMessage.text}</span>
                </div>
              )}

              {/* Student Placement Cell Guidance Card */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-[11px] text-slate-600 space-y-1">
                <span className="font-semibold text-slate-800 block">Student Placement Accounts:</span>
                <span>
                  For institutional accounts (<code className="text-[#205A40]">@sahyadri.edu.in</code>), please contact your Department Placement Coordinator or email <a href="mailto:placements@sahyadri.edu.in" className="text-[#205A40] underline font-medium">placements@sahyadri.edu.in</a> with your USN and Student ID for credential reissue.
                </span>
              </div>

              <form onSubmit={handleForgotPassword} className="space-y-3.5" noValidate>
                <Input
                  id="forgotEmail"
                  name="forgotEmail"
                  type="email"
                  label="Administrator Email / Reset Request"
                  placeholder="admin1.exam@gmail.com"
                  value={forgotEmail}
                  disabled={forgotLoading}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  leftIcon={<Mail className="w-4 h-4 text-[#205A40]" />}
                />

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary-green"
                    fullWidth={true}
                    size="md"
                    isLoading={forgotLoading}
                  >
                    Send Recovery Email
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* First-Time Login Password Change Modal */}
      {showPasswordChangeModal && (
        <MustChangePasswordModal onSuccess={() => navigate('/dashboard')} />
      )}
    </div>
  );
};
