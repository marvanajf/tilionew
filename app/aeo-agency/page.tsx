import type { Metadata } from "next";
import Link from "next/link";

import { buildPageMetadata } from "@/components/seo/metadata";
import { BreadcrumbJsonLd, FaqPageJsonLd, WebPageJsonLd } from "@/components/seo/json-ld";
import { MarketingHero } from "@/components/marketing/sections";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: "UK AEO Agency | Answer Engine Optimisation Services",
  description:
    "UK AEO agency for marketing and SEO teams. Improve mentions and citations in AI answers with technical foundations, answer-ready content, monitoring, and stakeholder reporting.",
  path: "/aeo-agency",
});

const PAGE_URL = `${siteConfig.siteUrl}/aeo-agency`;
const PAGE_DATE = "2026-04-02";

const FAQ_ITEMS = [
  {
    question: "What is AEO?",
    answer:
      "AEO, or Answer Engine Optimisation, is the practice of improving the likelihood that your brand is included, cited or recommended in AI-generated answers. It focuses on the signals answer systems use to interpret and trust information.",
  },
  {
    question: "Is AEO the same as SEO?",
    answer:
      "No. SEO and AEO overlap, but they are not identical. SEO improves discoverability in traditional search results. AEO focuses on improving selection within AI-generated answers and assistant experiences, where extractability, clarity and credibility are especially important.",
  },
  {
    question: "What is the difference between an AEO agency and an SEO agency?",
    answer:
      "An SEO agency typically approaches AEO through a traditional lens — more blog content, metadata, schema and internal links. A specialist AEO agency starts by looking at how your brand actually appears inside AI-generated answers. That means prompt-based testing, tracking mentions and citations, analysing which pages are used as sources, benchmarking competitors and improving content so it is easier for AI systems to retrieve, understand and cite. The measurement also differs: SEO focuses on rankings and traffic, while AEO focuses on mention rates, citation rates and share of voice in answer-led search.",
  },
  {
    question: "Can you optimise for Google AI Overviews and ChatGPT?",
    answer:
      "Yes. No agency can control AI outputs directly, but it is possible to improve the likelihood of being selected, cited and described accurately by strengthening public information, content structure, entity clarity and authority signals.",
  },
  {
    question: "How do you measure AEO results?",
    answer:
      "We measure visibility across prompts, quality of mentions and citations, accuracy of description, and commercial outcomes such as traffic and conversions where available.",
  },
  {
    question: "How long does AEO take to show results?",
    answer:
      "Most programmes begin with baseline measurement and prioritisation, followed by implementation of technical and content improvements. Early movement can appear within the first one to three months, depending on the site, the competition and the scope of work.",
  },
];

export default function AeoAgencyPage() {
  return (
    <>
      <WebPageJsonLd
        name="UK AEO Agency | Answer Engine Optimisation Services | Tilio"
        description="UK AEO agency for marketing and SEO teams. Improve mentions and citations in AI answers with technical foundations, answer-ready content, monitoring, and stakeholder reporting."
        url={PAGE_URL}
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
      />
      <FaqPageJsonLd questions={FAQ_ITEMS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.siteUrl },
          { name: "AEO Agency", url: PAGE_URL },
        ]}
      />
      <MarketingHero
        eyebrow="AEO Agency"
        title="UK AEO Agency for Measurable AI Visibility"
        description="We measure how Google, ChatGPT, Perplexity describe your brand, benchmark you against competitors, and improve the content and pages most likely to increase mentions and citations."
        primaryCta={{ href: "/contact", label: "Contact us" }}
        secondaryCta={{ href: "/pricing", label: "View pricing for the £499/month AEO plan" }}
      />
      <IntroSection />
      <ProfoundSection />
      <FitSection />
      <ExplanationSection />
      <AeoVsSeoSection />
      <WhatYouGetSection />
      <FourLayerSystemSection />
      <PlatformsSection />
      <UkFocusedSection />
      <MeasurementSection />
      <ReportingSection />
      <SecuritySection />
      <WhyChooseUsSection />
      <FaqSection />
    </>
  );
}

