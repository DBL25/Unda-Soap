import React from 'react';
import undaWhiteLogoImg from '../assets/images/unda_logo_white_1787511438102.jpg';

interface UndaLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'gold' | 'auto';
  showBadge?: boolean;
  alt?: string;
}

export const UndaLogo: React.FC<UndaLogoProps> = ({
  className = 'w-10 h-10',
  showBadge = false,
  alt = 'UNDA Official Logo',
}) => {
  const logoImage = (
    <img
      src={undaWhiteLogoImg}
      alt={alt}
      className={`${className} object-contain select-none`}
      loading="eager"
      decoding="async"
    />
  );

  if (showBadge) {
    return (
      <div className="inline-flex items-center justify-center p-1.5 bg-[#0a0a0a] border-2 border-white/80 shadow-[2px_2px_0px_0px_rgba(198,154,95,1)]">
        {logoImage}
      </div>
    );
  }

  return logoImage;
};


