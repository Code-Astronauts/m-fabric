# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:4321)
npm run build     # Build for production (output: dist/)
npm run preview   # Preview production build locally
```

Adding shadcn components:
```bash
npx shadcn@latest add <component>   # e.g. npx shadcn@latest add button
```

## Stack

**Primary stack for all visual/UI work:**
- **Astro 5** — file-based routing, `.astro` components
- **React 19** — interactive components with `.tsx` extension
- **TypeScript** — strict mode via `astro/tsconfigs/strict`
- **Tailwind CSS v4** — utility classes, configured via `@tailwindcss/vite` (no `tailwind.config.js`)
- **shadcn/ui** — base UI component library (New York style, Neutral color, Lucide icons)

When creating visual UI — always use React (`.tsx`) + shadcn components + Tailwind classes. Use `.astro` files for page-level layout and routing only.

## Architecture

- **File-based routing**: `src/pages/` → routes. `src/pages/about.astro` becomes `/about`.
- **Layouts**: `src/layouts/Layout.astro` wraps pages via `<slot />`. Imports `globals.css`.
- **React components**: place in `src/components/` with `.tsx`. Use `client:load` (or other [client directives](https://docs.astro.build/en/reference/directives-reference/#client-directives)) when mounting in `.astro` files.
- **shadcn components**: generated into `src/components/ui/` via `npx shadcn@latest add`.
- **Utils**: `src/lib/utils.ts` — contains `cn()` helper (clsx + tailwind-merge).
- **Global styles**: `src/styles/globals.css` — Tailwind import + shadcn CSS variables (light/dark themes).
- **Path alias**: `@/*` maps to `src/*` (configured in `tsconfig.json`).

## shadcn conventions

- CSS variables are used for theming (defined in `globals.css` `:root` and `.dark`).
- Dark mode is class-based: add `class="dark"` to `<html>` to activate.
- Import components: `import { Button } from '@/components/ui/button'`
