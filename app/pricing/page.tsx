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

type DeliverableGroup = {
  heading: string;
  items: string[];
};

const deliverableGroups: DeliverableGroup[] = [
  {
    heading: "Monitoring and benchmarking",
    items: [
      "Daily tracking across ChatGPT, Perplexity, and Google AI Overviews",
      "100 prompts covering your priority commercial questions",
      "Competitor benchmarking — see how you compare on the same queries",
      "English language",
    ],
  },
  {
    heading: "Content work each month",
    items: [
      "3 content pieces — new or updated, written to be cited by AI systems",
      "3 content optimisations — existing pages improved based on monitoring findings",
    ],
  },
  {
    heading: "Actions and reporting",
    items: [
      "4 prioritised opportunities each week — specific actions to improve visibility",
      "Monthly report with findings, trends, and recommended next steps",
      "Onboarding call to align on your domains, prompts, and priority questions",
    ],
  },
  {
    heading: "Attribution and setup",
    items: [
      "AI traffic attribution via Google Analytics integration",
      "Unlimited domains",
    ],
  },
];

const pricingFaqs: { q: string; a: string }[] = [
  {
    q: "What is included in the £499/month plan?",
    a: "The programme includes daily monitoring across ChatGPT, Perplexity, and Google AI Overviews using 100 tracked prompts. Each month you receive 3 new or updated content pieces and 3 content optimisations, plus 4 prioritised actions per week. We deliver a monthly report covering findings, visibility trends, and recommended next steps, as well as AI traffic attribution via Google Analytics. There is no API access or raw data export on this plan.",
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
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">What you get each month</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-zinc-600 md:text-base">
              Everything included in the £499/month programme. We do the monitoring, analysis, and content work — you get clear recommendations and direct support.
            </p>

            <div className="mt-10 space-y-8">
              {deliverableGroups.map((group) => (
                <div key={group.heading}>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">{group.heading}</h3>
                  <ul className="mt-3 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-700 md:text-base">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm leading-relaxed text-zinc-500">
              API access and raw data exports are not included on this plan.
            </p>

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
