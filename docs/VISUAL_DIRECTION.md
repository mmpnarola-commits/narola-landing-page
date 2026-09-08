# Visual Direction

Finalized design system and visual decisions for the standalone Narola Infotech landing
page. This document is the reference for all future implementation tasks (T007 onward) —
no landing-page components are implemented here; this is documentation only.

**Inputs:** [PRODUCTION_SITE_ANALYSIS.md](PRODUCTION_SITE_ANALYSIS.md) (brand reference, not
something to copy), [CLAUDE.md](../CLAUDE.md) (project rules), and the project's existing
Next.js 16 + TypeScript + Tailwind CSS 4 (`src/app/globals.css` CSS-first `@theme` setup).

**How to read this document:** every color/contrast figure is **computed** (WCAG 2.1
relative-luminance formula), not assumed — the same standard of rigor used in T003. Where a
decision was inherited from the production site vs. intentionally changed, it's labeled as
such inline and summarized in §14–15.

---

## 1. Design Goals

- Retain Narola Infotech's recognizable brand identity (color, type, tone) so the landing
  page is clearly "the same company" as the production site.
- Look and feel cleaner, more modern, and less dense than the production site — 8 focused
  sections instead of 17, generous whitespace, no carousel/slider clutter.
- Be measurably more accessible than the production site (see T003 §6 findings) and more
  performant (lighter page weight, no unnecessary third-party scripts, optimized images).
- Be conversion-focused: one clear primary CTA repeated logically (hero + header), not
  competing CTAs or decorative distractions.
- Stay simple and maintainable: Tailwind utility-first styling, no new UI/animation
  dependencies, no over-engineered design-token abstraction beyond what Tailwind v4's
  CSS-first `@theme` already provides.

---

## 2. Brand Colors

Confirmed directly from [PRODUCTION_SITE_ANALYSIS.md](PRODUCTION_SITE_ANALYSIS.md) §2 — no
new brand colors introduced.

| Name | Hex | Role |
|---|---|---|
| Brand Blue | `#0084FF` | Primary brand color — large-scale visual use (icons, decorative accents, large/bold headings, logo-adjacent elements, backgrounds). **Not** used as small text or button-fill color — see contrast note below. |
| Dark Ink | `#192734` | Headings, primary body text |
| Slate | `#4C5A67` | Secondary/supporting body text |
| Accent Orange | `#E9852A` | Sparing highlight accent (e.g. one emphasized word in the hero headline) |
| White | `#FFFFFF` | Primary background |
| Surface Muted | `#F6F7FA` | Footer background and alternating light section backgrounds |

**Supporting UI color (not a new brand color — see justification):**

| Name | Hex | Role |
|---|---|---|
| Interactive Blue | `#0072D9` | Button backgrounds and link text where white/light text or a light background requires WCAG AA contrast. A darker derivative of Brand Blue, used solely for accessibility compliance on interactive elements. |

**Computed contrast (WCAG 2.1, relative luminance, white background/text unless noted):**

| Pair | Ratio | Result |
|---|---|---|
| Dark Ink `#192734` on white | ≈15.2:1 | Passes AAA |
| Slate `#4C5A67` on white | ≈7.1:1 | Passes AA, near AAA (confirmed in T003) |
| **Brand Blue `#0084FF` on/against white** | **≈3.65:1** | **Fails AA for normal text** (passes only the 3:1 large-text/non-text-UI minimum) — this is the exact issue flagged in T003 |
| **Interactive Blue `#0072D9` on/against white** | **≈4.76:1** | **Passes AA** for normal text, at any size |
| Accent Orange `#E9852A` on white (as text) | ≈2.67:1 | **Fails** even the 3:1 large-text minimum — orange must never be used as text on a light background |
| Dark Ink `#192734` on Accent Orange background | ≈5.69:1 | Passes AA — orange is safe as a *background fill* under dark text |

**Resulting rules:**
1. Never set body/link text directly in Brand Blue (`#0084FF`) on a light background — use
   **Interactive Blue (`#0072D9`)** for all links and button backgrounds instead. This
   directly resolves the T003-identified button-contrast failure.
