import { useState } from 'react';
import type { FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, ChevronDown, Copy, Mail, MapPin, Phone, Send } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { GithubIcon, LinkedinIcon, XIcon } from './ui/icons';
import { EMAIL, LOCATION, PHONE, socials } from '../data/navigation';
import { easeOut } from '../lib/motion';

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition-colors duration-300 placeholder:text-mist/50 focus:border-blush/60';

const budgets = ['Under ₹25k', '₹25k — ₹75k', '₹75k — ₹1.5L', '₹1.5L+', 'Let’s discuss'];

const contactRows = [
  { icon: Mail, label: 'Email', value: EMAIL },
  { icon: Phone, label: 'Phone / WhatsApp', value: PHONE },
  { icon: MapPin, label: 'Location', value: LOCATION },
];

const contactSocials = [
  { label: 'GitHub', href: socials.github, Icon: GithubIcon },
  { label: 'LinkedIn', href: socials.linkedin, Icon: LinkedinIcon },
  { label: 'X (Twitter)', href: socials.x, Icon: XIcon },
];

const successVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3 } },
};

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative border-t border-white/[0.05] bg-coal py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[-8rem] h-[24rem] w-[24rem] rounded-full bg-blush/[0.06] blur-[130px]"
      />
      <div className="relative mx-auto grid w-full max-w-[76rem] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* ---- left: pitch + details ---- */}
        <div>
          <SectionHeading
            index="06"
            eyebrow="Contact"
            title={
              <>
                Have an idea?{' '}
                <span className="font-serif font-normal italic text-blush">Let’s build</span> it
                together.
              </>
            }
            description="Tell me about your project — scope, timeline, dreams. I reply within 24 hours with honest feedback and a clear next step."
          />

          <Reveal delay={0.16}>
            <div className="mt-10 space-y-3">
              {contactRows.map((row) => (
                <div
                  key={row.label}
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition-colors duration-300 hover:border-blush/25"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-blush">
                    <row.icon className="h-[18px] w-[18px]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-mist">
                      {row.label}
                    </p>
                    <p className="mt-0.5 truncate text-sm font-medium text-white">{row.value}</p>
                  </div>
                  {row.label === 'Email' && (
                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label={copied ? 'Email copied' : 'Copy email address'}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors duration-300 hover:border-blush/60 hover:text-blush"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-blush" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-8 flex items-center gap-4">
              <span className="font-display text-[11px] font-medium uppercase tracking-[0.24em] text-mist">
                Elsewhere
              </span>
              <span className="h-px flex-1 bg-white/[0.08]" />
              <div className="flex items-center gap-3">
                {contactSocials.map(({ label, href, Icon }) => (
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
          </Reveal>
        </div>

        {/* ---- right: form ---- */}
        <Reveal delay={0.12}>
          <div className="relative h-full rounded-3xl border border-white/[0.07] bg-panel p-7 md:p-9">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  variants={successVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex h-full min-h-[26rem] flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.15 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full border border-blush/30 bg-blush/10"
                  >
                    <Check className="h-7 w-7 text-blush" />
                  </motion.div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-white">
                    Message sent.
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-mist">
                    Thanks for reaching out — I’ll get back to you within 24 hours with next
                    steps.
                  </p>
                  <motion.button
                    type="button"
                    onClick={() => setSent(false)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="mt-8 rounded-full border border-white/15 px-6 py-3 font-display text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:border-blush/60 hover:text-blush"
                  >
                    Send another message
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  variants={successVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-mist"
                      >
                        Your name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Sharma"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-mist"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-mist"
                    >
                      Project budget
                    </label>
                    <div className="relative">
                      <select
                        id="budget"
                        name="budget"
                        defaultValue={budgets[1]}
                        className={`${inputClass} appearance-none pr-10`}
                      >
                        {budgets.map((budget) => (
                          <option key={budget} value={budget} className="bg-panel text-white">
                            {budget}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mist" />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-mist"
                    >
                      Tell me about the project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="What are we building, and what does success look like?"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 420, damping: 22 }}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-blush px-7 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:bg-blush-soft"
                  >
                    Send Message
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
