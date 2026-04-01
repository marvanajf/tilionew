export type SanityFeaturedImage = {
  alt?: string;
  /** Resolved in GROQ via `asset->url`, or use image builder for inline PT images. */
  url?: string | null;
};

export type SanityAuthor = {
  name: string;
  slug?: string;
  role?: string;
  headshotUrl?: string | null;
  headshotAlt?: string;
  bio?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
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
  author?: SanityAuthor;
  /** Portable Text blocks */
  body?: unknown;
};
