import type { Metadata } from "next";
import Link from "next/link";

import { buildPageMetadata } from "@/components/seo/metadata";
import { BreadcrumbJsonLd, ItemListJsonLd, WebPageJsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { learnArticles, type LearnArticle } from "@/lib/learn-articles";
import { learnCentreRoute, learnIndexRoute } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";

const PAGE_URL = `${siteConfig.siteUrl}${learnIndexRoute}`;
const PAGE_DATE = "2026-04-02";

const publishedArticles = learnArticles.filter((a): a is LearnArticle & { href: string } => a.href !== null);

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Learn | AEO and AI Visibility Guides",
    description:
      "Practical guides on answer engine optimisation, AI visibility measurement, citations, tracked prompts and how to improve how your business appears in AI-generated answers.",
    path: learnIndexRoute,
  }),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function LearnIndexPage() {
  const itemListEntries = publishedArticles.map((a) => ({
    name: a.title,
    url: `${siteConfig.siteUrl}${a.href}`,
    description: a.description,
  }));

  return (
    <div>
      <WebPageJsonLd
        name="Learn | AEO and AI Visibility Guides | Tilio"
        description="Practical guides on answer engine optimisation, AI visibility measurement, citations, tracked prompts and how to improve how your business appears in AI-generated answers."
        url={PAGE_URL}
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
      />
      <ItemListJsonLd
        name="Tilio Learn guides"
        description="Published guides on AI visibility, AEO and measurement."
        url={PAGE_URL}
        items={itemListEntries}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.siteUrl },
          { name: "Learn", url: PAGE_URL },
        ]}
      />

      <section className="relative overflow-hidden bg-background py-12 md:py-16">
        <div className="pointer-events-none absolute inset-0 z-0 mx-auto w-full max-w-7xl px-6 lg:px-8" aria-hidden>
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(24,24,27,0.085)_1px,transparent_1px)] bg-[length:12px_12px] md:bg-[length:14px_14px]" />
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1] mx-auto w-full max-w-7xl px-6 lg:px-8" aria-hidden>
          <div className="relative h-full min-h-[1px]">
            <div className="absolute left-0 right-0 top-0 h-[0.5px] bg-zinc-200" />
            <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-zinc-200" />
            <div className="absolute left-0 top-0 h-full w-[0.5px] bg-zinc-200" />
            <div className="absolute right-0 top-0 h-full w-[0.5px] bg-zinc-200" />
          </div>
        </div>

        <Container className="relative z-10 sm:!px-8">
          <div className="mx-auto max-w-2xl text-center">
            <nav className="flex justify-center" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center justify-center gap-2 text-sm text-zinc-500">
                <li>
                  <Link href="/" className="hover:text-zinc-900">
                    Home
                  </Link>
                </li>
                <li aria-hidden className="text-zinc-300">
                  /
                </li>
                <li className="text-zinc-400">Learn</li>
              </ol>
            </nav>
            <h1 className="mt-6 text-3xl font-medium leading-[1.1] tracking-tight text-zinc-900 md:text-4xl">
              Learn
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-600 md:text-lg">
              Practical guides on AEO, AI visibility measurement, citations and prompts — structured so you can review, compare and act on what AI
              systems surface about your market.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-500">
              Prefer the full learn centre layout?{" "}
              <Link href={learnCentreRoute} className="font-medium text-zinc-700 underline-offset-2 hover:text-zinc-900 hover:underline">
                Open learn centre
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <section className="relative bg-background pb-20 md:pb-28">
        <div className="pointer-events-none absolute inset-0 mx-auto w-full max-w-7xl px-6 lg:px-8" aria-hidden>
          <div className="relative h-full">
            <div className="absolute left-0 right-0 top-0 h-[0.5px] bg-zinc-200" />
            <div className="absolute left-0 top-0 h-full w-[0.5px] border-l border-dashed border-zinc-300" />
            <div className="absolute right-0 top-0 h-full w-[0.5px] border-r border-dashed border-zinc-300" />
          </div>
        </div>
        <Container className="sm:!px-8">
          <ul className="mx-auto max-w-3xl space-y-6 pt-10">
            {learnArticles.map((article) => (
              <li key={article.title}>
                <LearnGuideRow article={article} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </div>
  );
}

function LearnGuideRow({ article }: { article: LearnArticle }) {
  if (!article.href) {
    return (
      <div className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">{article.category}</p>
        <p className="mt-2 text-base font-semibold text-zinc-900">{article.title}</p>
        <p className="mt-2 text-sm text-zinc-600">{article.description}</p>
        <p className="mt-3 text-xs text-zinc-400">Coming soon</p>
      </div>
    );
  }

  return (
    <article className="rounded-xl border border-zinc-200 bg-background p-6 transition-colors hover:border-zinc-300">
      <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{article.category}</p>
      <h2 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900">
        <Link href={article.href} className="hover:text-[#1d4ed8]">
          {article.title}
        </Link>
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">{article.description}</p>
      <p className="mt-4">
        <Link href={article.href} className="text-sm font-medium text-[#1d4ed8] underline-offset-4 hover:underline">
          Read guide
        </Link>
      </p>
    </article>
  );
}
