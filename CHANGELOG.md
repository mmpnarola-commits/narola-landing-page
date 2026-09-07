# Changelog

All notable changes to this project are documented in this file.

Format based on [Keep a Changelog](https://keepachangelog.com/). This project does not use
semantic versioning yet (pre-release landing page, no production deployment); entries are
grouped by task/milestone until the first production release.

No landing-page section is complete as of this file's latest entry. Do not read any entry
below as implying otherwise.

## [Unreleased]

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
