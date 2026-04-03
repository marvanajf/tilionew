import type { MetadataRoute } from "next";

import {
  blogIndexRoute,
  learnArticleRoutes,
  learnCentreRoute,
  learnIndexRoute,
  legalRoutes,
  marketingRoutes,
} from "@/lib/routes";
import { getAllPosts } from "@/lib/sanity/api";
import { siteConfig } from "@/lib/site-config";

export const revalidate = 300;

type RouteConfig = {
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

function routeConfig(route: string): RouteConfig {
  // Homepage
  if (route === "/") return { priority: 1.0, changeFrequency: "weekly" };

  // Primary commercial pages
  if (["/aeo-agency", "/ai-visibility-audit", "/ai-checker", "/pricing"].includes(route)) {
    return { priority: 0.9, changeFrequency: "weekly" };
  }

  // Secondary commercial / service pages
  if (["/uk-aeo-solutions", "/geo-agency", "/how-we-measure-ai-visibility", "/working-with-tilio"].includes(route)) {
    return { priority: 0.8, changeFrequency: "monthly" };
  }

  // Brand / contact
  if (["/about", "/contact"].includes(route)) {
    return { priority: 0.7, changeFrequency: "monthly" };
  }

  // Legal
  if (["/terms-of-service", "/privacy-policy"].includes(route)) {
    return { priority: 0.3, changeFrequency: "yearly" };
  }

  // Blog index + learn hubs
  if (["/blog", "/learn", "/resources/learn"].includes(route)) {
    return { priority: 0.8, changeFrequency: "weekly" };
  }

  // Learn articles
  if (route.startsWith("/learn/")) {
    return { priority: 0.7, changeFrequency: "monthly" };
  }

  // Default
  return { priority: 0.6, changeFrequency: "monthly" };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticRoutes = [
    ...marketingRoutes,
    ...legalRoutes,
    blogIndexRoute,
    learnIndexRoute,
    learnCentreRoute,
    ...learnArticleRoutes,
  ];

  const staticEntries = staticRoutes.map((route) => {
    const cfg = routeConfig(route);
    return {
      url: `${siteConfig.siteUrl}${route}`,
      lastModified: now,
      priority: cfg.priority,
      changeFrequency: cfg.changeFrequency,
    };
  });

  const posts = await getAllPosts();
  const blogEntries = posts.map((post) => ({
    url: `${siteConfig.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [...staticEntries, ...blogEntries];
}
