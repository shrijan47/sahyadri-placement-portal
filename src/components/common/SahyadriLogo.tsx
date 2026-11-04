import React from 'react';
import { BRAND_ASSETS } from '../../constants/tokens';

interface SahyadriLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  useSvg?: boolean;
  className?: string;
  showSubtitle?: boolean;
}

export const SahyadriLogo: React.FC<SahyadriLogoProps> = ({
  size = 'md',
  useSvg = true,
  className = '',
  showSubtitle = false,
}) => {
  const sizeMap = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-40 h-40',
  };

  const assetSrc = useSvg ? BRAND_ASSETS.sahyadriLogoSvg : BRAND_ASSETS.sahyadriLogoPng;

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <img
        src={assetSrc}
        alt="Sahyadri College of Engineering & Management Emblem"
        className={`${sizeMap[size]} object-contain drop-shadow-md transition-transform duration-200 hover:scale-105`}
        loading="eager"
      />
      {showSubtitle && (
        <div className="mt-2 text-center text-white">
          <p className="text-base font-semibold tracking-wide">Welcome to</p>
          <p className="text-xs text-white/90 font-medium">Sahyadri Digital Campus</p>
        </div>
      )}
    </div>
  );
};

