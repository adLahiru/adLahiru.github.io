import type { HeroBadge } from '../types';

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
