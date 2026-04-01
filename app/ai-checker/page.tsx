import type { Metadata } from "next";

import { AiCheckerHeroForm, AiCheckerProvider, AiCheckerResultsSection } from "@/components/ai-checker/ai-checker-experience";
import { AiCheckerPageSections } from "@/components/ai-checker/ai-checker-page-sections";
import { buildPageMetadata } from "@/components/seo/metadata";
import { AiCheckerWebAppJsonLd } from "@/components/seo/json-ld";
import { MarketingHero } from "@/components/marketing/sections";

export const metadata: Metadata = buildPageMetadata({
  title: "Free AI Visibility Checker | AI Search Readiness Tool",
  description:
    "Use our free AI visibility checker to test your site's AI search readiness. Check robots.txt, structured data, and on-page signals, then get an instant score and next steps.",
  path: "/ai-checker",
});

export default function AiCheckerPage() {
  return (
    <AiCheckerProvider>
      <AiCheckerWebAppJsonLd />
      <MarketingHero
        eyebrow="AI Visibility Checker"
        title="Understand how often AI systems mention your brand."
        description="A practical checker workflow that highlights where you appear, where you are absent, and where competitors dominate citations."
        primaryCta={{ href: "/contact", label: "Request a checker run" }}
        secondaryCta={{ href: "/ai-visibility-audit", label: "Compare with full audit" }}
      >
        <AiCheckerHeroForm />
      </MarketingHero>
      <AiCheckerResultsSection />
      <AiCheckerPageSections />
    </AiCheckerProvider>
  );
}