2. Brand Blue (`#0084FF`) is reserved for non-text or large-scale decorative use: icon
   fills, large headline accents paired with sufficient size/weight, borders, and the logo.
3. Accent Orange (`#E9852A`) is a background/fill or bold-large-text-only color, never small
   body/link text on a light surface. If used as a background, pair it with Dark Ink text.
4. No additional brand colors are introduced. One neutral UI color is needed for borders/
   dividers not covered above (see §7 Cards) — documented there as a supporting UI shade,
   not a brand color.

**Implementation note (for whichever future task wires this into code, not T004):** these
tokens map directly onto Tailwind v4's CSS-first `@theme` block already used in
`src/app/globals.css`, e.g. `--color-brand-blue`, `--color-interactive-blue`, `--color-ink`,
`--color-slate`, `--color-accent-orange`, `--color-surface-muted`. No code was changed as
part of T004.

---

## 3. Typography

**Font family:** Inter (single family, matching the production site — see T003 §2). The
project currently ships Next.js's default Geist font from the `create-next-app` scaffold;
switching the actual `next/font/google` import from Geist to Inter is a small implementation
step deferred to the first task that touches `layout.tsx` for real (not done in T004, to
keep this task documentation-only with zero code changes).

| Level | Size (desktop) | Size (mobile) | Weight | Line height | Notes |
|---|---|---|---|---|---|
| H1 | 40–48px | 32px | 700 | 1.15–1.2 | One per page (hero only) |
| H2 | 28–32px | 24px | 700 | 1.25 | Section headings |
| H3 | 20–22px | 18px | 600 | 1.35 | Card titles, sub-headings |
| Body | 16–18px | 16px | 400 | 1.6 | Paragraph copy |
| Small/supporting | 14px | 14px | 400–500 | 1.5 | Captions, meta text, helper copy |
| Buttons/nav | 15–16px | 15–16px | 600 | 1.2 | See §7 for the contrast rule that applies |

**Responsive behavior:** scale down via Tailwind responsive prefixes (mobile value is the
default/unprefixed size; desktop value applies at `md:`/`lg:`), not a fluid `clamp()` system
— keeps implementation simple per the "don't over-engineer" principle. H1/H2 are the only
levels that meaningfully shrink between breakpoints; H3/body/small stay constant across
breakpoints for consistency and to avoid unnecessary complexity.

