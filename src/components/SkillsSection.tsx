import { Lightbulb, Wrench } from 'lucide-react';
import { motion } from 'motion/react';
import type { PortfolioCopy } from '../i18n';

interface SkillsSectionProps {
  isDark: boolean;
  copy: PortfolioCopy;
  hardSkills: readonly string[];
  softSkills: readonly string[];
}

export function SkillsSection({ isDark, copy, hardSkills, softSkills }: SkillsSectionProps) {
  const skillGroups = [
    {
      title: copy.hardSkillsTitle,
      skills: hardSkills,
      Icon: Wrench,
      delay: 0,
    },
    {
      title: copy.softSkillsTitle,
      skills: softSkills,
      Icon: Lightbulb,
      delay: 0.1,
    },
  ];

  return (
    <section id="skills" className={`border-y py-20 md:py-32 px-6 transition-colors duration-300 ${isDark ? 'bg-[#0D0D10] border-zinc-900/60' : 'bg-zinc-100/40 border-zinc-200'}`}>
      <div className="max-w-[1120px] mx-auto space-y-20">
        <div className="text-left space-y-2">
          <span className={`text-[10px] font-mono uppercase tracking-[0.3em] block ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{copy.skillsLabel}</span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tight uppercase m-0 ${isDark ? 'text-white' : 'text-black'}`}>
            {copy.skillsTitle}
          </h2>
          <p className="text-xs md:text-sm text-zinc-500 font-mono tracking-wider uppercase">
            {copy.skillsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillGroups.map(({ title, skills, Icon, delay }) => (
            <motion.div
              key={title}
              className={`p-8 rounded-none border shadow-sm text-left relative overflow-hidden group ${
                isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-200'
              }`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-2.5 border rounded-none ${isDark ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-zinc-100 border-zinc-200 text-black'}`}>
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </div>
                <h3 className={`text-base font-black uppercase tracking-wider font-mono ${isDark ? 'text-white' : 'text-black'}`}>{title}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className={`px-3.5 py-2 border font-mono text-xs rounded-none transition-colors cursor-default ${
                      isDark
                        ? 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                        : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:text-black hover:border-zinc-400'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: index * 0.03 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
