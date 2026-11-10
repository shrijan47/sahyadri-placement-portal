import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  asymmetricScoop?: boolean;
  shadow?: 'none' | 'soft' | 'elevated';
  hoverLift?: boolean;
  staggerIndex?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  asymmetricScoop = false,
  shadow = 'soft',
  hoverLift = false,
  staggerIndex,
  className = '',
  ...props
}) => {
  const shadowClasses = {
    none: '',
    soft: 'shadow-soft',
    elevated: 'shadow-card-elevated',
  };

  const staggerClass = staggerIndex
    ? `animate-fade-up stagger-${Math.min(8, Math.max(1, staggerIndex))}`
    : '';

  return (
    <div
      className={`
        bg-white rounded-2xl border border-slate-200/80 transition-all duration-200
        ${asymmetricScoop ? 'curve-scoop-tl' : ''}
        ${hoverLift ? 'card-hover-lift' : ''}
        ${staggerClass}
        ${shadowClasses[shadow]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

