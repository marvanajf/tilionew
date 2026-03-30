import type { Metadata } from "next";
import Link from "next/link";

import { MarketingHero } from "@/components/marketing/sections";
import { buildPageMetadata } from "@/components/seo/metadata";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = buildPageMetadata({
  title: "UK AEO Solutions",
  description:
    "Answer Engine Optimisation for UK businesses. Improve how you appear in AI-generated answers with clearer content, structure, and measurement.",
  path: "/uk-aeo-solutions",
});

export default function UkAeoSolutionsPage() {
  return (
    <>
      <MarketingHero
        eyebrow="UK AEO Solutions"
        title="Answer Engine Optimisation for UK businesses"
        description="Improve how your business appears in AI-generated answers. We help businesses across the UK strengthen visibility through better content, clearer structure, and ongoing measurement."
        primaryCta={{ href: "/aeo-agency", label: "Explore AEO agency support" }}
        secondaryCta={{ href: "/ai-visibility-audit", label: "Get an AI Visibility Audit" }}
      />
      <WhatAeoMeansSection />
      <StrongAeoWorkSection />
      <HowTilioHelpsIntroSection />
      <AeoAgencySupportSection />
      <AiVisibilityAuditTeaserSection />
      <ContentReportingSection />
      <WhoItsForSection />
      <TypicalExamplesSection />
      <GoodReportingSection />
      <CommonQuestionsSection />
      <FinalSection />
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

function WhatAeoMeansSection() {
  return (
    <StickySplitSection
      label="Definition"
      title="What Answer Engine Optimisation means"
      intro="Answer Engine Optimisation, or AEO, is the practice of improving the likelihood that AI systems mention your brand, describe it accurately, and cite your website as a source."
    >
      <div className="space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base">
        <p>
          In practice, that usually means improving the pages buyers rely on when comparing providers, making key information easier to understand, and
          giving AI systems clearer signals about what you do, who you help, and why you are credible.
        </p>
        <p>
          AEO overlaps with SEO, but the focus is slightly different. Traditional SEO is about visibility in search results. AEO is about how your business
          appears inside AI-generated answers.
        </p>
      </div>
      <div className="mt-8">
        <PrimaryCta href="/aeo-agency" label="Explore AEO agency support" />
      </div>
    </StickySplitSection>
  );
}

function StrongAeoWorkSection() {
  const pillars = [
    {
      title: "Answer-ready content",
      copy: "Pages need to answer the questions buyers actually ask. That often means clearer service copy, stronger definitions, better FAQs, useful pricing context, comparison pages, and proof that can be summarised confidently.",
    },
    {
      title: "Technical discoverability",
      copy: "AI systems need to access and interpret your pages clearly. That includes internal linking, page structure, duplication, crawl paths, and how key pages are organised.",
    },
    {
      title: "Consistent trust signals",
      copy: "Your business, services, and expertise need to be described consistently across the site so AI systems can connect the dots and reduce ambiguity.",
    },
    {
      title: "Measurement over time",
      copy: "AEO changes by prompt, platform, and competitor set. Tracking helps you understand where you are being mentioned, where you are being cited, and what to improve next.",
    },
  ];

  return (
    <StickySplitSection
      label="Scope"
      title="What strong AEO work usually includes"
      intro="Effective AEO is not one tactic. It is usually a combination of content clarity, technical accessibility, credibility, and measurement."
    >
      <ol className="list-none space-y-0">
        {pillars.map((pillar, index) => (
          <li
            key={pillar.title}
            className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 gap-y-2 border-b border-zinc-100 py-8 first:pt-0 last:border-b-0 last:pb-0 md:gap-x-8 md:py-10"
          >
            <span className="select-none text-2xl font-semibold tabular-nums leading-none text-zinc-300 md:text-3xl" aria-hidden>
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-base font-semibold text-zinc-900">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-base">{pillar.copy}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-8">
        <PrimaryCta href="/ai-visibility-audit" label="Get an AI Visibility Audit" />
      </div>
    </StickySplitSection>
  );
}

function HowTilioHelpsIntroSection() {
  return (
    <SectionFrame className="py-12 md:py-16">
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">How Tilio helps</h2>
      <p className="mt-4 max-w-4xl text-sm leading-relaxed text-zinc-600 md:text-base">
        We support businesses across the UK with practical AEO services designed to improve AI visibility in ways that are measurable and commercially
        useful.
      </p>
    </SectionFrame>
  );
}

function AeoAgencySupportSection() {
  return (
    <StickySplitSection
      label="Ongoing"
      title="AEO agency support"
      intro="Our ongoing AEO service is for teams that want regular measurement, competitor benchmarking, content priorities, and reporting that helps them improve over time."
    >
      <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
        We track how AI systems describe your brand, compare your visibility against competitors, and turn that into clear priorities for content and
        page improvement.
      </p>
      <div className="mt-8">
        <PrimaryCta href="/aeo-agency" label="Explore AEO agency support" />
      </div>
    </StickySplitSection>
  );
}

function AiVisibilityAuditTeaserSection() {
  return (
    <StickySplitSection
      label="Starting point"
      title="AI Visibility Audit"
      intro="Our fixed-price AI Visibility Audit is a straightforward starting point if you want to understand where you stand now."
    >
      <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
        It shows how often your business is mentioned and cited in ChatGPT and Google AI Overviews, where competitors are winning, and what to change
        first.
      </p>
      <div className="mt-8">
        <PrimaryCta href="/ai-visibility-audit" label="Get an AI Visibility Audit" />
      </div>
    </StickySplitSection>
  );
}

function ContentReportingSection() {
  return (
    <StickySplitSection
      label="Delivery"
      title="Content improvement and reporting"
      intro="We also help teams improve the pages most likely to influence AI visibility, including service pages, pricing pages, FAQs, comparison content, and proof-led content that is easier for AI systems to quote and cite."
    >
      <p className="text-sm leading-relaxed text-zinc-600 md:text-base">For agencies, we can support reporting and white-label outputs where needed.</p>
      <div className="mt-8">
        <PrimaryCta href="/contact" label="Talk to Tilio" />
      </div>
    </StickySplitSection>
  );
}

function WhoItsForSection() {
  const fit = [
    "B2B service businesses in competitive markets",
    "SaaS companies where comparisons and shortlist searches matter",
    "Agencies supporting clients with visibility and content strategy",
    "marketing teams responsible for demand generation and conversion",
    "businesses that want a clearer view of how AI systems talk about their brand",
  ];
  const mostValue = [
    "buyers in your market already use AI tools to research options",
    "competitors are appearing more often than you in answer-led searches",
    "your site is decent, but not clearly built to be cited",
    "your pricing, proof, deliverables, or positioning are hard to summarise",
  ];

  return (
    <StickySplitSection
      label="Fit"
      title="Who this is for"
      intro="Our AEO support is a good fit for teams that need practical measurement and page-level improvements."
    >
      <p className="text-sm font-semibold text-zinc-900">Our AEO support is a good fit for:</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
        {fit.map((item) => (
          <li key={item} className="pl-1">
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-7 text-sm font-semibold text-zinc-900">You will usually get the most value if:</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
        {mostValue.map((item) => (
          <li key={item} className="pl-1">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <PrimaryCta href="/contact" label="Talk to Tilio" />
      </div>
    </StickySplitSection>
  );
}

function TypicalExamplesSection() {
  const examples = [
    {
      title: "SaaS company improving shortlist visibility",
      copy: "A SaaS company strengthens category pages, adds clearer comparison content, and publishes buyer FAQs. Over time, it appears more often in AI answers about best tools, alternatives, and shortlist comparisons.",
    },
    {
      title: "Professional services firm improving accuracy",
      copy: "A consultancy improves service pages, adds definitions and proof-led FAQs, and strengthens internal linking. AI systems begin describing the firm more accurately and citing the right pages more often.",
    },
    {
      title: "Multi-location business improving local relevance",
      copy: "A business with national coverage improves page structure, location detail, and linking between services and location pages. This helps AI systems respond with more confidence to region-specific prompts.",
    },
  ];

  return (
    <StickySplitSection
      label="Examples"
      title="Typical examples"
      intro="Here are a few common ways this work shows up in practice."
    >
      <ol className="list-none space-y-0">
        {examples.map((ex, index) => (
          <li
            key={ex.title}
            className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 gap-y-2 border-b border-zinc-100 py-8 first:pt-0 last:border-b-0 last:pb-0 md:gap-x-8 md:py-10"
          >
            <span className="select-none text-2xl font-semibold tabular-nums leading-none text-zinc-300 md:text-3xl" aria-hidden>
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-base font-semibold text-zinc-900">{ex.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-base">{ex.copy}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-8">
        <PrimaryCta href="/aeo-agency" label="Explore AEO agency support" />
      </div>
    </StickySplitSection>
  );
}

function GoodReportingSection() {
  const items = [
    "which prompts are being tracked",
    "how often your brand is mentioned",
    "whether your site is being cited as a source",
    "which competitors are being recommended",
    "how visibility changes over time",
    "what to fix next, in priority order",
  ];

  return (
    <StickySplitSection
      label="Reporting"
      title="What good reporting should include"
      intro="A useful AEO report should do more than say visibility is improving."
    >
      <p className="text-sm leading-relaxed text-zinc-600 md:text-base">It should show:</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
        {items.map((item) => (
          <li key={item} className="pl-1">
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm leading-relaxed text-zinc-600 md:text-base">
        That is what turns AEO from a vague idea into something your team can actually act on.
      </p>
      <div className="mt-8">
        <PrimaryCta href="/contact" label="Talk to Tilio" />
      </div>
    </StickySplitSection>
  );
}

function CommonQuestionsSection() {
  const faqs = [
    {
      question: "What is the difference between SEO and AEO?",
      answer:
        "SEO focuses on visibility in traditional search results. AEO focuses on helping your brand get mentioned and cited inside AI-generated answers. The two overlap, but AEO puts more emphasis on clarity, extractability, credibility, and citation-worthiness.",
    },
    {
      question: "How long does AEO take to work?",
      answer:
        "Some improvements can appear within weeks for specific prompts, especially when content clarity and page structure improve quickly. More consistent gains usually take a few months as pages are re-evaluated and selected more often over time.",
    },
    {
      question: "Can AEO guarantee that my brand will be cited?",
      answer:
        "No. There is no guaranteed placement in ChatGPT, Google AI Overviews, or other AI systems. What AEO can do is improve the likelihood that your brand is selected, described accurately, and cited more often.",
    },
    {
      question: "Which businesses benefit most from AEO?",
      answer:
        "AEO is especially useful in markets where buyers compare providers, evaluate pricing, and look for trusted recommendations before enquiring. That includes SaaS, professional services, finance, healthcare, education, and many local or regional services.",
    },
    {
      question: "What is the best place to start?",
      answer:
        "The best starting point is usually a baseline. That means understanding how often you are currently mentioned and cited, which competitors are winning, and which pages or topics are most likely to influence AI visibility.",
    },
  ];

  return (
    <SectionFrame>
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">Common questions</h2>
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
        <PrimaryCta href="/ai-visibility-audit" label="Get an AI Visibility Audit" />
      </div>
    </SectionFrame>
  );
}

function FinalSection() {
  return (
    <SectionFrame className="py-16 md:py-20">
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">Next steps</h2>
      <div className="mt-6 max-w-4xl space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base">
        <p>If you want ongoing support, explore our AEO agency service.</p>
        <p>If you want a fast, practical starting point, begin with an AI Visibility Audit.</p>
        <p>
          Based in Exeter, we support businesses across the UK with AEO work built around real buyer questions, clear reporting, and practical next steps.
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <PrimaryCta href="/aeo-agency" label="Explore AEO agency support" />
        <PrimaryCta href="/ai-visibility-audit" label="Get an AI Visibility Audit" />
        <PrimaryCta href="/contact" label="Talk to Tilio" />
      </div>
    </SectionFrame>
  );
}
