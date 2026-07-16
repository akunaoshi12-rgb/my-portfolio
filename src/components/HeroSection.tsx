import { Mail } from 'lucide-react';
import { motion } from 'motion/react';
import profilePhoto from '../assets/ade-iqbal-profile.webp';
import { personalDetails } from '../data';
import type { PortfolioCopy } from '../i18n';

interface HeroSectionProps {
  isDark: boolean;
  copy: PortfolioCopy;
  summary: string;
}

export function HeroSection({ isDark, copy, summary }: HeroSectionProps) {
  const [firstName, ...lastNameParts] = personalDetails.name.split(' ');
  const lastName = lastNameParts.join(' ');

  return (
    <section className="px-6 py-16 md:py-28 max-w-[1120px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <span className={`text-[10px] uppercase tracking-[0.4em] font-mono font-medium block mb-3 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
              {copy.portfolioIndex}
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-[100px] xl:text-[110px] font-black leading-[0.85] tracking-[-0.04em] uppercase m-0 flex flex-col">
              <span className={isDark ? 'text-white' : 'text-black'}>{firstName}</span>
              <span className={`md:ml-20 ${isDark ? 'text-zinc-800' : 'text-zinc-300'}`}>{lastName}</span>
            </h1>
            <p className={`text-sm md:text-base font-mono tracking-[0.15em] uppercase mt-4 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              {copy.title}
            </p>
          </motion.div>

          <motion.p
            className={`leading-relaxed text-sm md:text-base md:max-w-xl font-light text-justify ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {summary}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 pt-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <a
              href="#contact"
              className={`px-6 py-3.5 text-xs font-mono font-bold tracking-widest uppercase rounded-none btn-uv-brutalist hover:-translate-y-0.5 transition-all cursor-pointer ${
                isDark ? 'bg-white hover:bg-zinc-200 text-black' : 'bg-black hover:bg-zinc-800 text-white'
              }`}
            >
              {copy.contactMe}
            </a>
            <a
              href="#experience"
              className={`px-6 py-3.5 bg-transparent border text-xs font-mono font-bold tracking-widest uppercase rounded-none hover:-translate-y-0.5 transition-all cursor-pointer ${
                isDark
                  ? 'border-zinc-800 hover:border-white text-zinc-400 hover:text-white'
                  : 'border-zinc-300 hover:border-black text-zinc-600 hover:text-black'
              }`}
            >
              {copy.viewExperience}
            </a>
          </motion.div>

          <motion.div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t ${isDark ? 'border-zinc-900' : 'border-zinc-200'}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="flex flex-col gap-1 text-left">
              <span className={`text-[9px] font-mono uppercase tracking-[0.2em] ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>01 — {copy.location}</span>
              <span className={`text-xs font-bold ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>{personalDetails.location}</span>
            </div>

            <div className="flex flex-col gap-1 text-left">
              <span className={`text-[9px] font-mono uppercase tracking-[0.2em] ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>02 — Email</span>
              <div className="flex items-center gap-1.5">
                <Mail className={`w-3.5 h-3.5 shrink-0 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`} aria-hidden="true" />
                <a href={`mailto:${personalDetails.email}`} className={`text-xs font-bold transition-colors ${isDark ? 'text-zinc-300 hover:text-white' : 'text-zinc-700 hover:text-black'}`}>
                  {personalDetails.email}
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-1 text-left">
              <span className={`text-[9px] font-mono uppercase tracking-[0.2em] ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>03 — WhatsApp</span>
              <div className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" fill="currentColor" className={`w-3.5 h-3.5 shrink-0 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`} aria-hidden="true">
                  <path d="M12.003 2c-5.52 0-9.99 4.49-9.99 10.02 0 1.8.48 3.54 1.39 5.07L2 22l5.08-1.33c1.47.8 3.12 1.22 4.81 1.22 5.52 0 10.01-4.49 10.01-10.02C21.9 6.49 17.52 2 12.003 2zm6.01 13.91c-.24.68-1.2 1.24-1.65 1.32-.41.08-.94.12-1.5.12-.56 0-1.28-.04-2.12-.37-1.42-.56-2.52-1.78-3.23-2.6-.08-.1-.66-.88-.66-1.68 0-.8.41-1.19.56-1.35.15-.16.32-.2.43-.2.11 0 .21.01.3.01.09 0 .21-.03.32.22.12.27.4.98.44 1.06.04.08.06.18.01.29-.05.11-.1.21-.2.32-.1.11-.2.22-.29.32-.09.09-.19.19-.08.38.11.19.49.81 1.05 1.31.72.64 1.33.84 1.52.93.19.09.3.08.41-.05.11-.13.48-.56.61-.75.13-.19.26-.16.44-.09.18.07 1.14.54 1.34.64.2.1.33.15.38.23.05.09.05.51-.19 1.19z" />
                </svg>
                <a href="https://wa.me/6289528559579" target="_blank" rel="noreferrer" className={`text-xs font-bold transition-colors ${isDark ? 'text-zinc-300 hover:text-white' : 'text-zinc-700 hover:text-black'}`}>
                  +62 895 2855 9579
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.figure
          className="lg:col-span-5 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="group relative w-full max-w-[340px] sm:max-w-[400px]">
            <div
              aria-hidden="true"
              className={`absolute inset-0 translate-x-4 translate-y-4 border transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5 ${
                isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-200 border-zinc-300'
              }`}
            />
            <div
              aria-hidden="true"
              className={`absolute -left-3 -top-3 h-20 w-20 border-l-2 border-t-2 transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 ${
                isDark ? 'border-white' : 'border-black'
              }`}
            />

            <div className={`relative border p-2 transition-transform duration-500 group-hover:-translate-y-1 ${
              isDark ? 'bg-[#111113] border-zinc-800' : 'bg-white border-zinc-300'
            }`}>
              <div className="relative overflow-hidden">
                <img
                  src={profilePhoto}
                  alt={copy.profilePhotoAlt}
                  width="800"
                  height="1000"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="aspect-[4/5] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
                />
                <span className="absolute bottom-3 left-3 bg-black px-3 py-2 text-[9px] font-mono font-bold uppercase tracking-[0.22em] text-white">
                  {copy.portraitLabel}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 px-1 pb-1 pt-3 text-left">
                <span className={`text-[9px] font-mono uppercase tracking-[0.2em] ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  // {personalDetails.name}
                </span>
                <span className={`max-w-[12rem] text-right text-[9px] font-mono uppercase tracking-[0.16em] ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {copy.title}
                </span>
              </div>
            </div>
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
