import type { Metadata } from "next";
import React from "react";
import Link from "next/link";

import { buildPageMetadata } from "@/components/seo/metadata";
import { BreadcrumbJsonLd, FaqPageJsonLd, WebPageJsonLd } from "@/components/seo/json-ld";
import { MarketingHero } from "@/components/marketing/sections";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: "What to expect working with Tilio on AEO",
  description:
    "See what to expect working with Tilio on AEO, including what happens after you enquire, onboarding, dashboard access, monthly deliverables and how the plan works.",
  path: "/working-with-tilio",
});

const PAGE_URL = `${siteConfig.siteUrl}/working-with-tilio`;
const PAGE_DATE = "2026-04-02";

const FAQ_ITEMS = [
  {
    question: "What happens after I fill out the form?",
    answer:
      "We'll be in touch to arrange a time that works for you. From there, we'll usually start with a discovery conversation to understand your goals, market and website, then recommend the best next step.",
  },
  {
    question: "Do I need to start with an audit before the monthly AEO plan?",
    answer:
      "Not always, but for many businesses it's the best starting point. An audit gives you a clearer baseline and helps show what to fix first. The monthly plan makes more sense when you already know you want regular tracking and implementation support.",
  },
  {
    question: "What do I get each month on the Tilio AEO plan?",
    answer:
      "You get platform tracking across Google AI Overviews, ChatGPT and Perplexity, 100 prompts monitored daily, competitor benchmarking, 3 content pieces and 3 content optimisations per month, 4 prioritised weekly actions, dashboard access, monthly reporting and Google Analytics integration for AI traffic attribution.",
  },
  {
    question: "Can I see my AI visibility data myself?",
    answer:
      "Yes. On the monthly plan, you get access to a dashboard so you can check in on the data whenever you want, without waiting for a monthly report.",
  },
  {
    question: "Is there a long-term contract for the Tilio AEO plan?",
    answer:
      "No. The monthly AEO plan is no-commit and you can cancel any time.",
  },
  {
    question: "Can Tilio guarantee mentions or citations in AI search?",
    answer:
      "No. No credible provider should promise that. What we do is improve the pages, structure and content most likely to influence visibility in a meaningful way.",
  },
];

