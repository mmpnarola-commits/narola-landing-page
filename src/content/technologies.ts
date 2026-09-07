export interface TechCategory {
  id: string;
  title: string;
  items: string[];
}

// Technology names sourced from PRODUCTION_SITE_ANALYSIS.md §4 (nav mega-menu). The
// production site also shows "Database", "DevOps and Cloud", and "Project Management"
// category headers, but no specific tool names were captured for those during T003 —
// they are intentionally omitted here rather than guessed. Revisit if real names for those
// categories are confirmed later.
//
// T006 asset decision: no per-technology icon/logo assets were created. Recreating 14
// trademarked logos by hand from memory risked inaccurate, unauthorized-looking
// derivatives, and this data already fully identifies each technology by name — a second,
// image-based representation of the same information would duplicate content across the
// content and asset layers. The Technologies section (T011) should render these as clean
// text/wordmark badges directly from `items` rather than image icons.
export const technologyCategories: TechCategory[] = [
  { id: "front-end", title: "Front End", items: ["AngularJS", "ReactJS"] },
  {
    id: "back-end",
    title: "Back End",
    items: ["PHP", "Laravel", "CodeIgniter", ".NET", "ROR", "JAVA", "NodeJS"],
  },
  { id: "mobile", title: "Mobile", items: ["Android", "iOS", "Flutter", "React Native"] },
  { id: "cms", title: "CMS", items: ["WordPress"] },
];
