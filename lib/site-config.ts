export const siteConfig = {
  name: "Tilio",
  description: "Public marketing site and blog rebuild.",
  // Replace with the production domain before launch metadata finalization.
  siteUrl: "https://example.com",
} as const;

export type SiteConfig = typeof siteConfig;
