export type SanityFeaturedImage = {
  alt?: string;
  /** Resolved in GROQ via `asset->url`, or use image builder for inline PT images. */
  url?: string | null;
};

export type SanityPost = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  featuredImage?: SanityFeaturedImage;
  excerpt?: string;
  /** Portable Text blocks */
  body?: unknown;
};
