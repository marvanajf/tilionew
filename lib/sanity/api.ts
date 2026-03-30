import { blogPostSlugs } from "@/lib/routes";
import { getSanityReadClient, isSanityConfigured } from "@/lib/sanity/client";
import { mapSanityPost } from "@/lib/sanity/mappers";
import { postBySlugQuery, postListQuery, postSlugsQuery } from "@/lib/sanity/queries";
import type { SanityPost } from "@/lib/sanity/types";

type RawList = Parameters<typeof mapSanityPost>[0];

export async function getAllPostSlugs(): Promise<string[]> {
  const client = getSanityReadClient();
  if (!client) {
    return [];
  }

  const slugs = await client.fetch<string[]>(postSlugsQuery);
  return Array.isArray(slugs) ? slugs : [];
}

export async function getAllPosts(): Promise<SanityPost[]> {
  const client = getSanityReadClient();
  if (!client) {
    return [];
  }

  const rows = await client.fetch<RawList[]>(postListQuery);
  if (!Array.isArray(rows)) {
    return [];
  }

  return rows.map((row) => mapSanityPost(row));
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  const client = getSanityReadClient();
  if (!client || !slug) {
    return null;
  }

  const row = await client.fetch<RawList | null>(postBySlugQuery, { slug });
  if (!row || !row.slug) {
    return null;
  }

  return mapSanityPost(row);
}

export { isSanityConfigured };
