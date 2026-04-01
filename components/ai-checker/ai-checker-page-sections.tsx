import Link from "next/link";
import type { ReactNode } from "react";

import { MarketingFramedSection } from "@/components/marketing/sections";

function Prose({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-3xl">{children}</div>;
}

export function AiCheckerPageSections() {
  return (
    <>
      <MarketingFramedSection>
        <Prose>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">What this AI visibility checker does</h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
            Our free AI visibility checker helps you understand whether your website is set up to support AI discoverability.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
            It checks the technical signals that can affect whether AI systems are able to access, interpret, and use your content, including:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
            <li className="pl-1">robots.txt rules</li>
            <li className="pl-1">structured data</li>
            <li className="pl-1">meta information</li>
            <li className="pl-1">basic page-level visibility signals</li>
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-zinc-600 md:text-base">
            If you are looking for a fast way to sense-check your site, this AI search visibility checker gives you a useful starting point.
          </p>
        </Prose>
      </MarketingFramedSection>

      <MarketingFramedSection>
        <Prose>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">What your AI visibility score is based on</h2>
          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-base font-semibold text-zinc-900">Robots.txt checks</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-base">
                We review whether your site has a robots.txt file and whether key bot access rules appear to allow or block important crawlers.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-zinc-900">Structured data detection</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-base">
                We look for schema markup and other machine-readable signals that help systems understand what your pages are about.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-zinc-900">Meta and on-page context</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-base">
                We review page titles, descriptions, and other core signals that support content understanding.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-zinc-900">Instant score and guidance</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-base">
                We combine these checks into a simple AI visibility score, then show what to improve next.
              </p>
            </div>
          </div>
        </Prose>
      </MarketingFramedSection>

      <MarketingFramedSection>
        <Prose>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">What this free checker does not measure</h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
            This tool is a technical readiness check. It does not measure:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
            <li className="pl-1">whether ChatGPT or Perplexity currently recommend your brand</li>
            <li className="pl-1">live mention rate across AI answers</li>
            <li className="pl-1">citation frequency for commercial prompts</li>
            <li className="pl-1">competitor share of voice in AI-generated answers</li>
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-zinc-600 md:text-base">
            If you need that level of analysis, the next step is an{" "}
            <Link href="/ai-visibility-audit" className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700">
              AI Visibility Audit
            </Link>
            .
          </p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
            That gives you a fuller picture of how your brand appears in AI answers, where competitors are winning, and what to change first.
          </p>
        </Prose>
      </MarketingFramedSection>

      <MarketingFramedSection>
        <Prose>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">Why AI visibility matters</h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
            AI tools are changing how people discover businesses, compare options, and research services.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
            When your site is easier for machines to access and understand, you are in a stronger position to be surfaced, summarised, and cited in
            AI-generated answers.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
            A strong AI visibility score does not guarantee mentions or citations, but it helps you spot technical blockers that may reduce your chances.
          </p>
        </Prose>
      </MarketingFramedSection>

      <MarketingFramedSection>
        <Prose>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">Why use this free AI visibility checker</h2>
          <ul className="mt-6 list-none border-y border-zinc-200">
            {[
              {
                title: "Fast starting point",
                body: "Get a quick estimate of whether your site is technically ready for AI search.",
              },
              {
                title: "Practical guidance",
                body: "See what to improve next, without digging through multiple tools.",
              },
              {
                title: "Useful before and after changes",
                body: "Check your score, make updates, and re-run the tool to see whether core signals improve.",
              },
              {
                title: "Clear path to deeper analysis",
                body: "Use the checker as a first step, then move to an audit if you need prompt testing, competitor benchmarking, and citation analysis.",
              },
            ].map((row) => (
              <li key={row.title} className="border-b border-zinc-100 py-6 last:border-b-0">
                <p className="text-sm font-semibold text-zinc-900 md:text-base">{row.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-base">{row.body}</p>
              </li>
            ))}
          </ul>
        </Prose>
      </MarketingFramedSection>

      <MarketingFramedSection>
        <Prose>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">How to improve your AI visibility score</h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">If your score is low, the most common improvements are:</p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
            <li className="pl-1">making sure your robots.txt is present and clearly configured</li>
            <li className="pl-1">avoiding accidental bot blocking</li>
            <li className="pl-1">adding or improving structured data</li>
            <li className="pl-1">strengthening page titles and descriptions</li>
            <li className="pl-1">making important content easier to understand</li>
            <li className="pl-1">improving page structure and internal linking</li>
          </ol>
          <p className="mt-6 text-sm leading-relaxed text-zinc-600 md:text-base">
            This is not about tricking AI systems. It is about making your site easier to crawl, interpret, and trust.
          </p>
        </Prose>
      </MarketingFramedSection>

      <MarketingFramedSection>
        <Prose>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">Who this tool is for</h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">This free AI visibility tool is useful for:</p>
          <ul className="mt-4 list-none border-y border-zinc-200">
            {[
              "business owners checking whether their site is technically ready for AI search",
              "marketers looking for a quick technical readiness check before a fuller review",
              "agencies reviewing client sites before a deeper audit",
              "teams making updates to robots.txt, structured data, or page metadata",
              "anyone who wants a simple AI visibility checker before investing in a fuller review",
            ].map((item) => (
              <li key={item} className="border-b border-zinc-100 py-4 text-sm leading-relaxed text-zinc-700 last:border-b-0 md:text-base">
                {item}
              </li>
            ))}
          </ul>
        </Prose>
      </MarketingFramedSection>

      <MarketingFramedSection>
        <Prose>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">When to use the audit instead</h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
            The free checker is useful when you want a quick technical estimate.
          </p>
          <p className="mt-4 text-sm font-medium text-zinc-900">The audit is the better option when you need to know:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
            <li className="pl-1">whether your brand is being mentioned in AI answers</li>
            <li className="pl-1">whether your site is being cited as a source</li>
            <li className="pl-1">which competitors are appearing more often</li>
            <li className="pl-1">which prompts matter most commercially</li>
            <li className="pl-1">what content and page changes to prioritise next</li>
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-zinc-600 md:text-base">
            If your question is not just &quot;can AI access my site?&quot; but also &quot;is AI choosing to mention or cite us?&quot;, go straight to the audit.
          </p>
        </Prose>
      </MarketingFramedSection>

      <MarketingFramedSection>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">Book an AI Visibility Audit</h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
            Move from technical readiness to live mentions, citations, and competitor benchmarking.
          </p>
          <div className="mt-8">
            <Link
              href="/ai-visibility-audit"
              className="inline-flex items-center justify-center rounded-[10px] border border-[#93c5fd] bg-[#93c5fd]/20 px-7 py-2.5 text-sm font-medium text-[#1d4ed8] transition-colors hover:bg-[#93c5fd] hover:text-[#1e3a8a]"
            >
              Book an AI Visibility Audit
            </Link>
          </div>
        </div>
      </MarketingFramedSection>

      <MarketingFramedSection>
        <Prose>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">Frequently asked questions</h2>
          <div className="mt-8 space-y-4">
            {[
              {
                q: "What is an AI visibility checker?",
                a: "An AI visibility checker is a tool that reviews whether your website appears technically ready to be accessed and understood by AI systems. Our free tool checks robots.txt, structured data, and key on-page signals to give you an instant score and suggestions for improvement.",
              },
              {
                q: "What is an AI search visibility checker?",
                a: "An AI search visibility checker is another way of describing a tool that assesses how well your site is prepared for AI-powered search and answer engines. In practice, people often use this term interchangeably with AI visibility checker.",
              },
              {
                q: "Does this tool tell me if ChatGPT recommends my brand?",
                a: "No. This free checker does not test live brand mentions or recommendations inside ChatGPT, Claude, or Perplexity. It focuses on technical readiness signals only. If you want to know how often your business is mentioned, cited, or compared in AI answers, you will need an AI Visibility Audit.",
              },
              {
                q: "What affects AI visibility?",
                a: "The most common technical factors include bot access, structured data, clear page metadata, internal linking, and how easy your content is to interpret. Content quality, proof, and page structure also matter, especially when you want to improve citation potential.",
              },
              {
                q: "Is robots.txt important for AI visibility?",
                a: "Yes. Robots.txt helps control whether certain crawlers can access your site. If important bots are blocked, that can reduce technical visibility and limit discovery.",
              },
              {
                q: "Is structured data required?",
                a: "Not always, but it is often helpful. Structured data gives machines clearer signals about your pages and can make content easier to interpret.",
              },
              {
                q: "Can I improve my score and check again?",
                a: "Yes. You can update your site, then run the checker again to see whether your technical signals have improved.",
              },
              {
                q: "Is this a full AEO audit?",
                a: "No. This is a free AI visibility checker, not a full audit. It is designed as a fast first step. For competitor benchmarking, prompt testing, citation analysis, and prioritised recommendations, book an AI Visibility Audit.",
              },
            ].map((faq) => (
              <details key={faq.q} className="group rounded-xl border border-zinc-200 bg-background p-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-zinc-900">
                  <span>{faq.q}</span>
                  <span className="text-zinc-500 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </Prose>
      </MarketingFramedSection>

      <MarketingFramedSection id="ai-checker-ready">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">Ready to check your site?</h2>
          <p className="mt-4 text-center text-sm leading-relaxed text-zinc-600 md:text-base">
            Use the free AI visibility checker to get a quick view of your site&apos;s technical readiness for AI search.
          </p>
          <p className="mt-4 text-center text-sm leading-relaxed text-zinc-600 md:text-base">
            If you need a deeper answer on mentions, citations, and competitor visibility, book an AI Visibility Audit.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/ai-visibility-audit"
              className="inline-flex items-center justify-center rounded-[10px] border border-[#93c5fd] bg-[#93c5fd]/20 px-7 py-2.5 text-sm font-medium text-[#1d4ed8] transition-colors hover:bg-[#93c5fd] hover:text-[#1e3a8a]"
            >
              Book an AI Visibility Audit
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-[10px] border border-zinc-200 bg-background px-7 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50"
            >
              Contact
            </Link>
          </div>
        </div>
      </MarketingFramedSection>
    </>
  );
}
