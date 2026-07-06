import type { ExperienceRole } from '../types';
import { sectionEyebrow } from '../sectionOrder';

export const experienceSection = {
  eyebrow: sectionEyebrow('experience', 'EXPERIENCE'),
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
