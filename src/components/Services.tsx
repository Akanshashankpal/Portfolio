import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { services } from '../data/services';

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[20rem] w-[32rem] -translate-x-1/2 rounded-full bg-blush/[0.05] blur-[130px]"
      />
      <div className="relative mx-auto w-full max-w-[76rem] px-5 sm:px-8">
        <SectionHeading
          index="05"
          eyebrow="Services"
          title={
            <>
              What I can do for{' '}
              <span className="font-serif font-normal italic text-blush">your product</span>.
            </>
          }
          description="Four ways I plug into teams and turn ideas into interfaces people enjoy using."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.index} delay={i * 0.07} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.07] bg-panel p-7 transition-colors duration-500 hover:border-blush/30 md:p-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blush/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />
                <div className="relative flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-blush transition-colors duration-500 group-hover:border-blush/30">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-sm font-medium tracking-[0.2em] text-white/25 transition-colors duration-500 group-hover:text-blush/60">
                    {service.index}
                  </span>
                </div>
                <h3 className="relative mt-6 font-display text-xl font-semibold tracking-tight text-white">
                  {service.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-mist">
                  {service.description}
                </p>
                <ul className="relative mt-6 space-y-2.5 border-t border-white/[0.06] pt-5">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-sm text-white/70">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-blush" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
