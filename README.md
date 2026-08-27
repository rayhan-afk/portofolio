# Portfolio — Rayhan Abduhuda

Static portfolio site. Plain HTML + a compiled Tailwind stylesheet, no framework and no build step at runtime.

## Structure

```
index.html                 markup (sections + modal shell)
assets/js/script.js        project data + card rendering + modal
assets/css/tailwind.src.css Tailwind source (theme colours live here)
assets/css/tailwind.css     compiled output — committed, do not edit by hand
assets/css/style.css        small hand-written extras (reveal animation, scrollbar)
assets/images/             original PNG/JPG screenshots
assets/images/webp/        compressed WebP actually used by the page
assets/og-image.png        social preview card (1200×630)
assets/favicon.svg
```

## Adding a project

Add one object to the `PROJECTS` array in `assets/js/script.js`. Cards are rendered from that array — there is no card markup to copy.

```js
{
  slug: 'my-project',            // unique id, used by data-project=""
  title: 'Project name',
  subtitle: 'Short qualifier',   // shown under the title on the card and dialog
  group: 'web',                  // 'web' | 'mobile' — decides which grid
  featured: false,               // true = shown only in the flagship section
  period: 'Apr 2026 — May 2026',
  role: 'Fullstack Developer',   // optional
  summary: 'One line for the card.',
  tech: ['Laravel', 'MySQL'],
  cover: { src: '...', w: 1600, h: 760 },   // null renders an initials cover
  images: [                                  // [] renders "no screenshots"
    { src: '...', w: 1600, h: 760, caption: 'Shown under the gallery' }
  ],
  description: 'Overview paragraph in the dialog.',
  highlights: ['What I built, one bullet each'],
  repo: null                     // null renders a "Private" chip, not a dead link
}
```

## Rebuilding the stylesheet

Any new Tailwind class needs a recompile (the class scanner reads `index.html` and `script.js`):

```bash
npm install
npm run build:css
```

## Compressing new screenshots

Images are served as WebP from `assets/images/webp/`. After dropping a new PNG into `assets/images/`, convert it (max width 1600, quality 80) and use the WebP path plus its real `width`/`height` in the markup or in `PROJECTS`.

## Still to do

- Drop the CV PDF at `assets/Rayhan-Abduhuda-CV.pdf` — the hero's "Download CV" button already points there.
- Update `<link rel="canonical">` and the `og:url` / `og:image` URLs in `index.html` if the site is deployed anywhere other than `rayhan-afk.github.io/portofolio/`.
- Fill in `repo:` for projects whose source becomes public.
