import { getAllPosts } from "@/lib/sanity/api";
import { siteConfig } from "@/lib/site-config";

export const revalidate = 3600;

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = await getAllPosts();
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
  const feedUrl = `${baseUrl}/feed.xml`;
  const blogUrl = `${baseUrl}/blog`;

  const lastBuildDate = posts[0]?.updatedAt ?? posts[0]?.publishedAt
    ? new Date(posts[0].updatedAt ?? posts[0].publishedAt).toUTCString()
    : new Date().toUTCString();

  const items = posts
    .map((post) => {
      const url = `${baseUrl}/blog/${post.slug}`;
      const title = escapeXml(post.metaTitle?.trim() || post.title);
      const description = escapeXml(
        post.metaDescription?.trim() || post.excerpt || post.title
      );
      const pubDate = new Date(post.publishedAt).toUTCString();

      return `    <item>
      <title>${title}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${description}</description>
      <pubDate>${pubDate}</pubDate>${post.featuredImage?.url ? `\n      <enclosure url="${escapeXml(post.featuredImage.url)}" type="image/jpeg" length="0"/>` : ""}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(siteConfig.name)} Blog</title>
    <link>${blogUrl}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
    <language>en-gb</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <image>
      <url>${siteConfig.ogImage}</url>
      <title>${escapeXml(siteConfig.name)} Blog</title>
      <link>${blogUrl}</link>
    </image>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
