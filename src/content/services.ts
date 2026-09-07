export interface ServiceItem {
  label: string;
  href?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  items: ServiceItem[];
}

// Populated in T005 (Finalize content mapping) using PRODUCTION_SITE_ANALYSIS.md §3 as reference.
export const coreServices: ServiceCategory[] = [];
export const otherServices: ServiceItem[] = [];
