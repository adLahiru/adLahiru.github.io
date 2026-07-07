import type { ImageVariant, Project } from '../types';
import { sectionEyebrow } from '../sectionOrder';
import talklessImage from '../../assets/projects/talkless.jpg';
import skyNestImage from '../../assets/projects/skyNest.jpg';

export const projectsSection = {
  eyebrow: sectionEyebrow('projects', 'PROJECTS'),
  heading: 'Selected work',
  allReposHref: '#',
  defaultImageVariant: 'landscape' as ImageVariant,
  /** Cards shown before the "View more" button; omit to always show all. */
  initialVisible: undefined as number | undefined,
  items: [
    {
      name: 'SkyNest Hotels',
      period: 'AUG — OCT 2025',
      desc: 'Full-stack hotel management system covering reservations, room inventory, and billing — conflict-proof booking schema, role-based auth, deployed on AWS EC2 with CI/CD.',
      tags: ['Full-stack', 'AWS', 'CI/CD'],
      link: 'https://github.com/adLahiru/SkyNest_Hotels.git',
      image: skyNestImage,
    },
    {
      name: 'TalkLess',
      period: 'AUG — OCT 2025',
      desc: 'Cross-platform desktop soundboard and mic mixer in C++20 / Qt 6 — low-latency audio with RNNoise suppression, live transcription via OpenAI Realtime, OAuth 2.0 cloud sync, and full CI/CD.',
      tags: ['C++20', 'Qt 6', 'FFmpeg'],
      link: '#',
      image: talklessImage,
    },
    {
      name: 'NeuroFly',
      period: 'NOV 2025 — PRESENT',
      desc: 'Drone-based power-line inspection: a YOLOv8 model detects and classifies line faults, with a ground-station pipeline and a web dashboard for reviewing detections and generating reports.',
      tags: ['YOLOv8', 'Computer Vision', 'Drones'],
      link: '#',
    },
    
    
  ] as Project[],
};
