import type { ImageVariant, Project } from '../types';
import { sectionEyebrow } from '../sectionOrder';
import talklessImage from '../../assets/projects/talkless.jpg';
import skyNestImage from '../../assets/projects/skyNest.jpg';
import chemicalDosingSystemImage from '../../assets/projects/chemicalDosingSystem.jpg';
import nanoProcessorImage from '../../assets/projects/nanoProcessor.jpg';
import merconImage from '../../assets/projects/mercon.jpg';
import oopsDatingAppImage from '../../assets/projects/oopsDatingApp.jpg';

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
      name: 'Oops Dating App',
      period: '[DATE TBD]',
      desc: 'UI design for a client dating app — onboarding flow, real-time chat, and video calling screens. UI design only; development handled by the client.',
      tags: ['UI/UX Design', 'Mobile App'],
      image: oopsDatingAppImage,
    },
    {
      name: 'Chemical Dosing System',
      period: '[DATE TBD]',
      desc: 'IoT-based chemical dosing system with real-time monitoring — ESP32 microcontroller, multiple tanks, pumps, flow rate and concentration sensors, automated dosing logic, and live LCD display.',
      tags: ['ESP32', 'IoT', 'Embedded Systems', 'Sensors'],
      link: 'https://github.com/adLahiru/chemical-dosing-system.git',
      image: chemicalDosingSystemImage,
    },
    {
      name: 'Nano Processor v1',
      period: '[DATE TBD]',
      desc: 'Custom processor design implemented on FPGA — built and verified on a Digilent Basys 3 (Xilinx Artix-7) board.',
      tags: ['FPGA', 'Verilog', 'Computer Architecture'],
      link: 'https://github.com/adLahiru/Nano_Processor_v1.git',
      image: nanoProcessorImage,
    },
    {
      name: 'MERCon 2026',
      period: 'AUG 2026',
      desc: 'Conference website for the 12th Moratuwa Engineering Research Conference, organized by the Engineering Research Unit at the University of Moratuwa — built and maintained as part of the Web Committee.',
      tags: ['Web Development', 'IEEE'],
      link: 'https://mercon.uom.lk/',
      linkLabel: 'GO LIVE →',
      image: merconImage,
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
