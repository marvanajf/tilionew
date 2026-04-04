import type { MetadataRoute } from "next";

import { blogIndexRoute, legalRoutes, marketingRoutes } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  // Hostname only (never a scheme). Must match `siteConfig.siteUrl`. If production shows
  // non-www here, crawlers are not receiving this file from the current deployment.
  const hostname = new URL(siteConfig.siteUrl).hostname;

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: [
      `${siteConfig.siteUrl}/sitemap.xml`,
      `${siteConfig.siteUrl}/feed.xml`,
    ],
    host: hostname,
  };
}

export const scaffoldedRoutesForRobots = [...marketingRoutes, ...legalRoutes, blogIndexRoute];