export default function WorkingWithTilioPage() {
  return (
    <>
      <WebPageJsonLd
        name="What to expect working with Tilio on AEO | Tilio"
        description="See what to expect working with Tilio on AEO, including what happens after you enquire, onboarding, dashboard access, monthly deliverables and how the plan works."
        url={PAGE_URL}
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
      />
      <FaqPageJsonLd questions={FAQ_ITEMS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.siteUrl },
          { name: "Working with Tilio", url: PAGE_URL },
        ]}
      />
      <MarketingHero
        eyebrow="Managed AEO plan"
        title="What to expect working with Tilio on AEO"
        description="This page is for teams considering or starting Tilio's managed AEO plan. It covers what happens after you enquire, what onboarding looks like, what you receive each month, and how the work actually runs."
        primaryCta={{ href: "/contact", label: "Get in touch" }}
        secondaryCta={{ href: "/pricing", label: "View plan and pricing" }}
      />
      <IntroSection />
      <HowProcessStartsSection />
      <OnboardingSection />
      <WhatYouGetSection />
      <DashboardReportingSection />
      <WhatWeWorkOnSection />
      <WhatToExpectSection />
      <AuditVsMonthlySection />
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
  id,
}: {
  label: string;
  title: string;
  intro: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <SectionFrame id={id}>
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
  const questions = [
    { text: "What happens after I enquire?", href: "#how-it-starts", label: "How the process starts" },
    { text: "What do I actually get each month?", href: "#what-you-get", label: "What you get each month" },
    { text: "How much time will this take from our team?", href: "#onboarding", label: "What onboarding looks like" },
    { text: "Will I be able to see the data for myself?", href: "#dashboard", label: "Your dashboard and reporting" },
    { text: "Is this just reporting, or do you actually do the work?", href: "#what-we-work-on", label: "What we actually work on" },
  ];

  return (
    <SectionFrame>
      <div className="grid gap-12 lg:grid-cols-[1.6fr_0.9fr] lg:gap-16">
        <div>
          <p className="text-sm font-medium text-zinc-500">If you&rsquo;re on this page, you&rsquo;re probably asking:</p>
          <ul className="mt-5">
            {questions.map((q) => (
              <li key={q.text} className="border-b border-zinc-200 py-5 last:border-b-0">
                <p className="text-lg font-medium tracking-tight text-zinc-900 md:text-xl">{q.text}</p>
                <div className="mt-3">
                  <Link
                    href={q.href}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3.5 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:border-zinc-300 hover:text-zinc-900"
                  >
                    {q.label}
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-3 w-3" aria-hidden>
                      <path d="M8 3v10M3 8l5 5 5-5" />
                    </svg>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-zinc-500 md:text-base">That&rsquo;s what this page is here to answer.</p>
        </div>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">What this page covers</h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base">
            <p>
              We help you understand how your business shows up across AI-led search, where competitors are stronger, which pages are holding you
              back, and what to improve next.
            </p>
            <p>
              Some teams use terms like GEO or AI SEO. We use AEO because it&rsquo;s the clearest label, but the goal&rsquo;s the same: helping
              your business become easier to find, easier to understand and easier to cite in AI-led search.
            </p>
            <p>
              If you want a fixed starting point, begin with an{" "}
              <InlineLink href="/ai-visibility-audit">AI Visibility Audit</InlineLink>. If you already know you want monthly support, explore our{" "}
              <InlineLink href="/aeo-agency">AEO agency service</InlineLink>.
            </p>
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}

function HowProcessStartsSection() {
  const steps = [
    {
      title: "You send an enquiry",
      copy: (
        <>
          Fill out the <InlineLink href="/contact">contact form</InlineLink> with a few details about your business and what you want to improve.
        </>
      ),
    },
    { title: "We arrange an intro call", copy: "We'll be in touch to find a time that works. The call is short and low-pressure." },
    { title: "We discuss fit, priorities and likely value", copy: "We talk through your market, your site and where the biggest opportunities are likely to be." },
    { title: "We recommend the right starting point", copy: "That might be an audit, or straight into the monthly plan, depending on what makes most sense." },
    { title: "We confirm scope and next steps", copy: "Clear agreement on what we'll do, in what order, and what you should expect." },
    { title: "We begin onboarding", copy: "The setup work starts and we align everything before the first reporting cycle." },
  ];

  return (
    <StickySplitSection
      id="how-it-starts"
      label="First steps"
      title="How the process starts"
      intro="Once you fill out the form, we'll be in touch to arrange a time that works for you. The aim is to make the first step feel straightforward, while still giving you confidence that the work is being set up properly."
    >
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
        <PrimaryCta href="/contact" label="Get in touch" />
      </div>
    </StickySplitSection>
  );
}

function OnboardingSection() {
  const items = [
    "an onboarding call",
    "your priority services, categories or commercial areas",
    "competitor selection",
    "prompt theme planning",
    "review of key commercial pages",
    "tracking and reporting setup",
    "alignment on what success should look like",
  ];

  return (
    <StickySplitSection
      id="onboarding"
      label="Setup"
      title="What onboarding looks like"
      intro="Onboarding is where we turn a general interest in AEO into a clear working plan."
    >
      <div className="space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base">
        <p>
          At this stage, we align on the commercial context behind the work. That means understanding what you sell, who you want to attract, how
          buyers in your category research options, which competitors matter most, and which pages on your site are most likely to influence
          shortlisting.
        </p>
        <p>At the start, we&rsquo;ll work through:</p>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
        {items.map((item) => (
          <li key={item} className="pl-1">
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm leading-relaxed text-zinc-600 md:text-base">
        This matters because strong setup leads to more useful reporting, better priorities and faster progress.
      </p>
    </StickySplitSection>
  );
}

function WhatYouGetSection() {
  const groups = [
    {
      category: "Monitoring",
      rows: [
        { label: "Platforms tracked", value: "Google AI Overviews, ChatGPT and Perplexity" },
        { label: "Prompts monitored", value: "100 prompts, checked daily" },
        { label: "Competitor benchmarking", value: "Included" },
        { label: "Language", value: "English" },
      ],
    },
    {
      category: "Content and actions",
      rows: [
        { label: "Content pieces", value: "3 per month — new or updated, written to be cited" },
        { label: "Content optimisations", value: "3 per month — existing pages improved based on monitoring" },
        { label: "Prioritised actions", value: "4 per week, tied to specific visibility opportunities" },
      ],
    },
    {
      category: "Reporting and data",
      rows: [
        { label: "Monthly report", value: "Findings, trends and next steps" },
        { label: "Dashboard access", value: "Live data, check any time" },
        { label: "AI traffic attribution", value: "Google Analytics integration" },
        { label: "Domains", value: "Unlimited" },
      ],
    },
  ];

  return (
    <StickySplitSection
      id="what-you-get"
      label="Monthly deliverables"
      title="What you get each month"
      intro="Our monthly AEO plan is no-commit, so you're not tied into a long contract. You can cancel any time."
    >
      <div className="overflow-hidden rounded-xl border border-zinc-200">
        <table className="w-full text-sm">
          <tbody>
            {groups.map((group, gi) => (
              <React.Fragment key={group.category}>
                <tr className={gi > 0 ? "border-t border-zinc-200 bg-zinc-50" : "bg-zinc-50"}>
                  <td colSpan={2} className="px-5 py-2.5 text-xs font-semibold tracking-tight text-zinc-500">
                    {group.category}
                  </td>
                </tr>
                {group.rows.map((row) => (
                  <tr key={row.label} className="border-t border-zinc-100">
                    <td className="w-[42%] px-5 py-3.5 align-top text-zinc-500">{row.label}</td>
                    <td className="px-5 py-3.5 align-top font-medium text-zinc-900">{row.value}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-sm leading-relaxed text-zinc-600 md:text-base">
        That means you get more than a monthly summary. You get a working system that combines visibility measurement, competitor context, content
        actions and practical website improvements.
      </p>
      <div className="mt-8">
        <PrimaryCta href="/pricing" label="View pricing" />
      </div>
    </StickySplitSection>
  );
}

function DashboardReportingSection() {
  const reportQuestions = [
    "where are we showing up well",
    "where are competitors ahead",
    "which prompts matter most",
    "which pages are being cited",
    "where are the biggest opportunities",
    "what should we fix next",
  ];

  return (
    <StickySplitSection
      id="dashboard"
      label="Visibility data"
      title="Your dashboard and reporting"
      intro="You shouldn't have to wait for one monthly PDF to know what's going on."
    >
      <div className="space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base">
        <p>
          As part of the monthly plan, you&rsquo;ll have access to a dashboard so you can check in on the data whenever you want. That gives you a
          live view of how visibility is moving across tracked prompts and platforms, how competitors are performing, and which pages are being cited.
        </p>
        <p>
          Alongside that, you&rsquo;ll also get a monthly report that pulls the important points together clearly. That reporting is there to answer
          practical questions like:
        </p>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
        {reportQuestions.map((q) => (
          <li key={q} className="pl-1">
            {q}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm leading-relaxed text-zinc-600 md:text-base">
        If you want the methodology behind that in more detail, our page on{" "}
        <InlineLink href="/how-we-measure-ai-visibility">how we measure AI visibility</InlineLink> explains exactly how the tracking works.
      </p>
    </StickySplitSection>
  );
}

function WhatWeWorkOnSection() {
  const actions = [
    "tightening service pages that are too vague or hard to summarise",
    "improving pricing pages and buyer FAQs",
    "adding clearer comparison or alternatives content",
    "strengthening internal links between commercial pages and supporting proof",
    "improving the pages most likely to earn citations",
    "fixing content gaps where competitors are repeatedly winning",
  ];

  return (
    <StickySplitSection
      id="what-we-work-on"
      label="The work"
      title="What we actually work on"
      intro="This isn't just a measurement service."
    >
      <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
        The work usually turns into practical action on the pages most likely to influence AI visibility and buying intent. That often includes:
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-500 md:text-base">
        {actions.map((action) => (
          <li key={action} className="pl-1">
            {action}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm leading-relaxed text-zinc-600 md:text-base">
        That&rsquo;s usually what B2B teams care about most. Not just &ldquo;are we visible?&rdquo;, but &ldquo;what do we need to change on the site
        to improve that visibility in a commercially useful way?&rdquo;
      </p>
      <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">That&rsquo;s the difference between reporting and progress.</p>
      <div className="mt-8">
        <PrimaryCta href="/contact" label="Talk to us" />
      </div>
    </StickySplitSection>
  );
}

function WhatToExpectSection() {
  return (
    <SectionFrame>
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">What you should expect from us</h2>
      <div className="mt-6 max-w-4xl space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base">
        <p>You should expect a process that feels structured, transparent and commercially grounded.</p>
        <p>
          You should expect to know what&rsquo;s being tracked, what the data is showing, and what we think matters most. You should expect clear
          recommendations, visible monthly output and a plan that connects measurement to real page changes.
        </p>
        <p>
          You should also expect honesty about limits. We won&rsquo;t pretend every prompt behaves the same way, that every platform is perfectly
          stable, or that AI visibility can be reduced to one magic number. No credible provider should promise that.
        </p>
        <p>
          What we will do is build a disciplined process that gives you a clearer view of your visibility, stronger competitor context and practical
          actions that improve the conditions for mentions, citations and better positioning over time.
        </p>
      </div>
    </SectionFrame>
  );
}

function AuditVsMonthlySection() {
  const options = [
    {
      title: "Start with an AI Visibility Audit",
      copy: "If you want clarity and prioritisation. An audit gives you a baseline, a clearer view of your current visibility, competitor context and a practical list of what to fix first.",
      cta: { href: "/ai-visibility-audit", label: "Get the audit" },
    },
    {
      title: "Choose the monthly plan",
      copy: "If you want regular measurement, implementation and progress each month. The monthly plan makes more sense when you already know this matters in your market.",
      cta: { href: "/aeo-agency", label: "See the monthly plan" },
    },
  ];

  return (
    <SectionFrame>
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">Audit or monthly plan: where to start</h2>
      <p className="mt-4 max-w-4xl text-sm leading-relaxed text-zinc-600 md:text-base">
        For many businesses, the best first step is an audit. The monthly plan makes more sense when you already know this matters in your market and
        want regular tracking, content support, reporting and page improvement.
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
      question: "What happens after I fill out the form?",
      answer:
        "We'll be in touch to arrange a time that works for you. From there, we'll usually start with a discovery conversation to understand your goals, market and website, then recommend the best next step.",
    },
    {
      question: "Do I need to start with an audit?",
      answer:
        "Not always, but for many businesses it's the best starting point. An audit gives you a clearer baseline and helps show what to fix first. The monthly plan makes more sense when you already know you want regular tracking and implementation support.",
    },
    {
      question: "What do I get each month on the plan?",
      answer:
        "You get platform tracking, prompt monitoring, competitor benchmarking, content pieces, content optimisations, prioritised weekly actions, dashboard access, monthly reporting and Google Analytics integration.",
    },
    {
      question: "Can I see the data myself?",
      answer: "Yes. On the monthly plan, you get access to a dashboard so you can check in on the data whenever you want.",
    },
    {
      question: "Is there a long-term contract?",
      answer: "No. The monthly AEO plan is no-commit, and you can cancel any time.",
    },
    {
      question: "Can you guarantee mentions or citations?",
      answer:
        "No. No credible provider should promise that. What we do is improve the pages, structure and content most likely to influence visibility in a meaningful way.",
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
