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
    title: "How tracked prompts work",
    description:
      "Learn how tracked prompts work in AI visibility measurement, why one prompt is never enough, and how prompt groups connect to real buyer intent.",
    path: "/learn/how-tracked-prompts-work",
  }),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const PAGE_URL = `${siteConfig.siteUrl}/learn/how-tracked-prompts-work`;
const PAGE_DATE = "2026-04-02";

const TOC_ENTRIES: TocEntry[] = [
  { id: "what-a-tracked-prompt-is", text: "What a tracked prompt is", level: 2 },
  { id: "why-one-prompt-is-never-enough", text: "Why one prompt is never enough", level: 2 },
  { id: "how-prompt-sets-map-to-buyer-intent", text: "How prompt sets map to buyer intent", level: 2 },
  {
    id: "why-grouping-matters-more-than-vanity-query-picking",
    text: "Why grouping matters more than vanity query picking",
    level: 2,
  },
  {
    id: "how-topics-and-tags-make-reporting-more-useful",
    text: "How topics and tags make reporting more useful",
    level: 2,
  },
  { id: "why-daily-tracking-matters", text: "Why daily tracking matters", level: 2 },
  {
    id: "how-tracked-prompts-connect-to-commercial-pages",
    text: "How tracked prompts connect to commercial pages",
    level: 2,
  },
  {
    id: "what-good-prompt-tracking-should-help-you-answer",
    text: "What good prompt tracking should help you answer",
    level: 2,
  },
];

const FAQ_ITEMS = [
  {
    question: "What is a tracked prompt in AI visibility measurement?",
    answer:
      "A tracked prompt is a defined question or request that is monitored across selected AI search platforms over time. It is chosen because it tells you something useful about commercial visibility—not as a random query.",
  },
  {
    question: "Why is one tracked prompt never enough?",
    answer:
      "Buyers do not make decisions through one exact phrase. They ask clusters of questions and compare from different angles. One prompt gives a narrow view; prompt sets give a broader, more realistic picture of visibility across the decision journey.",
  },
  {
    question: "How do prompt sets map to buyer intent?",
    answer:
      "Strong prompt sets reflect questions buyers ask at different evaluation stages—category understanding, discovery, shortlisting, comparisons, pricing and fit, and trust checks—so different prompts reveal different commercial signals.",
  },
  {
    question: "Why does grouping prompts matter more than picking a few headline queries?",
    answer:
      "A small handful of easy-to-recognise prompts can look neat but weakly reflect the wider questions that influence discovery and shortlisting. Grouping by theme helps you see patterns—such as shortlist strength or trust-led gaps—instead of one-off appearances.",
  },
  {
    question: "What are topics and tags in prompt tracking?",
    answer:
      "Topics group prompts into broader areas like pricing, comparison, alternatives, category discovery or trust. Tags add another lens—service line, audience, geography, funnel stage—so reporting is easier to interpret and prioritise.",
  },
  {
    question: "Why does daily tracking matter for AI-led search?",
    answer:
      "Answers and competitor visibility can shift by platform. Daily monitoring gives a directional view over time—trends, topic movement and citation consistency—rather than relying on a single snapshot.",
  },
  {
    question: "How do tracked prompts connect to commercial website pages?",
    answer:
      "Weak prompt groups often point to page-level gaps—for example comparisons, pricing clarity or trust content. Tracked prompts link measurement to what to improve first on the site.",
  },
  {
    question: "What should good prompt tracking help you decide?",
    answer:
      "It should help you see which prompt groups matter most, where you appear consistently, where competitors are stronger, which topics are weakest, mention vs citation gaps, which pages help most, and what to improve next.",
  },
];

