export interface TechCategory {
  id: string;
  title: string;
  items: string[];
}

// Populated in T005 (Finalize content mapping) using PRODUCTION_SITE_ANALYSIS.md §3 as reference.
export const technologyCategories: TechCategory[] = [];
