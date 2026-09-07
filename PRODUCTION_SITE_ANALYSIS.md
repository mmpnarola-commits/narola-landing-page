# Production Site Analysis

**Source:** https://www.narolainfotech.com/ (homepage, plus header/footer navigation targets)
**Date analyzed:** 2026-09-07
**Method:** Manual browser inspection (rendered DOM, computed styles, network/resource
timing, page source) of the live production site. No WordPress code, theme files, or
database content was accessed or copied — everything below was observed the same way any
site visitor's browser would see it.

**Purpose:** Reference for building the new, independent Narola Infotech landing page. This
file is the design/content reference for later tasks (T004 onward) so the analysis doesn't
need to be repeated. Per [CLAUDE.md](CLAUDE.md), the production site is a *reference only* —
no WordPress markup, CSS, or code is to be copied, and the WordPress site itself is never
modified.

**How to read this document:** every claim below is either marked as **Observed** (directly
verified from the live site) or **Assumption/Inference** (a reasonable inference that was
not directly confirmed). Do not treat an Assumption as fact.

---

## 1. Overall Structure

**Observed** — Homepage section order, top to bottom:

1. Header (fixed/sticky navigation)
2. Hero — heading with rotating industry keyword, trust checkmarks, CTA, review badges, team photo
3. "Trusted By 1500+ Happy Clients" — client/partner logo strip (CGI, L&T, TVS Next, Biocon, Infosys, etc.)
4. "Accelerate Your Business Transformation with Custom Software Solutions" — intro paragraph section
5. "Our Core Services, Backed by Expertise You Can Trust" — 4 core service category cards
6. "Our Other Services" — secondary services list/icon grid
7. "Technologies & Platforms We Work With" — categorized technology logo grid
8. "Industries We Specialize In" — 12-industry grid
9. "Check Out the Successful Solutions We've Built" — filterable case studies (by industry/service/region) with metric callouts
10. "Why Choose Us as Your Development Partner?" — 8 differentiator cards + client testimonials carousel
11. "Know About Our Client's Experience" — testimonial callout
12. "How We Deliver Excellence" — methodology/engagement-model teaser
13. Stat counters (20+ years, 350+ professionals, 3000+ projects, 50+ countries)
14. "Message From CEO" — CEO quote block
15. "Read Our Recent Blogs" — blog teaser cards
16. "Awards" section
17. Footer

**Observed** — Header/navigation structure: single fixed header, logo left, mega-menu style
top nav (see §4 Navigation), search icon, "CONTACT" button. Collapses to a hamburger icon
below the tablet breakpoint (confirmed at 375px width).

**Observed** — Career-related content: **not present as a homepage section.** Career
information lives entirely on a separate `/careers/` page, linked only from top navigation
("CAREER" and "Job Opportunities"). The homepage itself has no careers teaser.

**Observed** — Company/about content on the homepage is limited to the "Message From CEO"
quote block and the stat counters; the fuller "about" narrative (company story, team, culture)
lives on separate pages (`/our-story/`, `/our-team/`, `/life-narola/`), linked from the
"COMPANY" nav menu.

**Observed** — Contact/CTA areas: every primary CTA on the homepage ("CONSULT NAROLA" in the
hero, "Schedule A Call" / "Schedule a Developer Interview" elsewhere, the header "CONTACT"
button, and the footer's "Schedule A Call" banner) links to the same destination:
`https://www.narolainfotech.com/contact-us/`. There is no on-page/embedded contact form on
the homepage itself — the homepage's only `<form>` element is the blog search box.

**Observed** — Footer structure: link columns (Services, Technologies, Resources), a "Global
Presence" block (North Carolina and Virginia offices; Surat and Nashik development centers,
with full addresses), copyright line, and Privacy Policy / Terms & Conditions / Sitemap links.

---

## 2. Visual Design

**Observed** — Brand colors (from live CSS custom properties):

