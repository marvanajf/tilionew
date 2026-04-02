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
    title: "Mentions vs citations in AI search",
    description:
      "Learn the difference between mentions and citations in AI search, why they're related but not the same, and what to look for in AI visibility reports.",
    path: "/learn/mentions-vs-citations-in-ai-search",
  }),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const PAGE_URL = `${siteConfig.siteUrl}/learn/mentions-vs-citations-in-ai-search`;
const PAGE_DATE = "2026-04-02";

const TOC_ENTRIES: TocEntry[] = [
  { id: "what-a-mention-is", text: "What a mention is", level: 2 },
  { id: "what-a-citation-is", text: "What a citation is", level: 2 },
  { id: "why-theyre-not-the-same", text: "Why they're not the same", level: 2 },
  { id: "why-citations-matter-more-for-action", text: "Why citations matter more for action", level: 2 },
  { id: "when-mentions-still-matter", text: "When mentions still matter", level: 2 },
  { id: "what-to-look-for-in-reporting", text: "What to look for in reporting", level: 2 },
];

const FAQ_ITEMS = [
  {
    question: "What is a mention in AI search?",
    answer:
      "A mention means your brand is named in an AI-generated answer. That could be a direct recommendation, a passing reference, a shortlist inclusion, or a comparison where your company appears alongside other options.",
  },
  {
    question: "What is a citation in AI search?",
    answer:
      "A citation means the AI-generated answer uses a source as part of the response, and that source is linked or attributed. In practical terms, a citation usually tells you that a page from your website was used to support or inform the answer.",
  },
  {
    question: "What is the difference between a mention and a citation in AI search?",
    answer:
      "A mention tells you your brand appeared in the answer. A citation tells you a source from your website was used. A brand can be mentioned without its website being cited, and a page can be cited without the brand being positioned especially well.",
  },
  {
    question: "Why do citations matter more than mentions for AEO work?",
    answer:
      "Citations point to a specific page, which makes them more actionable. Once you know which page is being cited, you can ask whether it is the right page, whether it is clear enough, and whether it should be improved. Mentions alone do not give you that page-level context.",
  },
  {
    question: "What should a good AI visibility report show about mentions and citations?",
    answer:
      "A good report should separate mentions and citations clearly, show which pages are being cited, compare your mention and citation rates against competitors, and identify which prompt groups show the biggest gaps.",
  },
];

