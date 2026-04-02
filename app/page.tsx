import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { buildPageMetadata } from "@/components/seo/metadata";
import { LogoCycler } from "@/components/marketing/logo-cycler";
import {
  MarketingHero,
  OverarchingFaqSection,
  VisibilitySourcesSection,
} from "@/components/marketing/sections";
import { Container } from "@/components/ui/container";
import { getAllPosts, isSanityConfigured } from "@/lib/sanity/api";

export const revalidate = 60;

export const metadata: Metadata = buildPageMetadata({
  title: "UK AEO Agency for AI Search Visibility",
  description:
    "Tilio is a UK AEO agency helping brands improve AI search visibility through audits, content improvement, monitoring, and ongoing implementation. Plans from £499/month.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <MarketingHero
        eyebrow="Answer Engine Optimization"
        title="Measure and improve your AI visibility"
        description="Tilio helps businesses understand how AI systems describe their brand, benchmark competitors, and improve the content that drives mentions and citations."
        primaryCta={{ href: "/contact", label: "Book call" }}
        secondaryCta={{ href: "/ai-checker", label: "Free AI Visibility tool" }}
        secondaryCtaVariant="white"
        size="tall"
        ambientDots
      >
        <LogoCycler />
      </MarketingHero>
      <VisibilitySourcesSection />
      <OverarchingFaqSection />
      <FeaturedPostsSection />
    </>
  );
}

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

async function FeaturedPostsSection() {
  const sanityOn = isSanityConfigured();
  if (!sanityOn) return null;

  const posts = await getAllPosts();
  const featured = posts.slice(0, 2);
  if (featured.length === 0) return null;

  return (
    <section className="relative bg-background py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="relative h-full">
          <div className="absolute left-0 right-0 top-0 h-[0.5px] border-t border-dashed border-zinc-300" />
          <div className="absolute left-0 top-0 h-full w-[0.5px] border-l border-dashed border-zinc-300" />
          <div className="absolute right-0 top-0 h-full w-[0.5px] border-r border-dashed border-zinc-300" />
        </div>
      </div>
      <Container>
        <div className="text-center">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">From the blog</h2>
          <Link href="/blog" className="mt-2 inline-block text-sm font-medium text-zinc-500 underline-offset-4 hover:text-zinc-900 hover:underline">
            View all
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featured.map((post) => (
            <article key={post._id} className="rounded-xl border border-zinc-200 bg-background p-6">
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
              <Link
                href={`/blog/${post.slug}`}
                className="mt-3 block text-base font-semibold tracking-tight text-zinc-900 hover:underline"
              >
                {post.title}
              </Link>
              {post.excerpt ? (
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{post.excerpt}</p>
              ) : null}
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block text-sm font-medium text-[#1d4ed8] underline-offset-4 hover:underline"
              >
                Read article
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
