import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { GithubIcon } from './ui/icons';
import { projects } from '../data/projects';
import { socials } from '../data/navigation';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10rem] top-0 h-[24rem] w-[24rem] rounded-full bg-blush/[0.05] blur-[130px]"
      />
      <div className="relative mx-auto w-full max-w-[76rem] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="03"
            eyebrow="Selected Projects"
            title={
              <>
                Work I’m{' '}
                <span className="font-serif font-normal italic text-blush">proud</span> to sign.
              </>
            }
            description="Three products, three problems solved — each designed, built and shipped end-to-end."
          />
          <Reveal delay={0.2}>
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="group hidden items-center gap-2 font-display text-[13px] font-medium uppercase tracking-[0.18em] text-mist transition-colors hover:text-blush sm:inline-flex"
            >
              All repositories
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.09} className="h-full">
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-panel transition-colors duration-500 hover:border-blush/30"
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open live demo of ${project.title}`}
                  className="relative block aspect-[16/10] overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} — interface preview`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent opacity-90" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-ink/60 px-3 py-1 font-display text-[11px] font-medium tracking-[0.2em] text-white/85 backdrop-blur">
                    {project.index}
                  </span>
                  <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-ink/60 px-3 py-1 font-display text-[11px] font-medium tracking-[0.2em] text-blush backdrop-blur">
                    {project.year}
                  </span>
                </a>

                <div className="flex flex-1 flex-col p-6">
                  <p className="font-display text-[11px] font-medium uppercase tracking-[0.24em] text-blush">
                    {project.tagline}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/[0.07] pt-5">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1.5 rounded-full bg-blush px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-colors duration-300 hover:bg-blush-soft"
                    >
                      Live Demo
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} source code on GitHub`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:border-blush/60 hover:text-blush"
                    >
                      <GithubIcon className="h-4 w-4" />
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
