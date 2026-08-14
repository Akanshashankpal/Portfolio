import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative border-y border-white/[0.05] bg-coal py-24 md:py-32"
    >
      <div className="relative mx-auto w-full max-w-[76rem] px-5 sm:px-8">
        <SectionHeading
          index="04"
          eyebrow="Experience"
          title={
            <>
              A short story of{' '}
              <span className="font-serif font-normal italic text-blush">steady shipping</span>.
            </>
          }
          description="Every role taught me something the tutorials never could."
        />

        <div className="relative mt-14">
          {/* timeline rail */}
          <div
            aria-hidden
            className="absolute bottom-1 left-[5px] top-1 w-px bg-white/[0.08] md:left-[11rem]"
          />

          <ol className="space-y-10 md:space-y-12">
            {experience.map((item) => (
              <li
                key={item.role}
                className="relative grid gap-4 pl-8 md:grid-cols-[10rem_1fr] md:gap-10 md:pl-0"
              >
                <span className="absolute left-0 top-2 flex h-[11px] w-[11px] md:left-[calc(11rem-5px)]">
                  {item.current && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blush opacity-60" />
                  )}
                  <span
                    className={`relative inline-flex h-[11px] w-[11px] rounded-full border-2 border-ink ${
                      item.current ? 'bg-blush' : 'bg-white/30'
                    }`}
                  />
                </span>

                <Reveal>
                  <p className="pt-0.5 font-display text-sm font-medium uppercase tracking-[0.18em] text-blush">
                    {item.period}
                  </p>
                </Reveal>

                <Reveal delay={0.08}>
                  <div className="group rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors duration-500 hover:border-blush/25 hover:bg-white/[0.03] md:p-8">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <h3 className="font-display text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-blush">
                        {item.role}
                      </h3>
                      {item.current && (
                        <span className="rounded-full border border-blush/30 bg-blush/10 px-3 py-1 font-display text-[10px] font-medium uppercase tracking-[0.2em] text-blush">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 text-sm font-medium text-white/60">{item.company}</p>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist">
                      {item.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
