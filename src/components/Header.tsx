import { Download, Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { personalDetails } from '../data';
import type { Language, PortfolioCopy } from '../i18n';

interface HeaderProps {
  isDark: boolean;
  language: Language;
  copy: PortfolioCopy;
  onLanguageChange: (language: Language) => void;
  onThemeToggle: () => void;
  onOpenCv: () => void;
}

export function Header({
  isDark,
  language,
  copy,
  onLanguageChange,
  onThemeToggle,
  onOpenCv,
}: HeaderProps) {
  const isIndonesian = language === 'id';

  return (
    <header className={`sticky top-0 z-40 w-full backdrop-blur-md px-6 py-5 transition-all duration-300 border-b ${isDark ? 'bg-[#0A0A0A]/90 border-zinc-900/80 text-white' : 'bg-white/95 border-zinc-200 text-zinc-900'}`}>
      <div className="max-w-[1120px] mx-auto flex items-center justify-between">
        <motion.a
          href="#main-content"
          className={`text-lg font-black tracking-tighter hover:text-zinc-400 uppercase flex flex-col items-start leading-none ${isDark ? 'text-white' : 'text-zinc-900'}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className={`text-[9px] uppercase tracking-[0.3em] font-mono mb-0.5 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{copy.studioAccess}</span>
          <span className="text-sm md:text-base font-black tracking-tighter uppercase">{personalDetails.name}</span>
        </motion.a>

        <nav aria-label={isIndonesian ? 'Navigasi utama' : 'Main navigation'} className={`hidden lg:flex items-center gap-6 xl:gap-8 text-[10px] xl:text-[11px] font-mono uppercase tracking-[0.16em] xl:tracking-[0.2em] ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
          <a href="#about" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black text-zinc-600'}`}>{copy.navAbout}</a>
          <a href="#experience" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black text-zinc-600'}`}>{copy.navExperience}</a>
          <a href="#skills" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black text-zinc-600'}`}>{copy.navSkills}</a>
          <a href="#projects" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black text-zinc-600'}`}>{copy.navProjects}</a>
          <a href="#contact" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black text-zinc-600'}`}>{copy.navContact}</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onLanguageChange(isIndonesian ? 'en' : 'id')}
            className={`px-3 py-2 text-[10px] font-mono font-bold uppercase tracking-[0.15em] border transition-all cursor-pointer ${
              isDark
                ? 'bg-zinc-900 text-white border-zinc-800 hover:bg-zinc-800'
                : 'bg-zinc-100 text-black border-zinc-200 hover:bg-zinc-200'
            }`}
            title={copy.languageTitle}
            aria-label={copy.languageTitle}
          >
            {isIndonesian ? 'EN' : 'ID'}
          </button>

          <motion.button
            type="button"
            onClick={onThemeToggle}
            className={`p-2 transition-all cursor-pointer border ${
              isDark
                ? 'bg-zinc-900 text-white border-zinc-800 hover:bg-zinc-800'
                : 'bg-zinc-100 text-black border-zinc-200 hover:bg-zinc-200'
            } flex items-center justify-center`}
            title={isDark ? copy.themeTitleDark : copy.themeTitleLight}
            aria-label={isDark ? copy.themeTitleDark : copy.themeTitleLight}
            whileHover={{ scale: 1.15, rotate: 15 }}
            whileTap={{ scale: 0.85 }}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" aria-hidden="true" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-700" aria-hidden="true" />
            )}
          </motion.button>

          <motion.button
            type="button"
            onClick={onOpenCv}
            className={`px-3 sm:px-4 py-2.5 text-[10px] font-mono font-bold tracking-[0.15em] uppercase rounded-none btn-uv-brutalist transition-all flex items-center gap-2 cursor-pointer ${
              isDark
                ? 'bg-white text-black hover:bg-zinc-200'
                : 'bg-black text-white hover:bg-zinc-800'
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            aria-label={copy.downloadCv}
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">{copy.downloadCv}</span>
          </motion.button>
        </div>
      </div>
    </header>
  );
}
