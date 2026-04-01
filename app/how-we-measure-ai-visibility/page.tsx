import type { Metadata } from "next";
import Link from "next/link";

import { buildPageMetadata } from "@/components/seo/metadata";
import { BreadcrumbJsonLd, FaqPageJsonLd, WebPageJsonLd } from "@/components/seo/json-ld";
import { MarketingHero } from "@/components/marketing/sections";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: "How we measure AI visibility",
  description:
    "Learn how Tilio measures AI visibility across Google AI Overviews, ChatGPT and Perplexity, including prompts, mentions, citations, competitor benchmarking and website actions.",
  path: "/how-we-measure-ai-visibility",
});

const PAGE_URL = `${siteConfig.siteUrl}/how-we-measure-ai-visibility`;
const PAGE_DATE = "2026-04-02";

const FAQ_ITEMS = [
  {
    question: "What is AI visibility measurement?",
    answer:
      "AI visibility measurement is the process of checking how often your brand, pages and competitors appear across a defined set of prompts on selected AI search surfaces. It uses a structured prompt set grouped by topic and intent to assess how a business shows up in AI-generated answers.",
  },
  {
    question: "What does Tilio track for AI visibility?",
    answer:
      "Tilio tracks brand mentions in AI-generated answers, citations to your domain and key URLs, cited pages, competitor benchmarking across the same prompt sets, platform-level differences, and movement over time. Prompts are grouped by commercial theme or service area.",
  },
  {
    question: "Which platforms does Tilio measure AI visibility on?",
    answer:
      "Tilio measures AI visibility across Google AI Overviews, ChatGPT, and Perplexity. These platforms are tracked because they are highly relevant to buyer discovery, comparison behaviour and answer-led search.",
  },
  {
    question: "What does Tilio not claim to measure?",
    answer:
      "Tilio does not claim to see every answer every user sees, to measure the full prompt universe for a category, to treat a sampled score as a complete market truth, or to guarantee that a mention or citation directly leads to traffic or revenue. The methodology is directional and designed to produce useful decision-making signals, not false precision.",
  },
  {
    question: "How does Tilio select and group prompts for AI visibility tracking?",
    answer:
      "Tilio groups prompts around practical types of commercial intent: category understanding, service or solution discovery, shortlist and comparison behaviour, alternatives and competitor evaluation, pricing and fit questions, and trust, proof and credibility checks. This avoids overfocusing on vanity queries and helps produce reporting that is easier to interpret and act on.",
  },
  {
    question: "What is the difference between a mention, a citation, and positioning in AI visibility?",
    answer:
      "A mention means your brand is named in the AI response. A citation means the answer includes a source from your website and uses it as part of the response. Positioning is about how your business is described — you might be mentioned but described vaguely, or cited from the wrong page. Tilio separates these layers in reporting because they have different commercial implications.",
  },
  {
    question: "How does AI visibility measurement translate into website actions?",
    answer:
      "Once Tilio identifies where visibility is strong, weak or inconsistent, that data informs specific website actions: improving service pages that are too vague, strengthening pricing pages and buyer FAQs, adding comparison or alternatives content, tightening internal linking, and fixing gaps where competitors are repeatedly winning the same prompt groups.",
  },
  {
    question: "What do clients receive from Tilio's ongoing AI visibility service?",
    answer:
      "Clients on ongoing support receive tracking across Google AI Overviews, ChatGPT and Perplexity, 100 tracked prompts monitored daily, competitor benchmarking, 3 content pieces and 3 content optimisations per month, 4 prioritised actions per week, a monthly report, Google Analytics integration for AI traffic attribution, and unlimited domains.",
  },
];

