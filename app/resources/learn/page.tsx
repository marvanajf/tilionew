import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { buildPageMetadata } from "@/components/seo/metadata";
import { Container } from "@/components/ui/container";
import { learnArticles, type LearnArticle } from "@/lib/learn-articles";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Learn | AEO and AI Visibility Guides",
    description:
      "Practical guides on answer engine optimisation, AI visibility measurement, citations, prompts and how to improve how your business appears in AI-generated answers.",
    path: "/resources/learn",
  }),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const categoryColours: Record<string, string> = {
  Foundations: "bg-blue-50 text-blue-700",
  Measurement: "bg-violet-50 text-violet-700",
  Content: "bg-emerald-50 text-emerald-700",
  Strategy: "bg-amber-50 text-amber-700",
};

export default function LearnPage() {
  return (
    <>
    <section className="relative overflow-hidden bg-background pt-20 pb-20 md:pt-28 md:pb-28 lg:pt-36 lg:pb-32">
      {/* Dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 mx-auto w-full max-w-7xl px-6 lg:px-8"
        aria-hidden
      >
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(24,24,27,0.085)_1px,transparent_1px)] bg-[length:12px_12px] md:bg-[length:14px_14px]" />
      </div>

      {/* Framing lines */}
      <div className="pointer-events-none absolute inset-0 z-[1] mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="relative h-full">
          <div className="absolute left-0 right-0 top-0 h-[0.5px] bg-zinc-200" />
          <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-zinc-200" />
          <div className="absolute left-0 top-0 h-full w-[0.5px] bg-zinc-200" />
          <div className="absolute right-0 top-0 h-full w-[0.5px] bg-zinc-200" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src={siteConfig.logoUrl}
              alt={siteConfig.name}
              width={140}
              height={36}
              className="h-9 w-auto"
            />
          </div>
          <h1 className="text-3xl font-medium leading-[1.1] tracking-tight text-zinc-900 md:text-4xl lg:text-5xl">
            Learn
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-600 md:text-lg">
            Practical guides on AEO, AI visibility measurement, citations and how to improve how your business shows up in AI-generated answers.
          </p>
        </div>
      </div>
    </section>

    <section className="relative bg-background pb-20 md:pb-28">
      <div className="pointer-events-none absolute inset-0 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="relative h-full">
          <div className="absolute left-0 right-0 top-0 h-[0.5px] bg-zinc-200" />
          <div className="absolute left-0 top-0 h-full w-[0.5px] border-l border-dashed border-zinc-300" />
          <div className="absolute right-0 top-0 h-full w-[0.5px] border-r border-dashed border-zinc-300" />
        </div>
      </div>
      <Container>
        <ul className="grid gap-5 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {learnArticles.map((article) => (
            <li key={article.title}>
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
    </>
  );
}

function ArticleCard({ article }: { article: LearnArticle }) {
  const colourClass = categoryColours[article.category] ?? "bg-zinc-100 text-zinc-600";

  const inner = (
    <div className="flex h-full flex-col rounded-xl border border-zinc-200 bg-background p-6 transition-colors hover:border-zinc-300">
      <span className={`inline-flex self-start rounded-md px-2 py-0.5 text-xs font-medium ${colourClass}`}>
        {article.category}
      </span>
      <h2 className="mt-3 text-base font-semibold leading-snug tracking-tight text-zinc-900">{article.title}</h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">{article.description}</p>
      <div className="mt-5">
        {article.href ? (
          <span className="text-sm font-medium text-[#1d4ed8] underline-offset-4 group-hover:underline">Read guide</span>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-zinc-300" />
            Coming soon
          </span>
        )}
      </div>
    </div>
  );

  if (article.href) {
    return <Link href={article.href} className="group block h-full">{inner}</Link>;
  }
  return <div className="h-full">{inner}</div>;
}
