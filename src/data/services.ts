import { Gauge, LayoutGrid, Palette, Workflow } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  index: string;
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    index: '01',
    title: 'Frontend Development',
    description:
      'Production-ready React applications with clean architecture, typed contracts and honest state management — built to be maintained, not just demoed.',
    points: ['SPAs & dashboard builds', 'SSR / SSG with Next.js', 'Pixel-perfect Figma handoff'],
    icon: LayoutGrid,
  },
  {
    index: '02',
    title: 'UI Engineering & Design Systems',
    description:
      'Component systems that scale: consistent tokens, documented variants and a visual language your whole team can speak fluently.',
    points: ['Reusable component libraries', 'Design tokens & theming', 'Accessible, WCAG-aware UI'],
    icon: Palette,
  },
  {
    index: '03',
    title: 'Performance & Web Vitals',
    description:
      'Speed is a feature. I profile, prune and optimize until interfaces feel instant — even on mid-range phones and shaky networks.',
    points: ['Lighthouse 90+ targets', 'Bundle & image optimization', 'Core Web Vitals audits'],
    icon: Gauge,
  },
  {
    index: '04',
    title: 'API & State Architecture',
    description:
      'Robust data flow from endpoint to UI: caching, optimistic updates and error states that never leave users guessing.',
    points: ['REST / GraphQL integration', 'Redux, Zustand, React Query', 'Auth & protected routes'],
    icon: Workflow,
  },
];
