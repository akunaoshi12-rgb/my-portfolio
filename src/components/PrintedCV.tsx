import React from 'react';
import { personalDetails, workExperiences, education, hardSkillsIndonesian, softSkillsIndonesian } from '../data';

interface PrintedCVProps {
  className?: string;
}

export const PrintedCV: React.FC<PrintedCVProps> = ({ className = '' }) => {
  return (
    <div 
      id="printed-cv-document"
      className={`bg-white text-black p-8 md:p-12 shadow-2xl rounded-sm border border-gray-200 aspect-[1/1.414] w-full text-left font-sans select-text overflow-auto leading-relaxed text-[11px] md:text-[13px] ${className}`}
      style={{ color: '#1a1a1a' }}
    >
      {/* Header Info */}
      <div className="mb-4">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase text-black mb-1">
          {personalDetails.name}
        </h1>
        <div className="text-gray-600 font-medium space-y-0.5 mb-2">
          <p className="flex flex-wrap items-center gap-2">
            <span>{personalDetails.phone}</span>
            <span className="text-gray-300">|</span>
            <span>{personalDetails.email}</span>
          </p>
          <p className="text-gray-500 text-[10px] md:text-[12px] leading-normal">
            {personalDetails.addressIndonesian}
          </p>
        </div>
        <p className="text-gray-800 text-[11px] md:text-[13px] leading-relaxed text-justify mt-3 font-normal">
          {personalDetails.summaryIndonesian}
        </p>
      </div>

      {/* WORK EXPERIENCES */}
      <div className="mt-5">
        <h2 className="text-sm md:text-base font-bold text-black border-b-2 border-black pb-0.5 mb-3 uppercase tracking-wide">
          Work Experiences
        </h2>
        
        <div className="space-y-4">
          {workExperiences.map((exp) => (
            <div key={exp.id} className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <p className="font-bold text-[11px] md:text-[13px] text-black">
                  {exp.company}{' '}
                  <span className="font-medium text-gray-500 text-[10px] md:text-[11px]">
                    - {exp.location.split(',')[0]}
                  </span>
                </p>
                <p className="font-semibold text-gray-700 text-[10px] md:text-[11px] whitespace-nowrap">
                  {exp.period}
                </p>
              </div>
              
              <p className="font-bold italic text-gray-700 text-[11px] md:text-[12px] pl-1">
                {exp.role}
              </p>
              
              <p className="text-gray-600 text-justify leading-relaxed text-[10px] md:text-[11.5px] pl-1">
                {exp.descriptionIndonesian}
              </p>
              
              <ul className="list-disc pl-5 space-y-1 text-gray-800 text-[10.5px] md:text-[12px] text-justify mt-1">
                {exp.bulletPointsIndonesian.map((bullet, i) => (
                  <li key={i} className="leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* EDUCATION LEVEL */}
      <div className="mt-6">
        <h2 className="text-sm md:text-base font-bold text-black border-b-2 border-black pb-0.5 mb-3 uppercase tracking-wide">
          Education Level
        </h2>
        
        <div className="space-y-1">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <p className="font-bold text-[11px] md:text-[13px] text-black">
              {education.school}{' '}
              <span className="font-medium text-gray-500 text-[10px] md:text-[11px]">
                - {education.location.split(',')[0]}
              </span>
            </p>
            <p className="font-semibold text-gray-700 text-[10px] md:text-[11px] whitespace-nowrap">
              {education.period}
            </p>
          </div>
          
          <p className="font-bold italic text-gray-700 text-[11px] md:text-[12px] pl-1">
            {education.degree}
          </p>
          
          <p className="text-gray-600 text-[11px] md:text-[12px] pl-1">
            Jurusan {education.major}
          </p>
        </div>
      </div>

      {/* SKILLS, ACHIEVEMENTS & OTHER EXPERIENCE */}
      <div className="mt-6 mb-2">
        <h2 className="text-sm md:text-base font-bold text-black border-b-2 border-black pb-0.5 mb-3 uppercase tracking-wide">
          Skills, Achievements & Other Experience
        </h2>
        
        <ul className="list-disc pl-5 space-y-2 text-gray-800 text-[10.5px] md:text-[12px] text-justify">
          <li className="leading-relaxed">
            <span className="font-bold">Hard Skills ☉:</span> {hardSkillsIndonesian.join(', ')}
          </li>
          <li className="leading-relaxed">
            <span className="font-bold">Soft Skills:</span> {softSkillsIndonesian.join(', ')}
          </li>
        </ul>
      </div>
    </div>
  );
};
