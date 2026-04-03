import type { Metadata } from "next";
import Link from "next/link";

import { buildPageMetadata } from "@/components/seo/metadata";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/json-ld";
import { MarketingHero } from "@/components/marketing/sections";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: "About Tilio | UK AEO Agency for AI Visibility",
  description:
    "Tilio is an Exeter-based AEO agency co-founded by Jack. We help UK marketing and SEO teams improve mentions and citations in AI-generated answers through structured measurement, competitor benchmarking and page-level recommendations.",
  path: "/about",
});

const PAGE_URL = `${siteConfig.siteUrl}/about`;
const PAGE_DATE = "2026-04-02";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jack",
  jobTitle: "Co-founder",
  worksFor: {
    "@type": "Organization",
    "@id": `${siteConfig.siteUrl}/#organization`,
    name: siteConfig.name,
    url: siteConfig.siteUrl,
  },
};

export default function AboutPage() {
  return (
    <>
      <WebPageJsonLd
        name="About Tilio | UK AEO Agency for AI Visibility"
        description="Tilio is an Exeter-based AEO agency co-founded by Jack. We help UK marketing and SEO teams improve mentions and citations in AI-generated answers through structured measurement, competitor benchmarking and page-level recommendations."
        url={PAGE_URL}
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.siteUrl },
          { name: "About", url: PAGE_URL },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <MarketingHero
        eyebrow="About Tilio"
        title="We help UK businesses make sense of AI search."
        description="Tilio combines AI visibility tracking, competitor benchmarking and practical website improvements to help businesses show up more clearly in answer-led search."
        primaryCta={{ href: "/contact", label: "Work with us" }}
        secondaryCta={{ href: "/aeo-agency", label: "Our AEO services" }}
      />

      <FounderSection />
      <WhyTilioSection />
      <HowWeWorkSection />
      <SmallTeamSection />
    </>
  );
}

function SectionFrame({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative bg-background py-16 md:py-20">
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

function FounderSection() {
  return (
    <SectionFrame>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-medium text-zinc-500">From the co-founder</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">A note from Jack</h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">Co-founder, Tilio</p>
        </div>
        <div className="space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base">
          <p>
            I started Tilio because search is changing quickly, and most businesses still do not have a clear way to understand how they show up in
            AI-led search.
          </p>
          <p>
            Rankings still matter, but they&rsquo;re no longer the full picture. Brands also need to know whether they&rsquo;re being mentioned, how
            they&rsquo;re being described, whether their pages are being cited, and where competitors are showing up instead.
          </p>
          <p>
            Tilio was built to make that clearer. The aim is to give businesses a more practical way to measure AI visibility, understand what is really
            happening across platforms like ChatGPT, Perplexity and Google AI Overviews, and turn that into useful action on the site.
          </p>
        </div>
      </div>
    </SectionFrame>
  );
}

function WhyTilioSection() {
  return (
    <SectionFrame>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-medium text-zinc-500">Purpose</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">Why Tilio exists</h2>
        </div>
        <div className="space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base">
          <p>There is already a lot of noise around AEO, GEO and AI search. What is often missing is a clear, practical way to approach it.</p>
          <p>
            Tilio exists to close that gap. The focus is on structured measurement, competitor benchmarking, citation analysis and page-level
            recommendations that help businesses improve how they appear in answer-led search.
          </p>
          <p>
            Rather than treating AEO as a light extension of SEO, Tilio takes a more specialist approach. The goal is to help businesses become easier
            to find, easier to understand and easier to trust when buyers use AI tools to research options and compare providers.
          </p>
        </div>
      </div>
    </SectionFrame>
  );
}

function HowWeWorkSection() {
  return (
    <SectionFrame>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-medium text-zinc-500">Delivery model</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">How we work</h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">Practical and delivery-focused. The work is not just about reporting on how search is changing.</p>
        </div>
        <div className="space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base">
          <p>
            It is about understanding how a business appears across key AI search platforms, where competitors are ahead, and what needs to change on
            the site to improve visibility over time.
          </p>
          <p>
            The work is methodology-led and commercially focused. It connects measurement to action — whether that means improving service pages,
            strengthening pricing and comparison content, tightening internal links, or creating content that is easier for AI systems to retrieve,
            understand and cite.
          </p>
          <div className="border-t border-zinc-100 pt-6">
            <Link
              href="/how-we-measure-ai-visibility"
              className="text-sm font-medium text-zinc-900 underline underline-offset-2 hover:text-[#1d4ed8]"
            >
              See how we measure AI visibility &rarr;
            </Link>
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}

function SmallTeamSection() {
  return (
    <SectionFrame>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-medium text-zinc-500">Team</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">A small specialist team</h2>
        </div>
        <div className="space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base">
          <p>Tilio operates as a small specialist team. That is deliberate.</p>
          <p>
            It keeps the work focused, the methodology tight and the output useful. Rather than bolting AEO onto a broad digital retainer, Tilio is
            built around one clear problem: helping businesses understand and improve how they show up in AI-led search.
          </p>
          <p>
            We are based in Exeter and work with UK businesses across the country — from in-house marketing teams and founders to agencies that need
            specialist AEO support alongside their existing delivery.
          </p>
        </div>
      </div>
    </SectionFrame>
  );
}
