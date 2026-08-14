import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <Reveal>
        <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
          <span className="font-display text-xs font-medium tracking-[0.3em] text-blush">
            {index}
          </span>
          <span className="h-px w-10 bg-blush/40" />
          <span className="font-display text-xs font-medium uppercase tracking-[0.3em] text-mist">
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 font-display text-[clamp(2.1rem,4.5vw,3.4rem)] font-semibold leading-[1.05] tracking-tight text-white">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-mist">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
