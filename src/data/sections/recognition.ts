import type { RecognitionGroup } from '../types';
import { sectionEyebrow } from '../sectionOrder';
import coloursAwardImage from '../../assets/awards/coloursAward.jpg';
import awsCloudTechnicalEssentialsImage from '../../assets/certifications/awsCloudTechnicalEssentials.jpeg';
import linuxFundamentalsImage from '../../assets/certifications/linuxFundamentals.jpeg';
import neuralNetworksAndDeepLearningImage from '../../assets/certifications/neuralNetworksAndDeepLearning.jpeg';
import irTeamVolunteerImage from '../../assets/volunteering/irTeamVolunteer.jpeg';
import financeAndLegalTeamVolunteerImage from '../../assets/volunteering/financeAndLegalTeamVolunteer.jpeg';

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
          date: 'JULY 2025',
          title: 'AWS Cloud Technical Essentials',
          org: 'Amazon Web Services · Coursera',
          desc: 'Core AWS services, deployment models, and architecture fundamentals for building cloud-based applications.',
          link: 'https://www.coursera.org/account/accomplishments/verify/8TVZK2JC6X90',
          image: awsCloudTechnicalEssentialsImage,
        },
        {
          date: 'AUG 2025',
          title: 'Linux Fundamentals',
          org: 'LearnQuest · Coursera',
          desc: 'Command-line proficiency, file systems, permissions, and shell scripting in Linux environments.',
          link: 'https://www.coursera.org/account/accomplishments/verify/8TBV8H0K96SY',
          image: linuxFundamentalsImage,
        },
        {
          date: 'DEC 2025',
          title: 'Neural Networks and Deep Learning',
          org: 'DeepLearning.AI · Coursera',
          desc: 'Foundations of neural networks, forward and backward propagation, and deep learning architectures.',
          link: 'https://www.coursera.org/account/accomplishments/verify/7GMIB6OIJ79G',
          image: neuralNetworksAndDeepLearningImage,
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
          date: 'FEB — JUL 2024',
          title: 'IR Team Member',
          org: 'AIESEC in Sri Lanka · Outgoing Global Volunteer',
          desc: 'Supported the IR and Matching team, coordinating international relations and outgoing volunteer placements.',
          image: irTeamVolunteerImage,
          imageVariant: 'landscape',
        },
        {
          date: 'FEB — JUL 2024',
          title: 'Finance and Legal Team Member',
          org: 'AIESEC in Sri Lanka · Outgoing Global Volunteer',
          desc: 'Handled financial reporting and legal compliance to support the outgoing volunteer program.',
          image: financeAndLegalTeamVolunteerImage,
          imageVariant: 'landscape',
        },
      ],
    },
  ] as RecognitionGroup[],
};
