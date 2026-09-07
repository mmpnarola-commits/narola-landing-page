export interface Industry {
  id: string;
  label: string;
  icon: string;
}

// The full 12-industry list from PRODUCTION_SITE_ANALYSIS.md §3 — these are factual
// category names, reused verbatim since there's no other way to name an industry category
// without changing its meaning. Icons are hand-authored generic SVGs finalized in T006
// (public/images/industries/) — not trademarked, so no rights concerns.
export const industries: Industry[] = [
  { id: "ecommerce-retail", label: "Ecommerce & Retail", icon: "/images/industries/ecommerce-retail.svg" },
  { id: "real-estate", label: "Real Estate", icon: "/images/industries/real-estate.svg" },
  { id: "fintech", label: "Fintech", icon: "/images/industries/fintech.svg" },
  { id: "healthcare", label: "Healthcare", icon: "/images/industries/healthcare.svg" },
  { id: "travel-hospitality", label: "Travel & Hospitality", icon: "/images/industries/travel-hospitality.svg" },
  { id: "education", label: "Education", icon: "/images/industries/education.svg" },
  { id: "media-entertainment", label: "Media & Entertainment", icon: "/images/industries/media-entertainment.svg" },
  { id: "sports", label: "Sports", icon: "/images/industries/sports.svg" },
  { id: "fitness-wellness", label: "Fitness & Wellness", icon: "/images/industries/fitness-wellness.svg" },
  { id: "transport-logistics", label: "Transport & Logistics", icon: "/images/industries/transport-logistics.svg" },
  { id: "lifestyle", label: "Lifestyle", icon: "/images/industries/lifestyle.svg" },
  { id: "nonprofits", label: "Nonprofits", icon: "/images/industries/nonprofits.svg" },
];
