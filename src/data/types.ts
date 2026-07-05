export interface NavLink {
  label: string;
  href: string;
}

export interface HeroBadge {
  position: 'top-left' | 'top-right' | 'bottom-left';
}

export interface EducationEntry {
  period: string;
  title: string;
  detail: string;
  logo?: string;
}

export interface SkillGroup {
  num: string;
  title: string;
  items: string[];
}

export interface ExperienceRole {
  title: string;
  org: string;
  period: string;
  bullets: string[];
}

export interface Project {
  num: string;
  name: string;
  period: string;
  desc: string;
  tags: string[];
  link: string;
  monogram: string;
  image?: string;
}

export interface Award {
  date: string;
  title: string;
  org: string;
  desc: string;
  monogram: string;
  image?: string;
}
