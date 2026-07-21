export type ImageVariant = 'landscape' | 'portrait';

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
  name: string;
  period: string;
  desc: string;
  tags: string[];
  /** Omit for client work with no public repo/site — hides the link row. */
  link?: string;
  /** Override; defaults to 'VIEW PROJECT →' — e.g. 'GO LIVE →' for a deployed site. */
  linkLabel?: string;
  /** Override; defaults to initials derived from `name`. */
  monogram?: string;
  image?: string;
  /** Override of the section's default image orientation. */
  imageVariant?: ImageVariant;
}

export interface RecognitionEntry {
  date: string;
  title: string;
  org: string;
  desc: string;
  /** e.g. certification verify URL — renders a "VIEW CREDENTIAL →" link. */
  link?: string;
  /** Override; defaults to initials derived from `title`. */
  monogram?: string;
  /** Enables the in-layout tile / lightbox; omit for a monogram placeholder. */
  image?: string;
  /** Override of the group's default image orientation. */
  imageVariant?: ImageVariant;
  /** Crop focus inside object-cover frames; defaults to center. */
  imagePosition?: 'top' | 'center' | 'bottom' | 'left' | 'right';
}

export interface RecognitionGroup {
  id: 'awards' | 'certifications' | 'volunteering';
  heading: string;
  /**
   * feature = wide horizontal cards (image left, copy right);
   * timeline = alternating center-spine layout with equal-height images;
   * mosaic = bento grid with portrait/landscape tiles;
   * grid = uniform landscape image grid.
   */
  layout: 'feature' | 'timeline' | 'mosaic' | 'grid';
  /** Default image orientation for feature/mosaic tiles. */
  defaultImageVariant?: ImageVariant;
  /**
   * 'role' (default) = entry.title is the bold heading, entry.org is the
   * subtitle, desc shown under the tile. 'org' = entry.org becomes the
   * heading, entry.title renders as a highlighted subtitle, and desc
   * moves to the lightbox caption.
   */
  emphasis?: 'role' | 'org';
  /** Cards shown before the "View more" button; omit to always show all. */
  initialVisible?: number;
  items: RecognitionEntry[];
}

export interface Publication {
  date: string;
  title: string;
  authors: string;
  venue: string;
  link: string;
}
