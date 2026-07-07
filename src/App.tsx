import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Printer, 
  X, 
  Wrench, 
  Lightbulb, 
  Check, 
  Send, 
  Github, 
  Download,
  ChevronRight,
  Sun,
  Moon
} from 'lucide-react';
import { 
  personalDetails, 
  workExperiences, 
  hardSkills, 
  hardSkillsIndonesian,
  softSkills,
  softSkillsIndonesian
} from './data';
import { 
  DwimitraLogo, 
  ArthaBogaLogo, 
  AlfamidiLogo 
} from './components/Logos';
import { PrintedCV } from './components/PrintedCV';

type Language = 'en' | 'id';

const copy = {
  en: {
    studioAccess: 'Studio Access',
    navAbout: 'About',
    navExperience: 'Experience',
    navSkills: 'Skills',
    navContact: 'Contact',
    portfolioIndex: '// Portfolio Index',
    title: personalDetails.title,
    downloadCv: 'Download CV',
    contactMe: 'Contact Me',
    viewExperience: 'View Experience',
    location: 'Location',
    viewDocument: 'View Document',
    aboutLabel: '01 — Context',
    aboutTitle: 'About Me',
    experienceLabel: '02 — Milestones',
    experienceTitle: 'Professional Experience',
    experienceSubtitle: 'A journey of growth in retail and sales operations.',
    skillsLabel: '03 — Spectrum',
    skillsTitle: 'Skills & Expertise',
    skillsSubtitle: 'Core competencies developed through practical experience.',
    hardSkillsTitle: '// Hard Skills',
    softSkillsTitle: '// Soft Skills',
    contactLabel: '04 — Dialogue',
    contactTitle: "Let's Connect",
    contactSubtitle: 'Reach out directly for recruiting opportunities, interviews, or inquiries.',
    fullName: 'Full Name',
    namePlaceholder: 'Your Name',
    emailAddress: 'Email Address',
    message: 'Message',
    messagePlaceholder: 'How can we help you?',
    sendMessage: 'Send Message',
    emailOpened: 'Email app opened. Please send the message from there.',
    identity: '01 — Identity',
    expertise: '02 — Expertise',
    dialogue: '03 — Dialogue',
    networks: '04 — Networks',
    retailOperations: 'Retail Operations',
    customerSupport: 'Customer Support',
    cvNote: 'Official Printed Layout (Indonesian)',
    printPdf: 'Print / PDF',
    themeTitleDark: 'Switch to Light Mode',
    themeTitleLight: 'Switch to Dark Mode',
    languageTitle: 'Switch language',
    mailSubjectPrefix: 'Portfolio contact from',
    mailNameLabel: 'Name',
    mailEmailLabel: 'Email'
  },
  id: {
    studioAccess: 'Akses Studio',
    navAbout: 'Tentang',
    navExperience: 'Pengalaman',
    navSkills: 'Keahlian',
    navContact: 'Kontak',
    portfolioIndex: '// Indeks Portofolio',
    title: 'Spesialis Retail & Pelayanan Pelanggan',
    downloadCv: 'Unduh CV',
    contactMe: 'Hubungi Saya',
    viewExperience: 'Lihat Pengalaman',
    location: 'Lokasi',
    viewDocument: 'Lihat Dokumen',
    aboutLabel: '01 — Konteks',
    aboutTitle: 'Tentang Saya',
    experienceLabel: '02 — Perjalanan',
    experienceTitle: 'Pengalaman Profesional',
    experienceSubtitle: 'Perjalanan berkembang di bidang retail dan operasional penjualan.',
    skillsLabel: '03 — Keahlian',
    skillsTitle: 'Keahlian & Kompetensi',
    skillsSubtitle: 'Kemampuan utama yang berkembang dari pengalaman kerja langsung.',
    hardSkillsTitle: '// Keahlian Teknis',
    softSkillsTitle: '// Keahlian Personal',
    contactLabel: '04 — Komunikasi',
    contactTitle: 'Mari Terhubung',
    contactSubtitle: 'Hubungi langsung untuk peluang rekrutmen, wawancara, atau pertanyaan.',
    fullName: 'Nama Lengkap',
    namePlaceholder: 'Nama Anda',
    emailAddress: 'Alamat Email',
    message: 'Pesan',
    messagePlaceholder: 'Apa yang bisa saya bantu?',
    sendMessage: 'Kirim Pesan',
    emailOpened: 'Aplikasi email terbuka. Silakan kirim pesan dari sana.',
    identity: '01 — Identitas',
    expertise: '02 — Keahlian',
    dialogue: '03 — Komunikasi',
    networks: '04 — Jaringan',
    retailOperations: 'Operasional Retail',
    customerSupport: 'Pelayanan Pelanggan',
    cvNote: 'Layout cetak resmi (Bahasa Indonesia)',
    printPdf: 'Cetak / PDF',
    themeTitleDark: 'Ganti ke Mode Terang',
    themeTitleLight: 'Ganti ke Mode Gelap',
    languageTitle: 'Ganti bahasa',
    mailSubjectPrefix: 'Kontak portofolio dari',
    mailNameLabel: 'Nama',
    mailEmailLabel: 'Email'
  }
};

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isDark, setIsDark] = useState(true);
  const [language, setLanguage] = useState<Language>('en');
  const t = copy[language];
  const isIndonesian = language === 'id';
  const summary = isIndonesian ? personalDetails.summaryIndonesian : personalDetails.summaryEnglish;
  const displayedHardSkills = isIndonesian ? hardSkillsIndonesian : hardSkills;
  const displayedSoftSkills = isIndonesian ? softSkillsIndonesian : softSkills;

  const handlePrint = () => {
    window.print();
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      const subject = encodeURIComponent(`${t.mailSubjectPrefix} ${formData.name}`);
      const body = encodeURIComponent(
        `${t.mailNameLabel}: ${formData.name}\n${t.mailEmailLabel}: ${formData.email}\n\n${formData.message}`
      );

      window.location.href = `mailto:${personalDetails.email}?subject=${subject}&body=${body}`;
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  const renderLogo = (type: 'dwimitra' | 'arthaboga' | 'alfamidi') => {
    switch (type) {
      case 'dwimitra':
        return <DwimitraLogo className="h-12 sm:h-14" />;
      case 'arthaboga':
        return <ArthaBogaLogo className="h-12 sm:h-14" />;
      case 'alfamidi':
        return <AlfamidiLogo className="h-12 sm:h-14" />;
      default:
        return null;
    }
  };

  const nameParts = personalDetails.name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return (
    <div className={`min-h-screen font-sans relative transition-colors duration-300 ${isDark ? 'bg-[#0A0A0A] text-[#F5F5F5]' : 'bg-[#FAFAFA] text-zinc-900'}`}>
      
      {/* 1. PRINT-ONLY LAYER: Hidden on screen, printed perfectly on A4 */}
      <div className="hidden print:block print-only">
        <PrintedCV />
      </div>

      {/* 2. WEB PORTFOLIO INTERFACE: Hidden when printing */}
      <div className="no-print">
        
        {/* Header Navigation */}
        <header className={`sticky top-0 z-40 w-full backdrop-blur-md px-6 py-5 transition-all duration-300 border-b ${isDark ? 'bg-[#0A0A0A]/90 border-zinc-900/80 text-white' : 'bg-white/95 border-zinc-200 text-zinc-900'}`}>
          <div className="max-w-[1120px] mx-auto flex items-center justify-between">
            <motion.a 
              href="#"
              className={`text-lg font-black tracking-tighter hover:text-zinc-400 uppercase flex flex-col items-start leading-none ${isDark ? 'text-white' : 'text-zinc-900'}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className={`text-[9px] uppercase tracking-[0.3em] font-mono mb-0.5 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{t.studioAccess}</span>
              <span className="text-sm md:text-base font-black tracking-tighter uppercase">{personalDetails.name}</span>
            </motion.a>
            
            <nav className={`hidden md:flex items-center gap-10 text-[11px] font-mono uppercase tracking-[0.2em] ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
              <a href="#about" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black text-zinc-600'}`}>{t.navAbout}</a>
              <a href="#experience" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black text-zinc-600'}`}>{t.navExperience}</a>
              <a href="#skills" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black text-zinc-600'}`}>{t.navSkills}</a>
              <a href="#contact" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black text-zinc-600'}`}>{t.navContact}</a>
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setLanguage(isIndonesian ? 'en' : 'id')}
                className={`px-3 py-2 text-[10px] font-mono font-bold uppercase tracking-[0.15em] border transition-all cursor-pointer ${
                  isDark 
                    ? 'bg-zinc-900 text-white border-zinc-800 hover:bg-zinc-800' 
                    : 'bg-zinc-100 text-black border-zinc-200 hover:bg-zinc-200'
                }`}
                title={t.languageTitle}
              >
                {isIndonesian ? 'EN' : 'ID'}
              </button>

              {/* Theme Toggle Button */}
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 transition-all cursor-pointer border ${
                  isDark 
                    ? 'bg-zinc-900 text-white border-zinc-800 hover:bg-zinc-800' 
                    : 'bg-zinc-100 text-black border-zinc-200 hover:bg-zinc-200'
                } flex items-center justify-center`}
                title={isDark ? t.themeTitleDark : t.themeTitleLight}
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-zinc-700" />
                )}
              </button>

              <motion.button
                onClick={() => setIsCVModalOpen(true)}
                className={`px-3 sm:px-4 py-2.5 text-[10px] font-mono font-bold tracking-[0.15em] uppercase rounded-none shadow-sm transition-all flex items-center gap-2 cursor-pointer ${
                  isDark 
                    ? 'bg-white text-black hover:bg-zinc-200' 
                    : 'bg-black text-white hover:bg-zinc-800'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.downloadCv}</span>
              </motion.button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="px-6 py-16 md:py-28 max-w-[1120px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Bio Info */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <span className={`text-[10px] uppercase tracking-[0.4em] font-mono font-medium block mb-3 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  {t.portfolioIndex}
                </span>
                <h1 className="text-5xl sm:text-7xl lg:text-[100px] xl:text-[110px] font-black leading-[0.85] tracking-[-0.04em] uppercase m-0 flex flex-col">
                  <span className={isDark ? 'text-white' : 'text-black'}>{firstName}</span>
                  <span className={`md:ml-20 ${isDark ? 'text-zinc-800' : 'text-zinc-300'}`}>{lastName}</span>
                </h1>
                <p className={`text-sm md:text-base font-mono tracking-[0.15em] uppercase mt-4 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {t.title}
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

              {/* Action Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4 pt-2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <a 
                  href="#contact"
                  className={`px-6 py-3.5 text-xs font-mono font-bold tracking-widest uppercase rounded-none shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer ${
                    isDark ? 'bg-white hover:bg-zinc-200 text-black' : 'bg-black hover:bg-zinc-800 text-white'
                  }`}
                >
                  {t.contactMe}
                </a>
                <a 
                  href="#experience"
                  className={`px-6 py-3.5 bg-transparent border text-xs font-mono font-bold tracking-widest uppercase rounded-none hover:-translate-y-0.5 transition-all cursor-pointer ${
                    isDark 
                      ? 'border-zinc-800 hover:border-white text-zinc-400 hover:text-white' 
                      : 'border-zinc-300 hover:border-black text-zinc-600 hover:text-black'
                  }`}
                >
                  {t.viewExperience}
                </a>
              </motion.div>

              {/* Dynamic Contact Chips */}
              <motion.div 
                className={`grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t ${isDark ? 'border-zinc-900' : 'border-zinc-200'}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="flex flex-col gap-1 text-left">
                  <span className={`text-[9px] font-mono uppercase tracking-[0.2em] ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>01 — {t.location}</span>
                  <span className={`text-xs font-bold ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>{personalDetails.location}</span>
                </div>

                <div className="flex flex-col gap-1 text-left">
                  <span className={`text-[9px] font-mono uppercase tracking-[0.2em] ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>02 — Email</span>
                  <div className="flex items-center gap-1.5">
                    <Mail className={`w-3.5 h-3.5 shrink-0 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`} />
                    <a href={`mailto:${personalDetails.email}`} className={`text-xs font-bold transition-colors ${isDark ? 'text-zinc-300 hover:text-white' : 'text-zinc-700 hover:text-black'}`}>
                      {personalDetails.email}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-1 text-left">
                  <span className={`text-[9px] font-mono uppercase tracking-[0.2em] ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>03 — WhatsApp</span>
                  <div className="flex items-center gap-1.5">
                    <svg viewBox="0 0 24 24" fill="currentColor" className={`w-3.5 h-3.5 shrink-0 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      <path d="M12.003 2c-5.52 0-9.99 4.49-9.99 10.02 0 1.8.48 3.54 1.39 5.07L2 22l5.08-1.33c1.47.8 3.12 1.22 4.81 1.22 5.52 0 10.01-4.49 10.01-10.02C21.9 6.49 17.52 2 12.003 2zm6.01 13.91c-.24.68-1.2 1.24-1.65 1.32-.41.08-.94.12-1.5.12-.56 0-1.28-.04-2.12-.37-1.42-.56-2.52-1.78-3.23-2.6-.08-.1-.66-.88-.66-1.68 0-.8.41-1.19.56-1.35.15-.16.32-.2.43-.2.11 0 .21.01.3.01.09 0 .21-.03.32.22.12.27.4.98.44 1.06.04.08.06.18.01.29-.05.11-.1.21-.2.32-.1.11-.2.22-.29.32-.09.09-.19.19-.08.38.11.19.49.81 1.05 1.31.72.64 1.33.84 1.52.93.19.09.3.08.41-.05.11-.13.48-.56.61-.75.13-.19.26-.16.44-.09.18.07 1.14.54 1.34.64.2.1.33.15.38.23.05.09.05.51-.19 1.19z"/>
                    </svg>
                    <a href={`https://wa.me/6289528559579`} target="_blank" rel="noreferrer" className={`text-xs font-bold transition-colors ${isDark ? 'text-zinc-300 hover:text-white' : 'text-zinc-700 hover:text-black'}`}>
                      +62 895 2855 9579
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Printable Document Mockup */}
            <motion.div 
              className="lg:col-span-5 flex justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div 
                onClick={() => setIsCVModalOpen(true)}
                className="group relative cursor-pointer max-w-[340px] sm:max-w-[400px] transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2"
              >
                {/* Simulated Stack Effect (Dark Brutalist styled) */}
                <div className={`absolute inset-0 translate-x-3 translate-y-3 rotate-2 opacity-40 transition-transform group-hover:translate-x-4 group-hover:translate-y-4 group-hover:rotate-3 border ${isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-zinc-200 border-zinc-300'}`}></div>
                <div className={`absolute inset-0 translate-x-1.5 translate-y-1.5 rotate-1 opacity-70 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 group-hover:rotate-2 border ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-100 border-zinc-200'}`}></div>
                
                {/* Main Mockup Sheet */}
                <div className={`relative p-5 border shadow-2xl overflow-hidden transition-all ${isDark ? 'bg-[#111113] border-zinc-800 group-hover:shadow-black' : 'bg-white border-zinc-200 group-hover:shadow-zinc-300'}`}>
                  {/* Subtle blur cover on hover */}
                  <div className={`absolute inset-0 transition-all duration-300 flex items-center justify-center ${isDark ? 'bg-black/40 group-hover:bg-black/20' : 'bg-zinc-100/40 group-hover:bg-zinc-100/20'}`}>
                    <span className={`text-[10px] font-mono font-bold tracking-widest uppercase px-4 py-2.5 rounded-none shadow-lg scale-90 group-hover:scale-100 transition-all duration-300 flex items-center gap-2 ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
                      <Printer className="w-3.5 h-3.5" />
                      {t.viewDocument}
                    </span>
                  </div>

                  {/* Micro Replica of printable CV */}
                  <div className="scale-[0.8] origin-top text-[8px] leading-tight select-none opacity-40 text-left space-y-3">
                    <div>
                      <h3 className={`font-extrabold text-base leading-none ${isDark ? 'text-white' : 'text-black'}`}>ADE IQBAL</h3>
                      <p className={`text-[8px] mt-1 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>089528559579 | adeiqbal160@gmail.com</p>
                    </div>
                    <div className={`border-t pt-2 ${isDark ? 'border-zinc-800' : 'border-zinc-200'}`}>
                      <h4 className={`font-bold text-[9px] uppercase ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>{t.navExperience}</h4>
                      <div className="mt-1 space-y-1">
                        <p className={`font-bold ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>DWIMITRA GROUP <span className={`font-normal ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>Nov 2023 - Present</span></p>
                        <p className={`italic font-semibold ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Staff Grocery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className={`border-y py-20 md:py-28 px-6 transition-colors duration-300 ${isDark ? 'bg-[#0D0D10] border-zinc-900/60' : 'bg-zinc-100/40 border-zinc-200'}`}>
          <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 text-left">
              <span className={`text-[10px] font-mono uppercase tracking-[0.3em] block mb-2 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{t.aboutLabel}</span>
              <h2 className={`text-3xl md:text-4xl font-black tracking-tight uppercase m-0 ${isDark ? 'text-white' : 'text-black'}`}>
                {t.aboutTitle}
              </h2>
            </div>
            <div className="md:col-span-8 text-left">
              <p className={`leading-relaxed text-sm md:text-base text-justify font-light ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {summary}
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 md:py-32 px-6 max-w-[1120px] mx-auto">
          <div className="text-left space-y-2 mb-20">
            <span className={`text-[10px] font-mono uppercase tracking-[0.3em] block ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{t.experienceLabel}</span>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tight uppercase m-0 ${isDark ? 'text-white' : 'text-black'}`}>
              {t.experienceTitle}
            </h2>
            <p className="text-xs md:text-sm text-zinc-500 font-mono tracking-wider uppercase">
              {t.experienceSubtitle}
            </p>
          </div>

          {/* Timeline Structure */}
          <div className="relative max-w-3xl mx-auto pl-6 sm:pl-8">
            
            {/* Main Central Line */}
            <div className={`absolute left-1 sm:left-2 top-2 bottom-2 w-[1px] ${isDark ? 'bg-zinc-900' : 'bg-zinc-200'}`}></div>
            
            <div className="space-y-16">
              {workExperiences.map((exp, index) => (
                <motion.div 
                  key={exp.id} 
                  className="relative space-y-4"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  
                  {/* Circle Node Marker */}
                  <div className={`absolute -left-[25px] sm:-left-[29px] top-2 w-3 h-3 rounded-none border z-10 transition-transform hover:scale-125 duration-300 ${isDark ? 'bg-white border-black' : 'bg-black border-white'}`}></div>

                  <div className={`p-6 md:p-8 rounded-none border transition-all duration-300 text-left relative overflow-hidden group ${
                    isDark ? 'bg-zinc-950/40 border-zinc-900 hover:border-zinc-800' : 'bg-white border-zinc-200 hover:border-zinc-400 shadow-sm'
                  }`}>
                    <div className={`absolute top-0 left-0 w-[2px] h-full transition-colors ${isDark ? 'bg-zinc-800 group-hover:bg-white' : 'bg-zinc-300 group-hover:bg-black'}`}></div>
                    
                    {/* Upper Row: Company and Period */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                      <div className="space-y-2">
                        <span className={`inline-block text-[9px] font-mono tracking-widest uppercase border px-2.5 py-1 rounded-none ${
                          isDark ? 'text-zinc-400 bg-zinc-900 border-zinc-800/80' : 'text-zinc-600 bg-zinc-50 border-zinc-200'
                        }`}>
                          {exp.period}
                        </span>
                        <h3 className={`text-lg md:text-xl font-black uppercase tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>
                          {exp.role}
                        </h3>
                        <p className={`text-xs font-bold uppercase tracking-widest font-mono ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                          // {exp.company}
                        </p>
                      </div>
                      <div className={`sm:self-start self-end opacity-85 hover:opacity-100 transition-opacity p-1.5 border ${
                        isDark ? 'bg-white/5 border-zinc-900' : 'bg-zinc-50 border-zinc-200'
                      }`}>
                        {renderLogo(exp.logoType)}
                      </div>
                    </div>

                    {/* Company Brief Description */}
                    <p className={`text-xs md:text-sm font-light leading-relaxed mb-6 pb-6 border-b italic text-justify ${
                      isDark ? 'text-zinc-500 border-zinc-900' : 'text-zinc-400/60 border-zinc-200'
                    }`}>
                      {isIndonesian ? exp.descriptionIndonesian : exp.descriptionEnglish}
                    </p>

                    {/* Checkpoints Bullets */}
                    <ul className="space-y-4">
                      {(isIndonesian ? exp.bulletPointsIndonesian : exp.bulletPointsEnglish).map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className={`p-1 border rounded-none shrink-0 mt-0.5 ${
                            isDark ? 'bg-zinc-900 text-zinc-400 border-zinc-800' : 'bg-zinc-100 text-zinc-600 border-zinc-200'
                          }`}>
                            <Check className="w-3 h-3 stroke-[3px]" />
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

        {/* Skills Section */}
        <section id="skills" className={`border-y py-20 md:py-32 px-6 transition-colors duration-300 ${isDark ? 'bg-[#0D0D10] border-zinc-900/60' : 'bg-zinc-100/40 border-zinc-200'}`}>
          <div className="max-w-[1120px] mx-auto space-y-20">
            <div className="text-left space-y-2">
              <span className={`text-[10px] font-mono uppercase tracking-[0.3em] block ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{t.skillsLabel}</span>
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tight uppercase m-0 ${isDark ? 'text-white' : 'text-black'}`}>
                {t.skillsTitle}
              </h2>
              <p className="text-xs md:text-sm text-zinc-500 font-mono tracking-wider uppercase">
                {t.skillsSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* Hard Skills Card */}
              <motion.div 
                className={`p-8 rounded-none border shadow-sm text-left relative overflow-hidden group ${
                  isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-200'
                }`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className={`p-2.5 border rounded-none ${isDark ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-zinc-100 border-zinc-200 text-black'}`}>
                    <Wrench className="w-4 h-4" />
                  </div>
                  <h3 className={`text-base font-black uppercase tracking-wider font-mono ${isDark ? 'text-white' : 'text-black'}`}>{t.hardSkillsTitle}</h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {displayedHardSkills.map((skill, index) => (
                    <span 
                      key={index} 
                      className={`px-3.5 py-2 border font-mono text-xs rounded-none transition-colors cursor-default ${
                        isDark 
                          ? 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700' 
                          : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:text-black hover:border-zinc-400'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Soft Skills Card */}
              <motion.div 
                className={`p-8 rounded-none border shadow-sm text-left relative overflow-hidden group ${
                  isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-200'
                }`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className={`p-2.5 border rounded-none ${isDark ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-zinc-100 border-zinc-200 text-black'}`}>
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <h3 className={`text-base font-black uppercase tracking-wider font-mono ${isDark ? 'text-white' : 'text-black'}`}>{t.softSkillsTitle}</h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {displayedSoftSkills.map((skill, index) => (
                    <span 
                      key={index} 
                      className={`px-3.5 py-2 border font-mono text-xs rounded-none transition-colors cursor-default ${
                        isDark 
                          ? 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700' 
                          : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:text-black hover:border-zinc-400'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-20 md:py-32 px-6 max-w-[1120px] mx-auto">
          <div className="text-left space-y-2 mb-12">
            <span className={`text-[10px] font-mono uppercase tracking-[0.3em] block ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{t.contactLabel}</span>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tight uppercase m-0 ${isDark ? 'text-white' : 'text-black'}`}>
              {t.contactTitle}
            </h2>
            <p className="text-xs md:text-sm text-zinc-500 font-mono tracking-wider uppercase">
              {t.contactSubtitle}
            </p>
          </div>

          <div className={`max-w-xl mx-auto border p-6 md:p-8 rounded-none ${
            isDark ? 'bg-[#0D0D10] border-zinc-900' : 'bg-white border-zinc-200 shadow-lg'
          }`}>
            <form onSubmit={handleContactSubmit} className="space-y-6 text-left">
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">{t.fullName}</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.namePlaceholder}
                  required
                  className={`w-full px-4 py-3 border rounded-none text-sm transition-all focus:outline-none ${
                    isDark 
                      ? 'bg-[#111113] border-zinc-800 text-[#F5F5F5] placeholder-zinc-600 focus:border-white' 
                      : 'bg-zinc-50 border-zinc-200 text-black placeholder-zinc-400 focus:border-black'
                  }`}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">{t.emailAddress}</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com" 
                  required
                  className={`w-full px-4 py-3 border rounded-none text-sm transition-all focus:outline-none ${
                    isDark 
                      ? 'bg-[#111113] border-zinc-800 text-[#F5F5F5] placeholder-zinc-600 focus:border-white' 
                      : 'bg-zinc-50 border-zinc-200 text-black placeholder-zinc-400 focus:border-black'
                  }`}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">{t.message}</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.messagePlaceholder}
                  required
                  className={`w-full px-4 py-3 border rounded-none text-sm transition-all focus:outline-none resize-none ${
                    isDark 
                      ? 'bg-[#111113] border-zinc-800 text-[#F5F5F5] placeholder-zinc-600 focus:border-white' 
                      : 'bg-zinc-50 border-zinc-200 text-black placeholder-zinc-400 focus:border-black'
                  }`}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`w-full py-3.5 text-xs font-mono font-bold tracking-widest uppercase rounded-none transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  isDark ? 'bg-white hover:bg-zinc-200 text-black' : 'bg-black hover:bg-zinc-800 text-white'
                }`}
              >
                <Send className="w-4 h-4" />
                {t.sendMessage}
              </button>
            </form>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div 
                  className={`mt-4 p-4 border text-xs font-mono tracking-wide flex items-center gap-2 rounded-none ${
                    isDark ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-zinc-50 border-zinc-200 text-black'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <Check className="w-3.5 h-3.5 shrink-0 stroke-[3px]" />
                  {t.emailOpened}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Footer */}
        <footer className={`border-t py-16 px-6 transition-colors duration-300 ${isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-zinc-50 border-zinc-200'}`}>
          <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            <div className="flex flex-col">
              <span className={`text-[10px] font-mono uppercase tracking-[0.2em] mb-4 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>{t.identity}</span>
              <span className={`text-sm font-extrabold ${isDark ? 'text-white' : 'text-black'}`}>{personalDetails.name}</span>
              <span className={`text-xs mt-1 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>© {new Date().getFullYear()}</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-[10px] font-mono uppercase tracking-[0.2em] mb-4 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>{t.expertise}</span>
              <span className={`text-xs font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{t.retailOperations}</span>
              <span className={`text-xs font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{t.customerSupport}</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-[10px] font-mono uppercase tracking-[0.2em] mb-4 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>{t.dialogue}</span>
              <div className="flex items-center gap-1.5 mb-1 text-xs">
                <Mail className={`w-3.5 h-3.5 shrink-0 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`} />
                <a href={`mailto:${personalDetails.email}`} className={`transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'}`}>
                  {personalDetails.email}
                </a>
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <svg viewBox="0 0 24 24" fill="currentColor" className={`w-3.5 h-3.5 shrink-0 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  <path d="M12.003 2c-5.52 0-9.99 4.49-9.99 10.02 0 1.8.48 3.54 1.39 5.07L2 22l5.08-1.33c1.47.8 3.12 1.22 4.81 1.22 5.52 0 10.01-4.49 10.01-10.02C21.9 6.49 17.52 2 12.003 2zm6.01 13.91c-.24.68-1.2 1.24-1.65 1.32-.41.08-.94.12-1.5.12-.56 0-1.28-.04-2.12-.37-1.42-.56-2.52-1.78-3.23-2.6-.08-.1-.66-.88-.66-1.68 0-.8.41-1.19.56-1.35.15-.16.32-.2.43-.2.11 0 .21.01.3.01.09 0 .21-.03.32.22.12.27.4.98.44 1.06.04.08.06.18.01.29-.05.11-.1.21-.2.32-.1.11-.2.22-.29.32-.09.09-.19.19-.08.38.11.19.49.81 1.05 1.31.72.64 1.33.84 1.52.93.19.09.3.08.41-.05.11-.13.48-.56.61-.75.13-.19.26-.16.44-.09.18.07 1.14.54 1.34.64.2.1.33.15.38.23.05.09.05.51-.19 1.19z"/>
                </svg>
                <a href={`https://wa.me/6289528559579`} target="_blank" rel="noreferrer" className={`transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'}`}>
                  +62 895 2855 9579
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end justify-between">
              <span className={`text-[10px] font-mono uppercase tracking-[0.2em] mb-4 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>{t.networks}</span>
              <div className="flex gap-4">
                <a href={personalDetails.githubUrl} target="_blank" rel="noreferrer" className={`transition-colors ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </footer>

      </div>

      {/* 3. PRINTABLE CV HIGH-FIDELITY MODAL (POPUP VIEW) */}
      <AnimatePresence>
        {isCVModalOpen && (
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
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            >
              
              {/* Modal Control Header */}
              <div className={`border-b px-6 py-4 flex items-center justify-between shrink-0 text-left ${
                isDark ? 'bg-[#0D0D10] border-zinc-900' : 'bg-zinc-100 border-zinc-200'
              }`}>
                <div>
                  <h3 className={`text-sm md:text-base font-black uppercase tracking-wider font-mono ${isDark ? 'text-white' : 'text-black'}`}>// Curriculum Vitae</h3>
                  <p className="text-[10px] text-zinc-500">{t.cvNote}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrint}
                    className={`px-4 py-2 text-xs font-mono font-bold uppercase rounded-none shadow-sm flex items-center gap-2 transition-all cursor-pointer ${
                      isDark ? 'bg-white text-black hover:bg-zinc-200' : 'bg-black text-white hover:bg-zinc-800'
                    }`}
                  >
                    <Printer className="w-3.5 h-3.5" />
                    {t.printPdf}
                  </button>
                  <button
                    onClick={() => setIsCVModalOpen(false)}
                    className={`p-2 border rounded-none transition-all cursor-pointer ${
                      isDark ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border-zinc-800' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-black border-zinc-200'
                    }`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Central Printable Paper Area */}
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

    </div>
  );
}
