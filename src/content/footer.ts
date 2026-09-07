export interface OfficeLocation {
  city: string;
  address: string;
}

// Factual office/contact information from PRODUCTION_SITE_ANALYSIS.md §1 (production
// site's footer) — addresses are contact facts, not marketing claims, so they're reused
// directly rather than paraphrased.
export const officeLocations: OfficeLocation[] = [
  { city: "North Carolina", address: "167 E Chatham St Suite 300, Cary, NC 27511" },
  { city: "Virginia", address: "43519 Wheadon Ter, Chantilly VA 20152" },
  {
    city: "Surat",
    address: "5th Floor, Unity Corner, TP 10 Main Road, Pal, Surat 395009",
  },
  {
    city: "Nashik",
    address: "2nd Floor, Pawar Business Square, Pathardi Phata, Nashik 422010",
  },
];

// Footer "Services"/"Technologies" link columns should be composed by the footer
// component directly from `coreServices`/`otherServices` (services.ts) and
// `technologyCategories` (technologies.ts) rather than duplicated here.
//
// Legal links (Privacy Policy, Terms & Conditions) are intentionally omitted: this
// project has no such pages in its v1 scope, and linking out to the production
// WordPress site's versions would reintroduce a coupling this project is meant to avoid.
// Add real links here once/if those pages exist.
