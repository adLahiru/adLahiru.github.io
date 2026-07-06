import type { SkillGroup } from '../types';
import { sectionEyebrow } from '../sectionOrder';

export const skills = {
  eyebrow: sectionEyebrow('skills', 'SKILLS'),
  heading: 'The toolkit',
  description: 'Six lanes, one goal: models and products that hold up in the real world.',
  groups: [
    { title: 'Machine Learning', items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'OpenCV', 'Ultralytics YOLO'] },
    { title: 'Data Analysis', items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'] },
    { title: 'Languages', items: ['Python', 'Java', 'C/C++', 'SQL', 'TypeScript'] },
    { title: 'Frontend', items: ['React', 'Next.js', 'Flutter', 'Expo', 'Tailwind CSS'] },
    { title: 'Backend', items: ['FastAPI', 'Nest.js', 'Node.js', 'Spring Boot', 'Express.js'] },
    { title: 'DevOps & Tools', items: ['Git', 'Docker', 'AWS', 'GitHub Actions', 'Terraform', 'Linux'] },
  ] as SkillGroup[],
};
