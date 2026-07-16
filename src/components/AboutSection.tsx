import { motion } from 'motion/react';
import type { PortfolioCopy } from '../i18n';

interface AboutSectionProps {
  isDark: boolean;
  copy: PortfolioCopy;
  summary: string;
}

export function AboutSection({ isDark, copy, summary }: AboutSectionProps) {
  return (
    <motion.section
      id="about"
      className={`border-y py-20 md:py-28 px-6 transition-colors duration-300 ${isDark ? 'bg-[#0D0D10] border-zinc-900/60' : 'bg-zinc-100/40 border-zinc-200'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-4 text-left">
          <span className={`text-[10px] font-mono uppercase tracking-[0.3em] block mb-2 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{copy.aboutLabel}</span>
          <h2 className={`text-3xl md:text-4xl font-black tracking-tight uppercase m-0 ${isDark ? 'text-white' : 'text-black'}`}>
            {copy.aboutTitle}
          </h2>
        </div>
        <div className="md:col-span-8 text-left">
          <p className={`leading-relaxed text-sm md:text-base text-justify font-light ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            {summary}
          </p>
        </div>
      </div>
    </motion.section>
  );
}