| Token | Hex | Use |
|---|---|---|
| `--main-blue-color` | `#0084FF` | Primary brand blue — CTAs, links, accents |
| `--black-color` | `#192734` | Headings, primary text |
| `--grey-color` | `#4C5A67` | Body copy, secondary text |
| `--orange-color` | `#E9852A` | Accent highlight (rotating hero keyword, small highlights) |
| `--white-color` | `#FFFFFF` | Backgrounds |
| (footer background, not a named token) | `#F6F7FA` | Light section backgrounds, footer |

Note: the page also loads generic WordPress/Gutenberg preset palette variables
(`--wp--preset--color--*`, e.g. purple, pink, cyan) — these are WordPress theme defaults, not
part of the intentional brand palette, and were excluded from the table above.

**Observed** — Typography: Google Font **Inter**, weights 100–900, loaded via
`fonts.googleapis.com`, fallback `sans-serif`. Single type family across the whole site (no
separate display/serif font). Representative computed sizes:
- H1: 40px / weight 700 / line-height 58px
- H2: 30px / weight 700 / line-height 36px
- Body paragraph: 16–22px / weight 400–600

**Assumption/Inference** — Heading *size* hierarchy is consistent (H1 > H2 > body), but the
*semantic* heading hierarchy is not strictly consistent — see §6.

**Observed** — Buttons: primary CTA style is solid `#0084FF` background, white text, bold
(weight 600), `border-radius: 6px`, generous padding (~18px), no CSS `text-transform`
(the visual all-caps comes from the button label text itself being typed in caps, e.g.
"CONSULT NAROLA"). A bordered/outline variant is used for the header "CONTACT" button.

**Observed** — Cards: service, industry, and case-study cards use soft shadows and rounded
corners over Bootstrap-grid layouts, with generous internal padding.

**Observed** — Header behavior: `position: fixed`, white background, ~99px tall at desktop
width, stays pinned while scrolling.

**Observed** (from a 375px-wide render) — Mobile behavior: header collapses to a hamburger
icon; hero image and CTA go full-width/stacked single-column; the rotating hero keyword text
is present but not yet re-flowed at the animation frame captured (cosmetic transition
artifact, not a bug worth replicating).

**Assumption/Inference** — Responsive breakpoints: the site loads Bootstrap 5.0.2's JS bundle
(see §5), so it almost certainly follows Bootstrap 5's standard grid breakpoints (`sm` 576px,
`md` 768px, `lg` 992px, `xl` 1200px, `xxl` 1400px). This was not verified pixel-by-pixel at
every breakpoint — only the desktop (~1280px) and mobile (375px) extremes were directly
observed.

**Observed** — General spacing/layout pattern: generous vertical section padding (Bootstrap
utility classes suggest roughly 75px+ per section), consistent container max-widths, cards
laid out on a standard 12-column Bootstrap grid.

---

## 3. Content

**Observed, factual, reusable as reference** (site's own stated positioning/services — not
independently verified by us, but this is the company's own public claim about itself, not
something we are inventing):
- Tagline: "Digitalizing Businesses Globally for Startups, SMEs & Enterprises Since 2005"
- Core service categories: Custom Software Development, Software Product Engineering, Staff
  Augmentation, Ecommerce Development — each with a short description and a sub-service list
- Other services: QA & Testing, Support & Maintenance, Cloud Services, DevOps, AI & ML,
  Software Modernization
- Technology categories: Front End, Back End, Mobile, CMS, Database, DevOps and Cloud,
  Project Management (specific tech names/logos listed in each)
- 12 stated industries (Ecommerce & Retail, Real Estate, Fintech, Healthcare, Travel &
  Hospitality, Education, Media & Entertainment, Sports, Fitness & Wellness, Transport &
  Logistics, Lifestyle, Nonprofits)
- Office locations: North Carolina & Virginia (US offices), Surat & Nashik (India
  development centers) — full addresses are on the live site's footer

