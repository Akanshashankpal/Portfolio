import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, GraduationCap, Mail, MapPin } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import Button from './ui/Button';
import { EMAIL, LOCATION } from '../data/navigation';

const stats = [
  { value: '1+', label: 'Years of experience' },
  { value: '5+', label: 'Projects completed' },
];

const facts = [
  { icon: MapPin, label: 'Location', value: LOCATION },
  { icon: Briefcase, label: 'Focus', value: 'Frontend · React ecosystem' },
  { icon: Mail, label: 'Email', value: EMAIL },
  { icon: GraduationCap, label: 'Education', value: 'B.Tech. Computer Science' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-[76rem] grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* ---- portrait card ---- */}
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.07]">
            <img
              src="/images/about.png"
              alt="Akansha Shankpal working at her studio desk"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
              <div>
                <p className="font-display text-lg font-semibold text-white">Akansha Shankpal</p>
                <p className="mt-0.5 font-display text-[11px] font-medium uppercase tracking-[0.22em] text-blush">
                  Frontend Developer
                </p>
              </div>
              <span className="rounded-full border border-white/15 bg-ink/60 px-3 py-1.5 font-display text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                Est. 2026
              </span>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-5 right-2 rounded-2xl border border-white/10 bg-panel/90 px-5 py-4 shadow-2xl shadow-black/50 backdrop-blur-xl sm:-right-5"
          >
            <p className="font-display text-2xl font-semibold leading-none text-blush">5+</p>
            <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-mist">
              Projects
            </p>
          </motion.div>
        </Reveal>

        {/* ---- copy ---- */}
        <div>
          <SectionHeading
            index="01"
            eyebrow="About Me"
            title={
              <>
                Code is my craft,{' '}
                <span className="font-serif font-normal italic text-blush">design</span> is my
                instinct.
              </>
            }
          />

          <Reveal delay={0.1}>
            <p className="mt-6 leading-relaxed text-mist">
              I’m a frontend developer who treats interfaces like products and pixels like
              promises. For the last three years I’ve been turning ambitious ideas into fast,
              responsive web experiences — from civic-tech portals for my hometown to internal
              tools that real teams depend on every day.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 leading-relaxed text-mist">
              My sweet spot is the intersection of engineering rigor and visual taste: typed,
              tested React on the inside; considered typography, spacing and motion on the
              outside. If it ships under my name, it ships polished.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 grid grid-cols-3 divide-x divide-white/[0.07] border-y border-white/[0.07]">
              {stats.map((stat) => (
                <div key={stat.label} className="px-4 py-5 first:pl-0">
                  <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-mist">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-start gap-3.5 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 transition-colors duration-300 hover:border-blush/30"
                >
                  <fact.icon className="mt-0.5 h-4 w-4 shrink-0 text-blush" />
                  <div className="min-w-0">
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-mist">
                      {fact.label}
                    </p>
                    <p className="mt-1 truncate text-sm font-medium text-white" title={fact.value}>
                      {fact.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-9">
              <Button href="#contact">
                Let’s work together
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
