export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  summary: string;
  tags: string[];
  current?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    period: '2024 — Present',
    role: 'Freelance Frontend Developer',
    company: 'Independent · Remote',
    summary:
      'Partnering with founders, startups and local businesses to design and ship production-grade web products — from marketing sites to full dashboards. Recent work includes SmartBurhanpur and ShiftTpe.',
    tags: ['React', 'TypeScript', 'Next.js'],
    current: true,
  },
  {
    period: '2023 — 2024',
    role: 'Frontend Developer',
    company: 'PixelForge Studio · Indore',
    summary:
      'Built and maintained client-facing React applications and a shared design system. Cut first load by 42% on a flagship e-commerce build through code-splitting, lazy routes and image discipline.',
    tags: ['React', 'Redux', 'Tailwind CSS'],
  },
  {
    period: '2022 — 2023',
    role: 'Web Development Intern',
    company: 'TechNest Solutions · Remote',
    summary:
      'Turned Figma wireframes into responsive, pixel-accurate pages, fixed cross-browser UI bugs and learned what shipping real software with a team actually feels like.',
    tags: ['JavaScript', 'CSS3', 'Git'],
  },
];
