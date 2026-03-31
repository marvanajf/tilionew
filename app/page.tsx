import type { Metadata } from "next";

import { buildPageMetadata } from "@/components/seo/metadata";
import { LogoCycler } from "@/components/marketing/logo-cycler";
import {
  MarketingHero,
  OverarchingFaqSection,
  VisibilitySourcesSection,
} from "@/components/marketing/sections";

export const metadata: Metadata = buildPageMetadata({
  title: "UK AEO Agency for AI Search Visibility",
  description:
    "Tilio is a UK AEO agency helping brands improve AI search visibility through audits, content improvement, monitoring, and ongoing implementation. Plans from £499/month.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <MarketingHero
        eyebrow="Answer Engine Optimization"
        title="Measure and improve your AI visibility"
        description="Tilio helps businesses understand how AI systems describe their brand, benchmark competitors, and improve the content that drives mentions and citations."
        primaryCta={{ href: "/contact", label: "Book call" }}
        secondaryCta={{ href: "/ai-checker", label: "Free AI Visibility tool" }}
        secondaryCtaVariant="white"
        size="tall"
      >
        <LogoCycler />
      </MarketingHero>
      <VisibilitySourcesSection />
      <OverarchingFaqSection />
    </>
  );
}
