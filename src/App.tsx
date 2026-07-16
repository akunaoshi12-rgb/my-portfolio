import { useCallback, useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { CVModal } from './components/CVModal';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PrintedCV } from './components/PrintedCV';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import {
  hardSkills,
  hardSkillsIndonesian,
  personalDetails,
  softSkills,
  softSkillsIndonesian,
} from './data';
import { copy, type Language } from './i18n';
import {
  getInitialLanguage,
  getInitialTheme,
  LANGUAGE_STORAGE_KEY,
  savePreference,
  THEME_STORAGE_KEY,
  type Theme,
} from './preferences';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  const isDark = theme === 'dark';
  const isIndonesian = language === 'id';
  const text = copy[language];
  const heroSummary = isIndonesian
    ? personalDetails.heroSummaryIndonesian
    : personalDetails.heroSummaryEnglish;
  const aboutSummary = isIndonesian
    ? personalDetails.summaryIndonesian
    : personalDetails.summaryEnglish;
  const displayedHardSkills = isIndonesian ? hardSkillsIndonesian : hardSkills;
  const displayedSoftSkills = isIndonesian ? softSkillsIndonesian : softSkills;

  useEffect(() => {
    document.documentElement.lang = language;
    savePreference(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  useEffect(() => {
    savePreference(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const closeCvModal = useCallback(() => {
    setIsCvModalOpen(false);
  }, []);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  return (
    <div className={`min-h-screen font-sans relative transition-colors duration-300 ${isDark ? 'bg-[#0A0A0A] text-[#F5F5F5]' : 'bg-[#FAFAFA] text-zinc-900'}`}>
      <a
        href="#main-content"
        className={`fixed left-4 top-4 z-50 -translate-y-24 px-4 py-3 text-xs font-mono font-bold uppercase tracking-wider transition-transform focus:translate-y-0 focus:outline-none ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}
      >
        {text.skipToContent}
      </a>

      <div className="hidden print:block print-only">
        <PrintedCV />
      </div>

      <div className="no-print">
        <Header
          isDark={isDark}
          language={language}
          copy={text}
          onLanguageChange={setLanguage}
          onThemeToggle={() => setTheme(isDark ? 'light' : 'dark')}
          onOpenCv={() => setIsCvModalOpen(true)}
        />

        <main id="main-content" tabIndex={-1}>
          <HeroSection
            isDark={isDark}
            copy={text}
            summary={heroSummary}
          />
          <AboutSection isDark={isDark} copy={text} summary={aboutSummary} />
          <ExperienceSection
            isDark={isDark}
            isIndonesian={isIndonesian}
            copy={text}
          />
          <SkillsSection
            isDark={isDark}
            copy={text}
            hardSkills={displayedHardSkills}
            softSkills={displayedSoftSkills}
          />
          <ProjectsSection isDark={isDark} isIndonesian={isIndonesian} />
          <ContactSection isDark={isDark} copy={text} />
        </main>

        <Footer isDark={isDark} copy={text} />
      </div>

      <CVModal
        isOpen={isCvModalOpen}
        isDark={isDark}
        copy={text}
        onClose={closeCvModal}
        onPrint={handlePrint}
      />
    </div>
  );
}
