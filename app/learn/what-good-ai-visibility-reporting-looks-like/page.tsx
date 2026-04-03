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
    title: "What good AI visibility reporting looks like",
    description:
      "Learn what a good AI visibility report should include, from tracked prompts and citations to competitor context, cited pages and next actions.",
    path: "/learn/what-good-ai-visibility-reporting-looks-like",
  }),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const PAGE_URL = `${siteConfig.siteUrl}/learn/what-good-ai-visibility-reporting-looks-like`;
const PAGE_DATE = "2026-04-02";

const TOC_ENTRIES: TocEntry[] = [
  {
    id: "a-dashboard-and-a-monthly-report-are-not-the-same-thing",
    text: "A dashboard and a monthly report are not the same thing",
    level: 2,
  },
  {
    id: "what-a-useful-ai-visibility-report-should-include",
    text: "What a useful AI visibility report should include",
    level: 2,
  },
  { id: "why-tracked-prompts-matter-in-reporting", text: "Why tracked prompts matter in reporting", level: 2 },
  {
    id: "why-mentions-and-citations-both-need-to-be-shown",
    text: "Why mentions and citations both need to be shown",
    level: 2,
  },
  { id: "why-competitor-context-matters", text: "Why competitor context matters", level: 2 },
  { id: "why-cited-pages-matter-so-much", text: "Why cited pages matter so much", level: 2 },
  {
    id: "what-priorities-and-next-actions-should-look-like",
    text: "What priorities and next actions should look like",
    level: 2,
  },
  {
    id: "what-a-dashboard-helps-you-check-between-reports",
    text: "What a dashboard helps you check between reports",
    level: 2,
  },
  {
    id: "what-a-weak-ai-visibility-report-looks-like",
    text: "What a weak AI visibility report looks like",
    level: 2,
  },
];

const FAQ_ITEMS = [
  {
    question: "What is the difference between an AI visibility dashboard and a monthly report?",
    answer:
      "A dashboard gives a live view you can check any time—visibility across prompts and platforms, competitors, citations and patterns between reviews. A monthly report summarises what changed, what matters most and priorities. The strongest setup usually combines both.",
  },
  {
    question: "What should a good AI visibility report include at minimum?",
    answer:
      "At minimum: the tracked prompt set or groups, platforms measured, mentions vs citations, competitor visibility in the same groups, which pages were cited most, strongest and weakest areas, and clear next actions—without that, reporting often stays too vague to act on.",
  },
  {
    question: "Why do tracked prompts need to appear in AI visibility reporting?",
    answer:
      "The report is only as good as the prompt structure behind it. Showing prompts or prompt groups gives context—category discovery, comparisons, pricing, alternatives, trust—so the data stays measurement, not anecdote.",
  },
  {
    question: "Why should mentions and citations be separated in reporting?",
    answer:
      "A mention means your brand appeared in the answer; a citation means a page from your site was used as a source. Collapsing them into one ‘visibility’ label hides actionable detail—citations especially point to which pages to improve.",
  },
  {
    question: "Why does competitor context matter in AI visibility reports?",
    answer:
      "Buyers compare you to other options. Reporting should show who appears most, where they are cited more than you, which prompt groups they lead, and where you are gaining or lagging—turning an internal snapshot into a market view.",
  },
  {
    question: "Why should reports show which pages were cited?",
    answer:
      "Page-level citations connect data to site work: improve a cited pricing page, fix a service page that is never cited, or spot when a blog outperforms a commercial page—more useful than domain-level scores alone.",
  },
  {
    question: "What should priorities and next actions look like in a report?",
    answer:
      "They should name concrete improvements—clearer service pages, pricing or FAQ work, comparison content, internal linking, pages most likely to earn citations—so the report ends in progress, not just charts.",
  },
  {
    question: "What does weak AI visibility reporting look like?",
    answer:
      "Either too thin—screenshots, broad claims, no prompts, competitors, cited pages or actions—or too noisy: lots of charts without clarity on what matters or what to do next. Good reporting balances structure with focus.",
  },
];

