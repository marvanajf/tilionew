import type { Metadata } from "next";
import Link from "next/link";

import { MarketingHero } from "@/components/marketing/sections";
import { buildPageMetadata } from "@/components/seo/metadata";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = buildPageMetadata({
  title: "AI Visibility Audit | ChatGPT & Google AI Overviews",
  description:
    "Find out whether AI recommends your business, where competitors are winning, and what to change first. Delivered in 24 hours for a fixed £149.",
  path: "/ai-visibility-audit",
});

export default function AiVisibilityAuditPage() {
  return (
    <>
      <MarketingHero
        eyebrow="AI Visibility Audit"
        title="See whether AI recommends your business, where competitors are winning, and what to change first"
        description="A fixed-price audit for teams that want to improve mentions and citations in ChatGPT and Google AI Overviews."
        primaryCta={{ href: "/contact", label: "Get audit" }}
        secondaryCta={{ href: "/contact", label: "Talk to us" }}
      />
      <SnapshotSection />
      <WhatYouGetSection />
      <WhatIsAuditSection />
      <FocusPlatformsSection />
      <WhoItsForSection />
      <ReportSection />
      <HowItWorksSection />
      <WhatIncreasesSection />
      <CommonBlockersSection />
      <ReliabilitySection />
      <PricingSection />
      <FaqSection />
    </>
  );
}

function SectionFrame({ children, className = "py-16 md:py-20" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`relative bg-background ${className}`}>
      <div className="pointer-events-none absolute inset-0 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="relative h-full">
          <div className="absolute left-0 right-0 top-0 h-[0.5px] bg-zinc-200" />
          <div className="absolute left-0 top-0 h-full w-[0.5px] border-l border-dashed border-zinc-300" />
          <div className="absolute right-0 top-0 h-full w-[0.5px] border-r border-dashed border-zinc-300" />
        </div>
      </div>
      <Container>{children}</Container>
    </section>
  );
}