export default function HowTrackedPromptsWorkPage() {
  return (
    <article>
      <WebPageJsonLd
        name="How tracked prompts work | Tilio"
        description="Learn how tracked prompts work in AI visibility measurement, why one prompt is never enough, and how prompt groups connect to real buyer intent."
        url={PAGE_URL}
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
      />
      <FaqPageJsonLd questions={FAQ_ITEMS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.siteUrl },
          { name: "Learn", url: LEARN_INDEX_URL },
          { name: "How tracked prompts work", url: PAGE_URL },
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
              <span className="hidden text-zinc-400 sm:inline">Measurement</span>
            </nav>

            <h1 className="mt-6 text-3xl font-medium leading-[1.1] tracking-tight text-zinc-900 md:text-4xl">
              How tracked prompts work
            </h1>

            <p className="mt-4 text-base leading-relaxed text-zinc-600 md:text-lg">
              If you&rsquo;re looking at AI visibility seriously, one of the first things to understand is the role of tracked prompts.
            </p>

            <div className="mt-6 flex flex-row flex-wrap items-center gap-x-5 gap-y-2 border-t border-zinc-200 bg-transparent pt-5 text-sm text-zinc-500">
              <span className="inline-flex shrink-0 rounded-md bg-violet-50 px-2 py-0.5 text-xs font-medium text-violet-700">Measurement</span>
              <span className="shrink-0">9 min read</span>
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
                <p>They sit at the centre of good measurement.</p>
                <p>
                  Without them, AI visibility reporting becomes vague very quickly. You might get a few interesting screenshots or broad claims about
                  whether a brand shows up, but you won&rsquo;t get a structured view of what&rsquo;s happening across the questions that actually
                  matter to your business.
                </p>
                <p>
                  That&rsquo;s why tracked prompts matter. They turn AI visibility from a loose impression into something you can review, compare and
                  act on.
                </p>
                <p>
                  If you want the wider methodology behind this, our page on{" "}
                  <InlineLink href="/how-we-measure-ai-visibility">how we measure AI visibility</InlineLink> explains how tracked prompts fit into the
                  bigger picture.
                </p>

                <h2 id="what-a-tracked-prompt-is">What a tracked prompt is</h2>
                <p>
                  A tracked prompt is a defined question or request that we monitor across selected AI search platforms over time.
                </p>
                <p>
                  In simple terms, it is one of the questions we ask repeatedly to understand how your brand appears when buyers use AI-led search to
                  research options, compare providers or explore a category.
                </p>
                <p>That might be a prompt about:</p>
                <ul>
                  <li>the best providers in a category</li>
                  <li>alternatives to a named competitor</li>
                  <li>the right solution for a specific type of buyer</li>
                  <li>pricing, fit or shortlist questions</li>
                  <li>comparisons between approaches or tools</li>
                </ul>
                <p>The important point is that a tracked prompt is not random. It is chosen because it tells us something useful about commercial visibility.</p>

                <h2 id="why-one-prompt-is-never-enough">Why one prompt is never enough</h2>
                <p>One prompt is almost never enough to tell you anything meaningful.</p>
                <p>
                  That is because AI visibility is not one-query deep. Buyers do not make decisions through one exact phrase. They ask clusters of
                  questions. They compare, refine, pressure-test and look at the same problem from different angles.
                </p>
                <p>
                  If you only track one prompt, you get a very narrow view. You might see whether your brand appears for that exact query, but you will
                  not understand how visible you are across the wider decision journey.
                </p>
                <p>That is why strong prompt tracking always works with prompt sets, not isolated prompts.</p>
                <p>
                  A good prompt set gives you a broader and more realistic picture of how your brand shows up across the questions buyers are actually
                  asking.
                </p>

                <h2 id="how-prompt-sets-map-to-buyer-intent">How prompt sets map to buyer intent</h2>
                <p>This is where tracked prompts become commercially useful.</p>
                <p>
                  The best prompt sets are not built around interesting wording alone. They are built around intent.
                </p>
                <p>That means the prompts are chosen to reflect the kinds of questions a buyer asks at different stages of evaluation. For example:</p>
                <ul>
                  <li>category understanding</li>
                  <li>service or solution discovery</li>
                  <li>shortlist and comparison behaviour</li>
                  <li>alternatives and competitor evaluation</li>
                  <li>pricing and fit questions</li>
                  <li>trust, proof and credibility checks</li>
                </ul>
                <p>This matters because different prompts tell you different things.</p>
                <p>
                  A category prompt may show whether you enter the conversation at all. A comparison prompt may show whether you are being shortlisted
                  against the right competitors. A pricing or fit prompt may show whether your positioning is clear enough for more decision-led
                  questions.
                </p>
                <p>
                  That is why prompt selection should always stay close to buyer behaviour rather than just looking like a list of keywords.
                </p>
                <p>
                  If you want to see how that plays out at page level, our guide on{" "}
                  <InlineLink href="/blog/how-to-get-found-in-ai-search">how to get found in AI search</InlineLink> shows how these question patterns
                  shape visibility in practice.
                </p>

                <h2 id="why-grouping-matters-more-than-vanity-query-picking">
                  Why grouping matters more than vanity query picking
                </h2>
                <p>A common mistake is to focus too heavily on a small handful of headline prompts.</p>
                <p>
                  That usually feels useful at first, because those prompts are easy to recognise and easy to talk about. But it often leads to weak
                  reporting. You end up with something that looks neat, but does not really reflect the wider set of questions that influence discovery
                  and shortlisting.
                </p>
                <p>Grouping matters more.</p>
                <p>
                  When prompts are grouped properly, you can stop treating every query as a separate little event and start seeing patterns by theme.
                  That makes the reporting much more useful.
                </p>
                <p>Instead of asking, &ldquo;Did we show up for this one phrase?&rdquo;, you can ask better questions:</p>
                <ul>
                  <li>how strong are we across shortlist prompts</li>
                  <li>where are competitors ahead on pricing and fit</li>
                  <li>which trust-led prompt groups are weakest</li>
                  <li>where are we visible but not being cited consistently</li>
                </ul>
                <p>That is a much better way to understand what needs to change.</p>

                <h2 id="how-topics-and-tags-make-reporting-more-useful">
                  How topics and tags make reporting more useful
                </h2>
                <p>Topics and tags help turn prompt tracking into something you can actually work with.</p>
                <p>
                  Topics group prompts into broader areas, such as pricing, comparison, alternatives, category discovery or trust. Tags add a second
                  layer of structure, helping you sort prompts by service line, audience type, geography, funnel stage or another useful lens.
                </p>
                <p>That means the reporting becomes easier to interpret.</p>
                <p>Instead of reviewing dozens of prompts one by one, you can look at a cleaner picture:</p>
                <ul>
                  <li>which topics are strongest</li>
                  <li>which tags show the biggest gaps</li>
                  <li>where one service area is underperforming</li>
                  <li>where one audience segment is showing weaker visibility</li>
                </ul>
                <p>This matters because AI visibility does not need more noise. It needs better organisation.</p>
                <p>Good structure makes it easier to spot real patterns and prioritise the right actions.</p>

                <h2 id="why-daily-tracking-matters">Why daily tracking matters</h2>
                <p>AI-led search is not static.</p>
                <p>
                  Answers can shift. Competitor visibility can move. One platform may behave differently from another. A one-off check can be
                  interesting, but it is usually not enough to build a proper picture.
                </p>
                <p>That is why daily tracking matters.</p>
                <p>
                  Daily monitoring does not make the environment perfectly predictable, but it gives you a stronger directional view over time. Instead
                  of relying on one answer from one moment, you can look at patterns across repeated checks.
                </p>
                <p>That helps answer more useful questions:</p>
                <ul>
                  <li>are we becoming more visible over time</li>
                  <li>are competitors pulling ahead in certain prompt groups</li>
                  <li>which topics are moving most</li>
                  <li>where are citations becoming more consistent</li>
                  <li>where are we still missing entirely</li>
                </ul>
                <p>That kind of directional view is much more useful than a single snapshot.</p>

                <h2 id="how-tracked-prompts-connect-to-commercial-pages">
                  How tracked prompts connect to commercial pages
                </h2>
                <p>Tracked prompts only become valuable when they connect back to your site.</p>
                <p>That is the real point of the exercise.</p>
                <p>
                  If a prompt group around comparisons is weak, that may point to a missing or unclear comparison page. If pricing and fit prompts
                  are underperforming, your pricing page may be too thin or too vague. If trust-led prompts are weak, your proof, FAQs or service detail
                  may not be strong enough.
                </p>
                <p>So tracked prompts are not only a measurement input. They are also a way of deciding what to improve first.</p>
                <p>
                  That is why prompt tracking matters so much in AEO work. It helps connect buyer questions to page-level priorities.
                </p>
                <p>
                  If you want a technical example of how one question can branch into several supporting lookups behind the scenes, our guide on{" "}
                  <InlineLink href="/blog/query-fanouts-are-getting-longer-heres-why-that-matters">query fan-outs</InlineLink> explains why a single
                  visible prompt can create a much broader retrieval task.
                </p>

                <h2 id="what-good-prompt-tracking-should-help-you-answer">
                  What good prompt tracking should help you answer
                </h2>
                <p>A useful tracked prompt system should help you answer questions like:</p>
                <ul>
                  <li>which prompt groups matter most for our market</li>
                  <li>where do we appear consistently</li>
                  <li>where are competitors stronger</li>
                  <li>which topics are weakest</li>
                  <li>where are we being mentioned but not cited</li>
                  <li>which pages are helping most</li>
                  <li>what should we improve next</li>
                </ul>
                <p>That is what makes tracked prompts useful.</p>
                <p>
                  They are not there to make reporting look technical. They are there to make AI visibility measurement more structured, more relevant
                  and more actionable.
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
                      href="/learn/mentions-vs-citations-in-ai-search"
                      className="text-sm text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline"
                    >
                      Mentions vs citations in AI search
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/how-to-get-found-in-ai-search"
                      className="text-sm text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline"
                    >
                      How to get found in AI search
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/query-fanouts-are-getting-longer-heres-why-that-matters"
                      className="text-sm text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline"
                    >
                      Query fan-outs: why they matter
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