export default function HowWeMeasureAiVisibilityPage() {
  return (
    <>
      <WebPageJsonLd
        name="How we measure AI visibility | Tilio"
        description="Learn how Tilio measures AI visibility across Google AI Overviews, ChatGPT and Perplexity, including prompts, mentions, citations, competitor benchmarking and website actions."
        url={PAGE_URL}
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
      />
      <FaqPageJsonLd questions={FAQ_ITEMS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.siteUrl },
          { name: "How we measure AI visibility", url: PAGE_URL },
        ]}
      />
      <MarketingHero
        eyebrow="Methodology"
        title="How we measure AI visibility"
        description="AI visibility is still a new category, which means it is easy to make it sound broader, cleaner or more certain than it really is. We think the better approach is to be precise."
        primaryCta={{ href: "/ai-visibility-audit", label: "Start with an AI Visibility Audit" }}
        secondaryCta={{ href: "/aeo-agency", label: "Explore our AEO agency service" }}
      />
      <IntroSection />
      <WhatMeasurementMeansSection />
      <WhatWeTrackSection />
      <WhatWeDoNotClaimSection />
      <PlatformsSection />
      <PromptSelectionSection />
      <MentionsCitationsSection />
      <WebsiteActionsSection />
      <WhatClientsReceiveSection />
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
      <div className="mx-auto mt-6 max-w-3xl text-center">
        <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
          This page explains how we measure AI visibility at Tilio, what we track, what we do not claim to track, and how that turns into practical
          website actions. It is here to show that our measurement is structured, comparative and commercially useful, not vague.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
          If you want a defined starting point, begin with an{" "}
          <InlineLink href="/ai-visibility-audit">AI Visibility Audit</InlineLink>. If you already know you need ongoing support, you can explore our{" "}
          <InlineLink href="/aeo-agency">AEO agency service</InlineLink>.
        </p>
      </div>
    </SectionFrame>
  );
}

