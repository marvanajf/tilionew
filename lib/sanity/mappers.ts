import type { SanityFeaturedImage, SanityPost } from "@/lib/sanity/types";

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
    body: raw.body,
  };
}
