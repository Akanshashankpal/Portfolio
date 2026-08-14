import { useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Button from './ui/Button';
import { GithubIcon, LinkedinIcon, XIcon } from './ui/icons';
import { tickerItems } from '../data/skills';
import { socials } from '../data/navigation';
import { easeOut } from '../lib/motion';

function LineReveal({ children, delay }: { children: ReactNode; delay: number }) {
  return (
    <span className="-mb-[0.1em] block overflow-hidden pb-[0.1em]">
      <motion.span
        className="block"
        initial={{ y: '112%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: easeOut }}
      >
        {children}
      </motion.span>
    </span>
  );
}

const heroSocials = [
  { label: 'GitHub', href: socials.github, Icon: GithubIcon },
  { label: 'LinkedIn', href: socials.linkedin, Icon: LinkedinIcon },
  { label: 'X (Twitter)', href: socials.x, Icon: XIcon },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const yPortrait = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const yGlow = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.15]);

  return (
    <section id="home" ref={sectionRef} className="relative overflow-clip">
      {/* ---- background: faint grid + blush ambience ---- */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, black 25%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 90% 70% at 50% 0%, black 25%, transparent 100%)',
          }}
        />
        <div className="absolute -top-44 left-[12%] h-[26rem] w-[26rem] rounded-full bg-blush/[0.07] blur-[130px]" />
        <div className="absolute right-[-10rem] top-1/3 h-[24rem] w-[24rem] rounded-full bg-blush/[0.08] blur-[120px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[76rem] grid-cols-1 items-center gap-16 px-5 pb-20 pt-32 sm:px-8 md:pt-40 lg:min-h-svh lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28 lg:pt-36">
        {/* ---- left: copy ---- */}
        <motion.div style={{ opacity: contentOpacity }} className="max-w-xl lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blush opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blush" />
            </span>
            <span className="font-display text-[11px] font-medium uppercase tracking-[0.22em] text-mist">
              Available for freelance work
            </span>
          </motion.div>

          <h1 className="mt-7 font-display text-[clamp(2.7rem,7.4vw,5.6rem)] font-semibold uppercase leading-[0.98] tracking-[-0.02em] text-white">
            <LineReveal delay={0.25}>I Build</LineReveal>
            <LineReveal delay={0.35}>
              <span className="font-serif normal-case italic tracking-normal text-blush">
                Digital
              </span>
            </LineReveal>
            <LineReveal delay={0.45}>
              Experiences<span className="text-blush">.</span>
            </LineReveal>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: easeOut }}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-mist sm:text-base"
          >
            I’m Akansha Shankpal — a frontend developer from Burhanpur, India. I craft fast,
            accessible and beautifully detailed interfaces with React, TypeScript and
            Tailwind CSS — from first pixel to production deploy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.72, ease: easeOut }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="#projects">
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Button>
            <Button href="#contact" variant="ghost">
              Let’s Connect
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-11 flex items-center gap-5"
          >
            <span className="h-px w-10 bg-white/15" />
            <span className="font-display text-[11px] font-medium uppercase tracking-[0.24em] text-mist">
              Follow
            </span>
            <div className="flex items-center gap-4">
              {heroSocials.map(({ label, href, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.92 }}
                  className="text-white/60 transition-colors duration-300 hover:text-blush"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ---- right: portrait ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: easeOut }}
          className="relative mx-auto w-full max-w-[21rem] sm:max-w-[24rem] lg:max-w-[27rem]"
        >
          <motion.div style={{ y: yPortrait }} className="relative">
            {/* pink glow */}
            <motion.div
              aria-hidden
              style={{ y: yGlow }}
              animate={{ scale: [1, 1.07, 1], opacity: [0.55, 0.8, 0.55] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blush/25 blur-[100px]"
            />

            {/* slow spinning dashed ring */}
            <div
              aria-hidden
              className="absolute -inset-5 animate-spin-slow rounded-full border border-dashed border-white/15 sm:-inset-7"
            />

            {/* arch backdrop */}
            <div
              aria-hidden
              className="absolute inset-x-6 bottom-0 top-[18%] rounded-b-[2rem] rounded-t-full border border-white/[0.07] bg-gradient-to-b from-panel via-coal to-ink sm:inset-x-9"
            />

            <img
              src="/images/portrait.png"
              alt="Portrait of Akansha Shankpal, frontend developer"
              draggable={false}
              className="relative z-10 mx-auto w-full select-none"
            />

            {/* floating stat chips */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute -right-1 top-[16%] z-20 rounded-2xl border border-white/10 bg-coal/85 px-4 py-3 shadow-2xl shadow-black/50 backdrop-blur-xl sm:-right-5"
            >
              <p className="font-display text-xl font-semibold leading-none text-white sm:text-2xl">
                3+
              </p>
              <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-mist">
                Years of code
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="pointer-events-none absolute -left-1 bottom-[12%] z-20 rounded-2xl border border-white/10 bg-coal/85 px-4 py-3 shadow-2xl shadow-black/50 backdrop-blur-xl sm:-left-5"
            >
              <p className="font-display text-xl font-semibold leading-none text-blush sm:text-2xl">
                20+
              </p>
              <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-mist">
                Projects shipped
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ---- tech ticker ---- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="group relative overflow-hidden border-t border-white/[0.06] py-5"
      >
        <div className="flex w-max animate-marquee items-center gap-10 group-hover:[animation-play-state:paused]">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-10">
              <span className="font-display text-sm font-medium uppercase tracking-[0.28em] text-white/40">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-blush/50" />
            </span>
          ))}
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent"
        />
      </motion.div>
    </section>
  );
}
