import type { RecognitionGroup } from '../types';
import { sectionEyebrow } from '../sectionOrder';
import coloursAwardImage from '../../assets/awards/coloursAward.jpg';
import presidentScoutAwardImage from '../../assets/awards/presidentScoutAward.jpg';
import aithonAchievementImage from '../../assets/awards/aithonAchievement.jpg';
import awsCloudTechnicalEssentialsImage from '../../assets/certifications/awsCloudTechnicalEssentials.jpeg';
import linuxFundamentalsImage from '../../assets/certifications/linuxFundamentals.jpeg';
import neuralNetworksAndDeepLearningImage from '../../assets/certifications/neuralNetworksAndDeepLearning.jpeg';
import kaggleIntroToMachineLearningImage from '../../assets/certifications/kaggleIntroToMachineLearning.jpg';
import kagglePandasImage from '../../assets/certifications/kagglePandas.jpg';
import kaggleDataCleaningImage from '../../assets/certifications/kaggleDataCleaning.jpg';
import kaggleFeatureEngineeringImage from '../../assets/certifications/kaggleFeatureEngineering.jpg';
import awsAcademyCloudFoundationsImage from '../../assets/certifications/awsAcademyCloudFoundations.jpg';
import irTeamVolunteerImage from '../../assets/volunteering/irTeamVolunteer.jpeg';
import financeAndLegalTeamVolunteerImage from '../../assets/volunteering/financeAndLegalTeamVolunteer.jpeg';
import moraForesightFinanceCommitteeImage from '../../assets/volunteering/moraForesightFinanceCommittee.png';
import hitTheGroundImage from '../../assets/volunteering/hitTheGround.png';
import merconProgramCommitteeImage from '../../assets/volunteering/merconProgramCommittee.png';

/**
 * To add a card: append an object with date/title/org/desc to the right
 * group's `items`. Add `image` (import from ../../assets/<group>/) and
 * `imageVariant` ('portrait' | 'landscape') for mosaic framing; omit
 * `image` for a monogram tile. `link` renders a credential URL.
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
          image: presidentScoutAwardImage,
          imageVariant: 'portrait',
        },
        {
          date: 'DEC 2025',
          title: 'Colors Award',
          org: 'Rahula College, Matara',
          desc: 'College Colours in recognition of outstanding performance and sustained dedication to Scouting.',
          image: coloursAwardImage,
          imageVariant: 'portrait',
        },
        {
          date: '2026',
          title: 'Hemas AITHON 2026 — Elite 10',
          org: 'Hemas Group · Enterprise AI Innovation Challenge',
          desc: 'Advanced to the MVP Development Phase with Team CritiCo, recognized among the Elite 10 from over 60 competing teams.',
          image: aithonAchievementImage,
          imageVariant: 'portrait',
        },
      ],
    },
    {
      id: 'certifications',
      heading: 'Certifications',
      layout: 'grid',
      emphasis: 'org',
      initialVisible: 6,
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
        {
          date: 'FEB 2026',
          title: 'Intro to Machine Learning',
          org: 'Kaggle',
          desc: 'Core machine learning concepts, model building, and validation fundamentals.',
          image: kaggleIntroToMachineLearningImage,
        },
        {
          date: 'FEB 2026',
          title: 'Pandas',
          org: 'Kaggle',
          desc: 'Data manipulation and analysis using the Pandas library.',
          image: kagglePandasImage,
        },
        {
          date: 'FEB 2026',
          title: 'Data Cleaning',
          org: 'Kaggle',
          desc: 'Techniques for handling missing values, scaling, and inconsistent data entries.',
          image: kaggleDataCleaningImage,
        },
        {
          date: 'FEB 2026',
          title: 'Feature Engineering',
          org: 'Kaggle',
          desc: 'Techniques for creating and selecting features to improve model performance.',
          image: kaggleFeatureEngineeringImage,
        },
        {
          date: 'FEB 2026',
          title: 'AWS Academy Graduate — Cloud Foundations',
          org: 'AWS Academy',
          desc: 'Training badge covering core AWS services and cloud foundations, 20 course hours.',
          link: 'https://www.credly.com/go/PdNe4dyT',
          image: awsAcademyCloudFoundationsImage,
        },
      ],
    },
    {
      id: 'volunteering',
      heading: 'Volunteering & Leadership',
      layout: 'timeline',
      emphasis: 'org',
      initialVisible: 5,
      items: [
        {
          date: 'FEB — JUL 2024',
          title: 'IR Panelist',
          org: 'AIESEC in Colombo South · oGV',
          desc: 'As an IR Panelist, I coordinated with partner organizations across different countries to identify and secure global opportunities. I arranged and facilitated international meetings, gathered key data from partners, and maintained organized documentation to support decision-making and opportunity tracking.',
          image: irTeamVolunteerImage,
          imageVariant: 'portrait',
        },
        {
          date: 'FEB — JUL 2024',
          title: 'Finance and Legal Team Member',
          org: 'AIESEC in Colombo South · oGV',
          desc: 'As a Finance and Legal Team Member, I reviewed ongoing organizational budgets to catch discrepancies and ensure financial accuracy, while actively supporting Organizing Committee treasurers with budget planning and overall financial management for various projects',
          image: financeAndLegalTeamVolunteerImage,
          imageVariant: 'portrait',
        },
        {
          date: '2024',
          title: 'Finance Committee Member',
          org: 'IEEE Student Branch · Mora Foresight',
          desc: 'As a Finance Committee Member for Mora Foresight, I helped manage a project budget exceeding 1.5 million. I reached out to companies for sponsorships, successfully securing over 200,000 in funding, contributing significantly to the event\'s financial success.',
          image: moraForesightFinanceCommitteeImage,
          imageVariant: 'portrait',
          imagePosition: 'top',
        },
        {
          date: '2025',
          title: 'Program Committee Member',
          org: '"Hit the Ground"',
          desc: 'As a Program Committee Member and Ground Coordinator, We planned match flow, agendas, and rules while managing schedules and on-ground coordination for one of the grounds. This hands-on role required constant attention, clear communication, and strong teamwork to ensure smooth event execution.',
          image: hitTheGroundImage,
          imageVariant: 'portrait',
          imagePosition: 'center',
        },
        {
          date: '2024',
          title: 'Program Committee Member',
          org: 'IEEE · MERCon',
          desc: 'As a Program Committee Member at IEEE MERCon, I supported judges during keynote sessions by providing essential stationery and materials. I also monitored session timing closely, helping ensure smooth transitions and adherence to the event schedule.',
          image: merconProgramCommitteeImage,
          imageVariant: 'portrait',
          imagePosition: 'center',
        },
        // {
        //   date: '[DATE TBD]',
        //   title: 'Web Committee Member',
        //   org: 'IEEE · MERCon',
        //   desc: 'Returned for a second MERCon volunteering stint, this time contributing to the conference website.',
        // },
        {
          date: '[DATE TBD]',
          title: 'Program Committee Member',
          org: 'Mora Extreme',
          desc: 'Contributed as one of the question setters for the Mora Extreme competition, creating problem statements and test cases and uploading them to HackerRank to ensure smooth and accurate competition execution.',
        },
        {
          date: '2026',
          title: 'Logistics Committee Lead',
          org: 'SLIoT Challenge 2026',
          desc: 'Led logistics operations for the national IoT challenge.',
        },
        {
          date: '2026',
          title: 'Logistics Committee Member',
          org: 'IESL Robogames 2026 · Institution of Engineers Sri Lanka',
          desc: 'Supported logistics operations for the national robotics competition.',
        },
      ],
    },
  ] as RecognitionGroup[],
};
