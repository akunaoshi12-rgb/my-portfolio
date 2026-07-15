import React from 'react';
import growellLogo from '../assets/growell.png';
import arthaBogaLogo from '../assets/arthaboga.png';
import alfamidiLogo from '../assets/alfamidi.jpg';
import sicepatLogo from '../assets/sicepat.svg';

interface CompanyLogoProps {
  className?: string;
}

const logoClassName = 'h-full w-auto max-w-[140px] object-contain';

export const DwimitraLogo: React.FC<CompanyLogoProps> = ({ className = 'h-10' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src={growellLogo}
        alt="Growell logo"
        className={logoClassName}
      />
    </div>
  );
};

export const ArthaBogaLogo: React.FC<CompanyLogoProps> = ({ className = 'h-10' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src={arthaBogaLogo}
        alt="Artha Boga Cemerlang logo"
        className={logoClassName}
      />
    </div>
  );
};

export const AlfamidiLogo: React.FC<CompanyLogoProps> = ({ className = 'h-10' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src={alfamidiLogo}
        alt="Alfamidi logo"
        className={logoClassName}
      />
    </div>
  );
};

export const SicepatLogo: React.FC<CompanyLogoProps> = ({ className = 'h-10' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src={sicepatLogo}
        alt="Sicepat Express logo"
        className={logoClassName}
      />
    </div>
  );
};

export const GenericLogo: React.FC<CompanyLogoProps> = ({ className = 'h-10' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto max-w-[140px] object-contain"
        aria-label="Construction"
      >
        <path
          d="M24 6C20 6 16.5 8 14 11L20 15V20H28V15L34 11C31.5 8 28 6 24 6Z"
          fill="#6B7280"
          stroke="#6B7280"
          strokeWidth="2"
        />
        <rect x="18" y="20" width="12" height="16" rx="2" fill="#6B7280" stroke="#6B7280" strokeWidth="2" />
        <rect x="20" y="36" width="8" height="4" rx="1" fill="#9CA3AF" />
      </svg>
    </div>
  );
};
