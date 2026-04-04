import type { Metadata } from "next";
import Link from "next/link";

import { TableOfContents, TocMobile } from "@/components/blog/table-of-contents";
import { LearnGuideRelatedReading } from "@/components/learn/learn-guide-related-reading";
import { buildLearnGuidePageMetadata } from "@/components/seo/metadata";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { learnIndexRoute } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
import type { TocEntry } from "@/lib/toc";

const LEARN_INDEX_URL = `${siteConfig.siteUrl}${learnIndexRoute}`;

const PAGE_URL = `${siteConfig.siteUrl}/learn/what-focused-ai-visibility-work-can-do`;
const PAGE_DATE = "2026-04-04";

export const metadata: Metadata = {
  ...buildLearnGuidePageMetadata({
    title: "What focused AI visibility work can do",
    description:
      "Public case studies show AI visibility can move in weeks when brands monitor the right prompts, improve the right pages and act on the right signals—with 7x, 3x and top-five category examples.",
    path: "/learn/what-focused-ai-visibility-work-can-do",
    publishedAt: PAGE_DATE,
  }),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const TOC_ENTRIES: TocEntry[] = [
  {
    id: "what-happens-when-businesses-invest-ai-visibility",
    text: "What happens when businesses invest AI visibility",
    level: 2,
  },
  { id: "why-this-matters-now", text: "Why this matters now", level: 2 },
  { id: "what-good-ai-visibility-work-changes", text: "What good AI visibility work changes", level: 2 },
  { id: "why-work-with-tilio", text: "Why work with Tilio", level: 2 },
];

const PROOF_ITEMS = [
  {
    title: "7x in one month",
    body: "A public AI visibility case study showed growth from 3.2% to 22.2% in a single month.",
  },
  {
    title: "3x in one week",
    body: "Another public case study showed ChatGPT visibility tripling in one week.",
  },
  {
    title: "0% to top 5",
    body: "Another brand moved from zero visibility to 11% visibility and a top-5 category position within a month.",
  },
];

export default function WhatFocusedAiVisibilityWorkCanDoPage() {
  return (
    <article>
      <WebPageJsonLd
        name="What focused AI visibility work can do | Tilio"
        description="Public case studies show AI visibility can move in weeks when brands monitor the right prompts, improve the right pages and act on the right signals—with examples from the market."
        url={PAGE_URL}
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.siteUrl },
          { name: "Learn", url: LEARN_INDEX_URL },
          { name: "What focused AI visibility work can do", url: PAGE_URL },
        ]}
      />

      <div className="relative overflow-clip py-12 md:py-16">
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
          <div className="mx-auto max-w-3xl px-3 sm:px-4 md:px-0">
            <nav className="flex items-center gap-2 text-sm text-zinc-500" aria-label="Breadcrumb">
              <Link href={learnIndexRoute} className="hover:text-zinc-900">
                Learn
              </Link>
              <span className="hidden sm:inline" aria-hidden>
                /
              </span>
              <span className="hidden text-zinc-400 sm:inline">Strategy</span>
            </nav>

            <h1 className="mt-6 text-3xl font-medium leading-[1.1] tracking-tight text-zinc-900 md:text-4xl">
              What focused AI visibility work can do
            </h1>

            <p className="mt-4 text-base leading-relaxed text-zinc-600 md:text-lg">
              When brands monitor the right prompts, improve the right pages and act on the right signals, AI visibility can move in weeks, not months.
              Examples include 7x growth in one month, 3x growth in a week, and a move from 0% visibility to top-5 category presence within a month.
            </p>

            <div className="mt-6 flex flex-row flex-wrap items-center gap-x-5 gap-y-2 border-t border-zinc-200 bg-transparent pt-5 text-sm text-zinc-500">
              <span className="inline-flex shrink-0 rounded-md bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-800">Strategy</span>
              <span className="shrink-0">4 min read</span>
            </div>
          </div>
        </Container>
      </div>

      <div className="relative bg-background pb-20 md:pb-28">
        <div className="pointer-events-none absolute inset-0 mx-auto w-full max-w-7xl px-6 lg:px-8" aria-hidden>
          <div className="relative h-full">
            <div className="absolute left-0 right-0 top-0 h-[0.5px] bg-zinc-200" />
            <div className="absolute left-0 top-0 h-full w-[0.5px] border-l border-dashed border-zinc-300" />
            <div className="absolute right-0 top-0 h-full w-[0.5px] border-r border-dashed border-zinc-300" />
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-12 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
            <div className="hidden lg:block">
              <TableOfContents entries={TOC_ENTRIES} postUrl={PAGE_URL} />
            </div>

            <div className="min-w-0 px-4 pb-4 sm:px-5 lg:px-0 lg:pr-8">
              <div className="mb-8 lg:hidden">
                <TocMobile entries={TOC_ENTRIES} />
              </div>

              <div className="mx-auto max-w-3xl">
                <section className="border-t border-zinc-200 pt-10" aria-labelledby="what-happens-when-businesses-invest-ai-visibility">
                  <h2 id="what-happens-when-businesses-invest-ai-visibility" className="text-xl font-semibold tracking-tight text-zinc-900">
                    What happens when businesses invest AI visibility
                  </h2>
                  <div className="mt-8 grid gap-10 border-y border-zinc-200 py-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-zinc-200 md:py-10">
                    {PROOF_ITEMS.map((item) => (
                      <div key={item.title} className="md:px-6 md:first:pl-0 md:last:pr-0">
                        <p className="text-lg font-semibold tracking-tight text-zinc-900">{item.title}</p>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-600 md:text-base">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="mt-14 space-y-14">
                  <section className="space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base" aria-labelledby="why-this-matters-now">
                    <h2 id="why-this-matters-now" className="text-xl font-semibold tracking-tight text-zinc-900">
                      Why this matters now
                    </h2>
                    <p>
                      AI-assisted discovery is becoming part of how people research brands and solutions. Google says AI features in Search can help
                      users find your website, OpenAI says ChatGPT search connects people with web content inside conversation, and Adobe has reported
                      strong growth in traffic from generative AI sources.
                    </p>
                  </section>

                  <section className="space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base" aria-labelledby="what-good-ai-visibility-work-changes">
                    <h2 id="what-good-ai-visibility-work-changes" className="text-xl font-semibold tracking-tight text-zinc-900">
                      What good AI visibility work changes
                    </h2>
                    <p>
                      It improves where your brand appears, how it is described, which pages get cited, and how quickly your team can act on the data.
                      Semrush has also reported that AI systems frequently cite pages outside the top traditional rankings, which means brands have a
                      real opportunity to earn visibility even where classic SEO alone is not enough.
                    </p>
                  </section>

                  <section className="space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base" aria-labelledby="why-work-with-tilio">
                    <h2 id="why-work-with-tilio" className="text-xl font-semibold tracking-tight text-zinc-900">
                      Why work with Tilio
                    </h2>
                    <p>
                      Tilio helps brands turn AI visibility into action. We monitor how your brand appears across AI search surfaces, prioritise the
                      actions that matter most, create content built for AI-led discovery, and report on the metrics that matter to your team.
                    </p>
                    <p>
                      The goal is not just to watch what AI says. It is to improve how your brand appears, where it gets cited, and how often it is
                      part of the conversation.
                    </p>
                    <div className="pt-2">
                      <PrimaryCta href="/contact" label="Book a call" />
                    </div>
                  </section>
                </div>

                <LearnGuideRelatedReading currentHref="/learn/what-focused-ai-visibility-work-can-do" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function PrimaryCta({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center rounded-[10px] border border-[#93c5fd] bg-[#93c5fd]/20 px-6 py-2.5 text-sm font-medium text-[#1d4ed8] transition-all duration-200 hover:bg-[#93c5fd] hover:text-[#1e3a8a]"
    >
      <span className="mr-2">{label}</span>
      <span className="inline-flex rounded-[10px] border border-[#93c5fd] p-1 transition-all duration-200 group-hover:border-[#60a5fa]">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
