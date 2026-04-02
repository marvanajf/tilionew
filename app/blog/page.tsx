import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { buildPageMetadata } from "@/components/seo/metadata";
import { Container } from "@/components/ui/container";
import { blogPostSlugs } from "@/lib/routes";
import { getAllPosts, isSanityConfigured } from "@/lib/sanity/api";
import { siteConfig } from "@/lib/site-config";

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
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background pt-20 pb-20 md:pt-28 md:pb-28 lg:pt-36 lg:pb-32">
        <div className="pointer-events-none absolute inset-0 z-0 mx-auto w-full max-w-7xl px-6 lg:px-8" aria-hidden>
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(24,24,27,0.085)_1px,transparent_1px)] bg-[length:12px_12px] md:bg-[length:14px_14px]" />
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1] mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="relative h-full">
            <div className="absolute left-0 right-0 top-0 h-[0.5px] bg-zinc-200" />
            <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-zinc-200" />
            <div className="absolute left-0 top-0 h-full w-[0.5px] bg-zinc-200" />
            <div className="absolute right-0 top-0 h-full w-[0.5px] bg-zinc-200" />
          </div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8 flex justify-center">
              <Image
                src={siteConfig.logoUrl}
                alt={siteConfig.name}
                width={140}
                height={36}
                className="h-9 w-auto"
                priority
              />
            </div>
            <h1 className="text-3xl font-medium leading-[1.1] tracking-tight text-zinc-900 md:text-4xl lg:text-5xl">
              Blog
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-600 md:text-lg">
              {sanityOn
                ? "Guides and notes on AEO, AI search visibility, and what we are seeing in the market."
                : "Blog posts will load from Sanity once your project ID and dataset are configured."}
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="relative bg-background py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="relative h-full">
            <div className="absolute left-0 top-0 h-full w-[0.5px] border-l border-dashed border-zinc-300" />
            <div className="absolute right-0 top-0 h-full w-[0.5px] border-r border-dashed border-zinc-300" />
          </div>
        </div>
        <Container>
        {sanityOn && posts.length > 0 ? (
          <ul className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <li key={post._id} className="flex flex-col rounded-xl border border-zinc-200 bg-background p-6">
                <p className="text-xs text-zinc-500">{formatDate(post.publishedAt)}</p>
                {post.author ? (
                  <div className="mt-2 flex items-center gap-2">
                    {post.author.headshotUrl ? (
                      <Image
                        src={post.author.headshotUrl}
                        alt={post.author.headshotAlt ?? post.author.name}
                        width={20}
                        height={20}
                        className="h-5 w-5 rounded-full object-cover"
                      />
                    ) : null}
                    <span className="text-xs text-zinc-500">
                      {post.author.name}
                      {post.author.role ? ` · ${post.author.role}` : ""}
                    </span>
                  </div>
                ) : null}
                <Link href={`/blog/${post.slug}`} className="mt-3 block text-base font-semibold tracking-tight text-zinc-900 hover:underline">
                  {post.title}
                </Link>
                {post.excerpt ? <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">{post.excerpt}</p> : null}
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-block text-sm font-medium text-[#1d4ed8] underline-offset-4 hover:underline"
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
    </>
  );
}
