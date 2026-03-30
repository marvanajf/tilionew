import type { Metadata } from "next";
import Link from "next/link";

import { buildPageMetadata } from "@/components/seo/metadata";
import { Container } from "@/components/ui/container";
import { blogPostSlugs } from "@/lib/routes";
import { getAllPosts, isSanityConfigured } from "@/lib/sanity/api";

export const revalidate = 60;

export const metadata: Metadata = buildPageMetadata({
  title: "Blog",
  description: "Practical notes on answer engine optimisation, AI visibility, and how brands show up in AI-generated answers.",
  path: "/blog",
});

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default async function BlogIndexPage() {
  const sanityOn = isSanityConfigured();
  const posts = sanityOn ? await getAllPosts() : [];

  return (
    <section className="py-12 md:py-16">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">Blog</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 md:text-base">
          {sanityOn
            ? "Guides and notes on AEO, AI search visibility, and what we are seeing in the market."
            : "Blog posts will load from Sanity once your project ID and dataset are configured. Until then, routes below are scaffold shells."}
        </p>

        {sanityOn && posts.length > 0 ? (
          <ul className="mt-10 space-y-8 border-t border-zinc-200 pt-10">
            {posts.map((post) => (
              <li key={post._id} className="max-w-3xl border-b border-zinc-100 pb-8 last:border-b-0">
                <p className="text-xs text-zinc-500">{formatDate(post.publishedAt)}</p>
                <Link href={`/blog/${post.slug}`} className="mt-2 block text-lg font-semibold tracking-tight text-zinc-900 hover:underline">
                  {post.title}
                </Link>
                {post.excerpt ? <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-base">{post.excerpt}</p> : null}
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-3 inline-block text-sm font-medium text-[#1d4ed8] underline-offset-4 hover:underline"
                >
                  Read article
                </Link>
              </li>
            ))}
          </ul>
        ) : sanityOn && posts.length === 0 ? (
          <p className="mt-10 text-sm text-zinc-600">
            No published posts yet. Add documents of type <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs">post</code> in Sanity and
            publish them.
          </p>
        ) : (
          <ul className="mt-8 space-y-2 text-sm">
            {blogPostSlugs.map((slug) => (
              <li key={slug}>
                <Link className="text-zinc-700 hover:text-zinc-900 hover:underline" href={`/blog/${slug}`}>
                  /blog/{slug}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
