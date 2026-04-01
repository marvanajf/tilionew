import type { SanityAuthor, SanityFeaturedImage, SanityPost } from "@/lib/sanity/types";

type RawSanityAuthor = {
  name?: string;
  slug?: string;
  role?: string;
  headshotUrl?: string | null;
  headshotAlt?: string;
  bio?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
};

type RawSanityPost = {
  _id: string;
  title?: string;
  slug?: string;
  publishedAt?: string;
  updatedAt?: string;
  excerpt?: string;
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  featuredImage?: { alt?: string; url?: string | null };
  author?: RawSanityAuthor | null;
  body?: unknown;
};

function mapFeaturedImage(raw: RawSanityPost["featuredImage"]): SanityFeaturedImage | undefined {
  if (!raw || (!raw.url && raw.alt === undefined)) {
    return undefined;
  }
  return {
    alt: raw.alt,
    url: raw.url ?? undefined,
  };
}

function mapAuthor(raw: RawSanityAuthor | null | undefined): SanityAuthor | undefined {
  if (!raw?.name) return undefined;
  return {
    name: raw.name,
    slug: raw.slug,
    role: raw.role,
    headshotUrl: raw.headshotUrl ?? undefined,
    headshotAlt: raw.headshotAlt,
    bio: raw.bio,
    linkedin: raw.linkedin,
    twitter: raw.twitter,
    website: raw.website,
  };
}

export function mapSanityPost(raw: RawSanityPost): SanityPost {
  return {
    _id: raw._id,
    title: raw.title ?? "",
    slug: (raw.slug ?? "").replace(/^\/+/, ""),
    publishedAt: raw.publishedAt ?? "",
    updatedAt: raw.updatedAt,
    excerpt: raw.excerpt,
    metaTitle: raw.metaTitle,
    metaDescription: raw.metaDescription,
    canonicalUrl: raw.canonicalUrl,
    featuredImage: mapFeaturedImage(raw.featuredImage),
    author: mapAuthor(raw.author),
    body: raw.body,
  };
}
