import React, { useState } from 'react';
import {
  Lock,
  Eye,
  EyeOff,
  AlertCircle,
  KeyRound,
  ShieldCheck,
  Check,
  LogOut,
} from 'lucide-react';
import { Input } from './Input';
import { Button } from './Button';
import { useAuth } from '../../hooks/useAuth';

interface MustChangePasswordModalProps {
  onSuccess?: () => void;
}

export const MustChangePasswordModal: React.FC<MustChangePasswordModalProps> = ({ onSuccess }) => {
  const { updatePassword, signOut, profile } = useAuth();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Password validation criteria
  const hasMinLength = newPassword.length >= 8;
  const hasUpper = /[A-Z]/.test(newPassword);
  const hasLower = /[a-z]/.test(newPassword);
  const hasDigit = /[0-9]/.test(newPassword);
  const hasSymbol = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(newPassword);
  const isDifferentFromUSN =
    !profile?.usn || !newPassword.toLowerCase().includes(profile.usn.toLowerCase());
  const passwordsMatch = newPassword === confirmPassword && newPassword.length > 0;

  const isFormValid =
    hasMinLength &&
    hasUpper &&
    hasLower &&
    hasDigit &&
    hasSymbol &&
    isDifferentFromUSN &&
    passwordsMatch;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!isFormValid) {
      setErrorMessage('Please satisfy all password complexity requirements before continuing.');
      return;
    }

    setIsLoading(true);

    try {
      const res = await updatePassword(newPassword);
      if (res.success) {
        if (onSuccess) onSuccess();
      } else {
        setErrorMessage(res.error || 'Failed to update password. Please try again.');
      }
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 space-y-5 animate-fadeIn">
        {/* Header */}
        <div className="text-center space-y-1.5">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 mx-auto flex items-center justify-center mb-2 border border-amber-200">
            <KeyRound className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight">
            Mandatory Password Change
          </h2>
          <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
            Welcome, <strong className="text-slate-700">{profile?.full_name || profile?.usn || 'Student'}</strong>. 
            You are logged in with an initial temporary password. Sahyadri Institutional Security Policy requires creating a private password before accessing your student portal.
          </p>
        </div>

        {errorMessage && (
          <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-xs flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <span className="leading-snug">{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            id="modalNewPassword"
            name="modalNewPassword"
            type={showPassword ? 'text' : 'password'}
            label="Create New Password"
            placeholder="Minimum 8 characters"
            value={newPassword}
            disabled={isLoading}
            onChange={(e) => setNewPassword(e.target.value)}
            leftIcon={<Lock className="w-4 h-4 text-slate-400" />}
            rightIcon={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            }
          />

          {/* Live Complexity Checklist */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 text-[11px] space-y-1.5">
            <div className="font-semibold text-slate-700 mb-1">Password Requirements:</div>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1">
              <div className={`flex items-center gap-1.5 ${hasMinLength ? 'text-emerald-700 font-medium' : 'text-slate-400'}`}>
                <Check className={`w-3.5 h-3.5 ${hasMinLength ? 'opacity-100' : 'opacity-30'}`} />
                <span>At least 8 characters</span>
              </div>
              <div className={`flex items-center gap-1.5 ${hasUpper ? 'text-emerald-700 font-medium' : 'text-slate-400'}`}>
                <Check className={`w-3.5 h-3.5 ${hasUpper ? 'opacity-100' : 'opacity-30'}`} />
                <span>1 uppercase letter</span>
              </div>
              <div className={`flex items-center gap-1.5 ${hasLower ? 'text-emerald-700 font-medium' : 'text-slate-400'}`}>
                <Check className={`w-3.5 h-3.5 ${hasLower ? 'opacity-100' : 'opacity-30'}`} />
                <span>1 lowercase letter</span>
              </div>
              <div className={`flex items-center gap-1.5 ${hasDigit ? 'text-emerald-700 font-medium' : 'text-slate-400'}`}>
                <Check className={`w-3.5 h-3.5 ${hasDigit ? 'opacity-100' : 'opacity-30'}`} />
                <span>1 numeric number</span>
              </div>
              <div className={`flex items-center gap-1.5 ${hasSymbol ? 'text-emerald-700 font-medium' : 'text-slate-400'}`}>
                <Check className={`w-3.5 h-3.5 ${hasSymbol ? 'opacity-100' : 'opacity-30'}`} />
                <span>1 special symbol</span>
              </div>
              <div className={`flex items-center gap-1.5 ${isDifferentFromUSN ? 'text-emerald-700 font-medium' : 'text-rose-500 font-medium'}`}>
                <Check className={`w-3.5 h-3.5 ${isDifferentFromUSN ? 'opacity-100' : 'opacity-30'}`} />
                <span>Cannot be your USN</span>
              </div>
            </div>
          </div>

          <Input
            id="modalConfirmPassword"
            name="modalConfirmPassword"
            type={showPassword ? 'text' : 'password'}
            label="Confirm New Password"
            placeholder="Re-enter your new password"
            value={confirmPassword}
            disabled={isLoading}
            onChange={(e) => setConfirmPassword(e.target.value)}
            leftIcon={<Lock className="w-4 h-4 text-slate-400" />}
          />

          {newPassword && confirmPassword && !passwordsMatch && (
            <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Passwords do not match</span>
            </p>
          )}

          <div className="pt-2 flex flex-col gap-2">
            <Button
              type="submit"
              variant="primary-blue"
              fullWidth={true}
              size="md"
              isLoading={isLoading}
              disabled={!isFormValid || isLoading}
            >
              <ShieldCheck className="w-4 h-4 mr-1.5" />
              <span>Save Password & Unlock Dashboard</span>
            </Button>

            <button
              type="button"
              onClick={() => signOut()}
              className="text-xs text-slate-500 hover:text-slate-800 flex items-center justify-center gap-1.5 py-1.5 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out and change later</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

