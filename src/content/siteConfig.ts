/**
 * Site-wide configuration. `url` is a placeholder until the production subdomain is
 * decided (see TASKS.md T023/T024) — override it via NEXT_PUBLIC_SITE_URL when known.
 */
export const siteConfig = {
  name: "Narola Infotech",
  description: "Narola Infotech landing page.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
} as const;
