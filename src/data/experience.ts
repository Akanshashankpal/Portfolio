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
    period: '2026 — Present',
    role: 'Freelance Frontend Developer',
    company: 'Independent · Remote',
    summary:
      'Partnering with founders, startups and local businesses to design and ship production-grade web products — from marketing sites to full dashboards. Recent work includes NearMeB2B.City.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
    current: true,
  },
  {
    period: '2024 — 2025',
    role: 'Frontend Developer Intern',
    company: 'Akrypt IT Solutions Pvt. Ltd. · Burhanpur',
    summary:
      'Developed and maintained web applications using React, JavaScript, and CSS. Collaborated with the development team to implement new features and improve the user experience.',
    tags: ['React', 'JavaScript', 'CSS3' ,'Tailwind CSS', 'TypeScript'],
  },
];
