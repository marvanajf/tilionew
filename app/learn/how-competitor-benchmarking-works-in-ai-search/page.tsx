import type { Metadata } from "next";
import Link from "next/link";

import { buildPageMetadata } from "@/components/seo/metadata";
import { BreadcrumbJsonLd, FaqPageJsonLd, WebPageJsonLd } from "@/components/seo/json-ld";
import { TableOfContents, TocMobile } from "@/components/blog/table-of-contents";
import { Container } from "@/components/ui/container";
import { learnIndexRoute } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
import type { TocEntry } from "@/lib/toc";

const LEARN_INDEX_URL = `${siteConfig.siteUrl}${learnIndexRoute}`;

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "How competitor benchmarking works in AI search",
    description:
      "Learn how competitor benchmarking works in AI search, how to compare brands fairly, and how benchmarking turns into practical AEO actions.",
    path: "/learn/how-competitor-benchmarking-works-in-ai-search",
  }),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const PAGE_URL = `${siteConfig.siteUrl}/learn/how-competitor-benchmarking-works-in-ai-search`;
const PAGE_DATE = "2026-04-02";

const TOC_ENTRIES: TocEntry[] = [
  { id: "why-competitor-comparison-matters", text: "Why competitor comparison matters", level: 2 },
  {
    id: "why-the-same-prompt-set-must-be-used-across-brands",
    text: "Why the same prompt set must be used across brands",
    level: 2,
  },
  { id: "what-fair-benchmarking-looks-like", text: "What fair benchmarking looks like", level: 2 },
  { id: "why-competitor-lists-need-to-be-explicit", text: "Why competitor lists need to be explicit", level: 2 },
  {
    id: "how-platform-level-differences-affect-comparison",
    text: "How platform-level differences affect comparison",
    level: 2,
  },
  {
    id: "the-difference-between-being-visible-and-being-cited-more-often",
    text: "The difference between being visible and being cited more often",
    level: 2,
  },
  {
    id: "how-benchmarking-turns-into-prioritised-actions",
    text: "How benchmarking turns into prioritised actions",
    level: 2,
  },
  {
    id: "what-good-ai-search-competitor-analysis-should-help-you-answer",
    text: "What good AI search competitor analysis should help you answer",
    level: 2,
  },
  { id: "why-this-matters-commercially", text: "Why this matters commercially", level: 2 },
];

const FAQ_ITEMS = [
  {
    question: "Why does competitor benchmarking matter for AI visibility?",
    answer:
      "AI visibility is relative. Buyers compare options in AI-led search, so you need to know who appears alongside you, who appears instead of you, and which competitors surface most in the prompts that matter—not just whether your brand appears at all.",
  },
  {
    question: "Why must the same prompt set be used when benchmarking brands?",
    answer:
      "If each brand is measured on a different set of prompts, you are comparing two separate slices of data, not relative visibility. Fair benchmarking requires the same questions, grouping logic and measurement environment for every brand in the comparison.",
  },
  {
    question: "What does fair AI search benchmarking look like?",
    answer:
      "It usually means a shared prompt set, an explicit competitor list, the same platforms, the same reporting period, separating mentions from citations, reviewing topic groups—not only single queries—and focusing on relevant competitors rather than famous names for effect.",
  },
  {
    question: "Why should competitor lists be explicit in benchmarking?",
    answer:
      "Not every business competes the same way. A clear list keeps the comparison tied to who you actually compete with, who shows up in buyer conversations, and who matters in the prompt groups you care about—rather than vague or distorted peer sets.",
  },
  {
    question: "How do platform-level differences affect AI search benchmarking?",
    answer:
      "Platforms behave differently. A fair read breaks out performance by environment—e.g. ChatGPT vs Perplexity vs Google AI Overviews—instead of collapsing everything into one unexplained blended number.",
  },
  {
    question: "What is the difference between visibility and being cited more often in benchmarking?",
    answer:
      "Visibility (mentions) means a competitor enters answers more consistently. Citations mean their pages are used as sources more often. Those signals are related but not the same, so benchmarking should separate them.",
  },
  {
    question: "How does competitor benchmarking turn into AEO actions?",
    answer:
      "It should show where competitors are ahead and suggest why—clearer service pages, stronger comparison or alternatives content, pricing and fit prompts, trust signals, missing page types or internal linking—so you can prioritise site improvements based on external pressure.",
  },
  {
    question: "What should good AI search competitor analysis help you answer?",
    answer:
      "Questions such as: which competitors are strongest in core prompt groups, where you are visible but not cited, where competitors are cited more, which platform shows the biggest gap, which topics are weakest for you, which page types help competitors most, and what to improve first.",
  },
];

