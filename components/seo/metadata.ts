import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

type BuildLearnGuidePageMetadataInput = BuildPageMetadataInput & {
  /** ISO date string `YYYY-MM-DD` for article Open Graph and schema. */
  publishedAt: string;
  modifiedAt?: string;
};

/** Learn guides: canonical + description + Open Graph `article` with published/modified times. */
export function buildLearnGuidePageMetadata(input: BuildLearnGuidePageMetadataInput): Metadata {
  const base = buildPageMetadata(input);
  const publishedIso = `${input.publishedAt}T12:00:00.000Z`;
  const modifiedIso = `${input.modifiedAt ?? input.publishedAt}T12:00:00.000Z`;
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: publishedIso,
      modifiedTime: modifiedIso,
    },
  };
}

export function buildPageMetadata(input: BuildPageMetadataInput): Metadata {
  const url = `${siteConfig.siteUrl}${input.path}`;
  const fullTitle = `${input.title} | ${siteConfig.name}`;

  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical: input.path,
    },
    openGraph: {
      title: fullTitle,
      description: input.description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} – AI Visibility & Answer Engine Optimisation`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: input.description,
      images: [siteConfig.ogImage],
    },
  };
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  icons: {
    /** Explicit `rel="icon"` + `shortcut` so crawlers and SEO tools that only look for these pass. */
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon.png", type: "image/png" }],
  },
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} – AI Visibility & Answer Engine Optimisation`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};
