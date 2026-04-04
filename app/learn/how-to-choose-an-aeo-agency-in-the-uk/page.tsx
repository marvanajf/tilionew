import type { Metadata } from "next";
import Link from "next/link";

import { LearnGuideRelatedReading } from "@/components/learn/learn-guide-related-reading";
import { buildLearnGuidePageMetadata } from "@/components/seo/metadata";
import { BreadcrumbJsonLd, FaqPageJsonLd, WebPageJsonLd } from "@/components/seo/json-ld";
import { TableOfContents, TocMobile } from "@/components/blog/table-of-contents";
import { Container } from "@/components/ui/container";
import { learnIndexRoute } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
import type { TocEntry } from "@/lib/toc";

const LEARN_INDEX_URL = `${siteConfig.siteUrl}${learnIndexRoute}`;

const PAGE_URL = `${siteConfig.siteUrl}/learn/how-to-choose-an-aeo-agency-in-the-uk`;
const PAGE_DATE = "2026-04-03";

export const metadata: Metadata = {
  ...buildLearnGuidePageMetadata({
    title: "How to choose an AEO agency in the UK",
    description:
      "Learn how to choose an AEO agency in the UK, what to look for, what to avoid, and how to tell the difference between real AEO work and vague AI SEO claims.",
    path: "/learn/how-to-choose-an-aeo-agency-in-the-uk",
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
    id: "start-by-asking-what-they-actually-mean-by-aeo",
    text: "Start by asking what they actually mean by AEO",
    level: 2,
  },
  { id: "look-for-tracked-prompts-not-just-screenshots", text: "Look for tracked prompts, not just screenshots", level: 2 },
  {
    id: "check-whether-they-separate-mentions-from-citations",
    text: "Check whether they separate mentions from citations",
    level: 2,
  },
  { id: "ask-how-they-benchmark-competitors-fairly", text: "Ask how they benchmark competitors fairly", level: 2 },
  {
    id: "make-sure-they-can-connect-the-data-to-page-level-changes",
    text: "Make sure they can connect the data to page-level changes",
    level: 2,
  },
  { id: "watch-for-over-promising", text: "Watch for over-promising", level: 2 },
  { id: "check-whether-they-have-a-clear-starting-point", text: "Check whether they have a clear starting point", level: 2 },
  {
    id: "what-a-good-aeo-agency-should-help-you-answer",
    text: "What a good AEO agency should help you answer",
    level: 2,
  },
];

const FAQ_ITEMS = [
  {
    question: "What is the difference between an AEO agency and an SEO agency that offers AEO?",
    answer:
      "An SEO agency that offers AEO will often approach it through a traditional SEO lens — blog content, schema, internal linking and on-page improvements. A specialist AEO agency is more likely to add prompt-based testing, citation analysis, competitor benchmarking and reporting that focuses on mentions, citations and share of voice in AI-generated answers.",
  },
  {
    question: "How do I know if an AEO agency is doing real measurement?",
    answer:
      "Look for tracked prompts, competitor comparison, mention and citation separation, page-level reporting and a clear explanation of what they do not claim to measure. If the proof is mostly screenshots and broad claims, the measurement is probably too thin.",
  },
  {
    question: "Should I start with an audit or a monthly plan?",
    answer:
      "For many businesses, the best starting point is an audit. That gives you a clearer baseline and helps show what to fix first. A monthly plan makes more sense when you already know AEO matters in your market and want regular tracking, content support and implementation.",
  },
  {
    question: "What should an AEO agency actually improve on the site?",
    answer:
      "Usually the pages closest to buying intent. That often means service pages, pricing pages, comparison pages, FAQs and other proof-led commercial pages that help buyers evaluate options.",
  },
  {
    question: "Can an AEO agency guarantee citations?",
    answer:
      "No. No credible agency should promise that. The real value is in improving the conditions that make stronger mentions, better positioning and more consistent citations more likely over time.",
  },
];

export default function HowToChooseAnAeoAgencyPage() {
  return (
    <article>
      <WebPageJsonLd
        name="How to choose an AEO agency in the UK | Tilio"
        description="Learn how to choose an AEO agency in the UK, what to look for, what to avoid, and how to tell the difference between real AEO work and vague AI SEO claims."
        url={PAGE_URL}
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
      />
      <FaqPageJsonLd questions={FAQ_ITEMS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.siteUrl },
          { name: "Learn", url: LEARN_INDEX_URL },
          { name: "How to choose an AEO agency in the UK", url: PAGE_URL },
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
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
              How to choose an AEO agency in the UK
            </h1>

            <p className="mt-4 text-base leading-relaxed text-zinc-600 md:text-lg">
              If you&rsquo;re looking for an AEO agency in the UK, you&rsquo;ve probably already noticed the problem.
            </p>

            <div className="mt-6 flex flex-row flex-wrap items-center gap-x-5 gap-y-2 border-t border-zinc-200 bg-transparent pt-5 text-sm text-zinc-500">
              <span className="inline-flex shrink-0 rounded-md bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700">Strategy</span>
              <span className="shrink-0">10 min read</span>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Body ─────────────────────────────────────────────────────────── */}
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

              <Prose>
                <p>
                  A lot of agencies now talk about AEO, GEO or AI SEO, but the quality of what sits behind those labels varies a lot. Some are doing
                  real, structured work. Others are mostly repackaging traditional SEO and adding a few AI search phrases on top.
                </p>
                <p>
                  That doesn&rsquo;t mean a generalist SEO agency can&rsquo;t help. Some can. But if you&rsquo;re trying to choose well, it helps to
                  know what good AEO work actually looks like and what warning signs to watch for.
                </p>
                <p>
                  This page is here to help with that. It is not a list of the &ldquo;best&rdquo; agencies. It is a practical guide to evaluating AEO
                  support properly, especially if you&rsquo;re comparing providers in the UK and want to understand what should sit behind the pitch.
                </p>
                <p>
                  If you want to see how Tilio approaches this in practice, you can explore our{" "}
                  <InlineLink href="/aeo-agency">AEO agency page</InlineLink>. If you want a defined starting point rather than a monthly plan, an{" "}
                  <InlineLink href="/ai-visibility-audit">AI Visibility Audit</InlineLink> is usually the best place to begin.
                </p>

                <h2 id="start-by-asking-what-they-actually-mean-by-aeo">Start by asking what they actually mean by AEO</h2>
                <p>This sounds basic, but it matters.</p>
                <p>
                  Some agencies use AEO to mean a light layer of SEO work aimed at AI search. That may include blog content, metadata improvements,
                  FAQs and schema. Some of that work is useful, but it does not necessarily add up to a real AEO process.
                </p>
                <p>A stronger AEO agency should be able to explain the work more clearly.</p>
                <p>That usually means they can talk about:</p>
                <ul>
                  <li>how visibility is measured across AI search platforms</li>
                  <li>what prompts are being tracked</li>
                  <li>how mentions and citations are handled separately</li>
                  <li>how competitors are benchmarked</li>
                  <li>how reporting turns into page-level actions</li>
                </ul>
                <p>If the explanation stays vague, the delivery usually will too.</p>

                <h2 id="look-for-tracked-prompts-not-just-screenshots">Look for tracked prompts, not just screenshots</h2>
                <p>One of the clearest signs of real AEO work is whether the agency uses tracked prompt sets.</p>
                <p>
                  If the proof mostly consists of screenshots from ChatGPT, Perplexity or Google AI Overviews, that is usually not enough. Screenshots
                  can be useful as examples, but they are not a methodology.
                </p>
                <p>
                  Good AEO work uses defined prompts grouped around real buyer intent. That gives you a more structured view of how your brand appears
                  across categories, comparisons, pricing questions, alternatives and shortlist behaviour.
                </p>
                <p>
                  That matters because AI visibility is not one-query deep. Buyers ask clusters of questions, not one neat keyword.
                </p>
                <p>
                  If you want to understand why prompt sets matter so much, our page on{" "}
                  <InlineLink href="/learn/how-tracked-prompts-work">how tracked prompts work</InlineLink> explains the logic behind them.
                </p>

                <h2 id="check-whether-they-separate-mentions-from-citations">Check whether they separate mentions from citations</h2>
                <p>This is another important test.</p>
                <p>A mention means your brand appeared in the answer.</p>
                <p>A citation means a source was used.</p>
                <p>Those are not the same thing, and an agency that blurs them together will usually give you weaker reporting and weaker recommendations.</p>
                <p>A stronger AEO agency should be able to show:</p>
                <ul>
                  <li>when your brand is being mentioned</li>
                  <li>when your site is being cited</li>
                  <li>which pages are being cited</li>
                  <li>where competitors are being cited more often</li>
                  <li>what that means in practical terms</li>
                </ul>
                <p>
                  That difference matters because citations usually give you a clearer route to action. If a pricing page, comparison page or service
                  page is being cited, that is something you can improve. If your brand is being mentioned but your site is not being used as a source,
                  that suggests a different issue.
                </p>
                <p>
                  Our page on <InlineLink href="/learn/mentions-vs-citations-in-ai-search">mentions vs citations in AI search</InlineLink> explains
                  that distinction in full if you want to go deeper.
                </p>

                <h2 id="ask-how-they-benchmark-competitors-fairly">Ask how they benchmark competitors fairly</h2>
                <p>AEO is not just about whether you show up. It is about how you show up compared with the right competitors.</p>
                <p>That means benchmarking matters. But it has to be done properly.</p>
                <p>
                  A good AEO agency should be comparing brands against the same prompt set, on the same platforms and across the same reporting
                  window. Otherwise the comparison is weak.
                </p>
                <p>
                  They should also be clear about who the competitor set actually is. That sounds obvious, but vague competitor selection is one of
                  the quickest ways to make reporting less useful.
                </p>
                <p>A strong benchmark should help answer questions like:</p>
                <ul>
                  <li>which competitors show up most often in the prompts that matter</li>
                  <li>where they are being cited more than you are</li>
                  <li>which topics or prompt groups they are strongest in</li>
                  <li>where you are visible but underperforming</li>
                  <li>what content or page gaps might explain the difference</li>
                </ul>
                <p>
                  If you want a deeper view of that, our page on{" "}
                  <InlineLink href="/learn/how-competitor-benchmarking-works-in-ai-search">
                    how competitor benchmarking works in AI search
                  </InlineLink>{" "}
                  explains the logic in more detail.
                </p>

                <h2 id="make-sure-they-can-connect-the-data-to-page-level-changes">
                  Make sure they can connect the data to page-level changes
                </h2>
                <p>This is where weak AEO work often falls apart.</p>
                <p>An agency may be able to show that visibility is weak. But can they turn that into useful action on the site?</p>
                <p>A good AEO agency should be able to connect measurement to practical changes such as:</p>
                <ul>
                  <li>tightening service pages that are too vague</li>
                  <li>improving pricing pages</li>
                  <li>adding clearer comparison or alternatives content</li>
                  <li>strengthening buyer FAQs</li>
                  <li>improving the pages most likely to earn citations</li>
                  <li>fixing weak internal links between commercial and supporting pages</li>
                </ul>
                <p>
                  That is a good test because AEO should not stop at visibility data. It should help you understand what to change and why.
                </p>
                <p>
                  If the work stays at the &ldquo;interesting dashboard&rdquo; stage, it is much less likely to move anything commercially meaningful.
                </p>

                <h2 id="watch-for-over-promising">Watch for over-promising</h2>
                <p>This is one of the easiest ways to spot weak AEO sales language.</p>
                <p>Be cautious if an agency promises:</p>
                <ul>
                  <li>guaranteed citations</li>
                  <li>guaranteed mentions</li>
                  <li>guaranteed inclusion in AI answers</li>
                  <li>perfect measurement of every AI response</li>
                  <li>a simple score that supposedly captures everything</li>
                </ul>
                <p>That is not how this space works.</p>
                <p>
                  AI search is not stable in the same way as classic rank tracking. Responses vary, platforms behave differently, and not every prompt
                  will produce the same answer every time. Good agencies should be honest about that.
                </p>
                <p>
                  That does not make the work impossible. It just means the methodology needs to be structured, comparative and grounded in patterns
                  over time rather than over-claiming certainty.
                </p>
                <p>
                  If you want to see what honest measurement should look like, our page on{" "}
                  <InlineLink href="/how-we-measure-ai-visibility">how we measure AI visibility</InlineLink> sets out what can and cannot reasonably
                  be measured.
                </p>

                <h2 id="check-whether-they-have-a-clear-starting-point">Check whether they have a clear starting point</h2>
                <p>A good AEO agency should not force every buyer into the same route.</p>
                <p>Some businesses need an audit first. Others are ready for hands-on monthly support straight away.</p>
                <p>That is why a clear starting point matters.</p>
                <p>
                  If an agency can only sell a large retainer, that is not usually a good sign. A more credible process is one that can explain:
                </p>
                <ul>
                  <li>when an audit makes sense</li>
                  <li>when monthly support makes sense</li>
                  <li>what the setup process looks like</li>
                  <li>what is actually delivered each month</li>
                  <li>how progress is reviewed</li>
                </ul>
                <p>
                  For many businesses, the right first step is a structured audit. That gives you a baseline, competitor context and a clearer view of
                  what should be fixed first before you decide whether broader support is needed.
                </p>

                <h2 id="what-a-good-aeo-agency-should-help-you-answer">What a good AEO agency should help you answer</h2>
                <p>By the time you finish a good agency conversation, you should have a much clearer view of questions like:</p>
                <ul>
                  <li>how are we showing up across the prompts that matter</li>
                  <li>where are competitors ahead</li>
                  <li>are we being mentioned, cited, or neither</li>
                  <li>which pages are helping most</li>
                  <li>which pages are weak</li>
                  <li>what should we improve first</li>
                  <li>do we need an audit or a monthly plan</li>
                  <li>what would success actually look like over time</li>
                </ul>
                <p>That is the real test.</p>
                <p>A good AEO agency should leave you with more clarity, not just more acronyms.</p>

                <h2 id="faqs" className="sr-only">FAQs</h2>
              </Prose>

              {/* FAQ accordion */}
              <div className="mt-10 space-y-3">
                <p className="text-base font-semibold tracking-tight text-zinc-900">FAQs</p>
                {FAQ_ITEMS.map((faq) => (
                  <details key={faq.question} className="group rounded-xl border border-zinc-200 bg-background p-5">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-zinc-900">
                      <span>{faq.question}</span>
                      <span className="shrink-0 text-zinc-500 transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600">{faq.answer}</p>
                  </details>
                ))}
              </div>

              <LearnGuideRelatedReading currentHref="/learn/how-to-choose-an-aeo-agency-in-the-uk" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function InlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="font-medium text-zinc-900 underline underline-offset-2 hover:text-[#1d4ed8]">
      {children}
    </Link>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-zinc-900 [&_h2:first-child]:mt-0 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_ul]:marker:text-zinc-400">
      {children}
    </div>
  );
}
