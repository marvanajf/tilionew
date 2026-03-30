import type { Metadata } from "next";

import { buildPageMetadata } from "@/components/seo/metadata";
import { BulletSection, CtaBand, FeatureGridSection, MarketingHero, PulseIcon, ShieldIcon, SparkIcon } from "@/components/marketing/sections";

export const metadata: Metadata = buildPageMetadata({
  title: "About Tilio | UK AEO Agency for AI Visibility",
  description:
    "Learn about Tilio, the Exeter-based AEO agency helping marketing and SEO teams improve mentions and citations in AI-generated answers.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <MarketingHero
        eyebrow="About Tilio"
        title="We help ambitious teams win visibility in the AI era of search."
        description="Our work blends strategic clarity with practical execution so marketing teams can move quickly, measure progress, and improve how they are represented in AI answers."
        primaryCta={{ href: "/contact", label: "Work with us" }}
        secondaryCta={{ href: "/blog", label: "Read our insights" }}
      />
      <FeatureGridSection
        title="Our operating principles"
        description="The standards behind every engagement."
        features={[
          { title: "Evidence over hype", description: "We prioritize measurable visibility signals over vague AI narratives.", icon: ShieldIcon },
          { title: "Execution-first strategy", description: "Every recommendation maps to practical implementation steps.", icon: PulseIcon },
          { title: "Long-term compounding", description: "We build systems that improve over time as platforms evolve.", icon: SparkIcon },
        ]}
      />
      <BulletSection
        title="Who we work best with"
        description="Typically teams that value speed, rigor, and close collaboration."
        bullets={["In-house SEO and growth teams", "Marketing leaders scaling AI-era acquisition", "B2B brands with complex buyer journeys", "Teams seeking structured AEO governance"]}
      />
      <CtaBand
        title="Looking for a focused AEO partner?"
        description="Tell us your goals and constraints, and we will outline the highest-leverage path forward."
        primary={{ href: "/contact", label: "Talk with our team" }}
      />
    </>
  );
}