**Explicitly flagged — do NOT reuse without independent confirmation, per
[CLAUDE.md](CLAUDE.md)'s "do not invent claims" rule:** statistics ("1500+ happy clients",
"3000+ successful projects", "20+ years", "350+ professionals", "50+ countries", "13+
awards"), named client case studies (TagSom, Biocon, Epal) and their metrics, named client
logos (CGI, L&T, TVS Next, Infosys, Biocon), third-party review scores (Clutch 4.9, Google
4.3, Glassdoor 4.2), and all named client testimonials. These are the production site's own
claims about itself. **We have not independently verified any of them**, and per project
rules we must not fabricate, restate as our own, or imply endorsement of similar claims on
the new landing page without the user explicitly supplying/approving that exact content.

**Observed** — No large blocks of long-form copyrighted prose exist on the homepage; most
copy is short (headings, service names, 1–3 sentence descriptions), which is low-risk to
paraphrase/adapt. Testimonial quotes are the one place with longer verbatim third-party text
and should not be reproduced.

---

## 4. Navigation

**Observed** — Full top navigation structure (mega-menu):

| Top-level | Sub-items |
|---|---|
| **Services** | Custom Software Development, Web Application Development, Mobile Application Development, QA & Testing, Support & Maintenance, Staff Augmentation, Cloud, DevOps, Artificial Intelligence & Machine Learning |
| **Industries** | Ecommerce, Fintech, Travel & Hospitality, Real Estate, "And Beyond" (catch-all link) |
| **Technologies** | AngularJS, ReactJS, WordPress, Laravel, CodeIgniter, PHP, .NET, ROR, JAVA, NodeJS, Android, iOS, Flutter, React Native |
| **Career** | (direct link to `/careers/`) |
| **Company** | Our Story, Our People, Our Culture, Case Studies, Blogs, Job Opportunities, Become a Partner |
| **Contact** | (direct link to `/contact-us/`) |

Note: the top-nav "Industries" list (5 items) is a trimmed subset of the homepage's own
"Industries We Specialize In" section (12 items) — the nav shows only headline industries
plus a catch-all "And Beyond" link.

**Recommendation input** — for a single-page landing page (no sub-pages), the equivalent
"navigation" is realistically just in-page anchor links to our own sections (Services,
Technologies, Industries) plus the primary CTA — there is no need to replicate the full
mega-menu or link out to WordPress sub-pages, since this project is intentionally decoupled
from the WordPress site (see [CLAUDE.md](CLAUDE.md)).

---

## 5. Technical Observations

**Observed** — Platform: WordPress (confirmed via `<meta name="generator" content="WordPress
7.1">`), custom theme (`wp-content/themes/narola-infotech/`), not a page-builder-generated
markup pattern (no Elementor classes observed) — appears to be a hand-coded custom theme.

**Observed** — Frontend libraries/stack in use on production:
- jQuery 3.5.1
- Bootstrap 5.0.2 (JS bundle + implied grid/utility CSS)
- Popper.js
- jquery.mixitup (powers the filterable case-studies grid)
- OwlCarousel (4 carousel instances detected — likely client-logo strip, testimonials,
  case studies, and/or blog cards)
- Contact Form 7 (WordPress plugin, used on the `/contact-us/` page, not the homepage)
- Font Awesome 5.15.3 (icon font)

**Observed** — Third-party scripts loaded: Google Tag Manager, Google Analytics, Google Ads
conversion tracking, Microsoft Clarity (session recording/heatmaps), LinkedIn Insight Tag,
Tawk.to (live chat widget). None of these are relevant to replicate on the new landing page
unless the user explicitly requests equivalent analytics — see TASKS.md's open question on
analytics.

**Observed** — Images: 130+ `<img>` elements on the homepage alone (194 total network
resource requests), and none of the sampled/checked images use `loading="lazy"` — all are
eagerly loaded. This is a real performance opportunity for the new build (Next.js's `<Image>`
component lazy-loads and optimizes by default).

**Observed** — Page load timing (single measurement, this session, not a statistically
robust benchmark): `DOMContentLoaded` ~2.96s, full `load` event ~4.0s. Total transfer size
could not be reliably measured (many resources returned cached/zero transfer size), so no
total-page-weight figure is reported — but the sheer request count (194) and image count
(130+) indicate a heavy page by modern standards.

