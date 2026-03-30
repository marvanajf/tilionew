import type { Metadata } from "next";
import Link from "next/link";

import { buildPageMetadata } from "@/components/seo/metadata";
import { CtaBand, MarketingHero } from "@/components/marketing/sections";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description: "Get in touch to discuss AEO strategy, audits, and ongoing visibility growth support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <MarketingHero
        eyebrow="Contact"
        title="Tell us where you want your brand to show up."
        description="Share your goals, timeline, and market context. We will suggest a practical next step that fits your team."
        primaryCta={{ href: "#contact-form", label: "Start your inquiry" }}
        secondaryCta={{ href: "/pricing", label: "Review plans" }}
      />
      <section id="contact-form" className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-zinc-200 p-6">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900">What to include</h2>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                <li>Business goals and target outcomes</li>
                <li>Current SEO/AEO maturity</li>
                <li>Primary market and audience</li>
                <li>Preferred launch timeline</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-zinc-200 p-6">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900">Contact flow status</h2>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                A production form endpoint will be added in the next implementation step. For now, this page is ready for final copy and form wiring.
              </p>
              <div className="mt-5">
                <Link href="/ai-visibility-audit" className="text-sm font-medium text-zinc-900 underline underline-offset-4">
                  Explore the AI Visibility Audit first
                </Link>
              </div>
            </article>
          </div>
        </Container>
      </section>
      <CtaBand
        title="Prefer to start with an audit?"
        description="If you want a concrete baseline before a full engagement, begin with a visibility audit."
        primary={{ href: "/ai-visibility-audit", label: "View audit path" }}
      />
    </>
  );
}