export default function MentionsVsCitationsPage() {
  return (
    <article>
      <WebPageJsonLd
        name="Mentions vs citations in AI search | Tilio"
        description="Learn the difference between mentions and citations in AI search, why they're related but not the same, and what to look for in AI visibility reports."
        url={PAGE_URL}
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
      />
      <FaqPageJsonLd questions={FAQ_ITEMS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.siteUrl },
          { name: "Learn", url: LEARN_INDEX_URL },
          { name: "Mentions vs citations in AI search", url: PAGE_URL },
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative overflow-clip py-12 md:py-16">
        {/* Dot pattern */}
        <div className="pointer-events-none absolute inset-0 z-0 mx-auto w-full max-w-7xl px-6 lg:px-8" aria-hidden>
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(24,24,27,0.085)_1px,transparent_1px)] bg-[length:12px_12px] md:bg-[length:14px_14px]" />
        </div>
        {/* Framing: all four sides */}
        <div className="pointer-events-none absolute inset-0 z-[1] mx-auto w-full max-w-7xl px-6 lg:px-8" aria-hidden>
          <div className="relative h-full min-h-[1px]">
            <div className="absolute left-0 right-0 top-0 h-[0.5px] bg-zinc-200" />
            <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-zinc-200" />
            <div className="absolute left-0 top-0 h-full w-[0.5px] bg-zinc-200" />
            <div className="absolute right-0 top-0 h-full w-[0.5px] bg-zinc-200" />
          </div>
        </div>

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-zinc-500" aria-label="Breadcrumb">
              <Link href={learnIndexRoute} className="hover:text-zinc-900">
                Learn
              </Link>
              <span aria-hidden>/</span>
              <span className="text-zinc-400">Foundations</span>
            </nav>

            {/* Title */}
            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-zinc-900 md:text-4xl">
              Mentions vs citations in AI search
            </h1>

            {/* Lead */}
            <p className="mt-4 text-base leading-relaxed text-zinc-600 md:text-lg">
              If you&rsquo;re looking at AI visibility data, one of the most important distinctions to understand is the difference between a mention
              and a citation. They&rsquo;re related, but they&rsquo;re not the same.
            </p>

            {/* Meta strip */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-zinc-200 pt-5 text-sm text-zinc-500">
              <span className="inline-flex rounded-md bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">Foundations</span>
              <span>7 min read</span>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Body ─────────────────────────────────────────────────────────── */}
      <div className="relative bg-background pb-20 md:pb-28">
        {/* Framing: top line + dashed verticals */}
        <div className="pointer-events-none absolute inset-0 mx-auto w-full max-w-7xl px-6 lg:px-8" aria-hidden>
          <div className="relative h-full">
            <div className="absolute left-0 right-0 top-0 h-[0.5px] bg-zinc-200" />
            <div className="absolute left-0 top-0 h-full w-[0.5px] border-l border-dashed border-zinc-300" />
            <div className="absolute right-0 top-0 h-full w-[0.5px] border-r border-dashed border-zinc-300" />
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-12 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">

            {/* TOC sidebar — desktop only */}
            <div className="hidden lg:block">
              <TableOfContents entries={TOC_ENTRIES} postUrl={PAGE_URL} />
            </div>

            {/* Article */}
            <div className="min-w-0 pb-4 lg:pr-8">
              {/* Mobile TOC — hidden on desktop */}
              <div className="mb-8 lg:hidden">
                <TocMobile entries={TOC_ENTRIES} />
              </div>
              <Prose>
                <p>
                  A brand can be mentioned without its website being cited. A page can be cited without the brand being positioned especially well.
                  And if you treat those signals as interchangeable, it becomes much harder to understand what&rsquo;s actually happening and what you
                  should fix next.
                </p>
                <p>
                  That&rsquo;s why this page exists. It explains what mentions and citations mean in AI search, why the difference matters, and what
                  buyers should actually look for in reporting.
                </p>
                <p>
                  If you want the wider methodology behind this, our page on{" "}
                  <InlineLink href="/how-we-measure-ai-visibility">how we measure AI visibility</InlineLink> explains how these signals fit into the
                  bigger picture.
                </p>

                <h2 id="what-a-mention-is">What a mention is</h2>
                <p>A mention means your brand is named in an AI-generated answer.</p>
                <p>
                  That could be a direct recommendation, a passing reference, a shortlist inclusion, or a comparison where your company appears
                  alongside other options.
                </p>
                <p>In simple terms, if the answer says your business name, that&rsquo;s a mention.</p>
                <p>
                  Mentions matter because they show whether your brand is entering the conversation at all. If you&rsquo;re never mentioned in the
                  prompts that matter to your market, that&rsquo;s a visibility issue. It means buyers may not even be seeing you as an option when
                  they use AI-led search to research providers or compare solutions.
                </p>
                <p>
                  But a mention on its own doesn&rsquo;t tell the whole story. It doesn&rsquo;t automatically mean the system used your website as a
                  source, and it doesn&rsquo;t tell you whether your brand was described accurately or convincingly.
                </p>

                <h2 id="what-a-citation-is">What a citation is</h2>
                <p>A citation means the AI-generated answer uses a source as part of the response, and that source is linked or attributed.</p>
                <p>In practical terms, a citation usually tells you that a page from your website was used to support or inform the answer.</p>
                <p>
                  That&rsquo;s important because citations are often much more actionable than mentions. If your site is being cited, you can look at
                  which page was used, what that page says, how clearly it explains the topic, and whether it deserves to be improved further.
                </p>
                <p>That makes citations especially useful for page-level decision-making.</p>
                <p>
                  A citation can also tell you something deeper than a mention alone. It suggests the system found a page on your site useful enough
                  to bring into the answer context. That doesn&rsquo;t mean every citation is equally valuable, but it does make citations one of
                  the clearest signals available in AI visibility work.
                </p>

                <h2 id="why-theyre-not-the-same">Why they&rsquo;re not the same</h2>
                <p>This is where people often get muddled.</p>
                <p>A mention tells you your brand appeared.</p>
                <p>A citation tells you a source was used.</p>
                <p>Sometimes you get both. Sometimes you only get one.</p>
                <p>
                  For example, your brand might be mentioned in a list of providers without your website being cited at all. That can happen if the
                  system draws on third-party sources, broader brand understanding, or other referenced material.
                </p>
                <p>
                  Equally, one of your pages might be cited, but your brand may not be positioned especially clearly or strongly in the response. In
                  that case, you have source visibility, but not necessarily strong brand visibility.
                </p>
                <p>
                  That&rsquo;s why these signals need to be separated in reporting. If you blur them together, you lose the ability to see whether
                  the problem is awareness, source authority, positioning, or something else.
                </p>

                <h2 id="why-citations-matter-more-for-action">Why citations matter more for website action</h2>
                <p>Mentions are useful, but citations are often more useful when it comes to deciding what to do on the site.</p>
                <p>That&rsquo;s because citations point to a page.</p>
                <p>Once you know which page is being cited, you can ask practical questions:</p>
                <ul>
                  <li>is this the right page to be cited</li>
                  <li>is the page clear enough</li>
                  <li>does it answer the topic properly</li>
                  <li>does it reflect the way we want to be positioned</li>
                  <li>should this page be improved, expanded or better linked internally</li>
                  <li>are competitors being cited from stronger pages than ours</li>
                </ul>
                <p>That makes citations especially valuable for AEO work, because they connect visibility data to content action.</p>
                <p>
                  If a pricing page is being cited, you can improve the pricing page. If a service page is never cited, you can look at whether it
                  is too vague, too thin or too weakly connected to the rest of the site. If a blog post keeps being cited instead of your main
                  commercial page, that may tell you something about how your site is structured.
                </p>
                <p>
                  That&rsquo;s why citations usually matter more for diagnosable website action. They give you something clearer to work with.
                </p>
                <p>
                  If you want a practical starting point for that kind of analysis, an{" "}
                  <InlineLink href="/ai-visibility-audit">AI Visibility Audit</InlineLink> is usually the best place to begin.
                </p>

                <h2 id="when-mentions-still-matter">When mentions still matter</h2>
                <p>That said, mentions still matter a lot.</p>
                <p>
                  A mention shows whether your brand is present in the answer space at all. For many businesses, that&rsquo;s the first thing they
                  want to know.
                </p>
                <p>
                  If competitors are being named and you&rsquo;re not, that&rsquo;s an important signal even if citations are messy or inconsistent.
                  It suggests they are more present in the recommendation layer of AI search, which matters in shortlist and discovery moments.
                </p>
                <p>
                  Mentions also matter because not every valuable appearance comes with a direct citation to your site. Sometimes the AI system may
                  name a brand based on broader context, trusted third-party content, or category understanding rather than your own pages alone.
                </p>
                <p>So the right way to think about it is this:</p>
              </Prose>

              <div className="my-8 rounded-xl border border-zinc-200 bg-zinc-50 px-6 py-5">
                <p className="text-sm font-medium leading-relaxed text-zinc-900 md:text-base">
                  Mentions tell you whether you are in the conversation.
                </p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-zinc-900 md:text-base">
                  Citations tell you whether your pages are helping shape that conversation.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">You want to understand both.</p>
              </div>

              <Prose>
                <p>
                  If you&rsquo;re newer to the category, our guide on{" "}
                  <InlineLink href="/blog/what-is-aeo-answer-engine-optimisation">what is answer engine optimisation</InlineLink> gives the wider
                  context behind why these signals matter.
                </p>

                <h2 id="what-to-look-for-in-reporting">What to look for in reporting</h2>
                <p>A useful AI visibility report shouldn&rsquo;t just tell you that you were &ldquo;visible&rdquo;.</p>
                <p>It should help you separate the layers properly. At a minimum, a good report should help you answer questions like:</p>
                <ul>
                  <li>were we mentioned at all</li>
                  <li>were we cited from our own site</li>
                  <li>which pages were cited</li>
                  <li>which competitors were mentioned more often</li>
                  <li>which competitors were cited more often</li>
                  <li>are we being positioned accurately</li>
                  <li>which prompt groups show the biggest gap between mentions and citations</li>
                  <li>what should we improve next</li>
                </ul>
                <p>That&rsquo;s where reporting becomes commercially useful instead of cosmetic.</p>
                <p>
                  If a report only shows broad visibility without separating mentions, citations and page-level context, it&rsquo;s much harder to
                  turn that data into action. But if it separates those layers clearly, you can start making better decisions about content, page
                  structure, internal links and priorities.
                </p>
                <p>
                  A stronger methodology page to pair with this one is{" "}
                  <InlineLink href="/how-we-measure-ai-visibility">how we measure AI visibility</InlineLink>, which goes deeper into what useful
                  reporting should include.
                </p>
              </Prose>

              {/* Related reading */}
              <div className="mt-12 border-t border-zinc-200 pt-8">
                <p className="text-sm font-semibold text-zinc-900">Related reading</p>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link href="/how-we-measure-ai-visibility" className="text-sm text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline">
                      How we measure AI visibility
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