function WhatMeasurementMeansSection() {
  const questions = [
    "is your brand mentioned at all",
    "is your website cited as a source",
    "which pages are being cited",
    "which competitors are being recommended instead",
    "how visibility changes by platform, topic or prompt group",
    "whether your positioning is clear, weak or inconsistent",
  ];

  return (
    <StickySplitSection
      label="Definition"
      title="What AI visibility measurement means"
      intro="AI visibility measurement is the process of checking how often your brand, pages and competitors appear across a defined set of prompts on selected AI search surfaces."
    >
      <div className="space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base">
        <p>
          In practice, that means we are not looking at one keyword and one ranking position in the way traditional SEO tools often do. We are looking
          at a structured prompt set, grouped by topic and intent, and assessing how your business shows up in AI-generated answers.
        </p>
        <p>That includes questions such as:</p>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
        {questions.map((q) => (
          <li key={q} className="pl-1">
            {q}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm leading-relaxed text-zinc-600 md:text-base">
        The goal is not to create a vanity score. The goal is to understand how visible, citable and understandable your business is when real buyer
        questions are asked in AI-led search.
      </p>
    </StickySplitSection>
  );
}

function WhatWeTrackSection() {
  const items = [
    "tracked prompts across agreed themes, services or commercial topics",
    "grouped intent, so prompts can be reviewed by category rather than one by one",
    "brand mentions in AI-generated answers",
    "citations to your domain and key URLs",
    "cited pages, so we can see which parts of the site are actually being used",
    "competitor benchmarking across the same prompt sets",
    "platform-level differences across the environments we monitor",
    "movement over time, so reporting is not based on a one-off snapshot",
  ];

  return (
    <StickySplitSection
      label="Tracking"
      title="What we track"
      intro="We track AI visibility in a structured way, not as a general impression."
    >
      <p className="text-sm font-semibold text-zinc-900">Our core measurement usually includes:</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
        {items.map((item) => (
          <li key={item} className="pl-1">
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm leading-relaxed text-zinc-600 md:text-base">
        Where relevant, we also review whether important commercial pages are easy to retrieve, easy to understand and easy to cite. That is where
        measurement becomes useful. It stops being a dashboard exercise and starts becoming page-level prioritisation.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
        Our monitoring layer is powered using Profound's platform, but the reporting and actions clients receive are shaped around Tilio's own prompt
        sets, analysis and recommendations.
      </p>
      <div className="mt-8">
        <PrimaryCta href="/contact" label="Plan measurement with us" />
      </div>
    </StickySplitSection>
  );
}

function WhatWeDoNotClaimSection() {
  const claims = [
    "to see every answer every user sees across every AI platform",
    "to measure the full prompt universe for your category",
    "to treat one sampled visibility score as a complete market truth",
    "to guarantee that a mention will lead directly to traffic or revenue",
    "to claim that a citation always means influence, or that no citation means no influence",
    "to present AI search as a perfectly stable environment where the same prompt always returns the same result",
    "to collapse all platforms into one neat number without context",
  ];

  return (
    <StickySplitSection
      label="Limits"
      title="What we do not claim to measure"
      intro="This is the most important part of the methodology. We do not claim to measure all AI visibility everywhere, and we do not think anyone should pretend they can."
    >
      <p className="text-sm font-semibold text-zinc-900">More specifically, we do not claim:</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
        {claims.map((claim) => (
          <li key={claim} className="pl-1">
            {claim}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm leading-relaxed text-zinc-600 md:text-base">
        That is why our methodology is prompt-based, grouped, comparative and directional. It is designed to produce useful decision-making signals,
        not false precision.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
        The point is not to overclaim. It is to understand enough, consistently enough, to improve the pages and topics that matter.
      </p>
    </StickySplitSection>
  );
}

function PlatformsSection() {
  const platforms = [
    {
      title: "Google AI Overviews",
      copy: "Where AI-generated answers appear at the top of search results, often before a user visits any website.",
    },
    {
      title: "ChatGPT",
      copy: "Where people ask direct buyer questions such as who should I hire, what should I choose, and what are the best options.",
    },
    {
      title: "Perplexity",
      copy: "A citation-led AI search engine where your pages can be referenced as sources for high-intent queries.",
    },
  ];

  return (
    <StickySplitSection
      label="Platforms"
      title="Platforms included"
      intro="We focus on three platforms because they are highly relevant to buyer discovery, comparison behaviour and answer-led search."
    >
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
      <p className="mt-6 text-sm leading-relaxed text-zinc-600 md:text-base">
        We do not present this as universal measurement of every AI environment. It is measurement across the platforms we actively monitor, using
        defined prompt sets and structured comparisons. A methodology is more useful when it is clear about where it applies.
      </p>
    </StickySplitSection>
  );
}

function PromptSelectionSection() {
  const intentTypes = [
    { title: "Category understanding", copy: "Prompts that test whether AI can describe what your category is and who it serves." },
    { title: "Service or solution discovery", copy: "Prompts around what types of business, product or service exist to solve a given problem." },
    { title: "Shortlist and comparison behaviour", copy: "Prompts that produce ranked lists, comparisons or recommendations within a category." },
    { title: "Alternatives and competitor evaluation", copy: "Prompts that ask for alternatives to a known brand or category leader." },
    { title: "Pricing and fit questions", copy: "Prompts that surface cost, constraints or suitability for a buyer's situation." },
    { title: "Trust, proof and credibility checks", copy: "Prompts that test whether a brand or claim can be verified or substantiated." },
  ];

  return (
    <StickySplitSection
      label="Prompt design"
      title="Prompt selection and intent grouping"
      intro="Prompt selection is one of the most important parts of the whole process. A weak prompt set creates weak reporting, even if the dashboard looks polished."
    >
      <p className="text-sm font-semibold text-zinc-900">We usually group prompts around a few practical types of intent:</p>
      <ul className="mt-4 border-y border-zinc-200">
        {intentTypes.map((intent) => (
          <li
            key={intent.title}
            className="grid gap-3 border-b border-zinc-100 py-7 last:border-b-0 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] md:gap-8 md:py-9"
          >
            <h3 className="text-sm font-semibold text-zinc-900 md:sticky md:top-28 md:self-start md:text-base">{intent.title}</h3>
            <p className="text-sm leading-relaxed text-zinc-600 md:text-base">{intent.copy}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm leading-relaxed text-zinc-600 md:text-base">
        That matters because AI visibility is rarely one-query deep. A commercial decision often sits across a cluster of prompts rather than one
        exact phrase.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
        Grouping prompts this way helps us avoid two common mistakes. The first is overfocusing on a tiny number of vanity queries. The second is
        treating all prompts as equally valuable when they clearly are not. The result is a reporting structure that is easier to interpret and easier
        to act on.
      </p>
    </StickySplitSection>
  );
}

function MentionsCitationsSection() {
  const reportQuestions = [
    "were we mentioned or absent",
    "were we cited from our own site",
    "which pages were cited most often",
    "were competitors cited more often than we were",
    "are we being positioned accurately",
    "which topics or prompt groups are weakest",
  ];

  return (
    <StickySplitSection
      label="Signal layers"
      title="Mentions, citations, and positioning"
      intro="These are related, but they are not the same thing."
    >
      <div className="space-y-0 border-y border-zinc-200">
        <div className="border-b border-zinc-100 py-7 md:py-9">
          <h3 className="text-sm font-semibold text-zinc-900 md:text-base">Mention</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-base">Your brand is named in the response.</p>
        </div>
        <div className="border-b border-zinc-100 py-7 md:py-9">
          <h3 className="text-sm font-semibold text-zinc-900 md:text-base">Citation</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-base">
            The answer includes a source from your website and uses that source as part of the response.
          </p>
        </div>
        <div className="py-7 md:py-9">
          <h3 className="text-sm font-semibold text-zinc-900 md:text-base">Positioning</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-base">
            How your business is described. You might be mentioned, but described vaguely. You might be cited, but for the wrong page. You might appear
            often, but mainly in lower-value prompts rather than higher-intent ones.
          </p>
        </div>
      </div>
      <p className="mt-6 text-sm leading-relaxed text-zinc-600 md:text-base">
        That is why we separate these layers in reporting. A useful AI visibility report should not just say you were visible. It should help answer
        questions like:
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
        {reportQuestions.map((q) => (
          <li key={q} className="pl-1">
            {q}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm leading-relaxed text-zinc-600 md:text-base">
        That is where measurement becomes commercially useful rather than cosmetic.
      </p>
    </StickySplitSection>
  );
}

function WebsiteActionsSection() {
  const actions = [
    "improving service pages that are too vague or hard to summarise",
    "strengthening pricing pages and buyer FAQs",
    "adding clearer comparison or alternatives content",
    "tightening internal linking between commercial pages and supporting proof",
    "reducing inconsistent language across the site",
    "improving the pages most likely to earn citations",
    "fixing gaps where competitors are repeatedly winning the same prompt groups",
  ];

  return (
    <StickySplitSection
      label="Actions"
      title="How this becomes website actions"
      intro="Measurement only matters if it changes decisions."
    >
      <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
        Once we know where visibility is strong, weak or inconsistent, we turn that into practical website actions. That often includes:
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
        {actions.map((action) => (
          <li key={action} className="pl-1">
            {action}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm leading-relaxed text-zinc-600 md:text-base">
        For clients on ongoing support, this does not stop at reporting. It also feeds directly into content production, content optimisation and
        prioritised actions each month, so the output is not just insight. It is progress.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
        In other words, the output is not &ldquo;here is your score, good luck&rdquo;. The output is a clearer view of what to improve first, what can
        wait, and which pages are most likely to influence AI visibility in a commercially meaningful way.
      </p>
      <div className="mt-8">
        <PrimaryCta href="/contact" label="Book a call" />
      </div>
    </StickySplitSection>
  );
}

function WhatClientsReceiveSection() {
  const ongoingItems = [
    "tracking across Google AI Overviews, ChatGPT and Perplexity",
    "100 tracked prompts, monitored daily",
    "competitor benchmarking",
    "English-language tracking",
    "3 content pieces per month, either new or updated, written to be cited",
    "3 content optimisations per month, focused on improving existing pages based on monitoring",
    "4 prioritised actions per week, tied to specific visibility opportunities",
    "an onboarding call",
    "a monthly report covering findings, trends and next steps",
    "Google Analytics integration for AI traffic attribution",
    "unlimited domains",
  ];

  return (
    <StickySplitSection
      label="Deliverables"
      title="What clients actually receive"
      intro="The exact format depends on whether you start with an audit or ongoing support, but the output is designed to be practical."
    >
      <div className="space-y-6 text-sm leading-relaxed text-zinc-600 md:text-base">
        <p>
          If you start with an{" "}
          <InlineLink href="/ai-visibility-audit">AI Visibility Audit</InlineLink>, the focus is usually on baseline visibility, current gaps and the
          highest-priority next steps.
        </p>
        <div>
          <p className="text-sm font-semibold text-zinc-900">If you move into ongoing support, clients typically receive:</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
            {ongoingItems.map((item) => (
              <li key={item} className="pl-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p>
          That means clients receive more than visibility data alone. They receive structured measurement, competitor context, content actions, page
          improvements and reporting that helps turn AI visibility into a practical workflow.
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <PrimaryCta href="/ai-visibility-audit" label="Start with an AI Visibility Audit" />
        <Link
          href="/aeo-agency"
          className="text-sm font-medium text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline"
        >
          Explore our AEO agency service
        </Link>
      </div>
    </StickySplitSection>
  );
}