**Assumption/Inference** — Carousel/slider usage: OwlCarousel is used for looping content
(logo strips, testimonials); the hero's rotating industry keyword appears to be a lightweight
custom JS/CSS text-rotator (part of `custom_js.js`), not a full carousel library.

---

## 6. SEO / Accessibility Observations

**Observed** — Homepage `<title>`: "Agile Software Development Company USA | Top 1%
Developers"
**Observed** — Meta description: "US-based software development company. 3000+ Successful
projects 1500+ Global clients Your Trusted Partner for Custom Web & Mobile application
development" (contains the same unverified stats flagged in §3 — do not reuse verbatim if it
implies claims we haven't confirmed)
**Observed** — `<html lang="en">` set correctly. Canonical URL and Open Graph tags (title,
description, url, site_name, locale) are present.

**Observed — heading hierarchy issues** worth avoiding in the new build:
- Two duplicate `<h2>` "Trusted By 1500+ Happy Clients..." elements exist in the DOM
  (likely a duplicated desktop/mobile markup pattern or a carousel-loop artifact).
- Some section headings skip levels or are inconsistently sized relative to their visual
  weight — e.g. "Technologies & Platforms We Work With" is marked as `<h3>` while other
  section headings of equal visual prominence are `<h2>`.
- Testimonial names appear twice in the heading list — consistent with OwlCarousel's
  common pattern of duplicating slide markup for infinite-loop scrolling; this duplicates
  heading-level content for screen reader users.
- **Recommendation:** the new landing page should use one clean, strictly-nested heading
  outline (single `<h1>`, section headings as `<h2>`, sub-content as `<h3>`), with no
  duplicated headings from carousel/looping implementations.

**Observed — image alt text:** 0 of the sampled/counted images were missing `alt` text —
this is a genuinely good existing practice worth matching (all images checked had
descriptive or at-least-present alt attributes, e.g. "Narola Infotech Logo", "Biocon logo").

**Observed — semantic landmarks:** exactly one `<header>`, one `<nav>`, one `<footer>`, and
14 `<section>` elements — but **zero `<main>` elements** and no skip-to-content link. This is
a real accessibility gap: screen reader users and keyboard users have no way to jump past the
header/nav to the main content. **Recommendation:** the new landing page must include a
`<main>` landmark and should include a skip-to-content link.

**Computed — color contrast** (WCAG 2.1 relative-luminance formula, computed from the hex
values in §2, not an assumption):
- Body text `#4C5A67` on white background → contrast ratio ≈ **7.1:1** — passes WCAG AA
  (4.5:1) comfortably and is close to AAA (7:1) for normal text. No change needed here.
- Primary button text (white on `#0084FF` button background) → contrast ratio ≈ **3.65:1**
  — this **fails** WCAG AA's 4.5:1 threshold for normal-size text. It does clear the 3:1
  minimum for large text (≥18.66px bold / 24px regular) and for non-text UI component
  contrast, and the button text observed (16px, bold, all-caps) sits right at that boundary
  depending on exact rendered size. **Recommendation:** for the new landing page, either
  darken the primary blue slightly for button backgrounds (a small shift, e.g. toward a
  `#0072D9`-range blue, would clear 4.5:1while staying clearly "the same brand blue"), or
  ensure button label text is unambiguously large/bold enough to qualify for the large-text
  exception. This should be finalized in T004 (visual direction) with an explicit contrast
  check on whatever exact shade is chosen.

**Observed — performance-related concerns that could affect the new build** (as
context/contrast, not as a target to replicate): heavy image count with no lazy-loading,
194 total requests, multiple third-party analytics/chat scripts, ~4s full load time. The new
Next.js implementation should do meaningfully better by default (optimized images, lazy
loading, no unnecessary third-party scripts) — see T018 (Performance pass).

---

## 7. Landing-Page Recommendations

