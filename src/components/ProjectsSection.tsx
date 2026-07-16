import { ArrowUpRight, Database, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { projects } from '../data';

interface ProjectsSectionProps {
  isDark: boolean;
  isIndonesian: boolean;
}

export function ProjectsSection({ isDark, isIndonesian }: ProjectsSectionProps) {
  const copy = isIndonesian
    ? {
        label: '04 — Proyek Pilihan',
        title: 'Solusi dari Pengalaman Lapangan',
        subtitle: 'Proyek yang menghubungkan pengalaman operasional retail dengan pengembangan web.',
        contribution: '// Kontribusi',
        source: 'Lihat Source',
        live: 'Buka Aplikasi',
        loginRequired: 'Login diperlukan'
      }
    : {
        label: '04 — Selected Projects',
        title: 'Field Experience, Built into a Solution',
        subtitle: 'A project connecting hands-on retail operations with web development.',
        contribution: '// Contribution',
        source: 'View Source',
        live: 'Open Live App',
        loginRequired: 'Login required'
      };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 md:py-32 px-6 max-w-[1120px] mx-auto"
    >
      <div className="text-left space-y-2 mb-14 md:mb-20">
        <span className={`text-[10px] font-mono uppercase tracking-[0.3em] block ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
          {copy.label}
        </span>
        <h2
          id="projects-heading"
          className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tight uppercase text-balance m-0 ${isDark ? 'text-white' : 'text-black'}`}
        >
          {copy.title}
        </h2>
        <p className="max-w-2xl text-xs md:text-sm text-zinc-500 font-mono tracking-wider uppercase text-pretty">
          {copy.subtitle}
        </p>
      </div>

      {projects.map((project) => {
        const description = isIndonesian ? project.descriptionIndonesian : project.descriptionEnglish;
        const contributions = isIndonesian ? project.contributionsIndonesian : project.contributionsEnglish;

        return (
          <motion.article
            key={project.id}
            className={`relative overflow-hidden border ${isDark ? 'bg-zinc-950/50 border-zinc-900' : 'bg-white border-zinc-200 shadow-sm'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <div className={`absolute top-0 left-0 h-full w-1 ${isDark ? 'bg-white' : 'bg-black'}`} aria-hidden="true" />

            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className={`lg:col-span-5 p-7 md:p-10 border-b lg:border-b-0 lg:border-r ${isDark ? 'border-zinc-900' : 'border-zinc-200'}`}>
                <div className={`inline-flex p-3 border mb-8 ${isDark ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-zinc-100 border-zinc-200 text-black'}`}>
                  <Database className="w-5 h-5" aria-hidden="true" />
                </div>

                <p className={`text-[10px] font-mono uppercase tracking-[0.25em] mb-3 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>
                  01 / Featured Build
                </p>
                <h3 className={`text-2xl md:text-3xl font-black uppercase tracking-tight mb-5 ${isDark ? 'text-white' : 'text-black'}`}>
                  {project.name}
                </h3>
                <p className={`text-sm leading-relaxed text-pretty ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-8">
                  {project.technologies.map((technology, index) => (
                    <motion.span
                      key={technology}
                      className={`px-3 py-1.5 border text-[10px] font-mono uppercase tracking-wider ${isDark ? 'border-zinc-800 text-zinc-400' : 'border-zinc-300 text-zinc-600'}`}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: index * 0.04 }}
                    >
                      {technology}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 p-7 md:p-10 flex flex-col">
                <p className={`text-xs font-mono font-bold uppercase tracking-[0.2em] mb-7 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {copy.contribution}
                </p>
                <ul className="space-y-4 mb-10">
                  {contributions.map((contribution, index) => (
                    <li key={contribution} className="flex items-start gap-4">
                      <span className={`font-mono text-[10px] mt-0.5 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`} aria-hidden="true">
                        0{index + 1}
                      </span>
                      <span className={`text-sm leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                        {contribution}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className={`mt-auto pt-7 border-t flex flex-col sm:flex-row gap-3 ${isDark ? 'border-zinc-900' : 'border-zinc-200'}`}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`btn-uv-brutalist inline-flex items-center justify-center gap-2 px-5 py-3 text-[11px] font-mono font-bold uppercase tracking-wider focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${isDark ? 'bg-white text-black focus-visible:outline-white' : 'bg-black text-white focus-visible:outline-black'}`}
                    aria-label={`${copy.live}: ${project.name}. ${copy.loginRequired}.`}
                  >
                    {copy.live}
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center justify-center gap-2 px-5 py-3 border text-[11px] font-mono font-bold uppercase tracking-wider transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${isDark ? 'border-zinc-800 text-zinc-300 hover:border-zinc-600 focus-visible:outline-white' : 'border-zinc-300 text-zinc-700 hover:border-zinc-500 focus-visible:outline-black'}`}
                    aria-label={`${copy.source}: ${project.name}`}
                  >
                    <Github className="w-4 h-4" aria-hidden="true" />
                    {copy.source}
                  </a>
                  <span className={`self-center text-[9px] font-mono uppercase tracking-widest ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    {copy.loginRequired}
                  </span>
                </div>
              </div>
            </div>
          </motion.article>
        );
      })}
    </section>
  );
}
