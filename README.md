# IELTSPro — Landing Page (React + Vite)

A modern, dark-themed landing page for an IELTS coaching product built with React, Vite and Tailwind. This repo contains reusable UI pieces (cards, marquee, morphing text, globe, particles, etc.) and small visual components used throughout the site.

## What you'll find here

- React + Vite app (functional components, hooks)
- Tailwind CSS for styling
- Small visual/interactive components: globe, morphing text, particles, marquee, neon cards, highlighter, number ticker, spinning text
- MagicUI registry configured (components can be installed on demand)

---

## Quick setup / Installation

These steps assume you have Node.js (16+) and npm installed.

1. Clone the repo and install dependencies

```powershell
git clone <your-repo-url> ; cd IELTS ; npm install
```

2. Start development server

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build
```

4. Preview production build locally

```powershell
npm run preview
```

Notes:
- This project uses Vite. If you prefer yarn or pnpm, you can run the equivalent commands (e.g. `yarn install` / `pnpm install`).

---

## Packages & libraries used

The core dependencies are listed in `package.json`. Notable libraries used in the UI components include:

- react, react-dom
- vite
- tailwindcss
- framer-motion / motion (for animations)
- cobe (used by the globe component)
- rough-notation (used by the highlighter component)
- lucide-react (icon library)
- class-variance-authority, clsx, tailwind-merge (utility helpers)

### MagicUI

This project is configured to use a MagicUI registry via `components.json` so you can pull components from the MagicUI component registry when needed.

components.json contains the MagicUI registry entry:

```json
"registries": {
  "@magicui": "https://magicui.design/r/{name}.json"
}
```

However, the current codebase doesn't import components directly from `@magicui` packages. Instead, the repository contains a number of handcrafted UI components in `src/components/ui/` (listed below). If you want to add additional MagicUI components, follow the install instructions in the section below.

---

## UI components included in this repo

The following UI components live in `src/components/ui/` (these are custom components used across the site):

- `globe.jsx` — interactive 3D globe (uses `cobe`)
- `highlighter.jsx` — text highlighter (uses `rough-notation`)
- `marquee.jsx` — marquee/scrolling container
- `morphing-text.jsx` — animated morphing headline
- `neon-gradient-card.jsx` — decorative neon-border card
- `number-ticker.jsx` — animated counting number (uses motion)
- `particles.jsx` — background particle canvas
- `spinning-text.jsx` — circular spinning text (motion)

If you added MagicUI components manually later, they will appear under the `src/components/ui` or `src/components` directories and can be registered in `components.json` for the shadcn CLI to manage.

---

## How to add MagicUI components (optional)

If you'd like to use components published through MagicUI, you can install and import them. There are two common ways:

1) Use the shadcn/cli or the project's component registry approach

- The project has a `components.json` with a `@magicui` registry entry. If you use the shadcn CLI or MagicUI tooling (if you have it) you can fetch components directly into the `src/components/ui/` folder.

2) Install a single MagicUI package manually (if the component is published as an npm package)

- Check MagicUI docs for the package name, then run:

```powershell
npm install <package-name>
```

- Import the component in your code:

```jsx
import { ComponentName } from '<package-name>'
```

- Note: Because MagicUI distributes many components in a registry format, you may prefer to fetch components into your local `src/components` directory rather than importing them from a package at runtime.

### Which MagicUI components are used

- At the time this README was created, there are no direct `@magicui/*` imports in the codebase. The project is ready to consume MagicUI components via the `components.json` registry, so you can add them on demand.

---

## Some sights from my website

A few screenshots from the landing page to give you a quick visual impression.

"Glow & Motion: small interactions that make the experience feel premium"

Below are the images expected in `public/screenshots/` (I can add the attached screenshots into this folder and enable the embedded images in the README if you want):

- `public/screenshots/hero.png` — Hero section with morphing title and circular band
- `public/screenshots/features.png` — Feature cards section
- `public/screenshots/mentors.png` — Mentor cards with glow
- `public/screenshots/testimonials.png` — Testimonials/accordion area
- `public/screenshots/gallery.png` — Decorative cubes and site visuals

Example Markdown to show them in the README (I'll enable these after you confirm I should import the images):

<!--
## Some sights from my website

![Hero](/public/screenshots/hero.png)

![Features](/public/screenshots/features.png)

![Mentors](/public/screenshots/mentors.png)

![Testimonials](/public/screenshots/testimonials.png)

![Gallery](/public/screenshots/gallery.png)
-->

---

## Development notes & tips

- Tailwind configuration files are present; run the dev server to see Tailwind's JIT in action.
- If you add MagicUI components fetched from the registry, keep `components.json` updated so other developers can re-run the fetch/import steps.
- This project is intentionally dependency-minimal: add UI packages only when you need the components.

---

If you'd like, I can now:

- Embed all attached screenshots into `public/screenshots/` and enable them in the README (I will save the five images from your attachments and update the README to show them).
- Or add only selected screenshots — tell me which ones.
