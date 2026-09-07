export interface HeroContent {
  eyebrow: string;
  headline: string;
  trustPoints: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

// Sourced from PRODUCTION_SITE_ANALYSIS.md §3 (retained, factual positioning copy — not
// one of the flagged unverified statistics). The production site pairs this headline with
// a rotating industry keyword (see `industries.ts`); that rotation is an optional future
// enhancement per VISUAL_DIRECTION.md §6, not required for the hero to work — this content
// intentionally stands on its own without it.
//
// `image` is a hand-authored abstract brand-color graphic (T006), not photography — per
// the human's explicit choice, avoiding photo-rights questions until real photography (if
// any) is sourced later.
export const hero: HeroContent = {
  eyebrow: "Digitalizing Businesses Globally for Startups, SMEs & Enterprises Since 2005",
  headline: "Trusted Custom Software Development Partner",
  trustPoints: ["Quality Focus", "Customer Centric", "Insights Driven"],
  image: {
    src: "/images/hero/hero-graphic.svg",
    alt: "Abstract illustration representing custom software development",
    width: 480,
    height: 400,
  },
};
