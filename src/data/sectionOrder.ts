export type SectionId =
  | 'about'
  | 'skills'
  | 'experience'
  | 'projects'
  | 'publications'
  | 'recognition'
  | 'contact';

/**
 * Single source of truth for the order of visible sections. Eyebrow numbers
 * ('01 — ABOUT', '02 — SKILLS', …) are derived from this list, so inserting
 * or reordering a section renumbers everything automatically.
 *
 * 'publications' is intentionally absent while the section is hidden. To show
 * it: add 'publications' here in the right position AND render <Publications />
 * in src/App.tsx. Until then its eyebrow renders 'XX — PUBLICATIONS' as a
 * reminder.
 */
export const sectionOrder = [
  'about',
  'skills',
  'experience',
  'projects',
  'recognition',
  'contact',
] as const satisfies readonly SectionId[];

export function sectionEyebrow(id: SectionId, label: string): string {
  const idx = (sectionOrder as readonly SectionId[]).indexOf(id);
  const num = idx === -1 ? 'XX' : String(idx + 1).padStart(2, '0');
  return `${num} — ${label}`;
}
