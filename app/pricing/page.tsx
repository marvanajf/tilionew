import type { Metadata } from "next";
import Link from "next/link";

import { buildPageMetadata } from "@/components/seo/metadata";
import { MarketingFramedSection, MarketingHero } from "@/components/marketing/sections";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = buildPageMetadata({
  title: "AEO Pricing | Managed Programme from £499 per Month",
  description:
    "Tilio's managed AEO programme at £499 per month. Daily monitoring across ChatGPT, Perplexity, and Google AI Overviews, content work, prioritised actions, and monthly reporting.",
  path: "/pricing",
});


const pricingFaqs: { q: string; a: string }[] = [
  {
    q: "What is included in the £499/month plan?",
    a: "The programme includes daily monitoring across ChatGPT, Perplexity, and Google AI Overviews using 100 tracked prompts. Each month you receive 3 new or updated content pieces and 3 content optimisations, plus 4 prioritised actions per week. We deliver a monthly report covering findings, visibility trends, and recommended next steps, as well as AI traffic attribution via Google Analytics.",
  },
  {
    q: "Who is this plan for?",
    a: "This plan suits marketing and SEO teams that want an expert to handle the monitoring, analysis, and content work — not just hand over a dashboard. It is a good fit if you want regular, actionable reporting and support improving the content that drives AI mentions and citations.",
  },
  {
    q: "Which platforms do you track?",
    a: "We track ChatGPT, Perplexity, and Google AI Overviews as part of the programme.",
  },
  {
    q: "How does the prompt allowance work?",
    a: "The programme includes 100 prompts, monitored daily. These should reflect the commercial questions your buyers are asking — we help you select and refine them during onboarding.",
  },
  {
    q: "What does the monthly report cover?",
    a: "Each month you receive a report covering visibility findings across your tracked prompts, how competitors are performing, notable changes, and the most important actions to take in the coming weeks. It is written for a marketing team — not just a data dump.",
  },
  {
    q: "What is Answer Engine Optimisation?",
    a: "Answer Engine Optimisation (AEO) is the practice of improving how your brand, pages, and evidence show up when AI systems generate answers. It focuses on mentions, citations, clarity, and how well your content supports AI-generated responses — not only traditional rankings.",
  },
  {
    q: "How do I get started?",
    a: "Use the contact form to talk through fit, scope, and your priority questions. We align on your domains, prompts, and setup before the programme begins. We do not take card payments on this site.",
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
        title="Managed AEO programme"
        description="£499 per month. We monitor your AI visibility, produce content each month, surface prioritised actions, and report back with clear findings and next steps. A managed service, not a platform."
        primaryCta={{ href: "/contact", label: "Contact us" }}
        secondaryCta={{ href: "#whats-included", label: "See what's included" }}
      />

      <MarketingFramedSection id="whats-included">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">What you get each month</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500 md:text-base">Monthly deliverables included in the £499/month programme.</p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-background shadow-[0_1px_0_rgba(0,0,0,0.02)]">
            <div className="grid grid-cols-2 border-b border-zinc-200">
              <div className="px-4 py-3 text-sm font-semibold tracking-tight text-zinc-700 md:px-6">Deliverable</div>
              <div className="px-4 py-3 text-center md:px-6">
                <p className="text-xs font-medium tracking-tight text-zinc-500">AEO programme</p>
                <p className="mt-1 text-sm font-semibold text-zinc-900">£499/month</p>
              </div>
            </div>

            <div className="grid grid-cols-2 border-b border-zinc-100 bg-zinc-50">
              <div className="col-span-2 px-4 py-2 text-xs font-semibold tracking-tight text-zinc-600 md:px-6">Monitoring</div>
            </div>
            {([
              ["Platforms tracked", "ChatGPT, Perplexity, Google AI Overviews"],
              ["Tracked prompts", "100 prompts, monitored daily"],
              ["Competitor benchmarking", "Included"],
              ["Language", "English"],
            ] as [string, string][]).map(([label, value]) => (
              <div key={label} className="grid grid-cols-2 border-b border-zinc-100">
                <div className="px-4 py-3 text-sm text-zinc-700 md:px-6">{label}</div>
                <div className="px-4 py-3 text-sm font-medium text-zinc-900 md:px-6">{value}</div>
              </div>
            ))}

            <div className="grid grid-cols-2 border-b border-zinc-100 bg-zinc-50">
              <div className="col-span-2 px-4 py-2 text-xs font-semibold tracking-tight text-zinc-600 md:px-6">Content and actions</div>
            </div>
            {([
              ["Content pieces", "3 per month — new or updated, written to be cited"],
              ["Content optimisations", "3 per month — existing pages improved from monitoring"],
              ["Prioritised actions", "4 per week — specific opportunities to improve visibility"],
              ["Onboarding call", "Included"],
            ] as [string, string][]).map(([label, value]) => (
              <div key={label} className="grid grid-cols-2 border-b border-zinc-100">
                <div className="px-4 py-3 text-sm text-zinc-700 md:px-6">{label}</div>
                <div className="px-4 py-3 text-sm font-medium text-zinc-900 md:px-6">{value}</div>
              </div>
            ))}

            <div className="grid grid-cols-2 border-b border-zinc-100 bg-zinc-50">
              <div className="col-span-2 px-4 py-2 text-xs font-semibold tracking-tight text-zinc-600 md:px-6">Reporting and attribution</div>
            </div>
            {([
              ["Monthly report", "Findings, trends and next steps"],
              ["AI traffic attribution", "Google Analytics integration"],
              ["Domains", "Unlimited"],
            ] as [string, string][]).map(([label, value]) => (
              <div key={label} className="grid grid-cols-2 border-b border-zinc-100 last:border-b-0">
                <div className="px-4 py-3 text-sm text-zinc-700 md:px-6">{label}</div>
                <div className="px-4 py-3 text-sm font-medium text-zinc-900 md:px-6">{value}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/contact" className="text-sm font-medium text-zinc-900 underline underline-offset-4">
              Get in touch
            </Link>
          </div>
        </div>
      </MarketingFramedSection>

      <MarketingFramedSection>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">Pricing FAQs</h2>
            <p className="mx-auto mt-3 text-center text-sm leading-relaxed text-zinc-600 md:text-base">
              Common questions about the £499/month programme and how we work.
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
