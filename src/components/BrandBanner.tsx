import React, { useState } from 'react';
import heroBgImage from '../assets/images/hero_background_1787506779381.jpg';
import { UndaLogo } from './UndaLogo';

export const BrandBanner: React.FC = () => {
  const [directImageError, setDirectImageError] = useState(false);

  return (
    <div
      id="unda-brand-banner"
      className="w-full max-w-[1920px] mx-auto mb-12 sm:mb-16 overflow-hidden bg-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] select-none"
    >
      {/* If CA1a.png is available directly in public or root, render as image */}
      {!directImageError ? (
        <img
          src="/CA1a.png"
          alt="Every Day The World Puts Something On You — Nature's Answer to Dirty Work • UNDA"
          className="w-full h-auto object-cover block"
          referrerPolicy="no-referrer"
          onError={() => setDirectImageError(true)}
        />
      ) : null}

      {/* Fallback direct precision layout replicating CA1a banner composition */}
      {directImageError ? (
        <div className="relative w-full aspect-[1920/400] min-h-[160px] sm:min-h-[220px] md:min-h-[280px] lg:min-h-[340px] flex items-center justify-between px-6 sm:px-12 md:px-16 lg:px-20 overflow-hidden bg-[#0a0a0a]">
          {/* Background Workshop Photo */}
          <div
            className="absolute inset-0 bg-cover bg-[center_38%] opacity-85"
            style={{
              backgroundImage: `url(${heroBgImage})`,
            }}
          />

          {/* Contrast Grading & Vignettes matching CA1a.png */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />

          {/* Left Column: Bold Headline & Slogan */}
          <div className="relative z-10 max-w-[55%] sm:max-w-[48%] flex flex-col justify-center">
            <h2 className="font-display text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white tracking-tight leading-[0.95] uppercase drop-shadow-md">
              Every Day The World<br />
              Puts <span className="text-[#c69a5f]">Something</span> On You
            </h2>

            {/* Amber Horizontal Accent Line */}
            <div className="w-full h-[3px] sm:h-[4px] bg-[#c69a5f] my-2 sm:my-3 lg:my-3.5 shadow-sm" />

            {/* Sub-slogan */}
            <p className="font-sans font-black text-[9px] sm:text-xs md:text-sm lg:text-base text-white tracking-[0.12em] uppercase drop-shadow">
              Nature’s Anwer To Dirty Work
            </p>
          </div>

          {/* Right Column: Official White UNDA Wave Logo */}
          <div className="relative z-10 flex items-center justify-end pr-2 sm:pr-4">
            <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              <UndaLogo className="w-full h-full text-white" variant="light" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
