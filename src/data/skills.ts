export interface Skill {
  name: string;
  level: number;
}

export interface SkillGroup {
  id: 'core' | 'styling' | 'tools';
  title: string;
  caption: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'core',
    title: 'Core Frontend',
    caption: 'The stack I reach for when quality matters',
    skills: [
      { name: 'React', level: 94 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript (ES6+)', level: 94 },
      { name: 'Next.js', level: 84 },
    ],
  },
  {
    id: 'styling',
    title: 'Styling & Motion',
    caption: 'Pixel discipline with a feel for movement',
    skills: [
      { name: 'Tailwind CSS', level: 95 },
      { name: 'CSS3 / Sass', level: 90 },
      { name: 'Framer Motion', level: 86 },
      { name: 'Responsive Design', level: 93 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Workflow',
    caption: 'How I ship — fast, reviewed and repeatable',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Vite & Tooling', level: 88 },
      { name: 'Redux Toolkit', level: 84 },
      { name: 'Figma to Code', level: 80 },
    ],
  },
];

export const toolkit: string[] = [
  'React',
  'TypeScript',
  'Next.js',
  'Tailwind CSS',
  'Framer Motion',
  'Redux Toolkit',
  'Vite',
  'Node.js',
  'Express',
  'Firebase',
  'PostgreSQL',
  'REST APIs',
  'Git & GitHub',
  'Figma',
];

export const tickerItems: string[] = [
  'React',
  'TypeScript',
  'Next.js',
  'Tailwind CSS',
  'Framer Motion',
  'Node.js',
  'Redux Toolkit',
  'Vite',
  'Figma to Code',
  'REST APIs',
];
