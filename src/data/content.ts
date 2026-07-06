/**
 * Barrel for all site content. Each section's data lives in its own file:
 *   - site-wide values (nav, email, socials, siteUrl): ./site.ts
 *   - per-section copy and entries: ./sections/*.ts
 *   - section order / eyebrow numbering: ./sectionOrder.ts
 */
export * from './site';
export * from './sections/hero';
export * from './sections/about';
export * from './sections/skills';
export * from './sections/experience';
export * from './sections/projects';
export * from './sections/publications';
export * from './sections/recognition';
export * from './sections/contact';
