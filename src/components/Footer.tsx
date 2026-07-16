import { Github, Mail } from 'lucide-react';
import { personalDetails } from '../data';
import type { PortfolioCopy } from '../i18n';

interface FooterProps {
  isDark: boolean;
  copy: PortfolioCopy;
}

export function Footer({ isDark, copy }: FooterProps) {
  return (
    <footer className={`border-t py-16 px-6 transition-colors duration-300 ${isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-zinc-50 border-zinc-200'}`}>
      <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
        <div className="flex flex-col">
          <span className={`text-[10px] font-mono uppercase tracking-[0.2em] mb-4 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>{copy.identity}</span>
          <span className={`text-sm font-extrabold ${isDark ? 'text-white' : 'text-black'}`}>{personalDetails.name}</span>
          <span className={`text-xs mt-1 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>© {new Date().getFullYear()}</span>
        </div>
        <div className="flex flex-col">
          <span className={`text-[10px] font-mono uppercase tracking-[0.2em] mb-4 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>{copy.expertise}</span>
          <span className={`text-xs font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{copy.retailOperations}</span>
          <span className={`text-xs font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{copy.customerSupport}</span>
        </div>
        <div className="flex flex-col">
          <span className={`text-[10px] font-mono uppercase tracking-[0.2em] mb-4 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>{copy.dialogue}</span>
          <div className="flex items-center gap-1.5 mb-1 text-xs">
            <Mail className={`w-3.5 h-3.5 shrink-0 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`} aria-hidden="true" />
            <a href={`mailto:${personalDetails.email}`} className={`transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'}`}>
              {personalDetails.email}
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <svg viewBox="0 0 24 24" fill="currentColor" className={`w-3.5 h-3.5 shrink-0 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`} aria-hidden="true">
              <path d="M12.003 2c-5.52 0-9.99 4.49-9.99 10.02 0 1.8.48 3.54 1.39 5.07L2 22l5.08-1.33c1.47.8 3.12 1.22 4.81 1.22 5.52 0 10.01-4.49 10.01-10.02C21.9 6.49 17.52 2 12.003 2zm6.01 13.91c-.24.68-1.2 1.24-1.65 1.32-.41.08-.94.12-1.5.12-.56 0-1.28-.04-2.12-.37-1.42-.56-2.52-1.78-3.23-2.6-.08-.1-.66-.88-.66-1.68 0-.8.41-1.19.56-1.35.15-.16.32-.2.43-.2.11 0 .21.01.3.01.09 0 .21-.03.32.22.12.27.4.98.44 1.06.04.08.06.18.01.29-.05.11-.1.21-.2.32-.1.11-.2.22-.29.32-.09.09-.19.19-.08.38.11.19.49.81 1.05 1.31.72.64 1.33.84 1.52.93.19.09.3.08.41-.05.11-.13.48-.56.61-.75.13-.19.26-.16.44-.09.18.07 1.14.54 1.34.64.2.1.33.15.38.23.05.09.05.51-.19 1.19z" />
            </svg>
            <a href="https://wa.me/6289528559579" target="_blank" rel="noreferrer" className={`transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'}`}>
              +62 895 2855 9579
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-end justify-between">
          <span className={`text-[10px] font-mono uppercase tracking-[0.2em] mb-4 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>{copy.networks}</span>
          <div className="flex gap-4">
            <a
              href={personalDetails.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={copy.githubLabel}
              className={`transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${isDark ? 'text-zinc-500 focus-visible:outline-white' : 'text-zinc-400 focus-visible:outline-black'}`}
            >
              <Github className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
