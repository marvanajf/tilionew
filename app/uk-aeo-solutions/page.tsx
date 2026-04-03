import type { Metadata } from "next";
import Link from "next/link";

import { MarketingHero } from "@/components/marketing/sections";
import { buildPageMetadata } from "@/components/seo/metadata";
import { BreadcrumbJsonLd, FaqPageJsonLd, WebPageJsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: "AI SEO for UK businesses | Improve visibility in AI search",
  description:
    "Learn how UK businesses should approach AI SEO, which pages to improve first, common site gaps to fix, and whether to start with an audit or ongoing support.",
  path: "/uk-aeo-solutions",
});

const PAGE_URL = `${siteConfig.siteUrl}/uk-aeo-solutions`;
const PAGE_DATE = "2026-04-02";

const FAQ_ITEMS = [
  {
    question: "What is AI SEO for UK businesses?",
    answer:
      "AI SEO is the process of making your site easier for AI systems to understand, describe and cite in AI-generated answers. In practice, that usually means improving your key pages, tightening site structure, reducing ambiguity and strengthening trust signals.",
  },
  {
    question: "Is AI SEO the same as AEO?",
    answer:
      "They overlap. AI SEO is the broader term and is often easier for businesses to understand. AEO is more specific and usually refers to improving how your brand appears in answer-led search experiences. On this page, we use AI SEO as the lead term and AEO as the more specialist term within it.",
  },
  {
    question: "Do UK businesses need a different AI SEO approach?",
    answer:
      "Not a completely different one, but the priorities are often different. Most UK businesses do not need a huge AI content programme straight away. They usually get more value from improving commercial pages, clarifying positioning and fixing the structural issues that make the site harder to interpret.",
  },
  {
    question: "Which pages should I improve first?",
    answer:
      "Usually the pages closest to buying intent. That includes service pages, pricing pages, comparison pages, FAQs and proof-led pages. These are the pages that help buyers understand what you do and whether you are a good fit.",
  },
  {
    question: "Should I start with an audit or ongoing support?",
    answer:
      "If you want a practical starting point and a clearer view of what to fix first, start with an audit. If you already know AI SEO matters in your market and want regular support to improve visibility over time, ongoing support is usually the better fit.",
  },
];

export default function UkAeoSolutionsPage() {
  return (
    <>
      <WebPageJsonLd
        name="AI SEO for UK businesses | Improve visibility in AI search | Tilio"
        description="Learn how UK businesses should approach AI SEO, which pages to improve first, common site gaps to fix, and whether to start with an audit or ongoing support."
        url={PAGE_URL}
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
      />
      <FaqPageJsonLd questions={FAQ_ITEMS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.siteUrl },
          { name: "AI SEO for UK Businesses", url: PAGE_URL },
        ]}
      />
      <MarketingHero
        eyebrow="UK AI SEO"
        title="How UK businesses can improve visibility in AI search"
        description="AI SEO is becoming more important for UK businesses because buyers are using AI tools to research providers, compare options and sense-check decisions before they ever make contact."
        primaryCta={{ href: "/aeo-agency", label: "Explore AEO agency support" }}
        secondaryCta={{ href: "/ai-visibility-audit", label: "Get an AI Visibility Audit" }}
      />
      <WhyItMattersSection />
      <WhatPagesMatterSection />
      <CommonGapsSection />
      <AuditOrSupportSection />
      <WhoBenefitsSection />
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
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <SectionFrame>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">{title}</h2>
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

function WhyItMattersSection() {
  return (
    <StickySplitSection
      title="Why AI SEO matters for UK businesses"
      intro="AI-led search is changing how people discover and evaluate businesses."
    >
      <div className="space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base">
        <p>
          Instead of only typing a short keyword into Google, people are asking fuller questions, looking for recommendations, comparing alternatives and expecting direct answers. That matters because your business is no longer only competing for a click. It is also competing to be understood, summarised and surfaced in answer-led search experiences.
        </p>
        <p>
          For UK businesses, that usually means the most important work is not chasing trendy tactics. It is making your key pages clearer, your positioning easier to follow and your site easier to trust.
        </p>
        <p>
          AI SEO, including answer engine optimisation or AEO, is really about doing that well.
        </p>
      </div>
    </StickySplitSection>
  );
}

function WhatPagesMatterSection() {
  const pages = [
    "service pages",
    "product pages",
    "pricing pages",
    "comparison pages",
    "FAQs",
    "proof-led pages such as case studies, testimonials or results pages",
  ];

  return (
    <StickySplitSection
      title="What pages matter most"
      intro="Most businesses do not need to start with the whole site. The best place to begin is usually the pages closest to buyer intent."
    >
      <div className="space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base">
        <p>These are the pages that help someone decide whether you are relevant, credible and worth shortlisting. That usually includes:</p>
        <ul className="list-disc space-y-2 pl-5 marker:text-zinc-500">
          {pages.map((item) => (
            <li key={item} className="pl-1">{item}</li>
          ))}
        </ul>
        <p>
          These pages often matter more than blog content in the early stages because they answer the questions buyers ask when they are already evaluating their options.
        </p>
        <p>
          A blog can still play an important supporting role, but many businesses get more immediate value from improving the pages that explain what they do, who they help, what it costs and why someone should trust them.
        </p>
      </div>
    </StickySplitSection>
  );
}

