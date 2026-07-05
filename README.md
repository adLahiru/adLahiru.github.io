# Lahiru Dilshan — Portfolio

Personal portfolio site, built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. Deployed to GitHub Pages at [adLahiru.github.io](https://adLahiru.github.io).

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

All copy, skills, projects, and awards live in [src/data/content.ts](src/data/content.ts) — edit that file to update site content without touching components.

Project screenshots and award photos are currently placeholders (gradient tiles with monograms, see `src/components/primitives/PlaceholderImage.tsx`). To swap in a real image, add it under `src/assets/` and set the `image` field on the matching entry in `content.ts`.

## Deployment

Pushing to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site and publishes it via GitHub Pages. Repo Settings → Pages source must be set to "GitHub Actions".

To attach a custom domain later: add a `public/CNAME` file containing the domain, and set it under repo Settings → Pages → Custom domain.
