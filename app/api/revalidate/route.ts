import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (!process.env.SANITY_REVALIDATE_SECRET || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  // Purges `unstable_cache` entries tagged `blog` (see lib/sanity/api.ts) so sitemap, blog index and feeds refetch Sanity.
  revalidateTag("blog", "max");
  revalidatePath("/blog", "page");
  revalidatePath("/sitemap.xml", "page");
  revalidatePath("/feed.xml", "page");

  return NextResponse.json({ revalidated: true });
}
