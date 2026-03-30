import { NextResponse } from "next/server";

import { getSanityReadClient, isSanityConfigured } from "@/lib/sanity/client";
import { postBySlugQuery, postSlugsQuery } from "@/lib/sanity/queries";

export async function GET() {
  const configured = isSanityConfigured();
  const client = getSanityReadClient();

  if (!configured || !client) {
    return NextResponse.json({ error: "Sanity not configured", configured });
  }

  const slugs = await client.fetch(postSlugsQuery);
  const post = await client.fetch(postBySlugQuery, { slug: "how-to-get-found-in-ai-search" });

  return NextResponse.json({
    configured,
    allSlugs: slugs,
    postForSlug: post,
    env: {
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "NOT SET",
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "NOT SET",
    },
  });
}
