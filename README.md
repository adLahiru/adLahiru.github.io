# Lahiru Dilshan — Portfolio

Personal portfolio site, built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. Deployed to GitHub Pages at [adlahiru.com](https://adlahiru.com).

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Content

All copy lives under [src/data/](src/data/) — edit those files to update site content without touching components:

- [src/data/site.ts](src/data/site.ts) — nav links, email, phone, socials, site URL
- [src/data/sections/](src/data/sections/) — one file per section (hero, about, skills, experience, projects, publications, recognition, contact)
- [src/data/sectionOrder.ts](src/data/sectionOrder.ts) — visible section order; eyebrow numbers ("01 — ABOUT") derive from it automatically

### Adding a card

Append one object to the right `items` array — e.g. a certification in [src/data/sections/recognition.ts](src/data/sections/recognition.ts):

```ts
{
  date: '2026',
  title: 'AWS Certified Machine Learning',
  org: 'Amazon Web Services',
  desc: 'What it covers.',
  link: 'https://credential-url',        // optional — renders "VIEW CREDENTIAL →"
  image: myImage,                        // optional — import from ../../assets/certifications/
  imageVariant: 'portrait',              // optional — overrides the group default
}
```

Card numbers and monogram tiles are derived automatically (see `src/lib/derive.ts`); set `monogram` only to override the initials. Each recognition group and the projects section support `initialVisible: n` — cards beyond `n` hide behind a "View more" button.

Images live in `src/assets/` by section: `profile/`, `education/`, `projects/`, `awards/`, `certifications/`, `volunteering/`. Entries without an image render a gradient monogram tile (`src/components/primitives/PlaceholderImage.tsx`).

The Publications section is built but hidden — to show it, add `'publications'` to `sectionOrder` and render `<Publications />` in `src/App.tsx`.

## SEO

- Meta tags, Open Graph/Twitter cards, and JSON-LD Person schema are in [index.html](index.html)
- `public/`: `CNAME` (adlahiru.com), `robots.txt`, `sitemap.xml`, `og-image.png` (1200×630 social preview)
- After content changes worth re-indexing, bump `<lastmod>` in `public/sitemap.xml`

## Deployment

Pushing to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site and publishes it via GitHub Pages. Repo Settings → Pages source must be set to "GitHub Actions".

Custom domain: `public/CNAME` carries `adlahiru.com` into every deploy; the domain must also be set under repo Settings → Pages → Custom domain, with DNS A records pointing at GitHub Pages.
