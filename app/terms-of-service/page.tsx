import type { Metadata } from "next";

import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/json-ld";
import { buildPageMetadata } from "@/components/seo/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service | Tilio",
  description:
    "Terms of Service for the Tilio website. These terms govern your use of tilio.co.uk and any related pages.",
  path: "/terms-of-service",
});

const PAGE_URL = `${siteConfig.siteUrl}/terms-of-service`;
const PAGE_DATE = "2026-04-03";

export default function TermsOfServicePage() {
  return (
    <>
      <WebPageJsonLd
        name="Terms of Service"
        description="Terms of Service for the Tilio website. These terms govern your use of tilio.co.uk and any related pages."
        url={PAGE_URL}
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.siteUrl },
          { name: "Terms of Service", url: PAGE_URL },
        ]}
      />
      <div className="mx-auto w-full max-w-3xl px-6 py-16 md:py-24 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">Terms of Service</h1>
      <p className="mt-2 text-sm text-zinc-500">Last updated: 3 April 2026</p>

      <Prose>
        <Section title="1. About these Terms">
          <p>
            These Terms of Service govern your use of the Tilio website at{" "}
            <a href="https://www.tilio.co.uk" className="text-zinc-900 underline underline-offset-2 hover:text-[#1d4ed8]">
              https://www.tilio.co.uk
            </a>{" "}
            and any related pages.
          </p>
          <p>By using our website, you agree to these Terms.</p>
          <p>If you do not agree to these Terms, please do not use our website.</p>
        </Section>

        <Section title="2. Who we are">
          <p>This website is operated by:</p>
          <address className="not-italic">
            <p>Tilio, trading name of Luto Ventures Ltd</p>
            <p>Company number: 16563350</p>
            <p>Registered office: 86–90 Paul Street, London, England, EC2A 4NE</p>
            <p>
              Contact email:{" "}
              <a href="mailto:team@tilio.co.uk" className="text-zinc-900 underline underline-offset-2 hover:text-[#1d4ed8]">
                team@tilio.co.uk
              </a>
            </p>
          </address>
          <p>In these Terms, &ldquo;Tilio&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; mean the business above.</p>
        </Section>

        <Section title="3. Who this website is for">
          <p>
            This website is intended mainly for business users who want information about our services, resources and tools.
          </p>
          <p>It is your responsibility to ensure that your use of the website is lawful and in line with these Terms.</p>
        </Section>

        <Section title="4. Website content">
          <p>
            We try to ensure that the information on this website is accurate and up to date. However, we do not guarantee that all content will
            always be accurate, complete or current.
          </p>
          <p>
            The website content is provided for general information only. It is not legal, financial or professional advice, and you should not rely
            on it as a substitute for tailored advice.
          </p>
          <p>We may update, change, suspend or remove any part of the website at any time without notice.</p>
        </Section>

        <Section title="5. Using the website">
          <p>You agree to use this website only for lawful purposes.</p>
          <p>You must not:</p>
          <ul>
            <li>misuse the website or knowingly introduce malware, viruses or other harmful material</li>
            <li>attempt to gain unauthorised access to the website, its server or connected systems</li>
            <li>interfere with the operation or security of the website</li>
            <li>use the website in a way that could damage, disable or impair it</li>
            <li>copy, scrape, reproduce or reuse website content except as allowed by law or with our written permission</li>
          </ul>
        </Section>

        <Section title="6. Intellectual property">
          <p>
            Unless otherwise stated, all intellectual property rights in the website and its content are owned by or licensed to Tilio.
          </p>
          <p>You may view, download and print pages from the website for your own internal business use only.</p>
          <p>
            You must not reproduce, distribute, modify, republish or commercially exploit any part of the website or its content without our prior
            written consent.
          </p>
          <p>
            Our name, branding, logos and site content must not be used in a way that suggests any endorsement, partnership or association without
            our permission.
          </p>
        </Section>

        <Section title="7. Enquiries and contact forms">
          <p>
            If you submit an enquiry through our website, you agree that the information you provide is accurate and does not infringe the rights of
            any third party.
          </p>
          <p>Submitting an enquiry does not create a contract for services.</p>
          <p>We may contact you to discuss your enquiry and suggest next steps.</p>
        </Section>

        <Section title="8. Services">
          <p>
            Any services we provide, including audits, monthly plans, consulting or other paid work, are subject to separate commercial terms,
            proposals, statements of work, invoices or other written agreements.
          </p>
          <p>
            If there is any conflict between these website Terms and a signed client agreement, the client agreement will take precedence.
          </p>
        </Section>

        <Section title="9. AI Checker and any free tools">
          <p>
            If we make any free tools, checkers, calculators or similar resources available on the website, they are provided for general
            informational purposes only.
          </p>
          <p>
            We do not guarantee that any free tool will be uninterrupted, error-free or suitable for any particular purpose.
          </p>
          <p>
            Outputs from free tools are indicative only and should not be treated as professional advice or a guaranteed assessment.
          </p>
          <p>We may change, suspend or withdraw any free tool at any time.</p>
        </Section>

        <Section title="10. Links to and from our website">
          <p>
            You may link to our website in a fair and lawful way, provided you do not suggest any endorsement, approval or association where none
            exists.
          </p>
          <p>
            We may link to third-party websites for convenience only. We do not control those sites and are not responsible for their content,
            availability or practices.
          </p>
        </Section>

        <Section title="11. Disclaimer">
          <p>
            To the fullest extent permitted by law, the website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; basis.
          </p>
          <p>We do not guarantee that the website will:</p>
          <ul>
            <li>always be available</li>
            <li>be free from bugs, errors or interruptions</li>
            <li>be secure</li>
            <li>meet your specific requirements</li>
          </ul>
        </Section>

        <Section title="12. Limitation of liability">
          <p>
            Nothing in these Terms excludes or limits liability where it would be unlawful to do so, including liability for:
          </p>
          <ul>
            <li>death or personal injury caused by negligence</li>
            <li>fraud or fraudulent misrepresentation</li>
            <li>any other liability that cannot be excluded by law</li>
          </ul>
          <p>
            Subject to that, to the fullest extent permitted by law, we will not be liable for any indirect, incidental, special, consequential or
            business losses arising out of or in connection with your use of, or inability to use, this website.
          </p>
          <p>This includes loss of profits, revenue, business, goodwill, data or opportunity.</p>
        </Section>

        <Section title="13. Privacy and cookies">
          <p>
            Your use of this website is also subject to our{" "}
            <a href="/privacy-policy" className="text-zinc-900 underline underline-offset-2 hover:text-[#1d4ed8]">
              Privacy Policy
            </a>{" "}
            and any cookie notice or cookie settings we make available on the site.
          </p>
        </Section>

        <Section title="14. Changes to these Terms">
          <p>
            We may update these Terms from time to time. The latest version will always be posted on this page.
          </p>
          <p>
            By continuing to use the website after any changes take effect, you agree to the updated Terms.
          </p>
        </Section>

        <Section title="15. Governing law and jurisdiction">
          <p>
            These Terms and any dispute or claim arising out of or in connection with them are governed by the law of England and Wales.
          </p>
          <p>
            The courts of England and Wales will have exclusive jurisdiction, unless mandatory law says otherwise.
          </p>
        </Section>
      </Prose>
    </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 first:mt-8">
      <h2 className="text-lg font-semibold text-zinc-900">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-10 text-sm leading-relaxed text-zinc-600 md:text-base [&_a]:underline-offset-2 [&_address]:mt-3 [&_address]:space-y-0.5 [&_h3]:mt-6 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-zinc-900 [&_p]:leading-relaxed [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 [&_ul]:marker:text-zinc-400">
      {children}
    </div>
  );
}
