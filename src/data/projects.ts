export interface Project {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: 'smartburhanpur',
    index: '01',
    title: 'SmartBurhanpur',
    tagline: 'Smart city service portal',
    description:
      'A citizen-first digital portal for my hometown — civic complaints, ward-wise service dashboards, live city stats and announcements, wrapped in a fast, accessible and fully responsive interface.',
    image: '/images/project-smartburhanpur.png',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Firebase'],
    liveUrl: 'https://smartburhanpur.vercel.app',
    githubUrl: 'https://github.com/akanshashankpal/smartburhanpur',
    year: '2025',
  },
  {
    id: 'shifttype',
    index: '02',
    title: 'ShiftTpe',
    tagline: 'Shift scheduling, simplified',
    description:
      'A shift-scheduling app for small teams: a weekly timeline grid, drag-and-drop shift blocks, staff availability and conflict warnings — replacing chaotic chat rosters with one clean view.',
    image: '/images/project-shifttype.png',
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'DnD Kit', 'Node.js'],
    liveUrl: 'https://shifttpe.vercel.app',
    githubUrl: 'https://github.com/akanshashankpal/shifttpe',
    year: '2024',
  },
  {
    id: 'billing-management',
    index: '03',
    title: 'Billing Management',
    tagline: 'Invoices & revenue, under control',
    description:
      'An invoicing and revenue dashboard for freelancers and agencies — GST-ready invoices, payment status tracking, recurring billing and visual reports that make month-end painless.',
    image: '/images/project-billing.png',
    tech: ['React', 'TypeScript', 'Chart.js', 'Express', 'PostgreSQL'],
    liveUrl: 'https://billing-management.vercel.app',
    githubUrl: 'https://github.com/akanshashankpal/billing-management',
    year: '2024',
  },
];
