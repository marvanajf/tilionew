import type { MetadataRoute } from "next";

import { blogIndexRoute, blogPostSlugs, legalRoutes, marketingRoutes } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [...marketingRoutes, ...legalRoutes, blogIndexRoute];
  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: now,
  }));

  const blogEntries = blogPostSlugs.map((slug) => ({
    url: `${siteConfig.siteUrl}/blog/${slug}`,
    lastModified: now,
  }));

  return [...staticEntries, ...blogEntries];
}
