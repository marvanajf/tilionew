import type { Metadata } from "next";

import { AiCheckerHeroForm, AiCheckerProvider, AiCheckerResultsSection } from "@/components/ai-checker/ai-checker-experience";
import { AiCheckerPageSections } from "@/components/ai-checker/ai-checker-page-sections";
import { buildPageMetadata } from "@/components/seo/metadata";
import { MarketingHero } from "@/components/marketing/sections";

export const metadata: Metadata = buildPageMetadata({
  title: "AI Checker",
  description: "Assess how visible your brand is in AI-generated answers and identify priority gaps.",
  path: "/ai-checker",
});

export default function AiCheckerPage() {
  return (
    <AiCheckerProvider>
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
