import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary-blue' | 'primary-coral' | 'primary-green' | 'outline' | 'ghost' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary-green',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.97] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none disabled:transform-none select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3 gap-2.5',
  };

  const variantStyles = {
    'primary-green':
      'bg-[#205A40] hover:bg-[#174B36] text-white shadow-xs hover:shadow-md focus:ring-[#205A40]',
    'primary-blue':
      'bg-[#205A40] hover:bg-[#174B36] text-white shadow-xs hover:shadow-md focus:ring-[#205A40]',
    'primary-coral':
      'bg-[#174B36] hover:bg-[#0E3524] text-white shadow-xs hover:shadow-md focus:ring-[#174B36]',
    'navy':
      'bg-[#0F172A] hover:bg-[#1E293B] text-white shadow-xs hover:shadow-md focus:ring-slate-700',
    outline:
      'border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 hover:shadow-sm focus:ring-slate-400',
    ghost:
      'bg-transparent hover:bg-slate-100 text-slate-700 focus:ring-slate-300',
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

