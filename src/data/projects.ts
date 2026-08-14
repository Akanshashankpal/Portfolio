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
    id: 'NearMeB2B.City',
    index: '01',
    title: 'NearMeB2B.City',
    tagline: 'Find . grow . connect',
    description:
      'A digital platform for businesses to find customers and grow their business. It is a platform for businesses to find customers and grow their business.',
    image: '/images/nearme.png',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://nearmeb2b.city/',
    githubUrl: 'https://github.com/PREMGAVLE/nearmeb2b.city',
    year: '2026',
  },
  {
    id: 'shifttpe',
    index: '02',
    title: 'Shifttpe',
    tagline: 'Swipe . Match . Earn',
    description:
      'Shifttpe is your gateway to flexible earning opportunities. Swipe tasks, match with the right ones, and start earning on your terms.',
    image: '/images/shiftt.png',
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'JavaScript', 'Node.js'],
    liveUrl: 'https://shifttpe.com/',
    githubUrl: '#',
    year: '2026',
  },
  {
    id: 'Billing-Management',
    index: '03',
    title: 'Billing Management',
    tagline: 'Manage . Monitor . Grow',
    description:
      'Billing Management is a platform for businesses to manage their billing and revenue. It is a platform for businesses to manage their billing and revenue.',
    image: '/images/billing.png',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    year: '2025',
  },
];