export default function HowCompetitorBenchmarkingWorksPage() {
  return (
    <article>
      <WebPageJsonLd
        name="How competitor benchmarking works in AI search | Tilio"
        description="Learn how competitor benchmarking works in AI search, how to compare brands fairly, and how benchmarking turns into practical AEO actions."
        url={PAGE_URL}
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
      />
      <FaqPageJsonLd questions={FAQ_ITEMS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.siteUrl },
          { name: "Learn", url: LEARN_INDEX_URL },
          { name: "How competitor benchmarking works in AI search", url: PAGE_URL },
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

            <h1 className="mt-4 text-3xl font-medium leading-[1.1] tracking-tight text-zinc-900 md:text-4xl">
              How competitor benchmarking works in AI search
            </h1>

            <p className="mt-4 text-base leading-relaxed text-zinc-600 md:text-lg">
              If you&rsquo;re trying to understand your visibility in AI search, looking at your brand in isolation will only get you so far.
            </p>

            <div className="mt-6 flex flex-row flex-wrap items-center gap-x-5 gap-y-2 border-t border-zinc-200 bg-transparent pt-5 text-sm text-zinc-500">
              <span className="inline-flex shrink-0 rounded-md bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700">Strategy</span>
              <span className="shrink-0">10 min read</span>
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

              <Prose>
                <p>The more useful question is comparative.</p>
                <p>
                  Are you showing up more often than the right competitors? Are they being cited more than you are? Are they stronger in some prompt
                  groups but weaker in others? And if they are ahead, what does that actually tell you?
                </p>
                <p>That&rsquo;s where competitor benchmarking comes in.</p>
                <p>
                  This page explains how competitor benchmarking works in AI search, what fair comparison looks like, and how to turn those comparisons
                  into practical actions rather than vague concern.
                </p>
                <p>
                  If you want the wider measurement framework behind this, our page on{" "}
                  <InlineLink href="/how-we-measure-ai-visibility">how we measure AI visibility</InlineLink> explains how benchmarking fits into the
                  bigger methodology.
                </p>

                <h2 id="why-competitor-comparison-matters">Why competitor comparison matters</h2>
                <p>AI visibility is relative.</p>
                <p>
                  It&rsquo;s not enough to know whether your brand appears. You also need to know who appears alongside you, who appears instead of
                  you, and which competitors are being surfaced more often in the prompts that matter.
                </p>
                <p>
                  That matters because buyers rarely research one provider in a vacuum. They compare options, ask for recommendations, look for
                  alternatives and try to narrow a shortlist. So the commercial question is not just &ldquo;are we visible?&rdquo; It&rsquo;s &ldquo;how
                  visible are we compared with the businesses we actually compete with?&rdquo;
                </p>
                <p>
                  That&rsquo;s why competitor benchmarking matters. It helps turn AI visibility into a market view rather than a self-contained score.
                </p>

                <h2 id="why-the-same-prompt-set-must-be-used-across-brands">
                  Why the same prompt set must be used across brands
                </h2>
                <p>This is one of the most important rules in fair benchmarking.</p>
                <p>
                  If you compare your brand on one set of prompts and a competitor on a different set, the comparison becomes much less useful. You are
                  no longer measuring relative visibility. You are just looking at two separate slices of data and pretending they line up.
                </p>
                <p>A fair comparison needs the same prompt set.</p>
                <p>
                  That means the same questions, the same grouping logic and the same measurement environment are used across all the brands being
                  compared. Otherwise, it becomes too easy to create misleading conclusions.
                </p>
                <p>
                  For example, if your prompts lean more towards brand-aware queries and the competitor set leans more towards broad category discovery,
                  the data will not tell a clean story. It may look like one brand is stronger when the real issue is that the prompt mix is doing most
                  of the work.
                </p>
                <p>That&rsquo;s why good competitor benchmarking starts with good prompt discipline.</p>
                <p>
                  If you want the deeper methodology behind how those prompt sets are built, see{" "}
                  <InlineLink href="/learn/how-tracked-prompts-work">how tracked prompts work</InlineLink>.
                </p>

                <h2 id="what-fair-benchmarking-looks-like">What fair benchmarking looks like</h2>
                <p>Fair benchmarking is not about finding a way to make your brand look better.</p>
                <p>It&rsquo;s about setting up a comparison that is honest enough to be useful.</p>
                <p>In practice, fair benchmarking usually means:</p>
                <ul>
                  <li>using the same prompt set across all compared brands</li>
                  <li>making the competitor list explicit</li>
                  <li>comparing the same platforms</li>
                  <li>reviewing the same reporting period</li>
                  <li>separating mentions from citations</li>
                  <li>looking at topic groups rather than only one-off queries</li>
                  <li>focusing on relevant competitors, not just famous names</li>
                </ul>
                <p>This matters because benchmarking is meant to support decision-making. If the setup is loose, the conclusions will be loose too.</p>
                <p>
                  A fair benchmark does not need to be perfect. But it does need to be consistent enough that the patterns mean something.
                </p>

                <h2 id="why-competitor-lists-need-to-be-explicit">Why competitor lists need to be explicit</h2>
                <p>Another common problem is vague competitor selection.</p>
                <p>If nobody agrees who the comparison set actually is, the benchmark becomes much less valuable.</p>
                <p>
                  A clear competitor list matters because not every business competes in the same way. Some brands compete directly for the same buyer.
                  Others overlap only loosely. Some are category leaders with broad visibility but low practical relevance to your specific commercial
                  niche.
                </p>
                <p>That&rsquo;s why competitor lists need to be explicit.</p>
                <p>You want to be clear about:</p>
                <ul>
                  <li>who you actually compete with</li>
                  <li>which businesses come up most often in buyer conversations</li>
                  <li>which names are winning in the prompt groups that matter</li>
                  <li>which competitors are worth learning from</li>
                  <li>which ones distort the picture more than they help</li>
                </ul>
                <p>
                  Good benchmarking is not about picking the biggest names for drama. It&rsquo;s about comparing against the right set of businesses for
                  the decision context you care about.
                </p>

                <h2 id="how-platform-level-differences-affect-comparison">
                  How platform-level differences affect comparison
                </h2>
                <p>Not every platform behaves in exactly the same way.</p>
                <p>That means a fair benchmark should not flatten everything into one simple number too early.</p>
                <p>
                  A brand may perform better on one platform than another. One competitor may be cited more often in one environment but mentioned less
                  often elsewhere. That does not make the data useless. It just means platform-level differences need to be understood as part of the
                  story.
                </p>
                <p>This is why benchmarking should always be read with context.</p>
                <p>Instead of only asking, &ldquo;Who is winning overall?&rdquo;, better questions are:</p>
                <ul>
                  <li>who is strongest on ChatGPT</li>
                  <li>who is strongest on Perplexity</li>
                  <li>where do Google AI Overviews show a different pattern</li>
                  <li>which competitors are consistently visible across platforms</li>
                  <li>where are the biggest gaps between platforms</li>
                </ul>
                <p>
                  That kind of breakdown is much more useful than a single blended comparison with no explanation behind it.
                </p>

                <h2 id="the-difference-between-being-visible-and-being-cited-more-often">
                  The difference between being visible and being cited more often
                </h2>
                <p>This is one of the most important distinctions in AI search benchmarking.</p>
                <p>
                  A competitor may be visible more often than you are. That means they are being mentioned more frequently in the relevant answers.
                </p>
                <p>But they may also be cited more often than you are, which is a different signal.</p>
                <p>Being visible tells you they are entering the answer more consistently.</p>
                <p>Being cited more often tells you their pages are being used more often as supporting sources.</p>
                <p>Those are related, but not the same.</p>
                <p>
                  A brand could be mentioned regularly without its website being cited much. Another could be cited from strong pages even if its overall
                  brand presence is less dominant. That is why good competitor benchmarking should always separate mentions and citations rather than
                  treating them as one metric.
                </p>
                <p>
                  If you want the full breakdown of that distinction, our page on{" "}
                  <InlineLink href="/learn/mentions-vs-citations-in-ai-search">mentions vs citations in AI search</InlineLink> goes into it in more
                  detail.
                </p>

                <h2 id="how-benchmarking-turns-into-prioritised-actions">
                  How benchmarking turns into prioritised actions
                </h2>
                <p>Competitor benchmarking only matters if it changes what you do next.</p>
                <p>
                  The goal is not just to see that a competitor is ahead. The goal is to understand where they are ahead, why that may be happening, and
                  what on your site needs to improve in response.
                </p>
                <p>That often means turning the data into questions like these:</p>
                <ul>
                  <li>are competitors ahead because their service pages are clearer</li>
                  <li>are they winning more citations from comparison or alternatives pages</li>
                  <li>are they stronger on pricing and fit prompts</li>
                  <li>are they more visible because their trust signals are easier to retrieve</li>
                  <li>are they being cited from pages we do not currently have</li>
                  <li>are they better connected internally around a topic cluster we have treated too lightly</li>
                </ul>
                <p>
                  That is where benchmarking becomes useful. It gives you a way to prioritise the next actions based on external pressure, not just
                  internal assumptions.
                </p>
                <p>In practice, that may lead to:</p>
                <ul>
                  <li>improving service pages that are too vague</li>
                  <li>building stronger comparison content</li>
                  <li>tightening internal links between commercial and supporting pages</li>
                  <li>expanding buyer FAQs</li>
                  <li>improving the pages most likely to earn citations</li>
                  <li>clarifying positioning where competitors are easier to summarise</li>
                </ul>
                <p>
                  If you want to turn competitor visibility data into a practical roadmap, an{" "}
                  <InlineLink href="/ai-visibility-audit">AI Visibility Audit</InlineLink> is usually the best place to start.
                </p>

                <h2 id="what-good-ai-search-competitor-analysis-should-help-you-answer">
                  What good AI search competitor analysis should help you answer
                </h2>
                <p>A useful competitor benchmark should help you answer questions like:</p>
                <ul>
                  <li>which competitors are strongest across our core prompt groups</li>
                  <li>where are we visible but not cited</li>
                  <li>where are competitors cited more often than we are</li>
                  <li>which platform shows the biggest gap</li>
                  <li>which topics are weakest for us</li>
                  <li>what kind of pages appear to be helping competitors most</li>
                  <li>what should we improve first</li>
                </ul>
                <p>That is the point of the exercise.</p>
                <p>
                  Not to create a league table for the sake of it, but to understand where your brand is behind and what that means in practical terms.
                </p>

                <h2 id="why-this-matters-commercially">Why this matters commercially</h2>
                <p>For many teams, this is where AI search stops being abstract.</p>
                <p>
                  It is one thing to know that AI search exists. It is another to see that the same competitors keep showing up ahead of you in the
                  categories, comparisons and shortlist prompts that matter commercially.
                </p>
                <p>That is why competitor benchmarking is so valuable. It turns AI visibility into a clearer business issue.</p>
                <p>
                  If the right competitors are appearing more often, being cited more consistently and shaping the answer layer more than you are, that
                  has strategic implications. It affects discovery, consideration and how often your brand enters the decision process in the first place.
                </p>
                <p>
                  That is one reason the commercial case for this work is getting stronger. If you want the wider strategic view, our guide on{" "}
                  <InlineLink href="/blog/the-business-case-for-investing-in-aeo-in-2026">
                    the business case for investing in AEO in 2026
                  </InlineLink>{" "}
                  explains why more teams are taking this seriously.
                </p>
              </Prose>

              <div className="mt-12 border-t border-zinc-200 pt-8">
                <p className="text-sm font-semibold text-zinc-900">Related reading</p>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link
                      href="/how-we-measure-ai-visibility"
                      className="text-sm text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline"
                    >
                      How we measure AI visibility
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/learn/how-tracked-prompts-work"
                      className="text-sm text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline"
                    >
                      How tracked prompts work
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/learn/mentions-vs-citations-in-ai-search"
                      className="text-sm text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline"
                    >
                      Mentions vs citations in AI search
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/the-business-case-for-investing-in-aeo-in-2026"
                      className="text-sm text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline"
                    >
                      The business case for investing in AEO in 2026
                    </Link>
                  </li>
                  <li>
                    <Link href="/ai-visibility-audit" className="text-sm text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline">
                      AI Visibility Audit
                    </Link>
                  </li>
                  <li>
                    <Link href={learnIndexRoute} className="text-sm text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline">
                      Back to Learn
                    </Link>
                  </li>
                </ul>
              </div>
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
