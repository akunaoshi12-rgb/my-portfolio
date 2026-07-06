import React from 'react';
import growell from '../assets/growell.png';
import arthaboga from '../assets/arthaboga.png';
import alfamidi from '../assets/alfamidi.jpg';

export const DwimitraLogo: React.FC<{ className?: string }> = ({ className = 'h-10' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={growell} alt="Growell logo" className="h-full w-auto object-contain" />
    </div>
  );
};

export const ArthaBogaLogo: React.FC<{ className?: string }> = ({ className = 'h-10' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={arthaboga} alt="Artha Boga Cemerlang logo" className="h-full w-auto object-contain" />
    </div>
  );
};

export const AlfamidiLogo: React.FC<{ className?: string }> = ({ className = 'h-10' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={alfamidi} alt="Alfamidi logo" className="h-full w-auto object-contain" />
    </div>
  );
};
