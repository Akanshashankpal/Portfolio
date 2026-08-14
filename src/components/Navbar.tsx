import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, Mail, Menu, X } from 'lucide-react';
import { navLinks, EMAIL, socials } from '../data/navigation';
import { GithubIcon, LinkedinIcon, XIcon } from './ui/icons';
import { easeOut } from '../lib/motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-blush"
        style={{ scaleX: progress }}
      />

      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: easeOut }}
        className={`fixed inset-x-0 top-0 z-[60] transition-[background-color,border-color] duration-500 ${
          scrolled
            ? 'border-b border-white/[0.06] bg-ink/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 w-full max-w-[76rem] items-center justify-between px-5 sm:px-8 md:h-[4.5rem]">
          <a
            href="#home"
            className="font-display text-lg font-semibold tracking-tight text-white"
          >
            akansha<span className="text-blush">.</span>shankpal
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative font-display text-[13px] font-medium uppercase tracking-[0.18em] text-mist transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-blush transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 420, damping: 22 }}
              className="hidden items-center gap-1.5 rounded-full border border-white/15 px-5 py-2.5 font-display text-[13px] font-medium uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:border-blush/70 hover:text-blush sm:inline-flex"
            >
              Hire Me
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-blush/50 hover:text-blush lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] flex flex-col justify-center bg-ink/95 px-8 backdrop-blur-2xl lg:hidden"
          >
            <ul className="space-y-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: 0.06 * i, duration: 0.5, ease: easeOut }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 py-2.5 font-display text-4xl font-semibold tracking-tight text-white/85 transition-colors hover:text-blush"
                  >
                    <span className="font-display text-xs font-medium tracking-[0.2em] text-blush">
                      0{i + 1}
                    </span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-10 border-t border-white/10 pt-6"
            >
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-sm text-mist transition-colors hover:text-blush"
              >
                <Mail className="h-4 w-4 text-blush" />
                {EMAIL}
              </a>
              <div className="mt-5 flex items-center gap-4">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-blush/60 hover:text-blush"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-blush/60 hover:text-blush"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
                <a
                  href={socials.x}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X (Twitter)"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-blush/60 hover:text-blush"
                >
                  <XIcon className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
