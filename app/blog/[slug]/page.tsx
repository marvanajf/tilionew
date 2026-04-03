import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { PostPortableText } from "@/components/blog/portable-text";
import { TableOfContents, TocMobile } from "@/components/blog/table-of-contents";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { buildPageMetadata } from "@/components/seo/metadata";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";
import { getAllPostSlugs, getPostBySlug, isSanityConfigured } from "@/lib/sanity/api";
import { extractTocFromBody } from "@/lib/toc";

export const revalidate = 60;
export const dynamicParams = true;

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

function FramingLines() {
  return (
    <div className="pointer-events-none absolute inset-0 mx-auto w-full max-w-7xl px-6 lg:px-8" aria-hidden>
      <div className="relative h-full min-h-[1px]">
        <div className="absolute left-0 right-0 top-0 h-[0.5px] bg-zinc-200" />
        <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-zinc-200" />
        <div className="absolute left-0 top-0 h-full w-[0.5px] bg-zinc-200" />
        <div className="absolute right-0 top-0 h-full w-[0.5px] bg-zinc-200" />
      </div>
    </div>
  );
}

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const sanityOn = isSanityConfigured();

  if (!sanityOn) {
    return buildPageMetadata({
      title: `Blog: ${slug}`,
      description: "Blog post placeholder until Sanity is connected.",
      path: `/blog/${slug}`,
    });
  }

  const post = await getPostBySlug(slug);
  if (!post) {
    return buildPageMetadata({
      title: "Post not found",
      description: "This post could not be found.",
      path: `/blog/${slug}`,
    });
  }

  const title = post.metaTitle?.trim() || post.title;
  const description = post.metaDescription?.trim() || post.excerpt || "Blog article from Tilio.";
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
  const rawCanonical = post.canonicalUrl?.trim();
  let canonical = `${baseUrl}/blog/${slug}`;
  if (rawCanonical) {
    canonical = rawCanonical.startsWith("http")
      ? rawCanonical
      : `${baseUrl}${rawCanonical.startsWith("/") ? "" : "/"}${rawCanonical}`;
  }

  const postUrl = `${baseUrl}/blog/${slug}`;
  const ogImage = post.featuredImage?.url
    ? [{ url: post.featuredImage.url, width: 1200, height: 630, alt: post.featuredImage.alt ?? title }]
    : [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: `${title} | ${siteConfig.name}` }];
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      title: fullTitle,
      description,
      url: postUrl,
      siteName: siteConfig.name,
      images: ogImage,
      ...(post.publishedAt ? { publishedTime: post.publishedAt } : {}),
      ...(post.updatedAt ? { modifiedTime: post.updatedAt } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage[0].url],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const sanityOn = isSanityConfigured();

  if (!sanityOn) {
    return <Section title={`Blog Post: ${slug}`} />;
  }

  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const toc = extractTocFromBody(post.body);
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
  const rawCanonical = post.canonicalUrl?.trim();
  const postUrl = rawCanonical
    ? rawCanonical.startsWith("http")
      ? rawCanonical
      : `${baseUrl}${rawCanonical.startsWith("/") ? "" : "/"}${rawCanonical}`
    : `${baseUrl}/blog/${slug}`;

  return (
    <article>
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt ?? post.title}
        url={postUrl}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
        imageUrl={post.featuredImage?.url ?? undefined}
        author={post.author ? { name: post.author.name, linkedin: post.author.linkedin } : undefined}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.siteUrl },
          { name: "Blog", url: `${siteConfig.siteUrl}/blog` },
          { name: post.title, url: postUrl },
        ]}
      />

      {/* Title / meta section */}
      <div className="relative overflow-clip py-12 md:py-16">
        <FramingLines />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm text-zinc-500">{formatDate(post.publishedAt)}</p>
            {post.author ? (
              <div className="mt-3 flex items-center justify-center gap-2">
                {post.author.headshotUrl ? (
                  <Image
                    src={post.author.headshotUrl}
                    alt={post.author.headshotAlt ?? post.author.name}
                    width={24}
                    height={24}
                    className="h-6 w-6 rounded-full object-cover"
                  />
                ) : null}
                <span className="text-sm text-zinc-500">
                  <span className="font-medium text-zinc-700">{post.author.name}</span>
                  {post.author.role ? `, ${post.author.role}` : ""}
                </span>
              </div>
            ) : null}
            <h1 className="mt-6 text-3xl font-medium leading-[1.1] tracking-tight text-zinc-900 md:text-4xl">{post.title}</h1>
            {post.excerpt ? <p className="mt-6 text-base leading-relaxed text-zinc-600 md:text-lg">{post.excerpt}</p> : null}
          </div>
        </div>
      </div>

      {/* Featured image section — dot pattern contained within framing */}
      {post.featuredImage?.url ? (
        <div className="relative overflow-clip py-10 md:py-12">
          <FramingLines />
          {/* Dot pattern — clipped inside the framing lines */}
          <div className="pointer-events-none absolute inset-0 z-0 mx-auto w-full max-w-7xl px-6 lg:px-8" aria-hidden>
            <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(24,24,27,0.07)_1px,transparent_1px)] bg-[length:12px_12px] md:bg-[length:14px_14px]" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-7xl px-8 sm:px-6 lg:px-8">
            <div className="relative mx-auto aspect-[16/9] max-w-4xl overflow-hidden rounded-xl border border-zinc-200">
              <Image
                src={post.featuredImage.url}
                alt={post.featuredImage.alt ?? ""}
                fill
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}

      {/* Post body with sidebar — overflow-clip keeps framing lines clipped without breaking sticky */}
      <div className="relative overflow-clip">
        <FramingLines />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-4">

            {/* Sidebar — pt-16 on the column div aligns content with article top */}
            <div className="hidden pt-16 pb-16 lg:block">
              <TableOfContents entries={toc} postUrl={postUrl} />
            </div>

            {/* Article content */}
            <div className="col-span-1 py-10 lg:col-span-3 lg:py-16 lg:pl-12">
              {/* Mobile TOC — hidden on desktop */}
              <div className="lg:hidden">
                <TocMobile entries={toc} />
              </div>

              <PostPortableText value={post.body} />

              <div className="mt-12 border-t border-zinc-200 pt-8">
                <a
                  href="/blog"
                  className="inline-flex items-center gap-2 rounded-md py-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
                    <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
                  </svg>
                  Back to blog
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </article>
  );
}