function StickySplitSection({
  label,
  title,
  intro,
  children,
}: {
  label: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <SectionFrame>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-medium text-zinc-500">{label}</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">{title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">{intro}</p>
        </div>
        <div>{children}</div>
      </div>
    </SectionFrame>
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

function SnapshotSection() {
  const points = ["Delivered in 24 hours.", "Fixed price £149.", "UK-focused.", "Clear deliverables."];

  return (
    <StickySplitSection
      label="At a glance"
      title="AI Visibility Audit"
      intro="A fixed-price audit for teams that want to improve mentions and citations in ChatGPT and Google AI Overviews."
    >
      <ul className="border-y border-zinc-200">
        {points.map((point) => (
          <li key={point} className="border-b border-zinc-100 py-4 text-sm leading-relaxed text-zinc-700 last:border-b-0 md:text-base">
            {point}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm leading-relaxed text-zinc-600 md:text-base">Want a rough idea first? Try our free AI visibility checker.</p>
      <div className="mt-8">
        <PrimaryCta href="/ai-checker" label="Try free AI visibility checker" />
      </div>
    </StickySplitSection>
  );
}

function WhatYouGetSection() {
  const bullets = [
    "Your mention rate and citation rate across ChatGPT and Google AI Overviews",
    "Share of voice against key competitors for buyer-intent searches",
    "A breakdown of the sources and pages AI is relying on in your category",
    "A prioritised 7-day quick wins list",
    "A practical 30-day content roadmap",
  ];

  return (
    <StickySplitSection
      label="Outputs"
      title="What you get"
      intro="If buyers ask AI who they should hire and your business is not named, you are missing part of the decision."
    >
      <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
        {bullets.map((item) => (
          <li key={item} className="pl-1">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <PrimaryCta href="/contact" label="Get audit" />
      </div>
    </StickySplitSection>
  );
}

function WhatIsAuditSection() {
  const list = [
    "prompt-based testing around real buyer questions",
    "competitor benchmarking",
    "on-site AEO and SEO checks",
    "content and structure analysis",
    "a prioritised action plan",
  ];

  return (
    <StickySplitSection
      label="Definition"
      title="What an AI Visibility Audit is"
      intro="An AI Visibility Audit measures how often your business is mentioned and cited in AI-generated answers for high-intent searches, then shows you the changes most likely to improve that."
    >
      <p className="text-sm leading-relaxed text-zinc-600 md:text-base">It combines:</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
        {list.map((item) => (
          <li key={item} className="pl-1">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-6 space-y-3 border-y border-zinc-200 py-5">
        <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
          <strong>Mentions</strong> show whether AI is recommending your brand.
        </p>
        <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
          <strong>Citations</strong> show whether AI is relying on your site as a source.
        </p>
      </div>
      <div className="mt-8">
        <PrimaryCta href="/contact" label="Get audit" />
      </div>
    </StickySplitSection>
  );
}

function FocusPlatformsSection() {
  const rows = [
    {
      title: "ChatGPT",
      copy: "Where people ask direct questions such as who should I hire, what should I choose, and what are the best options.",
    },
    {
      title: "Google AI Overviews",
      copy: "Where AI-generated answers can appear at the top of search results, often before a user visits any website.",
    },
  ];

  return (
    <StickySplitSection
      label="Platform focus"
      title="Why we focus on ChatGPT and Google AI Overviews"
      intro="We focus on the two AI surfaces that most often shape buyer consideration and purchase intent."
    >
      <ul className="border-y border-zinc-200">
        {rows.map((row) => (
          <li
            key={row.title}
            className="grid gap-3 border-b border-zinc-100 py-7 last:border-b-0 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] md:gap-8 md:py-9"
          >
            <h3 className="text-sm font-semibold text-zinc-900 md:sticky md:top-28 md:self-start md:text-base">{row.title}</h3>
            <p className="text-sm leading-relaxed text-zinc-600 md:text-base">{row.copy}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm leading-relaxed text-zinc-600 md:text-base">
        This focus lets us go deeper on the prompts, sources, page structures, and content types that actually influence mentions and citations.
      </p>
      <div className="mt-8">
        <PrimaryCta href="/contact" label="Talk to us" />
      </div>
    </StickySplitSection>
  );
}

function WhoItsForSection() {
  const fit = [
    "founders who want better inbound from buyer-intent searches",
    "marketing leads responsible for demand, conversion, and positioning",
    "agencies that want AI visibility benchmarks for a client",
    "B2B service businesses competing in best, versus, alternatives, and pricing searches",
    "SaaS and productised service brands where comparison content influences decisions",
    "local and regional service businesses where high-intent searches drive enquiries",
  ];
  const mostValue = [
    "your market is competitive",
    "competitors are being mentioned more often than you",
    "your site is decent, but not clearly built to be cited",
    "your pricing, proof, deliverables, or positioning are not easy to summarise",
  ];
  const notIdeal = ["you do not have a live website yet", "your offer is still unclear", "you want a generic technical SEO audit only"];

  return (
    <StickySplitSection
      label="Fit"
      title="Who this is for"
      intro="This audit is a strong fit for teams who need practical AI visibility benchmarks and a clear action plan."
    >
      <p className="text-sm font-semibold text-zinc-900">This audit is a strong fit for:</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
        {fit.map((item) => (
          <li key={item} className="pl-1">
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-7 text-sm font-semibold text-zinc-900">You will get the most value if:</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
        {mostValue.map((item) => (
          <li key={item} className="pl-1">
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-7 text-sm font-semibold text-zinc-900">This is not ideal if:</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
        {notIdeal.map((item) => (
          <li key={item} className="pl-1">
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm leading-relaxed text-zinc-600 md:text-base">
        If your positioning is too vague for AI to understand confidently, we will say so directly.
      </p>
      <div className="mt-8">
        <PrimaryCta href="/contact" label="Talk to us" />
      </div>
    </StickySplitSection>
  );
}

function ReportSection() {
  const items = [
    {
      title: "Visibility scorecard",
      copy: "A clear view of your mention rate and citation rate across ChatGPT and Google AI Overviews, including where you show up and where you do not.",
    },
    {
      title: "Competitor share of voice",
      copy: "A comparison against 3 to 5 competitors, showing who gets recommended for the same prompts and what claims or proof are helping them win.",
    },
    {
      title: "Source and citation breakdown",
      copy: "A breakdown of the pages and sources shaping AI answers in your category, including where your site is missing citable content.",
    },
    {
      title: "Prioritised fix list",
      copy: "A practical set of changes you can act on immediately, including structural edits, FAQs, proof blocks, internal linking improvements, and clearer service-page content.",
    },
    {
      title: "30-day roadmap",
      copy: "A focused plan tied to high-intent searches, built to improve mentions, citations, and buyer confidence.",
    },
  ];

  return (
    <StickySplitSection
      label="Report"
      title="What you get in the report"
      intro="This is not a vague recommendation to publish more blog posts. It is a plan to make the right pages easier to quote, trust, and credit."
    >
      <ol className="list-none space-y-0">
        {items.map((item, index) => (
          <li
            key={item.title}
            className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 gap-y-2 border-b border-zinc-100 py-8 first:pt-0 last:border-b-0 last:pb-0 md:gap-x-8 md:py-10"
          >
            <span className="select-none text-2xl font-semibold tabular-nums leading-none text-zinc-300 md:text-3xl" aria-hidden>
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-base font-semibold text-zinc-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-base">{item.copy}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-8">
        <PrimaryCta href="/contact" label="Get audit" />
      </div>
    </StickySplitSection>
  );
}

function HowItWorksSection() {
  const steps = [
    { title: "Define your money queries", copy: "We identify the buyer-intent searches that matter most to your business." },
    {
      title: "Select competitors",
      copy: "We benchmark against 3 to 5 direct competitors, plus any brands AI already recommends in your category.",
    },
    { title: "Run a standardised prompt set", copy: "We test the same commercial questions across ChatGPT and Google AI Overviews." },
    { title: "Capture the patterns", copy: "We document mentions, citations, positioning, and repeated answer patterns." },
    { title: "Audit your site", copy: "We review extractability, structure, proof, internal linking, FAQs, and schema readiness." },
    { title: "Deliver the report", copy: "You get the audit and action plan within 24 hours." },
  ];

  return (
    <StickySplitSection label="Process" title="How the audit works" intro="A fast, repeatable process focused on high-intent buyer visibility.">
      <ol className="list-none space-y-0">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 gap-y-2 border-b border-zinc-100 py-8 first:pt-0 last:border-b-0 last:pb-0 md:gap-x-8 md:py-10"
          >
            <span className="select-none text-2xl font-semibold tabular-nums leading-none text-zinc-300 md:text-3xl" aria-hidden>
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-base font-semibold text-zinc-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-base">{step.copy}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-8">
        <PrimaryCta href="/contact" label="Start your audit" />
      </div>
    </StickySplitSection>
  );
}

function WhatIncreasesSection() {
  const points = [
    "clearer positioning around who you help, what you do, and the outcome you drive",
    "stronger proof with specifics, not vague claims",
    "comparison content such as best for, versus, alternatives, and pricing",
    "clearer page structure with definitions, bullets, steps, and short paragraphs",
    "better internal linking between services, proof, comparisons, and FAQs",
    "schema-ready pages that are easier for machines to interpret",
  ];

  return (
    <StickySplitSection
      label="Levers"
      title="What usually increases mentions and citations"
      intro="AI is more likely to recommend businesses it can understand clearly and summarise confidently."
    >
      <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
        {points.map((point) => (
          <li key={point} className="pl-1">
            {point}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <PrimaryCta href="/contact" label="Talk to us" />
      </div>
    </StickySplitSection>
  );
}

function CommonBlockersSection() {
  const blockers = [
    "generic agency language with no concrete outcome",
    "thin service pages with weak deliverable detail",
    "no FAQ content answering real buyer questions",
    "no comparison or alternatives content",
    "proof that is vague, buried, or missing",
    "unclear pricing, timelines, or constraints",
  ];

  return (
    <StickySplitSection label="Risks" title="Common blockers" intro="These issues repeatedly reduce mentions and citations in AI answers.">
      <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
        {blockers.map((item) => (
          <li key={item} className="pl-1">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <PrimaryCta href="/contact" label="Get audit" />
      </div>
    </StickySplitSection>
  );
}

function ReliabilitySection() {
  const points = [
    "We use a repeatable prompt set mapped to real buyer intent.",
    "We benchmark against the same competitor set so the comparison is meaningful.",
    "We capture evidence so the recommendations are based on patterns, not guesswork.",
    "We review your site through an AI extractability lens, focusing on whether your offer, proof, and pages can be summarised clearly.",
    "We prioritise actions by impact versus effort so you can move quickly.",
  ];

  return (
    <StickySplitSection label="Method" title="How we keep the audit reliable" intro="No jargon. No filler. Just what to change, in what order, and why.">
      <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
        {points.map((point) => (
          <li key={point} className="pl-1">
            {point}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <PrimaryCta href="/contact" label="Talk to us" />
      </div>
    </StickySplitSection>
  );
}

function PricingSection() {
  const included = [
    "Visibility scorecard",
    "Competitor share of voice",
    "Source and citation breakdown",
    "Prioritised fix list",
    "30-day content roadmap",
  ];

  return (
    <StickySplitSection label="Pricing" title="AI Visibility Audit" intro="£149 fixed price. Delivered in 24 hours.">
      <p className="text-sm font-semibold text-zinc-900">Included:</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
        {included.map((item) => (
          <li key={item} className="pl-1">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <PrimaryCta href="/contact" label="Get audit" />
      </div>
    </StickySplitSection>
  );
}

function FaqSection() {
  const faqs = [
    {
      question: "Which platforms do you audit?",
      answer:
        "We audit visibility in ChatGPT and Google AI Overviews. For most buyer-intent journeys, these are the two AI surfaces most likely to influence a decision.",
    },
    {
      question: "Is this the same as an SEO audit?",
      answer:
        "No. A traditional SEO audit focuses on rankings, crawl issues, and technical SEO. This audit focuses on whether your business is mentioned and cited inside AI-generated answers, plus the site changes most likely to improve that.",
    },
    {
      question: "What does citation mean?",
      answer:
        "A citation is when an AI answer references your website as a source. Mentions without citations can still help awareness, but citations are stronger for attribution and trust.",
    },
    {
      question: "What do you need from me?",
      answer:
        "We need your website URL, your main offer, and 3 to 5 competitors. If needed, we can suggest competitors based on your category.",
    },
    {
      question: "Will this help Google rankings too?",
      answer:
        "Often, yes. Clearer structure, stronger internal linking, FAQs, and better page clarity can support SEO as well. But the main goal here is better AI visibility for high-intent searches.",
    },
    {
      question: "How often should we run this?",
      answer:
        "Quarterly is a sensible cadence for most businesses, or whenever you change positioning, launch a new service, or enter a new market.",
    },
    {
      question: "Can you implement the recommendations?",
      answer:
        "Yes. If you want support beyond the audit, we can turn the roadmap into updated service pages, comparison pages, proof sections, and content designed to improve mentions and citations.",
    },
  ];

  return (
    <SectionFrame>
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">FAQs</h2>
      <div className="mx-auto mt-8 max-w-4xl space-y-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="group rounded-xl border border-zinc-200 bg-background p-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-zinc-900">
              <span>{faq.question}</span>
              <span className="text-zinc-500 transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">{faq.answer}</p>
          </details>
        ))}
      </div>
      <div className="mt-8">
        <PrimaryCta href="/contact" label="Talk to us" />
      </div>
    </SectionFrame>
  );
}