export default function WhatGoodAiVisibilityReportingLooksLikePage() {
  return (
    <article>
      <WebPageJsonLd
        name="What good AI visibility reporting looks like | Tilio"
        description="Learn what a good AI visibility report should include, from tracked prompts and citations to competitor context, cited pages and next actions."
        url={PAGE_URL}
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
      />
      <FaqPageJsonLd questions={FAQ_ITEMS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.siteUrl },
          { name: "Learn", url: LEARN_INDEX_URL },
          { name: "What good AI visibility reporting looks like", url: PAGE_URL },
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

            <h1 className="mt-4 text-3xl font-medium leading-[1.1] tracking-tight text-zinc-900 md:text-4xl">
              What good AI visibility reporting looks like
            </h1>

            <p className="mt-4 text-base leading-relaxed text-zinc-600 md:text-lg">
              AI visibility reporting is easy to make look impressive.
            </p>

            <div className="mt-6 flex flex-row flex-wrap items-center gap-x-5 gap-y-2 border-t border-zinc-200 bg-transparent pt-5 text-sm text-zinc-500">
              <span className="inline-flex shrink-0 rounded-md bg-violet-50 px-2 py-0.5 text-xs font-medium text-violet-700">
                Measurement
              </span>
              <span className="shrink-0">11 min read</span>
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
                <p>
                  A few charts, a few screenshots and a couple of branded phrases can make almost anything look more sophisticated than it really is.
                </p>
                <p>The real test is much simpler. Does the reporting help you understand what is happening, why it matters, and what to do next?</p>
                <p>
                  That&rsquo;s what this page is about. It explains what useful AI visibility reporting should actually include, how to think about
                  dashboards versus monthly reports, and what separates a useful reporting setup from one that just looks busy.
                </p>
                <p>
                  If you want the wider methodology behind the data itself, start with{" "}
                  <InlineLink href="/how-we-measure-ai-visibility">how we measure AI visibility</InlineLink>.
                </p>

                <h2 id="a-dashboard-and-a-monthly-report-are-not-the-same-thing">
                  A dashboard and a monthly report are not the same thing
                </h2>
                <p>A dashboard and a monthly report do different jobs.</p>
                <p>
                  A dashboard helps you check in on the data whenever you want. It gives you a live view of visibility across tracked prompts and
                  platforms, competitor movement, citations and other patterns that are useful to monitor between formal reviews.
                </p>
                <p>
                  A monthly report does something different. It pulls the important points together, explains what has changed, highlights what matters
                  most and turns the data into priorities.
                </p>
                <p>
                  That distinction matters because a dashboard on its own can leave too much interpretation to the reader. A report on its own can be
                  too static if you want to check what is happening between reviews.
                </p>
                <p>
                  The strongest setup usually combines both. The dashboard helps you stay close to the data. The report helps you make sense of it.
                </p>
                <p>
                  If you want to see how that fits into the wider working model, our page on{" "}
                  <InlineLink href="/working-with-tilio">working with Tilio</InlineLink> explains how dashboard access and monthly reporting fit together.
                </p>

                <h2 id="what-a-useful-ai-visibility-report-should-include">What a useful AI visibility report should include</h2>
                <p>A good AI visibility report should not just tell you that you were &ldquo;visible&rdquo;.</p>
                <p>
                  It should give you a structured view of what was measured, what changed, where competitors are stronger, and what should happen next.
                </p>
                <p>At a minimum, useful reporting should include:</p>
                <ul>
                  <li>the tracked prompt set or prompt groups being measured</li>
                  <li>the platforms included in the reporting</li>
                  <li>whether your brand was mentioned</li>
                  <li>whether your pages were cited</li>
                  <li>which competitors were visible in the same prompt groups</li>
                  <li>which pages were cited most often</li>
                  <li>where visibility is strongest and weakest</li>
                  <li>the main priorities and next actions</li>
                </ul>
                <p>That is the baseline.</p>
                <p>Without that, reporting usually ends up too vague to support real decisions.</p>

                <h2 id="why-tracked-prompts-matter-in-reporting">Why tracked prompts matter in reporting</h2>
                <p>A report is only as good as the prompt set behind it.</p>
                <p>
                  If there is no clear prompt structure, it becomes much harder to understand what the reporting actually means. You might get a few
                  isolated examples, but you will not get a proper view of visibility across the questions that matter to your market.
                </p>
                <p>
                  That is why good reporting should always show the tracked prompts, or at least the prompt groups they sit within.
                </p>
                <p>
                  This gives the data context. It lets you see whether the reporting reflects category discovery, comparisons, pricing questions,
                  alternatives, trust-led prompts or other parts of the buying journey.
                </p>
                <p>Without that structure, it is too easy for reporting to drift into anecdote rather than measurement.</p>
                <p>
                  If you want the deeper logic behind that, our page on{" "}
                  <InlineLink href="/learn/how-tracked-prompts-work">how tracked prompts work</InlineLink> explains why prompt grouping matters so much.
                </p>

                <h2 id="why-mentions-and-citations-both-need-to-be-shown">Why mentions and citations both need to be shown</h2>
                <p>A useful report should separate mentions and citations clearly.</p>
                <p>A mention tells you whether your brand appeared in the answer.</p>
                <p>A citation tells you whether a source from your site was used.</p>
                <p>Those are different signals, and good reporting should treat them that way.</p>
                <p>
                  If a report only tells you that your brand was &ldquo;visible&rdquo;, but does not explain whether you were being cited from your own
                  site, it is leaving out one of the most useful layers of analysis.
                </p>
                <p>
                  That matters because citations often give you a clearer path to action. If a page is being cited, you can improve that page. If your
                  brand is mentioned but your site is not being cited, that may point to a different kind of gap.
                </p>
                <p>
                  That is why reporting should not collapse everything into one visibility label. It should show the layers properly.
                </p>

                <h2 id="why-competitor-context-matters">Why competitor context matters</h2>
                <p>Good reporting should not look at your brand in isolation.</p>
                <p>
                  If you are visible, that is useful to know. But it is much more useful to know whether the right competitors are ahead of you,
                  behind you or appearing in different ways across the same prompt groups.
                </p>
                <p>That is where competitor context becomes essential.</p>
                <p>Useful reporting should help answer questions like:</p>
                <ul>
                  <li>which competitors are showing up most often</li>
                  <li>where they are being cited more than you are</li>
                  <li>which prompt groups they are strongest in</li>
                  <li>where your visibility is improving against them</li>
                  <li>where they still have a clearer advantage</li>
                </ul>
                <p>This is what turns reporting from an internal snapshot into a market view.</p>
                <p>And that matters commercially, because buyers do not compare you against nothing. They compare you against other options.</p>

                <h2 id="why-cited-pages-matter-so-much">Why cited pages matter so much</h2>
                <p>A good report should not stop at domain-level visibility.</p>
                <p>It should show which pages are actually being cited.</p>
                <p>
                  That is one of the most useful parts of AI visibility reporting, because it connects the data to real website action. If a pricing
                  page is being cited, you can improve it. If a service page is never being cited, you can look at why. If a blog post keeps being cited
                  instead of the commercial page you would expect, that tells you something about how the site is structured.
                </p>
                <p>This is where reporting becomes much more valuable than a headline score.</p>
                <p>
                  Instead of just showing whether the site appears, it helps you understand which parts of the site are doing the work and which parts
                  need attention.
                </p>
                <p>
                  If you want a practical view of where those gaps are on your own site, an{" "}
                  <InlineLink href="/ai-visibility-audit">AI Visibility Audit</InlineLink> is usually the best starting point.
                </p>

                <h2 id="what-priorities-and-next-actions-should-look-like">
                  What priorities and next actions should look like
                </h2>
                <p>A useful report should not end with a chart.</p>
                <p>It should end with priorities.</p>
                <p>
                  That means the reporting should point clearly to the next actions most likely to improve visibility. Those actions might include:
                </p>
                <ul>
                  <li>improving service pages that are too vague</li>
                  <li>strengthening pricing pages or buyer FAQs</li>
                  <li>adding comparison content</li>
                  <li>tightening internal links between commercial and supporting pages</li>
                  <li>improving the pages most likely to earn citations</li>
                  <li>fixing gaps where competitors are repeatedly stronger</li>
                </ul>
                <p>This is the difference between reporting and progress.</p>
                <p>Good reporting should help you understand not just what happened, but what to do now.</p>

                <h2 id="what-a-dashboard-helps-you-check-between-reports">
                  What a dashboard helps you check between reports
                </h2>
                <p>The dashboard and the report work best together.</p>
                <p>
                  Between monthly reports, the dashboard gives you a way to check in on what is happening without waiting for the next formal review.
                </p>
                <p>That might mean checking:</p>
                <ul>
                  <li>whether visibility has moved in a key prompt group</li>
                  <li>whether competitors are appearing more often</li>
                  <li>whether citations are becoming more consistent</li>
                  <li>which pages are showing up most often</li>
                  <li>whether one platform looks stronger or weaker than another</li>
                </ul>
                <p>That does not replace the monthly report. It supports it.</p>
                <p>The dashboard gives you access to the live picture. The report helps interpret what matters.</p>

                <h2 id="what-a-weak-ai-visibility-report-looks-like">What a weak AI visibility report looks like</h2>
                <p>Weak reporting usually has one of two problems.</p>
                <p>Either it is too thin, or it is too noisy.</p>
                <p>Thin reporting often looks like:</p>
                <ul>
                  <li>a few screenshots</li>
                  <li>broad claims with little structure</li>
                  <li>no prompt logic</li>
                  <li>no competitor context</li>
                  <li>no cited pages</li>
                  <li>no real next actions</li>
                </ul>
                <p>
                  Noisy reporting usually has the opposite problem. It is full of charts and data points, but does not make anything clearer. You finish
                  reading it and still do not know what matters most or what should happen next.
                </p>
                <p>Both are a problem.</p>
                <p>A good report should be structured enough to be credible and selective enough to be useful.</p>
                <p>That is the balance worth aiming for.</p>
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
                      href="/working-with-tilio"
                      className="text-sm text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline"
                    >
                      Working with Tilio
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
                      href="/learn/how-competitor-benchmarking-works-in-ai-search"
                      className="text-sm text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline"
                    >
                      How competitor benchmarking works in AI search
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
