import type {
  NavLink,
  HeroBadge,
  EducationEntry,
  SkillGroup,
  ExperienceRole,
  Project,
  Award,
} from './types';
import uomLogo from '../assets/uom-logo.png';
import rahulaLogo from '../assets/rahula-college-logo.png';
import talklessImage from '../assets/talkless.png';
import coloursAwardImage from '../assets/awards/coloursAward.jpg';

export const nav: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const email = 'lahirudilshan.dev@gmail.com';
export const phone = '071 456 6635';
export const cvHref = '/cv/Lahiru-Dilshan-CV.pdf';

export const social = {
  linkedin: 'https://www.linkedin.com/in/lahiru-dilshan-83734b295/',
  github: 'https://github.com/adLahiru',
};

export const hero = {
  eyebrow: 'MACHINE LEARNING × SOFTWARE ENGINEERING',
  name: ['Lahiru', 'Dilshan'],
  bio: "Computer Science and Engineering undergraduate at the University of Moratuwa, focused on machine learning and software engineering, with experience in data processing, model experimentation, and project-based development.",
  ticker: [
    'PYTHON', 'PYTORCH', 'TENSORFLOW', 'REACT', 'NEXT.JS', 'FASTAPI',
    'SPRING BOOT', 'DOCKER', 'TERRAFORM', 'OPENCV', 'TYPESCRIPT',
    'FLUTTER', 'SQL', 'LINUX', 'GITHUB ACTIONS',
  ],
  badges: [
    { position: 'top-left' },
    { position: 'top-right' },
    { position: 'bottom-left' },
  ] as HeroBadge[],
};

export const about = {
  eyebrow: '01 — ABOUT',
  heading: 'Engineer first, experimenter always.',
  body: 'I focus on machine learning and software engineering — data processing, model experimentation, and project-based development. My foundation runs deep: system design, processor architecture, and hardware description languages, alongside a full-stack toolkit I use to take ideas from notebook to production.',
  education: [
    {
      period: '2024 — PRESENT',
      title: 'University of Moratuwa',
      detail: 'B.Sc. Engineering (Hons) in\nComputer Science & Engineering',
      logo: uomLogo,
    },
    {
      period: '2023',
      title: 'Rahula College, Matara',
      detail: 'G.C.E. A/L Physical Science\nResult: AAA & Island Rank 221',
      logo: rahulaLogo,
    },
  ] as EducationEntry[],
};

export const skills = {
  eyebrow: '02 — SKILLS',
  heading: 'The toolkit',
  description: 'Six lanes, one goal: models and products that hold up in the real world.',
  groups: [
    { num: '/01', title: 'Machine Learning', items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'OpenCV', 'Ultralytics YOLO'] },
    { num: '/02', title: 'Data Analysis', items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'] },
    { num: '/03', title: 'Languages', items: ['Python', 'Java', 'C/C++', 'SQL', 'TypeScript'] },
    { num: '/04', title: 'Frontend', items: ['React', 'Next.js', 'Flutter', 'Expo', 'Tailwind CSS'] },
    { num: '/05', title: 'Backend', items: ['FastAPI', 'Nest.js', 'Node.js', 'Spring Boot', 'Express.js'] },
    { num: '/06', title: 'DevOps & Tools', items: ['Git', 'Docker', 'AWS', 'GitHub Actions', 'Terraform', 'Linux'] },
  ] as SkillGroup[],
};

export const experienceSection = {
  eyebrow: '03 — EXPERIENCE',
  heading: "Where I've shipped",
  roles: [
    {
      title: 'Software Engineer',
      org: 'AIESEC Development Team, Sri Lanka',
      period: 'AUG 2025 — FEB 2026',
      bullets: [
        'Led a CRM database migration from a legacy schema to a redesigned structure, building automated scripting pipelines to transform and validate data with minimal downtime.',
        'Optimized high-traffic CRM queries through SQL refactoring and better indexing, cutting response times across the system.',
        'Implemented a new oGV workflow end-to-end, enhancing business logic and streamlining operations for better data accuracy.',
      ],
    },
  ] as ExperienceRole[],
};

export const projectsSection = {
  eyebrow: '04 — PROJECTS',
  heading: 'Selected work',
  allReposHref: '#',
  items: [
    {
      num: '01',
      name: 'NeuroFly',
      period: 'NOV 2025 — PRESENT',
      desc: 'Drone-based power-line inspection: a YOLOv8 model detects and classifies line faults, with a ground-station pipeline and a web dashboard for reviewing detections and generating reports.',
      tags: ['YOLOv8', 'Computer Vision', 'Drones'],
      link: '#',
      monogram: 'NF',
    },
    {
      num: '02',
      name: 'TalkLess',
      period: 'AUG — OCT 2025',
      desc: 'Cross-platform desktop soundboard and mic mixer in C++20 / Qt 6 — low-latency audio with RNNoise suppression, live transcription via OpenAI Realtime, OAuth 2.0 cloud sync, and full CI/CD.',
      tags: ['C++20', 'Qt 6', 'FFmpeg'],
      link: '#',
      monogram: 'TL',
      image: talklessImage,
    },
    {
      num: '03',
      name: 'SkyNest Hotels',
      period: 'AUG — OCT 2025',
      desc: 'Full-stack hotel management system covering reservations, room inventory, and billing — conflict-proof booking schema, role-based auth, deployed on AWS EC2 with CI/CD.',
      tags: ['Full-stack', 'AWS', 'CI/CD'],
      link: '#',
      monogram: 'SN',
    },
  ] as Project[],
};

export const awardsSection = {
  eyebrow: '05 — RECOGNITION',
  heading: 'Awards & leadership',
  items: [
    {
      date: 'JUNE 2023',
      title: "President's Scout Award",
      org: 'Sri Lanka Scouts Association',
      desc: 'The highest national honor for a Scout, presented by the President of Sri Lanka for exemplary leadership and service.',
      monogram: 'PS',
    },
    {
      date: 'DEC 2025',
      title: 'Colors Award',
      org: 'Rahula College, Matara',
      desc: 'College Colours in recognition of outstanding performance and sustained dedication to Scouting.',
      monogram: 'CA',
      image: coloursAwardImage,
    },
  ] as Award[],
};

export const contact = {
  eyebrow: '06 — CONTACT',
  heading: ["Let's build", 'something'],
  copyright: '© 2026 LAHIRU DILSHAN',
};
