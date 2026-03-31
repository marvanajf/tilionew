import type { MetadataRoute } from "next";

import { blogIndexRoute, legalRoutes, marketingRoutes } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: [
      `${siteConfig.siteUrl}/sitemap.xml`,
      `${siteConfig.siteUrl}/feed.xml`,
    ],
    host: siteConfig.siteUrl,
  };
}

export const scaffoldedRoutesForRobots = [...marketingRoutes, ...legalRoutes, blogIndexRoute];
