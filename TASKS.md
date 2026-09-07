# TASKS.md

Project task checklist for the Narola Infotech landing page.

Status values: `Not Started` · `In Progress` · `Completed` · `Blocked`

---

## Project Foundation

### T001 — Initialize Next.js project

**Status:** Completed
**Description:** Scaffold the Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 project
directly in the existing repository root, using npm, with a minimal placeholder home page.
**Notes:** Required upgrading the local Node.js install from v18.12.1 to v24.20.0 LTS (via
nvm) because Next.js 14/15/16 all require a newer Node minimum than was installed. See
[CHANGELOG.md](CHANGELOG.md) and [AI_WORK_LOG.md](AI_WORK_LOG.md) for full detail.

### T002 — Create project documentation

**Status:** Completed
**Description:** Create CLAUDE.md, TASKS.md, CHANGELOG.md, and AI_WORK_LOG.md to make the
project structured, traceable, and easy to maintain throughout AI-assisted development.
**Notes:** No landing-page UI is implemented in this task.

---

## Design / Content

### T003 — Analyze production website

**Status:** Not Started
**Description:** Structured review of https://www.narolainfotech.com/ covering visual style,
brand colors, typography, header, footer, hero, services, technologies, industries, buttons/
CTAs, layout patterns, and responsive behavior. (Initial pass already completed during the
pre-T001 analysis conversation — this task is for any deeper/follow-up review needed before
implementation of a specific section.)
**Notes:** Reference only — do not copy WordPress markup/code.

### T004 — Finalize visual direction

**Status:** Not Started
**Description:** Confirm final color tokens, typography scale, spacing system, and component
styling approach (Tailwind theme configuration) based on the brand analysis.

### T005 — Finalize content mapping

**Status:** Not Started
**Description:** Confirm the final copy/content for each landing-page section, sourced from
the production site or supplied by the user. No invented statistics, claims, or testimonials.

### T006 — Finalize assets

**Status:** Not Started
**Description:** Confirm and source final image/logo/icon assets (with confirmed rights to
use), including the Narola Infotech logo, hero imagery, and technology/industry icons.

---

## Layout / Sections

### T007 — Header

**Status:** Not Started
**Description:** Build the site header: logo, navigation, primary CTA, responsive/mobile nav.

### T008 — Hero section

**Status:** Not Started
**Description:** Build the hero section with heading, supporting copy, primary CTA, and
supporting visual content.

### T009 — Core Services section

**Status:** Not Started
**Description:** Build "Our Core Services, Backed by Expertise You Can Trust" section.

### T010 — Other Services section

**Status:** Not Started
**Description:** Build "Our Other Services" section.

### T011 — Technologies & Platforms section

**Status:** Not Started
**Description:** Build "Technologies & Platforms We Work With" section.

### T012 — Industries section

**Status:** Not Started
**Description:** Build "Industries We Specialize In" section.

### T013 — Footer

**Status:** Not Started
**Description:** Build the site footer: link columns, office/contact info, legal links.

### T014 — Assemble full page

**Status:** Not Started
**Description:** Compose all sections into the final `app/page.tsx` in the correct order.

---

## Quality

### T015 — Responsive design pass

**Status:** Not Started
**Description:** Verify and fix responsive behavior for every section at mobile, tablet, and
desktop breakpoints.

### T016 — Accessibility pass

**Status:** Not Started
**Description:** Audit semantic HTML, heading hierarchy, alt text, color contrast, keyboard
navigation, and focus states across the full page.

### T017 — SEO pass

**Status:** Not Started
**Description:** Finalize metadata (title/description/OG/Twitter cards), sitemap.xml,
robots.txt, and structured semantic markup.

### T018 — Performance pass

**Status:** Not Started
**Description:** Lighthouse/Core Web Vitals review; image optimization, font loading, bundle
size checks.

### T019 — Cross-browser testing

**Status:** Not Started
**Description:** Verify rendering and behavior across major browsers (Chrome, Firefox,
Safari, Edge).

### T020 — Final content review

**Status:** Not Started
**Description:** Final pass to confirm no invented claims/stats/testimonials, correct
contact/CTA destinations, and accurate copy before deployment.

---

## Deployment

### T021 — Production build verification

**Status:** Not Started
**Description:** Confirm `npm run build` (and static export, if applicable) succeeds cleanly
with no errors/warnings ahead of deployment.

### T022 — Hosting configuration

**Status:** Not Started
**Description:** Configure the chosen hosting provider/target for the landing page.
**Notes:** Hosting provider is not yet decided — see open questions in prior analysis.

### T023 — Subdomain configuration

**Status:** Not Started
**Description:** Confirm and configure the target subdomain of narolainfotech.com.

### T024 — DNS configuration

**Status:** Not Started
**Description:** Point the chosen subdomain's DNS records at the hosting target.

### T025 — SSL configuration

**Status:** Not Started
**Description:** Confirm SSL/TLS certificate provisioning for the subdomain.

### T026 — Production verification

**Status:** Not Started
**Description:** Post-deploy smoke test of the live landing page on the production subdomain.
