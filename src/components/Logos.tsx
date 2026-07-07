import React from 'react';
import growellLogo from '../assets/growell.png';
import arthaBogaLogo from '../assets/arthaboga.png';
import alfamidiLogo from '../assets/alfamidi.jpg';

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
