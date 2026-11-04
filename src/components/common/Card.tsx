import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  asymmetricScoop?: boolean;
  shadow?: 'none' | 'soft' | 'elevated';
}

export const Card: React.FC<CardProps> = ({
  children,
  asymmetricScoop = false,
  shadow = 'soft',
  className = '',
  ...props
}) => {
  const shadowClasses = {
    none: '',
    soft: 'shadow-soft',
    elevated: 'shadow-card-elevated',
  };

  return (
    <div
      className={`
        bg-white rounded-2xl transition-all duration-200
        ${asymmetricScoop ? 'curve-scoop-tl' : ''}
        ${shadowClasses[shadow]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

