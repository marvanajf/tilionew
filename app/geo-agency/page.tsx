import type { Metadata } from "next";
import Link from "next/link";

import { buildPageMetadata } from "@/components/seo/metadata";
import { BreadcrumbJsonLd, FaqPageJsonLd, WebPageJsonLd } from "@/components/seo/json-ld";
import { MarketingHero } from "@/components/marketing/sections";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: "GEO agency | What GEO means and how to choose support",
  description:
    "Looking for a GEO agency? Learn what generative engine optimisation means, how it relates to AEO, and whether you need an audit or hands-on support.",
  path: "/geo-agency",
});

const PAGE_URL = `${siteConfig.siteUrl}/geo-agency`;
const PAGE_DATE = "2026-04-02";

const FAQ_ITEMS = [
  {
    question: "What is a GEO agency?",
    answer:
      "A GEO agency helps businesses improve how they appear in generative AI and answer-led search environments. That usually includes tracking visibility, reviewing mentions and citations, benchmarking competitors and improving the pages most likely to influence AI-generated answers.",
  },
  {
    question: "Is GEO different from AEO?",
    answer:
      "The terms overlap heavily. GEO stands for generative engine optimisation, while AEO stands for answer engine optimisation. In practice, both are about improving visibility in AI-generated answers and making your business easier to understand and cite.",
  },
  {
    question: "Why have a GEO page if your main service page is about AEO?",
    answer:
      "Because people search using different terms. This page exists to capture GEO-specific intent, explain how the term relates to AEO, and help you choose the right next step without duplicating the full service page.",
  },
  {
    question: "What is the best place to start with GEO support?",
    answer:
      "For many teams, the best place to start is an audit. That gives you a clearer baseline and a practical view of what to fix first. If you already know you want hands-on support, the AEO agency page is the better next step.",
  },
  {
    question: "Can a GEO agency guarantee mentions or citations?",
    answer:
      "No. No credible provider should promise that. The goal is to improve the conditions that make accurate mentions, stronger positioning and better citation visibility more likely over time.",
  },
];

export default function GeoAgencyPage() {
  return (
    <>
      <WebPageJsonLd
        name="GEO agency | What GEO means and how to choose support | Tilio"
        description="Looking for a GEO agency? Learn what generative engine optimisation means, how it relates to AEO, and whether you need an audit or hands-on support."
        url={PAGE_URL}
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
      />
      <FaqPageJsonLd questions={FAQ_ITEMS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.siteUrl },
          { name: "GEO Agency", url: PAGE_URL },
        ]}
      />
      <MarketingHero
        eyebrow="GEO Agency"
        title="UK GEO agency for visibility in AI search"
        description="Some teams search for AEO. Others search for GEO. Usually, they're looking for the same outcome: a business that's easier to find, easier to understand and easier to cite in AI-generated answers."
        primaryCta={{ href: "/ai-visibility-audit", label: "Start with an AI Visibility Audit" }}
        secondaryCta={{ href: "/aeo-agency", label: "Explore our AEO agency service" }}
      />
      <IntroSection />
      <WhatGeoMeansSection />
      <GeoVsAeoSection />
      <WhatGeoAgencyShouldHelpSection />
      <WhatPagesMatterSection />
      <WhoSearchesSection />
      <WhereToStartSection />
      <FaqSection />
    </>
  );
}