function SectionFrame({
  children,
  className = "py-16 md:py-20",
}: {
  children: React.ReactNode;
  className?: string;
}) {
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

function IntroSection() {
  return (
    <SectionFrame className="py-12 md:py-16">
      <h2 className="text-center text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">How we deliver AEO outcomes</h2>
      <div className="mx-auto mt-6 max-w-4xl px-6 py-2 text-center md:px-10">
        <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
          We measure how AI systems describe your brand, identify what is holding visibility back, and implement the content and technical changes most
          likely to improve selection, citation and recommendation.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">For teams that want expert delivery, not another platform to manage alone.</p>
      </div>
    </SectionFrame>
  );
}

function FitSection() {
  const fitRows = [
    {
      label: "In-house marketing and SEO teams",
      copy: "Best for teams with limited implementation capacity who need specialist AEO execution support.",
    },
    {
      label: "Brands scaling AI visibility",
      copy: "For businesses that want better visibility in AI search without building the full function from scratch.",
    },
    {
      label: "Agencies needing specialist support",
      copy: "Ideal when your team needs an AEO specialist layer behind client delivery.",
    },
    {
      label: "Stakeholders needing measurable plans",
      copy: "Designed for decision-makers who need a practical plan with clear progress, not broad advice.",
    },
  ];

  return (
    <StickySplitSection
      label="Purpose"
      title="Who this service is for"
      intro="This service is for teams that need AEO delivered properly, with clear priorities, visible progress and reporting that stands up to scrutiny."
    >
      <ul className="border-y border-zinc-200">
        {fitRows.map((row) => (
          <li
            key={row.label}
            className="grid gap-3 border-b border-zinc-100 py-7 last:border-b-0 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] md:gap-8 md:py-9"
          >
            <p className="text-sm font-semibold text-zinc-900 md:sticky md:top-28 md:self-start md:text-base">{row.label}</p>
            <p className="text-sm leading-relaxed text-zinc-600 md:text-base">{row.copy}</p>
          </li>
        ))}
      </ul>
    </StickySplitSection>
  );
}

function ExplanationSection() {
  return (
    <StickySplitSection
      label="Foundations"
      title="What AEO is and why it matters"
      intro="Answer Engine Optimisation, or AEO, is the practice of increasing the likelihood that your brand is included, cited or recommended in AI-generated answers."
    >
      <div className="space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base">
        <p>
          That means improving the signals answer systems rely on most: clear structure, reliable evidence, unambiguous entity information and authority
          beyond your own website.
        </p>
        <p>Our work is tied to what AI systems are actually returning for your priority questions, not to generic SEO checklists.</p>
      </div>
    </StickySplitSection>
  );
}

function AeoVsSeoSection() {
  return (
    <StickySplitSection
      label="Specialist vs generalist"
      title="AEO agency vs SEO agency: what's the difference?"
      intro="An SEO agency that offers AEO will usually approach it through a traditional SEO lens."
    >
      <div className="space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base">
        <p>
          That often means publishing more blog content, tightening metadata, adding schema, improving internal links, and hoping that stronger organic
          visibility translates into stronger AI visibility too. Some of that work still matters. But it is often only part of the picture.
        </p>
        <p>
          A specialist AEO agency starts somewhere else. It looks at how your brand actually appears inside AI-generated answers, not just where pages
          rank in search results. That means prompt-based testing, tracking mentions and citations across platforms, analysing which pages are being used
          as sources, benchmarking competitors, and improving content so it is easier for AI systems to retrieve, understand and cite.
        </p>
        <p>
          The measurement is different too. Traditional SEO leans heavily on rankings, clicks and traffic. AEO looks more at visibility across prompt
          sets, mention rates, citation rates, competitor presence and share of voice in answer-led search.
        </p>
        <p className="font-medium text-zinc-900">
          In short: an SEO agency may help you rank better. A specialist AEO agency is there to help you show up better inside the answer itself.
        </p>
      </div>
    </StickySplitSection>
  );
}

function WhatYouGetSection() {
  const deliverables = [
    "Prompt and topic tracking against your priority commercial questions",
    "A prioritised action plan based on observed answer behaviour",
    "Content recommendations and implementation guidance",
    "Technical improvements that support machine interpretation and crawlability",
    "Monthly reporting on visibility, quality and outcomes",
  ];

  return (
    <StickySplitSection
      label="Delivery model"
      title="What you get"
      intro="Our AEO programme combines analysis, implementation support and reporting in one operating rhythm."
    >
      <div>
        <p className="text-sm font-semibold text-zinc-900">Each cycle includes:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
          {deliverables.map((item) => (
            <li key={item} className="pl-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-6 text-sm leading-relaxed text-zinc-600 md:text-base">
        You get a clear baseline, a focused plan, and a practical sequence of work that builds over time.
      </p>
    </StickySplitSection>
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

function FourLayerSystemSection() {
  const layers = [
    {
      title: "Discoverability foundations",
      copy: "We improve the technical conditions that help machines access, interpret and trust your site, including crawl and index health, internal linking, template issues and structured data.",
    },
    {
      title: "Answer-ready content",
      copy: "We create or refine content around the questions your buyers actually ask, using clear definitions, comparisons, step-by-step guidance and formatting that makes key information easier to extract.",
    },
    {
      title: "Entity and credibility signals",
      copy: "We strengthen the clarity and consistency of how your brand, products and expertise are described across the web, supported by evidence that reinforces important claims.",
    },
    {
      title: "Authority and amplification",
      copy: "We improve the supporting signals beyond your own domain through relevant mentions, references and reputation cues that increase trust in selection.",
    },
  ];

  return (
    <SectionFrame>
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">A complete AEO system, not isolated fixes</h2>
      <p className="mt-4 max-w-4xl text-sm leading-relaxed text-zinc-600 md:text-base">
        AEO underperforms when it is treated as only a content problem or only a technical problem. We run a four-layer programme so each part of the
        work strengthens the rest.
      </p>
      <ol className="mt-10 max-w-4xl list-none space-y-0">
        {layers.map((layer, index) => (
          <li
            key={layer.title}
            className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 gap-y-2 border-b border-zinc-100 py-8 first:pt-0 last:border-b-0 last:pb-0 md:gap-x-8 md:py-10"
          >
            <span className="select-none text-2xl font-semibold tabular-nums leading-none text-zinc-300 md:text-3xl" aria-hidden>
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-base font-semibold text-zinc-900">{layer.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-base">{layer.copy}</p>
            </div>
          </li>
        ))}
      </ol>
    </SectionFrame>
  );
}

function PlatformsSection() {
  const platforms = [
    {
      title: "Google AI Overviews",
      copy: "Improve the likelihood of selection and citation through better coverage, structure and evidence.",
    },
    {
      title: "Google AI Mode and conversational search",
      copy: "Support follow-up questions, comparisons and decision-stage queries with clearer, more complete answers.",
    },
    {
      title: "AI assistants including ChatGPT",
      copy: "Improve how your brand is described and when it is recommended by strengthening entity and authority signals.",
    },
    {
      title: "Citation-led engines such as Perplexity",
      copy: "Increase the likelihood that your pages are referenced as sources through evidence-led content and clean structure.",
    },
  ];

  return (
    <StickySplitSection
      label="Answer surfaces"
      title="Platforms we optimise for"
      intro="We optimise for the environments where users now expect direct answers, not just links."
    >
      <div>
        <ul className="border-y border-zinc-200">
          {platforms.map((platform) => (
            <li
              key={platform.title}
              className="grid gap-3 border-b border-zinc-100 py-7 last:border-b-0 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] md:gap-8 md:py-9"
            >
              <h3 className="text-sm font-semibold text-zinc-900 md:sticky md:top-28 md:self-start md:text-base">{platform.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-600 md:text-base">{platform.copy}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link
            href="/contact"
            className="group inline-flex items-center rounded-[10px] border border-[#93c5fd] bg-[#93c5fd]/20 px-6 py-2.5 text-sm font-medium text-[#1d4ed8] transition-all duration-200 hover:bg-[#93c5fd] hover:text-[#1e3a8a]"
          >
            <span className="mr-2">Discuss your priorities</span>
            <span className="inline-flex rounded-[10px] border border-[#93c5fd] p-1 transition-all duration-200 group-hover:border-[#60a5fa]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </StickySplitSection>
  );
}

function MeasurementSection() {
  const pillars = [
    {
      title: "Visibility",
      copy: "Whether your brand appears for priority questions, and how often.",
    },
    {
      title: "Quality",
      copy: "How you are described, whether you are cited, and how your positioning compares with competitors.",
    },
    {
      title: "Outcomes",
      copy: "Traffic, leads and conversions from answer-led discovery, where tracking is available.",
    },
  ];

  return (
    <StickySplitSection
      label="What we track"
      title="Measurement that reflects how AI discovery works"
      intro="We measure three things using an agreed prompt set and topic list."
    >
      <div>
        <ul className="border-y border-zinc-200">
          {pillars.map((pillar) => (
            <li
              key={pillar.title}
              className="grid gap-3 border-b border-zinc-100 py-7 last:border-b-0 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] md:gap-8 md:py-9"
            >
              <h3 className="text-sm font-semibold text-zinc-900 md:sticky md:top-28 md:self-start md:text-base">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-600 md:text-base">{pillar.copy}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm leading-relaxed text-zinc-600 md:text-base">
          This gives you a baseline, a monthly view of progress and a prioritised action list for the next cycle.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="group inline-flex items-center rounded-[10px] border border-[#93c5fd] bg-[#93c5fd]/20 px-6 py-2.5 text-sm font-medium text-[#1d4ed8] transition-all duration-200 hover:bg-[#93c5fd] hover:text-[#1e3a8a]"
          >
            <span className="mr-2">Plan measurement with us</span>
            <span className="inline-flex rounded-[10px] border border-[#93c5fd] p-1 transition-all duration-200 group-hover:border-[#60a5fa]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </StickySplitSection>
  );
}

function UkFocusedSection() {
  return (
    <StickySplitSection
      label="UK delivery"
      title="UK-focused AEO, based in Exeter"
      intro="We work with UK brands that want to improve how they appear in AI-generated answers for high-intent searches."
    >
      <div className="space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base">
        <p>
          From our base in Exeter, we support teams across the UK with AEO work built around commercial queries, competitor benchmarking, and content
          improvements that make brands easier to mention and cite.
        </p>
        <p>
          That includes the searches buyers actually use when comparing providers, such as pricing, alternatives, comparisons, service fit, and who is
          best suited to a specific brief.
        </p>
        <p>Our focus is not just visibility in general. It is visibility for the queries most likely to influence pipeline.</p>
      </div>
      <div className="mt-8">
        <Link
          href="/contact"
          className="group inline-flex items-center rounded-[10px] border border-[#93c5fd] bg-[#93c5fd]/20 px-6 py-2.5 text-sm font-medium text-[#1d4ed8] transition-all duration-200 hover:bg-[#93c5fd] hover:text-[#1e3a8a]"
        >
          <span className="mr-2">Talk to our Exeter team</span>
          <span className="inline-flex rounded-[10px] border border-[#93c5fd] p-1 transition-all duration-200 group-hover:border-[#60a5fa]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </Link>
      </div>
    </StickySplitSection>
  );
}

function ReportingSection() {
  const reportingItems = [
    "What was limiting visibility",
    "What changed across technical, content, entity and authority work",
    "What improved across mentions, citations, description accuracy and commercial outcomes where available",
  ];

  return (
    <SectionFrame>
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">What reporting looks like</h2>
      <p className="mt-4 max-w-4xl text-sm leading-relaxed text-zinc-600 md:text-base">
        Our reporting is designed to make progress easy to understand internally.
      </p>
      <div className="mt-7 max-w-4xl">
        <p className="text-sm font-semibold text-zinc-900">Each reporting cycle shows:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
          {reportingItems.map((item) => (
            <li key={item} className="pl-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-6 text-sm leading-relaxed text-zinc-600 md:text-base">
        Where useful, we include before-and-after examples for specific prompts so the change is clear.
      </p>
    </SectionFrame>
  );
}

function SecuritySection() {
  return (
    <SectionFrame>
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">Security and data handling</h2>
      <div className="mt-4 max-w-4xl space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base">
        <p>
          AEO work involves your questions, domains, competitive context and reporting. We treat that information as sensitive by default.
        </p>
        <p>
          We run delivery on a SOC 2 compliant platform, with encryption in transit and at rest, controlled access and separation between client
          workspaces.
        </p>
        <p>
          That gives in-house teams, agencies and compliance stakeholders a delivery environment aligned with serious operational expectations.
        </p>
      </div>
    </SectionFrame>
  );
}

function WhyChooseUsSection() {
  const reasons = [
    {
      headline: "Delivery, not just dashboards",
      copy: "Shipped work and accountable follow-through—not another dashboard nobody acts on.",
    },
    {
      headline: "Prioritised actions, not generic recommendations",
      copy: "A ranked plan based on what answer systems are doing for your prompts, not boilerplate SEO lists.",
    },
    {
      headline: "Reporting that stakeholders can trust",
      copy: "Clear narratives for leadership and reviews: what changed, why it mattered, and what is next.",
    },
    {
      headline: "One joined-up system",
      copy: "Technical SEO, content, entity clarity and authority signals handled as a connected programme—not siloed fixes.",
    },
  ];

  return (
    <StickySplitSection
      label="Why Tilio"
      title="Why teams choose us"
      intro="Clients work with us when they need execution, prioritisation and reporting that stands up to scrutiny."
    >
      <div>
        <ul className="border-y border-zinc-200">
          {reasons.map((reason) => (
            <li
              key={reason.headline}
              className="grid gap-3 border-b border-zinc-100 py-7 last:border-b-0 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] md:gap-8 md:py-9"
            >
              <p className="text-sm font-semibold text-zinc-900 md:sticky md:top-28 md:self-start md:text-base">{reason.headline}</p>
              <p className="text-sm leading-relaxed text-zinc-600 md:text-base">{reason.copy}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm leading-relaxed text-zinc-600 md:text-base">We focus on execution and measurable improvement.</p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="group inline-flex items-center rounded-[10px] border border-[#93c5fd] bg-[#93c5fd]/20 px-6 py-2.5 text-sm font-medium text-[#1d4ed8] transition-all duration-200 hover:bg-[#93c5fd] hover:text-[#1e3a8a]"
          >
            <span className="mr-2">Contact us</span>
            <span className="inline-flex rounded-[10px] border border-[#93c5fd] p-1 transition-all duration-200 group-hover:border-[#60a5fa]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </StickySplitSection>
  );
}

function ProfoundSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 z-0 mx-auto w-full max-w-7xl px-6 lg:px-8" aria-hidden>
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(24,24,27,0.085)_1px,transparent_1px)] bg-[length:12px_12px] md:bg-[length:14px_14px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="relative h-full">
          <div className="absolute left-0 right-0 top-0 h-[0.5px] bg-zinc-200" />
          <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-zinc-200" />
          <div className="absolute left-0 top-0 h-full w-[0.5px] border-l border-dashed border-zinc-300" />
          <div className="absolute right-0 top-0 h-full w-[0.5px] border-r border-dashed border-zinc-300" />
        </div>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-zinc-500">Data infrastructure</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
            Powered by Profound
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
            Our AI search visibility data runs on{" "}
            <a
              href="https://www.tryprofound.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-zinc-900 underline underline-offset-2 hover:text-[#1d4ed8]"
            >
              Profound's platform
            </a>
            , giving us structured, reliable signal on how AI systems are describing and citing your brand across ChatGPT, Perplexity, Google AI Overviews, and more.
          </p>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <SectionFrame>
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">FAQs</h2>
      <div className="mx-auto mt-8 max-w-4xl space-y-4">
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

