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
      'I build clean, responsive and user-friendly websites using React and TypeScript.',
    points: [
      'React & TypeScript',
      'Responsive websites',
      'Reusable components',
    ],
    icon: LayoutGrid,
  },
  {
    index: '02',
    title: 'UI Design & Development',
    description:
      'I create modern and attractive interfaces that work smoothly on all screen sizes.',
    points: [
      'Modern UI design',
      'Responsive layouts',
      'Reusable UI components',
    ],
    icon: Palette,
  },
  {
    index: '03',
    title: 'Performance Optimization',
    description:
      'I optimize websites to make them faster, smoother and better for users.',
    points: [
      'Website speed',
      'Image optimization',
      'Mobile performance',
    ],
    icon: Gauge,
  },
  {
    index: '04',
    title: 'API Integration',
    description:
      'I connect frontend applications with APIs and manage data, authentication and application state.',
    points: [
      'REST API integration',
      'Authentication',
      'State management',
    ],
    icon: Workflow,
  }
];
