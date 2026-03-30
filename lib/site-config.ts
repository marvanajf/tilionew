export const siteConfig = {
  name: "Tilio",
  description:
    "Tilio is a UK AEO agency helping brands improve AI search visibility through audits, content improvement, monitoring, and ongoing implementation. Plans from £499/month.",
  siteUrl: "https://tilio.co.uk",
  ogImage:
    "https://res.cloudinary.com/ddsqkll4f/image/upload/v1774822093/AEO_499month_8_jgeobt.png",
} as const;

export type SiteConfig = typeof siteConfig;
