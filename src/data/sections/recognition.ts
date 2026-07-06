import type { RecognitionGroup } from '../types';
import { sectionEyebrow } from '../sectionOrder';
import coloursAwardImage from '../../assets/awards/coloursAward.jpg';

/**
 * To add a card: append an object with date/title/org/desc to the right
 * group's `items`. Numbers and monograms are derived automatically; add
 * `image` (import it from ../../assets/<group>/) and `imageVariant:
 * 'portrait' | 'landscape'` when you have a photo, `link` for a credential
 * URL, and `monogram` only to override the derived initials.
 */
export const recognitionSection = {
  eyebrow: sectionEyebrow('recognition', 'RECOGNITION'),
  heading: 'Recognition',
  groups: [
    {
      id: 'awards',
      heading: 'Awards & Achievements',
      layout: 'feature',
      defaultImageVariant: 'portrait',
      initialVisible: 4,
      items: [
        {
          date: 'JUNE 2023',
          title: "President's Scout Award",
          org: 'Sri Lanka Scouts Association',
          desc: 'The highest national honor for a Scout,\npresented by the President of Sri Lanka for exemplary leadership and service.',
        },
        {
          date: 'DEC 2025',
          title: 'Colors Award',
          org: 'Rahula College, Matara',
          desc: 'College Colours in recognition of outstanding performance and sustained dedication to Scouting.',
          image: coloursAwardImage,
        },
      ],
    },
    {
      id: 'certifications',
      heading: 'Certifications',
      layout: 'compact',
      defaultImageVariant: 'landscape',
      initialVisible: 3,
      items: [
        {
          date: '2025',
          title: '[Placeholder] Certification Name',
          org: 'Issuing Organization',
          desc: 'One-line description of what this certification covers.',
          link: '#',
        },
        {
          date: '2025',
          title: '[Placeholder] Second Certification',
          org: 'Issuing Organization',
          desc: 'One-line description of what this certification covers.',
        },
      ],
    },
    {
      id: 'volunteering',
      heading: 'Volunteering & Leadership',
      layout: 'feature',
      defaultImageVariant: 'portrait',
      initialVisible: 4,
      items: [
        {
          date: '2024 — PRESENT',
          title: '[Placeholder] Role or Initiative',
          org: 'Organization',
          desc: 'What you led or contributed, and the impact it had.',
        },
      ],
    },
  ] as RecognitionGroup[],
};
