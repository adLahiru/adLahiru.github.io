import type { Publication } from '../types';
import { sectionEyebrow } from '../sectionOrder';

// Hidden section — see src/data/sectionOrder.ts for how to enable it.
export const publicationsSection = {
  eyebrow: sectionEyebrow('publications', 'PUBLICATIONS'),
  heading: 'Research & writing',
  items: [
    {
      date: '2026',
      title: '[Placeholder] Publication Title Goes Here',
      authors: 'L. Dilshan, Co-Author Name',
      venue: 'Venue / Journal Name',
      link: '#',
    },
    {
      date: '2025',
      title: '[Placeholder] Second Publication Title',
      authors: 'L. Dilshan, Co-Author Name',
      venue: 'Venue / Journal Name',
      link: '#',
    },
  ] as Publication[],
};