function CommonGapsSection() {
  const gaps = [
    "service pages that use polished marketing language but do not answer real buyer questions clearly",
    "vague or missing pricing information",
    "weak internal links between service pages, FAQs and proof points",
    "inconsistent language for the same service or offer",
    "not enough detail on deliverables, process, outcomes or fit",
    "generic content that sounds fine but says very little",
    "important information buried in tabs, PDFs or awkward layouts",
  ];

  return (
    <StickySplitSection
      title="Common gaps on UK business websites"
      intro="A lot of UK business websites are not far off. The issue is rarely that everything is broken. It is usually that the most important information is harder to understand than it should be."
    >
      <div className="space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base">
        <ul className="list-disc space-y-2 pl-5 marker:text-zinc-500">
          {gaps.map((item) => (
            <li key={item} className="pl-1">{item}</li>
          ))}
        </ul>
        <p>
          These gaps matter because AI systems need to connect the dots quickly. If your site makes that easy, you are easier to describe accurately. If it creates ambiguity, you are easier to overlook.
        </p>
      </div>
    </StickySplitSection>
  );
}

function AuditOrSupportSection() {
  return (
    <StickySplitSection
      title="Audit or ongoing support: where should you start?"
      intro="This is usually the most useful decision to make first."
    >
      <div className="space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base">
        <p>
          If you are early in AI SEO, or you want to understand where you stand before committing to a wider plan, an audit is usually the right place to start. It gives you a practical view of how your business appears in AI search, where competitors are stronger and what to fix first.
        </p>
        <p>For many businesses, that is enough to create a sensible roadmap.</p>
        <p>
          Ongoing support makes more sense when you already know this matters in your market and want regular visibility tracking, page improvement and clearer priorities over time.
        </p>
        <p>A simple way to choose:</p>
      </div>
      <div className="mt-6 space-y-4 border-t border-zinc-100 pt-6">
        <div className="grid gap-3 border-b border-zinc-100 pb-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-8">
          <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
            Start with an <Link href="/ai-visibility-audit" className="font-medium text-zinc-900 underline underline-offset-2 hover:text-[#1d4ed8]">AI Visibility Audit</Link> if you want clarity, prioritisation and a defined starting point.
          </p>
          <div className="flex-shrink-0">
            <PrimaryCta href="/ai-visibility-audit" label="Get an audit" />
          </div>
        </div>
        <div className="grid gap-3 pt-2 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-8">
          <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
            Explore <Link href="/aeo-agency" className="font-medium text-zinc-900 underline underline-offset-2 hover:text-[#1d4ed8]">AEO agency support</Link> if you want ongoing measurement, page improvements and regular support over time.
          </p>
          <div className="flex-shrink-0">
            <PrimaryCta href="/aeo-agency" label="Explore support" />
          </div>
        </div>
      </div>
      <p className="mt-6 text-sm leading-relaxed text-zinc-500">The goal is not to start with the biggest option. It is to start with the right one.</p>
    </StickySplitSection>
  );
}

function WhoBenefitsSection() {
  const businesses = [
    "B2B service businesses in competitive categories",
    "SaaS companies where shortlist searches and alternatives matter",
    "agencies with specialist positioning",
    "consultancies and professional services firms",
    "businesses with decent websites but unclear differentiation",
    "companies where the sales journey starts with online research",
  ];

  return (
    <StickySplitSection
      title="Which businesses benefit most first"
      intro="AI SEO is not equally urgent for every business. The businesses that usually benefit first are the ones where buyers already research online, compare providers in detail and rely on trust before getting in touch."
    >
      <div className="space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base">
        <ul className="list-disc space-y-2 pl-5 marker:text-zinc-500">
          {businesses.map((item) => (
            <li key={item} className="pl-1">{item}</li>
          ))}
        </ul>
        <p>
          You are also more likely to benefit earlier if competitors are appearing more often in AI-led search, if your market is comparison-heavy, or if your site is reasonably strong but not especially easy to summarise.
        </p>
      </div>
    </StickySplitSection>
  );
}

function FaqSection() {
  return (
    <SectionFrame>
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">FAQs</h2>
      <div className="mt-8 max-w-4xl space-y-4">
        {FAQ_ITEMS.map((faq) => (
          <details key={faq.question} className="group rounded-xl border border-zinc-200 bg-background p-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-zinc-900">
              <span>{faq.question}</span>
              <span className="text-zinc-500 transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </SectionFrame>
  );
}
