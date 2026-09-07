# Changelog

All notable changes to this project are documented in this file.

Format based on [Keep a Changelog](https://keepachangelog.com/). This project does not use
semantic versioning yet (pre-release landing page, no production deployment); entries are
grouped by task/milestone until the first production release.

No landing-page section is complete as of this file's latest entry. Do not read any entry
below as implying otherwise.

## [Unreleased]

### 2026-09-07 — T006: Finalize assets
#### Added
- `public/images/logo/narola-infotech-logo.svg` — official brand logo, sourced directly
  from the production site (the company's own brand mark).
- `public/images/hero/hero-graphic.svg` — hand-authored abstract illustration in brand
  colors, used in place of photography for the hero section.
- `public/images/industries/*.svg` — 12 hand-authored, generic (non-trademarked) line icons,
  one per industry, in Interactive Blue.
- `logo`/`image` fields added to `src/content/siteConfig.ts`/`hero.ts`, and an `icon` field
  added to each entry in `src/content/industries.ts`, wiring the content layer to these new
  asset paths.

#### Notes
- Three sourcing decisions were confirmed with the human before creating anything: reuse the
  official logo SVG (vs. a text wordmark), use an abstract graphic instead of photography for
  the hero (vs. reusing the production photo or omitting imagery), and hand-author icons
  with zero new dependencies (vs. adding an icon-library package).
- **No technology icon/logo assets were created.** Recreating 14 trademarked technology
  logos (React, Angular, PHP, etc.) by hand from memory risked inaccurate, unauthorized-
  looking derivatives, and `technologies.ts` already fully identifies each technology by
  name — duplicating that as image assets would duplicate content across layers for no
  benefit. `technologies.ts` documents that the Technologies section (T011) should render
  these as text/wordmark badges instead.
- Total new asset weight: ~28KB across all files (all SVG, no raster images) — consistent
  with VISUAL_DIRECTION.md's performance principles.
- No components were built; content files were updated only to add asset-path fields, not
  new copy.

### 2026-09-07 — T005: Finalize content mapping
#### Added
- `src/content/hero.ts` — hero eyebrow, headline, and trust-point copy.
- `src/content/transformationIntro.ts` — "Accelerate Your Business Transformation..."
  section heading and body copy.
- `src/content/footer.ts` — the four office locations (North Carolina, Virginia, Surat,
  Nashik) with full addresses.

#### Changed
- Populated `src/content/navigation.ts` with the three simplified in-page anchor nav items
  (Services, Technologies, Industries) per VISUAL_DIRECTION.md §5.
- Populated `src/content/siteConfig.ts` with the finalized tagline, a real meta description,
  and the primary CTA label/href (see Notes).
- Populated `src/content/services.ts` with the 4 core service categories (each with a
  paraphrased description and sub-service labels) and the 6 "Other Services" labels.
- Populated `src/content/technologies.ts` with 4 confirmed technology categories (Front End,
  Back End, Mobile, CMS) and their technology names.
- Populated `src/content/industries.ts` with the full 12-industry list.

#### Notes
- All content sourced from `PRODUCTION_SITE_ANALYSIS.md`'s explicitly retained/factual
  content only. Multi-sentence copy (transformation intro, service descriptions) was
  paraphrased, not copied verbatim, per CLAUDE.md. None of the flagged unverified statistics,
  client names, testimonials, or review scores were reused.
- Open item: the primary CTA (`siteConfig.primaryCta.href`) currently points to a same-page
  footer anchor as a placeholder — this project has no contact page/form in v1 scope, and the
  final destination (mailto, an embedded form, or an external link) is still an open decision.
- Technology sub-categories with no confirmed tool names on the production site (Database,
  DevOps and Cloud, Project Management) were intentionally omitted rather than guessed.
- No components were built or modified — content/data files only.

### 2026-09-07 — T028: Global typography & base styling
#### Added
- Tailwind v4 `@theme` tokens in `src/app/globals.css` for the finalized brand palette
  (`--color-brand-blue`, `--color-interactive-blue`, `--color-ink`, `--color-slate`,
  `--color-accent-orange`, `--color-surface-muted`) and typography scale (`--text-h1`/
  `-h1-lg`, `--text-h2`/`-h2-lg`, `--text-h3`, `--text-h4`, `--text-body`, `--text-small`,
  `--text-button`, each with a paired line-height), per VISUAL_DIRECTION.md §2–3.
- Global base styles: body background (white) and text color (Dark Ink), default link
  color/underline behavior (Interactive Blue), a visible `:focus-visible` outline, and a
  `prefers-reduced-motion: reduce` safeguard collapsing animation/transition durations.
- Inter font wired up in `src/app/layout.tsx` via `next/font/google` (replacing the default
  `create-next-app` Geist/Geist Mono fonts), with `display: "swap"` and a generic
  system-font fallback chain.

#### Changed
- Removed the scaffolded `prefers-color-scheme: dark` auto-switch and its `--background`/
  `--foreground` variable indirection from `globals.css` — VISUAL_DIRECTION.md defines a
  single fixed light-mode design with no dark variant, so the untouched framework
  boilerplate was replaced with an explicit `color-scheme: light` and direct body colors.
- Removed the unused Geist Mono font (no monospace text exists anywhere on this project).

#### Notes
- Documentation-only change plus global CSS/font wiring — no Header, Hero, or section
  component was built or modified. `src/app/page.tsx` is unchanged.
- All new Tailwind utilities were verified to compile correctly (confirmed via a temporary,
  reverted test usage) — they don't appear in the production CSS yet because nothing
  references them until component tasks (T007+) do, which is expected Tailwind v4 tree-shaking.
- Validated with `tsc --noEmit`, `npm run lint`, and `npm run build` — all clean.

### 2026-09-07 — T004: Visual direction
#### Added
- `VISUAL_DIRECTION.md` — finalized design system covering brand colors, typography,
  layout/spacing, header/hero direction, per-section design language, reusable UI (cards,
  buttons, icons), imagery guidelines, responsive breakpoints, accessibility requirements,
  and performance principles, for future implementation tasks (T007+) to follow.

#### Notes
- Introduced one supporting UI color, Interactive Blue (`#0072D9`), alongside the existing
  brand palette — used only for button/link text where white or light text needs WCAG AA
  contrast, directly resolving the button-contrast failure (~3.65:1) computed in T003.
  Computed contrast ratios for every color pairing used are included in the document.
- No landing-page components (Header, Hero, section components, or `ui/` primitives) were
  created or modified. No code files were changed — documentation only.
- No new dependencies were added; no framework/architecture changes were made.

### 2026-09-07 — T003: Production website analysis
#### Added
- `PRODUCTION_SITE_ANALYSIS.md` — structured reference analysis of
  https://www.narolainfotech.com/, covering overall page structure, brand colors/typography,
  content inventory (with verified facts clearly separated from unverified production-site
  claims), navigation structure, technical stack observations, SEO/accessibility findings
  (including computed WCAG color-contrast ratios), and landing-page-specific recommendations.

#### Notes
- Documentation/reference only — no landing-page UI, components, or code was added.
- No WordPress markup, CSS, or code was copied; the production site was not modified.
- No statistics, awards, client names, or testimonials from the production site were adopted
  as claims for the new landing page — they are explicitly flagged as reference-only in the
  analysis document.

### 2026-09-07 — T002: Project documentation
#### Added
- `CLAUDE.md` — project purpose, technology, development/design/git rules, and AI workflow.
- `TASKS.md` — full project task checklist (T001–T026) covering foundation, design/content,
  layout sections, quality, and deployment phases.
- `CHANGELOG.md` — this file.
- `AI_WORK_LOG.md` — structured log of AI-assisted development effort.

### 2026-09-07 — T001: Next.js project initialization
#### Added
- Initialized Next.js project directly in the repository root (no nested project folder).
- Next.js `16.3.4` (App Router, `src/` directory layout, `@/*` import alias).
- React `19.2.8` / React DOM `19.2.8`.
- TypeScript `^5`, with strict mode enabled.
- Tailwind CSS `^4` (CSS-first configuration via `@tailwindcss/postcss`).
- ESLint `^9` with `eslint-config-next` (core-web-vitals + typescript configs).
- Minimal placeholder home page (`src/app/page.tsx`) and root layout
  (`src/app/layout.tsx`) — no landing-page sections implemented.

#### Changed
- Local Node.js version upgraded from `v18.12.1` to `v24.20.0` (LTS) via `nvm`, since
  Next.js 14/15/16 all require a Node.js minimum above what was previously installed.

#### Removed
- Default `create-next-app` placeholder assets (`next.svg`, `vercel.svg`, `globe.svg`,
  `file.svg`, `window.svg`) that are no longer referenced after simplifying the placeholder
  page.

#### Validated
- `npm run build` — succeeded, static prerender of `/` and `/_not-found`.
- `npm run lint` — passed with no errors or warnings.
- `npm run dev` — verified in-browser; placeholder page rendered correctly with no console
  errors.

#### Notes
- No landing-page sections (Header, Hero, Services, Technologies, Industries, Footer) were
  implemented in this milestone — foundation only.
- The existing production WordPress website was not modified.
