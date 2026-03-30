import type { Metadata } from "next";
import Link from "next/link";

import { buildPageMetadata } from "@/components/seo/metadata";
import { MarketingFramedSection, MarketingHero } from "@/components/marketing/sections";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = buildPageMetadata({
  title: "Pricing",
  description:
    "£499/month AEO plan: monitor ChatGPT, Perplexity, and Google AI Overviews with daily prompts, content support, and clear opportunities to improve mentions and citations.",
  path: "/pricing",
});

const planRows: [string, string][] = [
  ["Price", "£499/month"],
  ["Platforms tracked", "ChatGPT, Perplexity, Google AI Overviews"],
  ["Tracked prompts", "100 unique prompts"],
  ["Tracking frequency", "Daily"],
  ["Languages supported", "1"],
  ["Content generation", "3 pieces/month"],
  ["Content optimisation", "3 pieces/month"],
  ["Opportunities surfaced", "4 opportunities/week"],
  [
    "Traffic attribution",
    "Track AI-sourced traffic and attribution across your domains",
  ],
  ["Domains", "Unlimited"],
  ["Integration", "Google Analytics"],
  [
    "Reporting data",
    "Use tracking data to support reporting and internal workflows",
  ],
  ["History", "All time"],
  ["Exports", "CSV, JSON for client workspaces"],
  ["API access", "Not included on this plan"],
];

const pricingFaqs: { q: string; a: string }[] = [
  {
    q: "What is included in the £499/month AEO plan?",
    a: "The plan includes tracking across ChatGPT, Perplexity, and Google AI Overviews, with 100 unique prompts monitored daily in one language. You also get 3 generated content pieces per month, 3 content optimisations per month, and 4 opportunities per week. Google Analytics integration, unlimited domains, all-time history, and CSV and JSON exports for client workspaces are included. API access is not included on this plan.",
  },
  {
    q: "Who is this plan for?",
    a: "This plan is designed for teams that want ongoing AI visibility monitoring, practical content support, and a clear list of opportunities to act on each month. It is a good fit for businesses that want regular measurement, competitor-aware visibility tracking, and support improving the content most likely to drive mentions and citations.",
  },
  {
    q: "Which platforms do you track?",
    a: "We track ChatGPT, Perplexity, and Google AI Overviews on the £499/month plan.",
  },
  {
    q: "How does the prompt allowance work?",
    a: "The plan includes 100 unique prompts, monitored on a daily schedule. These prompts should reflect the commercial questions and search patterns that matter most to your business.",
  },
  {
    q: "What is Answer Engine Optimisation?",
    a: "Answer Engine Optimisation, or AEO, is the practice of improving how your brand, pages, and proof show up when AI systems answer questions. It focuses on mentions, citations, clarity, and how well your content supports AI-generated answers, not only traditional rankings.",
  },
  {
    q: "How do I get started?",
    a: "Use the contact form to discuss fit, scope, and your priority questions. We align on your domains, prompts, and setup before the programme starts. We do not take card payments on this site.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. We treat your prompts, reporting, and competitive context as confidential. Data is encrypted in transit and at rest, and we do not sell your analytics.",
  },
];

export default function PricingPage() {
  return (
    <>
      <MarketingHero
        eyebrow="Pricing"
        title="AEO plan"
        description="£499 per month. Monitor how your brand appears across ChatGPT, Perplexity, and Google AI Overviews, with daily prompt tracking, practical content support, and clear opportunities to improve AI visibility over time."
        primaryCta={{ href: "/contact", label: "Contact us" }}
        secondaryCta={{ href: "#whats-included", label: "See what’s included" }}
      />

      <MarketingFramedSection>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
              Best for teams that want ongoing measurement, regular content support, and a clear view of where to improve mentions and citations.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[10px] border border-[#93c5fd] bg-[#93c5fd]/20 px-7 py-2.5 text-sm font-medium text-[#1d4ed8] transition-colors hover:bg-[#93c5fd] hover:text-[#1e3a8a]"
              >
                Contact us
              </Link>
              <Link
                href="#whats-included"
                className="inline-flex items-center justify-center rounded-[10px] border border-zinc-200 bg-background px-7 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50"
              >
                See what’s included
              </Link>
            </div>
          </div>
        </Container>
      </MarketingFramedSection>

      <MarketingFramedSection id="whats-included">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">What’s included</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-zinc-600 md:text-base">
              Everything included in the £499/month AEO plan.
            </p>

            <div className="mt-10 overflow-x-auto rounded-2xl border border-zinc-200 bg-background shadow-[0_1px_0_rgba(0,0,0,0.02)]">
              <table className="w-full min-w-[min(100%,520px)] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50">
                    <th scope="col" className="px-4 py-3 font-semibold tracking-tight text-zinc-700 md:px-6">
                      Feature
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold tracking-tight text-zinc-700 md:px-6">
                      AEO plan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {planRows.map(([feature, value], i) => (
                    <tr key={feature} className={i % 2 === 1 ? "bg-zinc-50/60" : "bg-background"}>
                      <th
                        scope="row"
                        className={`px-4 py-3 font-normal text-zinc-700 md:px-6 ${i < planRows.length - 1 ? "border-b border-zinc-100" : ""}`}
                      >
                        {feature}
                      </th>
                      <td
                        className={`px-4 py-3 font-medium text-zinc-900 md:px-6 ${i < planRows.length - 1 ? "border-b border-zinc-100" : ""}`}
                      >
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[10px] border border-[#93c5fd] bg-[#93c5fd]/20 px-7 py-2.5 text-sm font-medium text-[#1d4ed8] transition-colors hover:bg-[#93c5fd] hover:text-[#1e3a8a]"
              >
                Contact us
              </Link>
            </div>
          </div>
        </Container>
      </MarketingFramedSection>

      <MarketingFramedSection>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">Pricing FAQs</h2>
            <p className="mx-auto mt-3 text-center text-sm leading-relaxed text-zinc-600 md:text-base">
              Common questions about the £499/month AEO plan and how we work.
            </p>

            <div className="mx-auto mt-10 max-w-3xl space-y-4">
              {pricingFaqs.map((faq) => (
                <details key={faq.q} className="group rounded-xl border border-zinc-200 bg-background p-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-zinc-900">
                    <span>{faq.q}</span>
                    <span className="text-zinc-500 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </MarketingFramedSection>
    </>
  );
}
