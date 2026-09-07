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

// Category names, descriptions (paraphrased, not copied verbatim), and sub-service labels
// sourced from PRODUCTION_SITE_ANALYSIS.md §3's retained content. Sub-items have no `href`:
// this project has no dedicated sub-pages for them in v1 scope.
export const coreServices: ServiceCategory[] = [
  {
    id: "custom-software-development",
    title: "Custom Software Development",
    description:
      "Software built around your exact requirements — practical, reliable solutions for your specific challenges.",
    items: [
      { label: "Custom Software Development" },
      { label: "Software Development Outsourcing" },
      { label: "Full Stack Development" },
      { label: "API Development" },
      { label: "MVP Development" },
      { label: "CRM Development" },
    ],
  },
  {
    id: "software-product-engineering",
    title: "Software Product Engineering",
    description:
      "From planning to final delivery, we help turn your product ideas into reality with care and precision.",
    items: [
      { label: "Software Product Development" },
      { label: "Mobile App Development" },
      { label: "Web App Development" },
      { label: "Enterprise Software Development" },
    ],
  },
  {
    id: "staff-augmentation",
    title: "Staff Augmentation",
    description:
      "Grow your team with skilled professionals who work as a seamless extension of your in-house team.",
    items: [{ label: "Hire a Developer" }, { label: "Hire a Dedicated Team" }],
  },
  {
    id: "ecommerce-development",
    title: "Ecommerce Development",
    description:
      "Online stores that are easy to use, visually appealing, and built to help your business grow.",
    items: [
      { label: "Ecommerce Software Development" },
      { label: "Ecommerce Website Development" },
      { label: "Ecommerce App Development" },
      { label: "WooCommerce Development" },
      { label: "Headless Ecommerce" },
      { label: "Ecommerce Migration" },
    ],
  },
];

// "Other Services" is a lightweight label-only list on the production site (no
// descriptions) — matched here per VISUAL_DIRECTION.md §7 ("icon + label only").
export const otherServices: ServiceItem[] = [
  { label: "QA & Testing" },
  { label: "Support & Maintenance" },
  { label: "Cloud Services" },
  { label: "DevOps" },
  { label: "AI & ML" },
  { label: "Software Modernization" },
];
