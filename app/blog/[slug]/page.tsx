import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { PostPortableText } from "@/components/blog/portable-text";
import { buildPageMetadata } from "@/components/seo/metadata";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";
import { getAllPostSlugs, getPostBySlug, isSanityConfigured } from "@/lib/sanity/api";

export const revalidate = 60;
export const dynamicParams = true;

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
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

  const base: Metadata = {
    title,
    description,
    alternates: {
      canonical,
    },
  };

  if (post.featuredImage?.url) {
    return {
      ...base,
      openGraph: {
        ...base.openGraph,
        images: [{ url: post.featuredImage.url, alt: post.featuredImage.alt ?? title }],
      },
    };
  }

  return base;
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

  return (
    <article className="py-12 md:py-16">
      <Container>
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm text-zinc-500">{formatDate(post.publishedAt)}</p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-zinc-900 md:text-4xl">{post.title}</h1>
          {post.excerpt ? <p className="mt-6 text-base leading-relaxed text-zinc-600 md:text-lg">{post.excerpt}</p> : null}
        </header>

        {post.featuredImage?.url ? (
          <div className="relative mx-auto mt-10 aspect-[16/9] max-w-4xl overflow-hidden rounded-xl border border-zinc-200">
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.alt ?? ""}
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>
        ) : null}

        <div className="mx-auto mt-12">
          <PostPortableText value={post.body} />
        </div>
      </Container>
    </article>
  );
}
