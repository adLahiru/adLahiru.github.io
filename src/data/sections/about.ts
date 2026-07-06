import type { EducationEntry } from '../types';
import { sectionEyebrow } from '../sectionOrder';
import uomLogo from '../../assets/education/uom-logo.png';
import rahulaLogo from '../../assets/education/rahula-college-logo.png';

export const about = {
  eyebrow: sectionEyebrow('about', 'ABOUT'),
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
