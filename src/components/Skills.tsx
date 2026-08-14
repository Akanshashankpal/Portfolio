import { motion } from 'framer-motion';
import { Code2, Paintbrush, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { skillGroups, toolkit } from '../data/skills';
import { easeOut } from '../lib/motion';

const groupIcons: Record<string, LucideIcon> = {
  core: Code2,
  styling: Paintbrush,
  tools: Wrench,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative border-y border-white/[0.05] bg-coal py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10rem] top-1/4 h-[22rem] w-[22rem] rounded-full bg-blush/[0.05] blur-[120px]"
      />
      <div className="relative mx-auto w-full max-w-[76rem] px-5 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="Skills & Technologies"
          title={
            <>
              A toolkit built for{' '}
              <span className="font-serif font-normal italic text-blush">shipping</span>.
            </>
          }
          description="Not a wall of logos — the tools I actually use daily, and how deep I go with each of them."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = groupIcons[group.id];
            return (
              <Reveal key={group.id} delay={i * 0.09} className="h-full">
                <div className="group h-full rounded-3xl border border-white/[0.07] bg-panel p-7 transition-colors duration-500 hover:border-blush/25">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-blush transition-colors duration-500 group-hover:border-blush/30">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {group.title}
                  </h3>
                  <p className="mt-1 text-sm text-mist">{group.caption}</p>

                  <ul className="mt-7 space-y-5">
                    {group.skills.map((skill) => (
                      <li key={skill.name}>
                        <div className="flex items-baseline justify-between">
                          <span className="text-sm font-medium text-white/90">{skill.name}</span>
                          <span className="font-display text-xs text-mist">{skill.level}%</span>
                        </div>
                        <div className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-white/[0.07]">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 1.2, delay: 0.2, ease: easeOut }}
                            className="h-full rounded-full bg-gradient-to-r from-blush-deep to-blush"
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7 md:p-8">
            <p className="font-display text-xs font-medium uppercase tracking-[0.28em] text-mist">
              Everyday toolkit
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {toolkit.map((tool) => (
                <span
                  key={tool}
                  className="cursor-default rounded-full border border-white/10 px-4 py-2 text-sm text-white/75 transition-all duration-300 hover:border-blush/50 hover:text-blush"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
