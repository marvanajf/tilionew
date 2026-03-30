import type { MetadataRoute } from "next";

import { blogIndexRoute, legalRoutes, marketingRoutes } from "@/lib/routes";
import { getAllPostSlugs } from "@/lib/sanity/api";
import { siteConfig } from "@/lib/site-config";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticRoutes = [...marketingRoutes, ...legalRoutes, blogIndexRoute];
  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: now,
  }));

  const slugs = await getAllPostSlugs();
  const blogEntries = slugs.map((slug) => ({
    url: `${siteConfig.siteUrl}/blog/${slug}`,
    lastModified: now,
  }));

  return [...staticEntries, ...blogEntries];
}