**Change from production site:** the production site's H1 is 40px/700/58px line-height with
no visible mobile-specific reduction observed; this direction explicitly defines a smaller
mobile H1 (32px) for better small-screen balance, and tightens H1 line-height to 1.15–1.2
(from the production site's comparatively loose 58px/40px ≈ 1.45 ratio) for a more modern,
compact headline feel.

---

## 4. Layout & Spacing

- **Max content width:** 1280px (`max-w-7xl` equivalent), centered, matching modern
  Tailwind convention rather than the production site's Bootstrap container widths.
- **Horizontal page padding:** `1rem` (16px) mobile → `1.5rem` (24px) tablet → `2rem` (32px)
  desktop (Tailwind `px-4 md:px-6 lg:px-8`).
- **Section vertical spacing:** `4rem` (64px) mobile → `6rem` (96px) desktop between
  sections — spacious but tighter than the production site's ~75px+ flat value at every
  breakpoint (this direction scales spacing down on mobile rather than keeping one fixed
  value, to avoid excessive scrolling on small screens).
- **Grid behavior:** CSS Grid/Flexbox via Tailwind utilities (`grid`, `flex`), not a 12-column
  Bootstrap-style grid system. Typical patterns:
  - Core Services: 1 column mobile → 2 columns tablet → 4 columns desktop.
  - Other Services: 1 column mobile → 2 columns tablet → 3 columns desktop.
  - Technologies: grouped by category, 2 columns mobile → 3–4 columns desktop per category.
  - Industries: 2 columns mobile → 3 columns tablet → 4 columns desktop (12 items → 3 rows
    at desktop width).
- **Card layout principle:** consistent internal padding (`1.5rem`/24px), consistent gap
  between grid items (`1.5rem`–`2rem`), no mixed/inconsistent card sizes within one grid.
- **Border radius:** buttons `0.5rem` (8px, close to the production site's 6px, rounded up
  slightly to Tailwind's scale); cards `1rem` (16px) — larger than the production site's
  cards, for a more modern, spacious feel.
- **Shadow usage:** subtle only — `shadow-sm` at rest, `shadow-md` on hover for interactive
  cards/buttons. No heavy/dark drop shadows. Any hover shadow transition is a plain CSS
  `transition-shadow`, not a JS animation library.

**Change from production site:** replaces the Bootstrap 12-column grid and its container
breakpoints entirely with Tailwind's own grid/flex utilities and breakpoints (see §9) —
intentional simplification, not a like-for-like port.

---

## 5. Header Direction

- **Height:** 72px desktop / 64px mobile — more compact than the production site's ~99px,
  contributing to the "cleaner, more modern" goal.
- **Behavior:** `position: sticky` (not `fixed`), white background. Sticky (rather than
  always-fixed) avoids permanently occluding content on very short viewports and is simpler
  to reason about with Tailwind's utilities. A subtle `shadow-sm` appears only once the page
  is scrolled (a simple CSS/JS scroll-state toggle, not an animation library).
- **Logo placement:** left-aligned, linking to the top of the page (`#top` or `/`).
- **Desktop navigation:** simplified in-page anchor links only (Services, Technologies,
  Industries — per T003 §4's recommendation), **not** the production site's full multi-level
  mega-menu. This is an intentional simplification appropriate for a single-page site.
- **Mobile navigation:** hamburger icon toggling a simple full-width dropdown/panel with the
  same anchor links plus the primary CTA — no nested/mega-menu complexity to replicate on
  mobile.
- **CTA button:** one primary CTA in Interactive Blue (`#0072D9`), right-aligned, present in
  both desktop and mobile header states.
- **Active/hover/focus states:**
  - Hover: nav links underline or shift to Interactive Blue text (from Dark Ink).
  - Focus: a visible `focus-visible` ring (2px, Interactive Blue, with offset) on every
    interactive element — the production site was not verified to have explicit focus
    styling, so this is a deliberate accessibility improvement, not an inherited pattern.
  - Active/current section: optional subtle underline or color change if scroll-spy is
    implemented later; not required for v1.

---

## 6. Hero Direction

*(Documentation only — the Hero component itself is not created in T004.)*

- **Composition:** two-column layout at desktop (headline/copy/CTA left, supporting
  imagery right), single-column stacked layout at mobile (headline/copy/CTA first, imagery
  below) — matching the production site's proven composition pattern.
- **Headline hierarchy:** one `<h1>` combining a static lead-in phrase with one emphasized
  word/short phrase (styled in Accent Orange or Dark Ink — never small link-style Brand
  Blue, per §2's contrast rule). The production site's rotating-keyword concept may be
  reimplemented later as a small, accessible, `prefers-reduced-motion`-aware component — not
  a requirement for the hero to function without it.
  - **Prerequisite:** actual homepage headline copy (the specific "lead-in phrase + rotating
    industry keyword(s)" text) is finalized in T005, not decided in this document — this
    section defines *visual treatment*, not the actual words used.
- **Supporting text:** one short paragraph in Slate (`#4C5A67`), body-text size (§3).
- **Primary CTA:** solid Interactive Blue button (see §7).
- **Secondary CTA (optional):** a lower-emphasis text link or outline button (e.g., "See our
  services" anchoring to the Core Services section) — optional, not mandatory, and only if
  it doesn't compete visually with the primary CTA.
- **Imagery direction:** a single real, rights-cleared photograph or a clean
  abstract/illustrative graphic — exact asset selection happens in T006 (Finalize assets),
  not here. Whatever is chosen must have a defined aspect ratio (§8) and sufficient
  contrast area if any text is ever overlaid on it (no text-over-photo is planned for v1,
  avoiding a whole class of contrast/accessibility risk).
- **Background treatment:** plain white or Surface Muted background — no heavy gradient or
  full-bleed background photo, keeping the page lightweight (§11) and avoiding the
  production site's denser hero treatment.
- **Desktop vs. mobile:** at mobile widths, imagery either shrinks and sits below the text
  or is omitted in favor of text-first content, whichever keeps mobile-load weight low.

---

## 7. Section Design Language

Applies to: Transformation Intro, Core Services, Other Services, Technologies, Industries,
Footer.

| Section | Background | Heading placement | Content width | Grid/card behavior | Visual emphasis | CTA |
|---|---|---|---|---|---|---|
| Transformation Intro | White | Centered, top | Narrower (`max-w-3xl`) for readability | No grid — single centered paragraph block | Typography only, no cards | None |
| Core Services | Surface Muted (`#F6F7FA`) | Centered, top | Full max-width (1280px) | 4-col card grid (§4) | Primary section — most visually prominent card treatment | None (cards link to nothing in v1; no sub-pages exist) |
| Other Services | White | Centered, top | Full max-width | Lighter-weight grid/list (icon + label), not full cards — visually secondary to Core Services | Minimal — icon + label only | None |
| Technologies | Surface Muted | Centered, top | Full max-width | Grouped by category, logo/icon grid, no cards | Logo-forward, minimal chrome | None |
| Industries | White | Centered, top | Full max-width | Compact grid of labeled icon tiles (§4) | Uniform, no single item emphasized | Optional single CTA below the grid (e.g., "Get in touch") |
| Footer | Surface Muted (`#F6F7FA`) | Left-aligned per column | Full max-width | Multi-column link layout (matching T003 §1's footer structure) | Low visual weight — text links, not cards | One CTA line (e.g., "Let's talk") consistent with header/hero CTA styling |

**Consistent rule across all sections:** alternating white/Surface Muted backgrounds create
visual rhythm without needing borders or dividers between sections — an intentional
simplification vs. the production site's more visually busy section transitions.

---

## 8. Cards & Reusable UI

- **Cards:** white or Surface Muted background (whichever contrasts with its parent
  section), `1rem` (16px) radius, `shadow-sm` at rest → `shadow-md` on hover, `1.5rem`
  internal padding, no borders needed when shadow provides enough separation.
- **Buttons:**
  - Primary: solid Interactive Blue (`#0072D9`) background, white text, weight 600,
    `0.5rem` radius, ~`0.875rem 1.5rem` padding. Contrast ≈4.76:1 (§2) — passes AA at any
    text size, resolving the production site's button-contrast issue.
  - Secondary/outline: transparent background, `1.5px` Interactive Blue border, Interactive
    Blue text (also ≈4.76:1 against white).
  - Hover: primary darkens slightly (e.g. toward `#005FB8`, still passing AA — exact shade
    to be verified in code); outline fills with a light tint. No layout-shifting hover
    effects.
  - Focus: visible `focus-visible` ring (2px, offset), same rule as header nav (§5).
  - Touch target: minimum 44×44px hit area on all buttons/links at mobile widths (§10).
- **Section headings:** centered by default (per §7's table), Dark Ink color, H2 size (§3),
  optionally paired with a short Slate-colored subheading line beneath.
- **Containers:** one shared max-width container component (1280px, responsive horizontal
  padding per §4) used by every section — no per-section custom widths outside the
  documented exceptions (e.g., Transformation Intro's narrower reading width).
- **Icon badges:** icons sit inside a small rounded (fully circular or `0.75rem` radius)
  container filled with a light tint of Interactive Blue or Surface Muted — never a raw icon
  floating with no visual container, for consistency across Core/Other Services.
- **Links (inline text links):** Interactive Blue (`#0072D9`), underlined or clearly
  distinguished from surrounding body text by more than color alone (see §10 — color alone
  is not sufficient to convey "this is a link").
- **Tags/badges:** not required for v1's 8 sections; if introduced later (e.g., a "New"
  or category tag), it should use Surface Muted background with Dark Ink text, matching the
  Accent Orange contrast rule in §2.

---

## 9. Imagery & Icons

- **Image style:** clean, professional, real photography where available (team, office,
  work-in-progress) or simple flat/line-style illustrations — avoid generic overused stock
  photo clichés. Exact assets are sourced in T006, not chosen here.
- **Aspect ratios:** hero image `4:3` or `1:1` (compact, not full-bleed); any future
  supporting imagery `16:9` for wide layouts or `1:1` for square icon-like usage — fixed
  aspect ratios prevent layout shift (good for Core Web Vitals' CLS metric).
- **Illustration/photo usage:** at most one significant image per section (the hero) for v1;
  Core/Other Services, Technologies, and Industries use icons/logos, not photography.
- **Technology icon treatment:** monochrome or brand-color SVG logos, uniform sizing within
  each category grid, no drop shadows on logos themselves.
- **Icon sizing:** 24px inline (e.g., next to text), 32–40px inside icon badges (§8).
- **Icon containers/backgrounds:** per §8's icon badge rule — consistent circular/rounded
  tinted container, not bare icons.
- **Image optimization:** all images via Next.js `next/image` with explicit width/height
  (or `fill` with a defined aspect-ratio container) to prevent layout shift; only the hero
  image (if it is the largest-contentful-paint element) is eagerly loaded/prioritized —
  every other image lazy-loads by default. This directly addresses the T003 finding that the
  production site eager-loads all 130+ images with no lazy-loading.

---

## 10. Responsive Direction

Defined by actual layout needs and Tailwind's default breakpoint scale — **not** a
port of the production site's inferred Bootstrap breakpoints (576/768/992/1200/1400px).

| Breakpoint | Tailwind prefix | Width | Behavior |
|---|---|---|---|
| Mobile | (default, no prefix) | < 640px | Single-column everything; hamburger nav; stacked hero; full-width CTAs |
| Tablet | `md:` | ≥ 768px | 2-column grids where defined in §4/§7; header nav may still be collapsed (decided per §5 — anchor-link nav is short enough it may expand at `md:` rather than waiting for `lg:`, to be confirmed during Header implementation) |
| Desktop | `lg:` | ≥ 1024px | Full multi-column grids; expanded header nav; two-column hero |
| Large desktop | `xl:`/content max-width | ≥ 1280px | Content stops growing past the 1280px container (§4); extra viewport width becomes side margin, not stretched content |

This is intentionally simpler than the production site's 5-tier Bootstrap breakpoint system
— Tailwind's default scale (`sm`/`md`/`lg`/`xl`/`2xl`) is sufficient for an 8-section
single-page site and avoids introducing custom breakpoint configuration.

---

## 11. Accessibility Direction

Directly addresses the gaps identified in T003 §6:

- **Color contrast:** every text/background pairing used in implementation must meet WCAG
  AA (4.5:1 normal text, 3:1 large text ≥18.66px bold/24px regular, 3:1 for non-text UI
  component boundaries) — enforced by the color rules in §2, which were computed, not
  assumed.
- **Keyboard focus states:** every interactive element (links, buttons, nav toggle) must
  have a visible `focus-visible` style (§5/§8) — the production site was not confirmed to
  have this; it is a required addition, not an inherited pattern.
- **Touch target sizes:** minimum 44×44px hit area for all tappable elements at mobile
  widths (buttons, nav links, hamburger icon).
- **Heading hierarchy:** exactly one `<h1>` (hero), section headings as `<h2>`, card/
  sub-content titles as `<h3>` — strictly nested, no skipped levels, no duplicated headings
  from carousels or loops (directly fixing the T003-identified duplicate-heading issue,
  since this project has no carousels in v1 scope).
- **Link/button distinction:** links are underlined or otherwise distinguished by more than
  color alone (§8); buttons look like buttons (filled or clearly outlined), never styled as
  plain text, so the two affordances are never visually ambiguous.
- **Reduced-motion:** any hover/scroll-triggered transition (shadow, color, or a future
  rotating-keyword hero effect) must respect `prefers-reduced-motion: reduce` — either
  removing the transition/animation entirely or reducing it to an instant state change.
- **Semantic structure:** one `<main>` landmark wrapping all page sections, a skip-to-content
  link before the header, `<header>`/`<nav>`/`<footer>` landmarks, and `<section>` elements
  with accessible names (via `aria-labelledby` pointing to each section's heading) — directly
  fixing the T003-identified missing-`<main>`/no-skip-link gap.
- **Images:** every image has descriptive `alt` text (matching the one practice already done
  well on the production site, per T003 §6) or `alt=""` for purely decorative images.

---

## 12. Performance Direction

- No animation library, carousel library, or UI component library is introduced — Tailwind
  CSS transitions (`transition-colors`, `transition-shadow`) cover every hover/focus effect
  needed; no JS-driven animation for anything but the (optional, later) hero keyword rotator.
- No large full-bleed background images — backgrounds are flat colors (White/Surface Muted)
  per §6/§7.
- All images sized/formatted via `next/image` (§9) — explicit dimensions, lazy-loading by
  default, modern formats served automatically by Next.js's image optimizer.
- No third-party analytics, chat widgets, or tracking scripts are part of this visual
  direction — the production site's heavy third-party footprint (T003 §5: GA, GTM, Clarity,
  LinkedIn Insight, Tawk.to) is explicitly not part of the plan unless the user requests an
  equivalent later (an open question already tracked outside this document).
- Fonts: a single font family (Inter) loaded via `next/font/google` (self-hosted at build
  time, no external font request at runtime) — improves on the production site's live
  Google Fonts CDN request.
- Target: a visibly lighter page than the production site's 194 requests / 130+ images /
  ~4s load time (T003 §5) — no specific numeric target is set here (that's for T018,
  Performance pass), but every principle above is chosen to move in that direction.

---

## 13. Content/Design Principles (carried from CLAUDE.md, restated for this document)

- No invented company statistics, client names, testimonials, awards, or unverifiable
  claims — none are referenced or implied anywhere in this visual direction.
- No large blocks of production-site copy are reproduced here or implied as reusable
  verbatim text — this document is visual/structural direction only.
- Content decisions (actual headline wording, service descriptions, industry labels, nav
  labels) are explicitly out of scope for this document and belong to T005 (Finalize content
  mapping) — this document defines *how content will look*, not *what it says*.

---

## 14. Design Decisions Inherited from the Production Site

- Full brand color palette (Brand Blue, Dark Ink, Slate, Accent Orange, White, Surface
  Muted) — unchanged hex values.
- Inter as the single typeface.
- Overall hero composition pattern (two-column desktop, stacked mobile; headline + CTA +
  supporting imagery).
- Section background rhythm (alternating light/white backgrounds).
- Footer structural pattern (multi-column links + office/contact info).
- Practice of giving every image descriptive alt text.
- General "spacious, card-based" visual language for services/industries content.

## 15. Design Decisions Intentionally Changed from the Production Site

- **Button/link blue:** introduced Interactive Blue (`#0072D9`) alongside Brand Blue to fix
  the computed AA contrast failure (§2) — the single biggest concrete change from the
  production site's actual implementation.
- **Grid system:** Tailwind CSS Grid/Flexbox instead of Bootstrap 12-column grid; Tailwind's
  default breakpoints instead of the production site's inferred Bootstrap breakpoints (§10).
- **Header:** shorter (72px vs. ~99px), sticky instead of always-fixed, simplified in-page
  anchor navigation instead of the full multi-level mega-menu (§5).
- **Section count:** 8 focused sections instead of the production homepage's 17 — no
  carousels, testimonials, stat counters, CEO message, blog teasers, or awards in v1 (§1/§7).
- **Card radius:** larger (16px vs. 6–8px observed) for a more modern feel; button radius
  kept close to the original (8px vs. 6px).
- **Typography scale:** smaller, more compact mobile H1 (32px vs. no observed mobile
  reduction) and tighter H1 line-height (§3).
- **Accessibility additions with no production-site equivalent:** `<main>` landmark,
  skip-to-content link, explicit `focus-visible` states, strict non-duplicated heading
  hierarchy, `prefers-reduced-motion` handling (§11) — the production site was found lacking
  in all of these (T003 §6).
- **Performance posture:** no third-party analytics/chat scripts, no carousel/slider
  library, lazy-loaded images by default, self-hosted font — a deliberately lighter stack
  than the production site's (§12).
- **Imagery:** no full-bleed background photography; flat-color section backgrounds only
  (§6/§7), vs. the production site's more image-heavy hero treatment.
