import type { MetadataRoute } from "next";

import { blogIndexRoute, legalRoutes, marketingRoutes } from "@/lib/routes";
import { getAllPosts } from "@/lib/sanity/api";
import { siteConfig } from "@/lib/site-config";

export const revalidate = 300;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticRoutes = [...marketingRoutes, ...legalRoutes, blogIndexRoute];
  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: now,
  }));

  const posts = await getAllPosts();
  const blogEntries = posts.map((post) => ({
    url: `${siteConfig.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
  }));

  return [...staticEntries, ...blogEntries];
}
