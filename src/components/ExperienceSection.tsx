import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import {
  AlfamidiLogo,
  ArthaBogaLogo,
  DwimitraLogo,
  GenericLogo,
  SicepatLogo,
} from './Logos';
import { workExperiences, type WorkExperience } from '../data';
import type { PortfolioCopy } from '../i18n';

interface ExperienceSectionProps {
  isDark: boolean;
  isIndonesian: boolean;
  copy: PortfolioCopy;
}

const renderLogo = (type: WorkExperience['logoType']) => {
  switch (type) {
    case 'dwimitra':
      return <DwimitraLogo className="h-12 sm:h-14" />;
    case 'arthaboga':
      return <ArthaBogaLogo className="h-12 sm:h-14" />;
    case 'alfamidi':
      return <AlfamidiLogo className="h-12 sm:h-14" />;
    case 'sicepat':
      return <SicepatLogo className="h-12 sm:h-14" />;
    case 'generic':
      return <GenericLogo className="h-12 sm:h-14" />;
  }
};

const localizePeriod = (period: string, isIndonesian: boolean): string => {
  if (!isIndonesian) return period;

  return period
    .replace('Present', 'Sekarang')
    .replace('May', 'Mei')
    .replace('Aug', 'Agu')
    .replace('Dec', 'Des');
};

export function ExperienceSection({ isDark, isIndonesian, copy }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-20 md:py-32 px-6 max-w-[1120px] mx-auto">
      <div className="text-left space-y-2 mb-20">
        <span className={`text-[10px] font-mono uppercase tracking-[0.3em] block ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{copy.experienceLabel}</span>
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tight uppercase m-0 ${isDark ? 'text-white' : 'text-black'}`}>
          {copy.experienceTitle}
        </h2>
        <p className="text-xs md:text-sm text-zinc-500 font-mono tracking-wider uppercase">
          {copy.experienceSubtitle}
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto pl-6 sm:pl-8">
        <div className={`absolute left-1 sm:left-2 top-2 bottom-2 w-[1px] ${isDark ? 'bg-zinc-900' : 'bg-zinc-200'}`} />

        <div className="space-y-16">
          {workExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="relative space-y-4"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`absolute -left-[25px] sm:-left-[29px] top-2 w-3 h-3 rounded-none border z-10 transition-transform hover:scale-125 duration-300 timeline-dot-pulse ${isDark ? 'bg-white border-black' : 'bg-black border-white'}`} />

              <div className={`p-6 md:p-8 rounded-none border transition-all duration-300 text-left relative overflow-hidden group ${
                isDark ? 'bg-zinc-950/40 border-zinc-900 hover:border-zinc-800' : 'bg-white border-zinc-200 hover:border-zinc-400 shadow-sm'
              }`}>
                <div className={`absolute top-0 left-0 w-[2px] h-full transition-colors ${isDark ? 'bg-zinc-800 group-hover:bg-white' : 'bg-zinc-300 group-hover:bg-black'}`} />

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div className="space-y-2">
                    <span className={`inline-block text-[9px] font-mono tracking-widest uppercase border px-2.5 py-1 rounded-none ${
                      isDark ? 'text-zinc-400 bg-zinc-900 border-zinc-800/80' : 'text-zinc-600 bg-zinc-50 border-zinc-200'
                    }`}>
                      {localizePeriod(experience.period, isIndonesian)}
                    </span>
                    <h3 className={`text-lg md:text-xl font-black uppercase tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>
                      {experience.role}
                    </h3>
                    <p className={`text-xs font-bold uppercase tracking-widest font-mono ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      // {experience.company}
                    </p>
                  </div>
                  <div className={`sm:self-start self-end opacity-85 hover:opacity-100 transition-opacity p-1.5 border ${
                    isDark ? 'bg-white/5 border-zinc-900' : 'bg-zinc-50 border-zinc-200'
                  }`}>
                    {renderLogo(experience.logoType)}
                  </div>
                </div>

                <p className={`text-xs md:text-sm font-light leading-relaxed mb-6 pb-6 border-b italic text-justify ${
                  isDark ? 'text-zinc-500 border-zinc-900' : 'text-zinc-400/60 border-zinc-200'
                }`}>
                  {isIndonesian ? experience.descriptionIndonesian : experience.descriptionEnglish}
                </p>

                <ul className="space-y-4">
                  {(isIndonesian ? experience.bulletPointsIndonesian : experience.bulletPointsEnglish).map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <div className={`p-1 border rounded-none shrink-0 mt-0.5 ${
                        isDark ? 'bg-zinc-900 text-zinc-400 border-zinc-800' : 'bg-zinc-100 text-zinc-600 border-zinc-200'
                      }`}>
                        <Check className="w-3 h-3 stroke-[3px]" aria-hidden="true" />
                      </div>
                      <span className={`text-sm leading-relaxed text-justify font-light ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
