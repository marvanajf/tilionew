import type { Metadata } from "next";

import { buildPageMetadata } from "@/components/seo/metadata";
import { MarketingHero, MarketingFramedSection } from "@/components/marketing/sections";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Tilio | UK AEO Agency",
  description:
    "Contact Tilio, the Exeter-based AEO agency. Talk to us about AI visibility audits, managed AEO support, and improving visibility in AI-generated answers.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
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
                  We work with UK marketing and SEO teams who want to improve how their brand shows up in AI search results — from a one-off audit to an ongoing monthly programme.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-zinc-900">AI Visibility Audit</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  A fixed-price written assessment of how AI systems describe your brand today. Delivered in 24 hours.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-zinc-900">AEO Plan</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Monthly monitoring, content, and reporting across ChatGPT, Perplexity, and Google AI Overviews. £499/month.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-zinc-900">Based in Exeter</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  We serve clients across the UK. We aim to respond to all enquiries within one business day.
                </p>
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
