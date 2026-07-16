import { useEffect, useRef } from 'react';
import { Printer, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type { PortfolioCopy } from '../i18n';
import { PrintedCV } from './PrintedCV';

interface CVModalProps {
  isOpen: boolean;
  isDark: boolean;
  copy: PortfolioCopy;
  onClose: () => void;
  onPrint: () => void;
}

export function CVModal({ isOpen, isDark, copy, onClose, onPrint }: CVModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocusedElement = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocusedElement?.focus();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm no-print"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={`w-full max-w-[850px] h-[90vh] flex flex-col overflow-hidden border rounded-none ${
              isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-200'
            }`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cv-modal-title"
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          >
            <div className={`border-b px-6 py-4 flex items-center justify-between shrink-0 text-left ${
              isDark ? 'bg-[#0D0D10] border-zinc-900' : 'bg-zinc-100 border-zinc-200'
            }`}>
              <div>
                <h3 id="cv-modal-title" className={`text-sm md:text-base font-black uppercase tracking-wider font-mono ${isDark ? 'text-white' : 'text-black'}`}>// Curriculum Vitae</h3>
                <p className="text-[10px] text-zinc-500">{copy.cvNote}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onPrint}
                  className={`px-4 py-2 text-xs font-mono font-bold uppercase rounded-none btn-uv-brutalist flex items-center gap-2 transition-all cursor-pointer ${
                    isDark ? 'bg-white text-black hover:bg-zinc-200' : 'bg-black text-white hover:bg-zinc-800'
                  }`}
                >
                  <Printer className="w-3.5 h-3.5" aria-hidden="true" />
                  {copy.printPdf}
                </button>
                <motion.button
                  ref={closeButtonRef}
                  type="button"
                  onClick={onClose}
                  aria-label={copy.closeCv}
                  className={`p-2 border rounded-none transition-all cursor-pointer ${
                    isDark ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border-zinc-800' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-black border-zinc-200'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.85 }}
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </motion.button>
              </div>
            </div>

            <div className={`flex-1 overflow-y-auto p-4 md:p-8 flex justify-center ${
              isDark ? 'bg-zinc-900/40' : 'bg-zinc-100/40'
            }`}>
              <div className="w-full max-w-[700px]">
                <PrintedCV />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
