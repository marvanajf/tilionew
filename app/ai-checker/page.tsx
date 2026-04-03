import type { Metadata } from "next";

import { AiCheckerHeroForm, AiCheckerProvider, AiCheckerResultsSection } from "@/components/ai-checker/ai-checker-experience";
import { AI_CHECKER_FAQ_ITEMS, AiCheckerPageSections } from "@/components/ai-checker/ai-checker-page-sections";
import { buildPageMetadata } from "@/components/seo/metadata";
import { AiCheckerWebAppJsonLd, BreadcrumbJsonLd, FaqPageJsonLd, WebPageJsonLd } from "@/components/seo/json-ld";
import { MarketingHero } from "@/components/marketing/sections";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: "Free AI Visibility Checker | AI Search Readiness Tool",
  description:
    "Use our free AI visibility checker to test your site's AI search readiness. Check robots.txt, structured data, and on-page signals, then get an instant score and next steps.",
  path: "/ai-checker",
});

const PAGE_URL = `${siteConfig.siteUrl}/ai-checker`;
const PAGE_DATE = "2026-04-02";

export default function AiCheckerPage() {
  return (
    <AiCheckerProvider>
      <AiCheckerWebAppJsonLd />
      <WebPageJsonLd
        name="Free AI Visibility Checker | AI Search Readiness Tool | Tilio"
        description="Use our free AI visibility checker to test your site's AI search readiness. Check robots.txt, structured data, and on-page signals, then get an instant score and next steps."
        url={PAGE_URL}
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
      />
      <FaqPageJsonLd questions={AI_CHECKER_FAQ_ITEMS as unknown as { question: string; answer: string }[]} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.siteUrl },
          { name: "Free AI Visibility Checker", url: PAGE_URL },
        ]}
      />
      <MarketingHero
        eyebrow="AI Visibility Checker"
        title="Free AI Visibility Checker — Test Your Site's AI Search Readiness"
        description="A fast technical readiness check covering crawler access, structured data, metadata, and key on-page signals. Get an instant score and a clear list of what to fix."
        primaryCta={{ href: "/contact", label: "Get in touch" }}
        secondaryCta={{ href: "/ai-visibility-audit", label: "See the full AI Visibility Audit" }}
      >
        <AiCheckerHeroForm />
      </MarketingHero>
      <AiCheckerResultsSection />
      <AiCheckerPageSections />
    </AiCheckerProvider>
  );
}
