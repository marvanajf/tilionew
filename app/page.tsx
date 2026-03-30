import type { Metadata } from "next";

import { buildPageMetadata } from "@/components/seo/metadata";
import {
  MarketingHero,
  OverarchingFaqSection,
  VisibilitySourcesSection,
} from "@/components/marketing/sections";

export const metadata: Metadata = buildPageMetadata({
  title: "AI Visibility & Answer Engine Optimisation",
  description:
    "Tilio helps businesses understand how AI systems describe their brand, benchmark competitors, and improve the content that drives mentions and citations.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <MarketingHero
        eyebrow="Answer Engine Optimization"
        title="Measure and improve your AI visibility"
        description="Tilio helps businesses understand how AI systems describe their brand, benchmark competitors, and improve the content that drives mentions and citations."
        primaryCta={{ href: "/contact", label: "Book a strategy call" }}
        secondaryCta={{ href: "/ai-visibility-audit", label: "See audit options" }}
        size="tall"
      />
      <VisibilitySourcesSection />
      <OverarchingFaqSection />
    </>
  );
}