function SectionFrame({
  children,
  className = "py-16 md:py-20",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative bg-background ${className}`}>
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

function InlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="font-medium text-zinc-900 underline underline-offset-2 hover:text-[#1d4ed8]">
      {children}
    </Link>
  );
}

function IntroSection() {
  return (
    <SectionFrame className="py-12 md:py-16">
      <h2 className="text-center text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">What this page covers</h2>
      <div className="mx-auto mt-6 max-w-3xl space-y-4 text-center text-sm leading-relaxed text-zinc-600 md:text-base">
        <p>
          If you&rsquo;ve searched for a GEO agency, you&rsquo;re probably trying to work out three things. What GEO actually means, whether
          it&rsquo;s different from AEO, and what kind of support would genuinely help.
        </p>
        <p>
          At Tilio, we use AEO as the clearest core term, but GEO is a valid way people describe the same wider shift in search. So rather than
          pretending they&rsquo;re completely different categories, it&rsquo;s more useful to explain how they overlap and what to do next.
        </p>
        <p>
          If you want a practical starting point, begin with an <InlineLink href="/ai-visibility-audit">AI Visibility Audit</InlineLink>. If you
          already know you want hands-on support, explore our <InlineLink href="/aeo-agency">AEO agency service</InlineLink>.
        </p>
      </div>
    </SectionFrame>
  );
}

function WhatGeoMeansSection() {
  return (
    <StickySplitSection
      label="Definition"
      title="What GEO means"
      intro="GEO stands for generative engine optimisation."
    >
      <div className="space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base">
        <p>
          In practice, it&rsquo;s about improving how your business appears across AI-led search experiences where people ask questions, compare
          providers, evaluate options and look for direct answers.
        </p>
        <p>That usually means helping your business become easier to retrieve, easier to describe accurately and easier to cite.</p>
        <p>
          The work often includes clearer commercial pages, better structured content, stronger internal linking, more useful supporting content and
          measurement across the AI platforms that matter most.
        </p>
        <p>
          So while the label sounds new, the practical job is straightforward. Make your site easier for AI systems to understand and more useful for
          buyers in answer-led search.
        </p>
      </div>
    </StickySplitSection>
  );
}

function GeoVsAeoSection() {
  return (
    <StickySplitSection
      label="Terminology"
      title="GEO vs AEO: what's the difference?"
      intro="There's a lot of overlap."
    >
      <div className="space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base">
        <p>
          GEO usually feels like the broader, more technical label. AEO often feels clearer and more direct. But in most real-world conversations,
          they point to the same underlying goal: improving visibility in AI-generated answers.
        </p>
        <p>
          That&rsquo;s why this page is intentionally not a second service page in disguise. If you&rsquo;re searching for a GEO agency, the most
          helpful thing isn&rsquo;t to pretend GEO needs a completely separate offer. It&rsquo;s to help you understand the term, how it relates to
          AEO, and whether you need an audit or a monthly plan.
        </p>
        <p>
          If you&rsquo;re already convinced you need support, the main detail sits on our{" "}
          <InlineLink href="/aeo-agency">AEO agency page</InlineLink>. This page is here to make the term and the decision clearer.
        </p>
      </div>
    </StickySplitSection>
  );
}

function WhatGeoAgencyShouldHelpSection() {
  const items = [
    "tracking prompts tied to real buyer intent",
    "reviewing mentions and citations across AI-led search",
    "benchmarking competitors against the same prompt groups",
    "identifying which pages are weak, vague or hard to cite",
    "improving the commercial pages most likely to influence shortlisting",
    "turning reporting into prioritised website actions",
  ];

  return (
    <StickySplitSection
      label="What good looks like"
      title="What a GEO agency should actually help with"
      intro="A good GEO agency should do more than say your brand needs to 'show up in AI'."
    >
      <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
        It should help you understand how your business appears now, where competitors are stronger, and what needs to change on the site to improve
        visibility over time. In practice, that usually means:
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
        {items.map((item) => (
          <li key={item} className="pl-1">
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm leading-relaxed text-zinc-600 md:text-base">
        That&rsquo;s the real distinction. Good GEO support shouldn&rsquo;t stop at visibility data. It should lead to clearer decisions about what
        to fix and what to improve next.
      </p>
      <div className="mt-8">
        <PrimaryCta href="/contact" label="Talk to us" />
      </div>
    </StickySplitSection>
  );
}

function WhatPagesMatterSection() {
  const pages = [
    "service pages",
    "pricing pages",
    "comparison pages",
    "FAQs",
    "proof-led pages",
    "category or solution pages",
  ];

  return (
    <StickySplitSection
      label="Page priorities"
      title="What pages usually matter most"
      intro="Most businesses don't need to rebuild everything."
    >
      <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
        Usually, the pages that matter most are the ones closest to buying intent. These are the pages that help a buyer decide whether you&rsquo;re
        relevant, credible and worth shortlisting. That often includes:
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
        {pages.map((page) => (
          <li key={page} className="pl-1">
            {page}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm leading-relaxed text-zinc-600 md:text-base">
        If those pages are vague, inconsistent or hard to summarise, your business becomes harder to surface confidently in AI-generated answers.
        That&rsquo;s why GEO work often starts with page clarity before it moves into anything more ambitious.
      </p>
    </StickySplitSection>
  );
}

function WhoSearchesSection() {
  const rows = [
    {
      title: "B2B service businesses in competitive categories",
      copy: "Where AI is increasingly shaping shortlist and comparison behaviour.",
    },
    {
      title: "SaaS companies where comparisons matter",
      copy: "Where buyers use ChatGPT or Perplexity to research and evaluate options.",
    },
    {
      title: "Agencies and consultancies with specialist positioning",
      copy: "Where clear, citable differentiation influences recommendations.",
    },
    {
      title: "Businesses with strong offers but unclear site structure",
      copy: "Where the offer is good but the messaging is hard for AI to summarise confidently.",
    },
    {
      title: "Teams that want clearer visibility into AI search",
      copy: "Where the question has shifted from 'do we rank?' to 'are we being recommended?'",
    },
  ];

  return (
    <StickySplitSection
      label="Fit"
      title="Who usually searches for a GEO agency"
      intro="In most cases, the businesses searching for GEO support already sense that search behaviour is shifting."
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
        If that sounds like your situation, the next question usually isn&rsquo;t &ldquo;do we need GEO?&rdquo; It&rsquo;s &ldquo;where should we
        start?&rdquo;
      </p>
      <div className="mt-8">
        <PrimaryCta href="/contact" label="Talk to us" />
      </div>
    </StickySplitSection>
  );
}

function WhereToStartSection() {
  const options = [
    {
      title: "Start with an AI Visibility Audit",
      copy: "If you want clarity and prioritisation. An audit gives you a baseline, a clearer view of where you're showing up, where competitors are stronger, and what pages or prompt groups need attention first.",
      cta: { href: "/ai-visibility-audit", label: "Get the audit" },
    },
    {
      title: "Choose hands-on support",
      copy: "If you want regular measurement, implementation and progress each month. This makes more sense when you already know this matters in your market and want tracking, content support and page improvement over time.",
      cta: { href: "/aeo-agency", label: "See the AEO agency service" },
    },
  ];

  return (
    <SectionFrame>
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">Audit or hands-on support: where to start</h2>
      <p className="mt-4 max-w-4xl text-sm leading-relaxed text-zinc-600 md:text-base">
        For many businesses, the best starting point is an audit. That&rsquo;s usually the right route if you want clarity before committing to a
        monthly plan. Hands-on support makes more sense when you already know this matters and want regular tracking, content support and page
        improvement over time.
      </p>
      <ul className="mt-10 max-w-4xl border-y border-zinc-200">
        {options.map((option) => (
          <li
            key={option.title}
            className="grid gap-3 border-b border-zinc-100 py-7 last:border-b-0 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] md:gap-8 md:py-9"
          >
            <h3 className="text-sm font-semibold text-zinc-900 md:sticky md:top-28 md:self-start md:text-base">{option.title}</h3>
            <div>
              <p className="text-sm leading-relaxed text-zinc-600 md:text-base">{option.copy}</p>
              <div className="mt-5">
                <PrimaryCta href={option.cta.href} label={option.cta.label} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </SectionFrame>
  );
}

function FaqSection() {
  const faqs = [
    {
      question: "What is a GEO agency?",
      answer:
        "A GEO agency helps businesses improve how they appear in generative AI and answer-led search environments. That usually includes tracking visibility, reviewing mentions and citations, benchmarking competitors and improving the pages most likely to influence AI-generated answers.",
    },
    {
      question: "Is GEO different from AEO?",
      answer:
        "The terms overlap heavily. GEO stands for generative engine optimisation, while AEO stands for answer engine optimisation. In practice, both are about improving visibility in AI-generated answers and making your business easier to understand and cite.",
    },
    {
      question: "Why have a GEO page if your main service page is about AEO?",
      answer:
        "Because people search using different terms. This page exists to capture GEO-specific intent, explain how the term relates to AEO, and help you choose the right next step without duplicating the full service page.",
    },
    {
      question: "What's the best place to start?",
      answer:
        "For many teams, the best place to start is an audit. That gives you a clearer baseline and a practical view of what to fix first. If you already know you want hands-on support, the AEO agency page is the better next step.",
    },
    {
      question: "Do you guarantee mentions or citations?",
      answer:
        "No. No credible provider should promise that. The goal is to improve the conditions that make accurate mentions, stronger positioning and better citation visibility more likely over time.",
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
        <PrimaryCta href="/contact" label="Get in touch" />
      </div>
    </SectionFrame>
  );
}
