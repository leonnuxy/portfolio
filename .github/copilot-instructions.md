# Copilot instructions

## Commands

- Install the locked dependencies with `npm ci` (CI uses Node.js 20).
- Run the Vite development server with `npm run dev`.
- Create the production bundle in `dist/` with `npm run build`.
- Preview the production bundle locally with `npm run preview`.
- Lint all JavaScript and JSX with `npm run lint`. To lint one file, run `npx eslint src/components/ComponentName.jsx`.
- Hosting is Cloudflare Pages (project `portfolio`, domain noelugwoke.com): pushes to `main` build with `npm run build` and deploy `dist/` automatically. There is no manual deploy script.
- There is currently no test runner or test suite, so there is no single-test command.

## Architecture

- This is a client-only React 19 single-page portfolio built by Vite. There is no router, backend, or application-level state layer.
- `src/main.jsx` loads the global CSS entry point and mounts `App` in `StrictMode`. `src/App.jsx` defines the page's section order and owns the persisted light/dark theme state.
- `src/content/profile.js` is the single source of truth for portfolio copy and repeated data. Section components import and render that data; update content there rather than embedding new profile copy in JSX.
- `src/components/` contains one presentational component per page section. `App.jsx` composes these sections into the page; navigation is implemented with fragment links to section IDs.
- Scroll reveals use the shared `Reveal` component and `useReveal` hook. The hook observes an element once, while `styles/components/sections.css` supplies the animation and disables it when reduced motion is requested.
- Styling is global CSS. `src/styles/style.css` is the import hub; `base/variables.css`, `base/sizing.css`, and `base/typography.css` define design tokens, while `components/sections.css` contains the page-section rules. `App.css` controls the root layout and skip link.
- Static files belong in `public/`. Build public-file URLs with `import.meta.env.BASE_URL` as the resume link does. Vite's base is `/` because the site is served from a custom domain, and `public/CNAME` preserves that domain for GitHub Pages.

## Repository conventions

- Keep section content data-driven: map arrays from `profile.js`, use stable content-derived keys, and keep optional fields conditional (for example case-study employers and side-project links).
- Keep header fragment targets synchronized with section IDs when adding, removing, or renaming sections.
- Use the existing CSS custom properties for colors, spacing, type, radii, and transitions instead of hard-coded values. Theme changes belong in the light/dark token overrides in `base/variables.css`.
- Preserve the theme contract: `App.jsx` reads `localStorage.theme`, falls back to `prefers-color-scheme`, and toggles `body.light-mode` / `body.dark-mode`; storage access is guarded because it may be unavailable.
- Use semantic section markup and preserve the existing accessibility behavior: labeled navigation, the `#main` skip target, accessible icon-only controls, visible keyboard focus, and reduced-motion handling.
- Reuse `Reveal` for reveal-on-scroll elements rather than creating another observer or animation system.
- Use `lucide-react` for utility icons. Keep the custom inline SVG diagrams in `CaseStudies.jsx` for project-specific system visuals.
- Follow the existing module shape: function components, default exports for section components, and named exports for content records.
