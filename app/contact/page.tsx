import type { Metadata } from "next";

import { buildPageMetadata } from "@/components/seo/metadata";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/json-ld";
import { MarketingHero, MarketingFramedSection } from "@/components/marketing/sections";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Tilio | UK AEO Agency",
  description:
    "Contact Tilio, the Exeter-based AEO agency. Talk to us about AI visibility audits, managed AEO support, and improving visibility in AI-generated answers.",
  path: "/contact",
});

const PAGE_URL = `${siteConfig.siteUrl}/contact`;
const PAGE_DATE = "2026-04-02";

export default function ContactPage() {
  return (
    <>
      <WebPageJsonLd
        schemaType="ContactPage"
        name="Contact Tilio | UK AEO Agency"
        description="Contact Tilio, the Exeter-based AEO agency. Talk to us about AI visibility audits, managed AEO support, and improving visibility in AI-generated answers."
        url={PAGE_URL}
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.siteUrl },
          { name: "Contact", url: PAGE_URL },
        ]}
      />
      <MarketingHero
        eyebrow="Contact"
        title="Tell us where you want your brand to show up."
        description="Share what you're looking for and we'll suggest the right next step."
        primaryCta={{ href: "#contact-form", label: "Start your enquiry" }}
      />

      <MarketingFramedSection id="contact-form">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">

            {/* Left: context panel */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
                  How we can help
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  We work with UK marketing and SEO teams who want to improve how their brand shows up in AI search — from a one-off audit to an ongoing monthly programme, to bespoke consulting.
                </p>
              </div>

              <div className="space-y-5 border-t border-zinc-100 pt-6">
                <div>
                  <p className="text-xs font-semibold text-zinc-500">Response time</p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">We aim to respond to all enquiries within one business day.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-500">Based in</p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">Exeter, UK — serving clients across the country.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-500">Not sure what you need?</p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">Select Expertise and tell us where you are — we'll suggest the right fit.</p>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </MarketingFramedSection>
    </>
  );
}
