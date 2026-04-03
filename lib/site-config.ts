export const siteConfig = {
  name: "Tilio",
  legalName: "Luto Ventures Ltd",
  description:
    "Tilio is a UK AEO agency helping brands improve AI search visibility through audits, content improvement, monitoring, and ongoing implementation. Plans from £499/month.",
  siteUrl: "https://www.tilio.co.uk",
  ogImage:
    "https://res.cloudinary.com/ddsqkll4f/image/upload/v1774822093/AEO_499month_8_jgeobt.png",
  logoUrl:
    "https://res.cloudinary.com/ddsqkll4f/image/upload/q_auto/f_auto/v1775048162/Untitled_design_36_dkgwxb.png",
  linkedIn: "https://www.linkedin.com/company/trytilio/",
  companyNumber: "16563350",
  companiesHouseUrl:
    "https://find-and-update.company-information.service.gov.uk/company/16563350",
} as const;

export type SiteConfig = typeof siteConfig;