**Retain (align with existing brand identity):**
- Brand colors: `#0084FF` blue, `#192734` dark text, `#4C5A67` grey text, `#E9852A` orange
  accent, Inter typeface.
- Overall content structure and ordering for our 8 target sections (Header → Hero → Core
  Services intro → Core Services → Other Services → Technologies → Industries → Footer),
  which already mirrors the production site's own section order for this content.
- The core service categories, other-services list, technology categories, and 12-industry
  list as factual content to adapt (not copy verbatim) into our own copy/design.
- Office location details in the footer (these are factual company information, not claims).
- The practice of giving every image meaningful alt text.

**Redesign (modernize rather than replicate):**
- Visual treatment of cards, buttons, and spacing — build clean Tailwind-based components
  rather than porting Bootstrap 5 markup/classes.
- The hero's rotating-keyword effect — the *concept* (rotating industry keyword) is worth
  keeping if desired, but should be reimplemented as a small, accessible, purpose-built React
  component rather than replicating the production site's specific JS approach.
- Button color contrast (see §6) — pick a shade that both matches the brand and passes 4.5:1
  contrast at whatever text size the new buttons use.

**Simplify:**
- Navigation: no need for the full multi-level mega-menu; a single-page landing site only
  needs in-page anchor links to our own sections plus one clear CTA.
- Section count: this project targets 8 sections, not the production homepage's 17 — no need
  to replicate case studies, testimonials, CEO message, stat counters, blog teasers, or
  awards unless the user asks to expand scope later.
- Technology/industry lists can be presented as clean logo/icon grids without the tabbed
  filtering complexity (`jquery.mixitup`) used for case studies on the production site.

**Do NOT copy:**
- Any statistic, award claim, client name, client logo, testimonial, or review-platform
  score listed in §3 as "explicitly flagged" — none of these may appear on the new landing
  page unless the user explicitly supplies and approves that exact content.
- WordPress markup, CSS class names, or the jQuery/Bootstrap/OwlCarousel/mixitup
  implementation — the new page is Next.js/TypeScript/Tailwind/React, built independently.
- Third-party tracking/chat scripts (GA, GTM, Clarity, LinkedIn Insight, Tawk.to) — these are
  the production site's own tooling choices, not part of brand identity, and are out of scope
  unless the user explicitly requests analytics (see TASKS.md's open question on this).

**Recommended section structure for this project** (matches the 8 sections already defined
in [TASKS.md](TASKS.md) T007–T013, no change recommended):
Header → Hero → "Accelerate Your Business Transformation..." intro → Core Services → Other
Services → Technologies & Platforms → Industries → Footer.

**Responsive considerations:**
- Design mobile-first; verify at minimum 375px (mobile), 768px (tablet), and 1280px+
  (desktop), matching the breakpoint pattern the production site's Bootstrap grid implies.
- Header must collapse to a mobile-friendly nav (hamburger or simplified anchor links) below
  tablet width, consistent with the production site's own mobile behavior.
- Any rotating/animated hero text must remain legible and not overlap during transitions at
  small viewport widths (a rendering issue observed transiently on the production site).

**SEO/accessibility considerations:**
- Single, correctly-nested heading hierarchy (`h1` → `h2` → `h3`), no duplicated headings
  from carousel/loop implementations.
- Include a `<main>` landmark and a skip-to-content link (both missing on the production
  site).
- Full metadata: title, meta description, canonical URL, Open Graph tags — written fresh for
  this landing page (do not reuse the production site's title/description verbatim, since
  they reference unverified stats and target the full company site, not this landing page).
- Every image must have descriptive alt text (matching the one clearly good practice already
  observed on the production site).
- Verify final button/text color combinations against WCAG AA (4.5:1 normal text, 3:1 large
  text/UI) at the point colors are finalized in T004 — do not assume the production site's
  exact blue passes at every text size (see computed contrast in §6).
- Use `next/image` with lazy loading by default for all non-hero images, and prioritize only
  the actual largest-contentful-paint image (likely the hero image) for eager loading.
