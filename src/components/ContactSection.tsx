import { Mail } from 'lucide-react';
import { personalDetails } from '../data';
import type { PortfolioCopy } from '../i18n';

interface ContactSectionProps {
  isDark: boolean;
  copy: PortfolioCopy;
}

export function ContactSection({ isDark, copy }: ContactSectionProps) {
  return (
    <section id="contact" aria-labelledby="contact-heading" className={`border-t py-20 md:py-32 px-6 ${isDark ? 'bg-[#0D0D10] border-zinc-900/60' : 'bg-zinc-100/40 border-zinc-200'}`}>
      <div className="max-w-[1120px] mx-auto">
        <div className="text-left space-y-2 mb-12">
          <span className={`text-[10px] font-mono uppercase tracking-[0.3em] block ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{copy.contactLabel}</span>
          <h2 id="contact-heading" className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tight uppercase m-0 ${isDark ? 'text-white' : 'text-black'}`}>
            {copy.contactTitle}
          </h2>
          <p className="max-w-2xl text-xs md:text-sm text-zinc-500 font-mono tracking-wider uppercase text-pretty">
            {copy.contactSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
          <a
            href={`https://wa.me/6289528559579?text=${encodeURIComponent(copy.whatsappMessage)}`}
            target="_blank"
            rel="noreferrer"
            className={`btn-uv-brutalist min-h-16 px-6 py-4 text-xs font-mono font-bold tracking-widest uppercase transition-all flex items-center justify-between gap-4 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${isDark ? 'bg-white text-black focus-visible:outline-white' : 'bg-black text-white focus-visible:outline-black'}`}
          >
            <span>{copy.whatsappChat}</span>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
              <path d="M12.003 2c-5.52 0-9.99 4.49-9.99 10.02 0 1.8.48 3.54 1.39 5.07L2 22l5.08-1.33c1.47.8 3.12 1.22 4.81 1.22 5.52 0 10.01-4.49 10.01-10.02C21.9 6.49 17.52 2 12.003 2zm6.01 13.91c-.24.68-1.2 1.24-1.65 1.32-.41.08-.94.12-1.5.12-.56 0-1.28-.04-2.12-.37-1.42-.56-2.52-1.78-3.23-2.6-.08-.1-.66-.88-.66-1.68 0-.8.41-1.19.56-1.35.15-.16.32-.2.43-.2.11 0 .21.01.3.01.09 0 .21-.03.32.22.12.27.4.98.44 1.06.04.08.06.18.01.29-.05.11-.1.21-.2.32-.1.11-.2.22-.29.32-.09.09-.19.19-.08.38.11.19.49.81 1.05 1.31.72.64 1.33.84 1.52.93.19.09.3.08.41-.05.11-.13.48-.56.61-.75.13-.19.26-.16.44-.09.18.07 1.14.54 1.34.64.2.1.33.15.38.23.05.09.05.51-.19 1.19z" />
            </svg>
          </a>
          <a
            href={`mailto:${personalDetails.email}?subject=${encodeURIComponent(copy.mailSubject)}`}
            className={`min-h-16 px-6 py-4 border text-xs font-mono font-bold tracking-widest uppercase transition-all flex items-center justify-between gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${isDark ? 'border-zinc-700 text-zinc-200 hover:border-white focus-visible:outline-white' : 'border-zinc-400 text-zinc-800 hover:border-black focus-visible:outline-black'}`}
          >
            <span>{copy.sendEmail}</span>
            <Mail className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
