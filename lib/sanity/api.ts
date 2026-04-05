import { unstable_cache } from "next/cache";

import { getSanityReadClient, isSanityConfigured } from "@/lib/sanity/client";
import { mapSanityPost } from "@/lib/sanity/mappers";
import { postBySlugQuery, postListQuery, postSlugsQuery } from "@/lib/sanity/queries";
import type { SanityPost } from "@/lib/sanity/types";

type RawList = Parameters<typeof mapSanityPost>[0];

async function fetchAllPostSlugs(): Promise<string[]> {
  const client = getSanityReadClient();
  if (!client) return [];

  const slugs = await client.fetch<string[]>(postSlugsQuery, {});
  if (!Array.isArray(slugs)) return [];
  return slugs.map((s) => s.replace(/^\/+/, ""));
}

/** Tagged for `revalidateTag("blog")` so sitemap, blog index and feeds pick up new posts after webhook revalidation. */
export async function getAllPostSlugs(): Promise<string[]> {
  if (!getSanityReadClient()) return [];
  return unstable_cache(fetchAllPostSlugs, ["sanity-post-slugs"], {
    tags: ["blog"],
    revalidate: 3600,
  })();
}

async function fetchAllPosts(): Promise<SanityPost[]> {
  const client = getSanityReadClient();
  if (!client) return [];

  const rows = await client.fetch<RawList[]>(postListQuery, {});
  if (!Array.isArray(rows)) {
    return [];
  }

  return rows.map((row) => mapSanityPost(row));
}

export async function getAllPosts(): Promise<SanityPost[]> {
  if (!getSanityReadClient()) return [];
  return unstable_cache(fetchAllPosts, ["sanity-post-list"], {
    tags: ["blog"],
    revalidate: 3600,
  })();
}

async function fetchPostBySlug(slug: string): Promise<SanityPost | null> {
  const client = getSanityReadClient();
  if (!client || !slug) {
    return null;
  }

  let row = await client.fetch<RawList | null>(postBySlugQuery, { slug }, {});
  if (!row) {
    row = await client.fetch<RawList | null>(postBySlugQuery, { slug: `/${slug}` }, {});
  }
  if (!row || !row.slug) {
    return null;
  }

  return mapSanityPost(row);
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  if (!getSanityReadClient() || !slug) {
    return null;
  }
  return unstable_cache(
    async () => fetchPostBySlug(slug),
    ["sanity-post-by-slug", slug],
    { tags: ["blog"], revalidate: 3600 },
  )();
}

export { isSanityConfigured };
