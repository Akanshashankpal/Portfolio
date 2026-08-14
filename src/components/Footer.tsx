import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { navLinks, socials } from '../data/navigation';
import { GithubIcon, LinkedinIcon, XIcon } from './ui/icons';
import Reveal from './ui/Reveal';

const footerSocials = [
  { label: 'GitHub', href: socials.github, Icon: GithubIcon },
  { label: 'LinkedIn', href: socials.linkedin, Icon: LinkedinIcon },
  { label: 'X (Twitter)', href: socials.x, Icon: XIcon },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative overflow-clip border-t border-white/[0.06] bg-ink">
      <div className="mx-auto w-full max-w-[76rem] px-5 pb-10 pt-16 sm:px-8">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
            <div>
              <a
                href="#home"
                className="font-display text-lg font-semibold tracking-tight text-white"
              >
                akansha<span className="text-blush">.</span>shankpal
              </a>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
                Frontend developer crafting digital experiences that feel as good as they look
                — from Burhanpur to anywhere.
              </p>
              <div className="mt-6 flex items-center gap-3">
                {footerSocials.map(({ label, href, Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.92 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors duration-300 hover:border-blush/60 hover:text-blush"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <p className="font-display text-[11px] font-medium uppercase tracking-[0.24em] text-white/40">
                Navigate
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-mist transition-colors duration-300 hover:text-blush"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-display text-[11px] font-medium uppercase tracking-[0.24em] text-white/40">
                Say hello
              </p>
              <a
                href="mailto:hello@akanshashankpal.dev"
                className="mt-5 block text-sm text-mist transition-colors duration-300 hover:text-blush"
              >
                hello@akanshashankpal.dev
              </a>
              <p className="mt-2 text-sm text-mist">Burhanpur, MP · India</p>
              <motion.button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.92 }}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-display text-[11px] font-medium uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-blush/60 hover:text-blush"
              >
                Back to top
                <ArrowUp className="h-3.5 w-3.5" />
              </motion.button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-7 sm:flex-row">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} Akansha Shankpal. All rights reserved.
            </p>
            <p className="text-xs text-white/40">
              Designed & built with React, Tailwind CSS and Framer Motion.
            </p>
          </div>
        </Reveal>
      </div>

      {/* giant outline wordmark */}
      <div aria-hidden className="pointer-events-none select-none overflow-hidden">
        <p className="-mb-5 whitespace-nowrap text-center font-display text-[clamp(2.2rem,8.6vw,7.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-stroke-white sm:-mb-8">
          Akansha Shankpal
        </p>
      </div>
    </footer>
  );
}
