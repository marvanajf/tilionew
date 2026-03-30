export const siteConfig = {
  name: "Tilio",
  description:
    "Tilio helps businesses understand how AI systems describe their brand, benchmark competitors, and improve the content that drives mentions and citations.",
  siteUrl: "https://tilio.co.uk",
  ogImage:
    "https://res.cloudinary.com/ddsqkll4f/image/upload/v1774822093/AEO_499month_8_jgeobt.png",
} as const;

export type SiteConfig = typeof siteConfig;
