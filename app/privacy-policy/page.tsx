import type { Metadata } from "next";

import { buildPageMetadata } from "@/components/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy | Tilio",
  description:
    "Privacy Policy for Tilio. Learn how we collect, use and protect your personal data when you use our website or work with us.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 md:py-24 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-zinc-500">Last updated: 3 April 2026</p>

      <Prose>
        <Section title="1. Who we are">
          <p>
            This Privacy Policy explains how Tilio collects, uses and protects personal data when you use our website, contact us, enquire about our
            services, or work with us.
          </p>
          <p>For the purposes of UK data protection law, the data controller is:</p>
          <address className="not-italic">
            <p>Tilio</p>
            <p>Company number: 16563350</p>
            <p>Registered office: 86–90 Paul Street, London, England, EC2A 4NE</p>
            <p>
              Email:{" "}
              <a href="mailto:team@tilio.co.uk" className="text-zinc-900 underline underline-offset-2 hover:text-[#1d4ed8]">
                team@tilio.co.uk
              </a>
            </p>
          </address>
          <p>
            If you have any questions about this Privacy Policy or how we handle your personal data, please contact us using the details above.
          </p>
        </Section>

        <Section title="2. The personal data we collect">
          <p>We may collect and process the following categories of personal data:</p>

          <h3>Contact data</h3>
          <p>This may include your name, work email address, telephone number, company name and job title.</p>

          <h3>Enquiry data</h3>
          <p>
            This may include the information you submit through our contact form or when you speak to us about our services, such as your service
            interest, website, competitors, goals and any other details you choose to share.
          </p>

          <h3>Client and contract data</h3>
          <p>
            If you become a customer, this may include billing details, project information, communications, deliverables, reporting data and records
            relating to the services we provide.
          </p>

          <h3>Technical and usage data</h3>
          <p>This may include your IP address, browser type, device information, referring pages, pages viewed and general website usage data.</p>

          <h3>Marketing data</h3>
          <p>This may include your preferences in receiving marketing from us and your communication preferences.</p>

          <p>
            We do not intend to collect special category personal data through our website. Please do not send us sensitive personal data unless we ask
            for it and there is a clear reason to do so.
          </p>
        </Section>

        <Section title="3. How we collect personal data">
          <p>We collect personal data:</p>
          <ul>
            <li>directly from you when you complete a form, contact us, book a call or become a customer</li>
            <li>automatically when you use our website, through server logs and cookies or similar technologies where applicable</li>
            <li>
              from publicly available sources, such as company websites or LinkedIn, where relevant to a business enquiry or service relationship
            </li>
            <li>from third parties you ask to share information with us, for example your colleagues or service providers</li>
          </ul>
        </Section>

        <Section title="4. How we use your personal data">
          <p>We use personal data for the following purposes:</p>

          <h3>To respond to enquiries and communicate with you</h3>
          <p>We use your data to reply to messages, arrange calls and discuss whether our services are a fit.</p>

          <h3>To provide our services</h3>
          <p>
            We use your data to onboard customers, deliver audits, provide reporting, manage projects, send invoices and support the client
            relationship.
          </p>

          <h3>To improve our website and services</h3>
          <p>
            We use technical and usage data to understand how our website is used and to improve performance, usability and security.
          </p>

          <h3>To send relevant marketing communications</h3>
          <p>
            We may send updates about our services, insights or resources where you have asked for them, or where we are otherwise allowed to do so by
            law.
          </p>

          <h3>To comply with legal and regulatory obligations</h3>
          <p>We may process personal data where this is necessary to comply with legal requirements or to protect our legal rights.</p>
        </Section>

        <Section title="5. Our lawful bases for processing">
          <p>We rely on the following lawful bases under the UK GDPR:</p>

          <h3>Contract</h3>
          <p>
            Where processing is necessary to perform a contract with you or to take steps at your request before entering into a contract.
          </p>

          <h3>Legitimate interests</h3>
          <p>
            Where processing is necessary for our legitimate interests, including running and improving our business, responding to B2B enquiries,
            managing client relationships, securing our website, and understanding how our services are used, provided those interests are not
            overridden by your rights and freedoms.
          </p>

          <h3>Legal obligation</h3>
          <p>Where processing is necessary for us to comply with the law.</p>

          <h3>Consent</h3>
          <p>
            Where required, we rely on your consent, for example for certain cookies or some direct marketing activity. You can withdraw consent at
            any time.
          </p>
        </Section>

        <Section title="6. Marketing">
          <p>
            We may contact you about our services, resources or updates where you have requested this, where you are a business contact and this is
            permitted by law, or where we otherwise have your consent.
          </p>
          <p>
            You can opt out of marketing communications at any time by using the unsubscribe link in an email or by contacting us directly.
          </p>
        </Section>

        <Section title="7. Cookies and similar technologies">
          <p>
            Our website may use cookies and similar technologies to make the site work, understand website usage and improve performance.
          </p>
          <p>We may use:</p>
          <ul>
            <li>strictly necessary cookies, which are needed for the website to operate</li>
            <li>analytics cookies, which help us understand how visitors use the website</li>
            <li>other non-essential cookies, if we enable them in future</li>
          </ul>
          <p>
            Where required by law, we will ask for your consent before setting non-essential cookies. You can manage your preferences through our
            cookie banner or browser settings.
          </p>
        </Section>

        <Section title="8. Sharing your personal data">
          <p>We may share personal data with trusted third parties where necessary, including:</p>
          <ul>
            <li>website hosting and infrastructure providers</li>
            <li>analytics providers</li>
            <li>CRM, email and communications providers</li>
            <li>payment processors</li>
            <li>professional advisers such as accountants, lawyers or insurers</li>
            <li>regulators, courts, law enforcement or public authorities where required</li>
          </ul>
          <p>
            We require service providers that process personal data on our behalf to do so only on our instructions and to keep it secure.
          </p>
        </Section>

        <Section title="9. International transfers">
          <p>Some of our service providers may process personal data outside the UK.</p>
          <p>
            Where personal data is transferred outside the UK, we will take appropriate steps to protect it, such as using providers in countries that
            benefit from adequacy regulations or using appropriate contractual safeguards.
          </p>
        </Section>

        <Section title="10. Data retention">
          <p>
            We keep personal data only for as long as necessary for the purposes we collected it for, including legal, accounting and reporting
            requirements.
          </p>
          <p>As a general guide:</p>
          <ul>
            <li>enquiry data is usually kept for up to 24 months</li>
            <li>client and contract records are usually kept for up to 6 years after the end of the relationship</li>
            <li>marketing data is kept until you unsubscribe or until we decide it is no longer relevant</li>
            <li>technical and analytics data is kept in line with the settings of the tools we use</li>
          </ul>
          <p>We may keep data for longer where we have a legal reason to do so.</p>
        </Section>

        <Section title="11. Your rights">
          <p>Under UK data protection law, you may have the right to:</p>
          <ul>
            <li>request access to your personal data</li>
            <li>request correction of inaccurate data</li>
            <li>request deletion of your personal data</li>
            <li>object to or request restriction of processing</li>
            <li>request transfer of your personal data in certain circumstances</li>
            <li>withdraw consent where we rely on consent</li>
          </ul>
          <p>These rights are not absolute, and some exceptions apply.</p>
          <p>If you want to exercise any of your rights, please contact us using the details in section 1.</p>
        </Section>

        <Section title="12. Complaints">
          <p>
            If you have concerns about how we handle your personal data, please contact us first and we will try to resolve the issue.
          </p>
          <p>
            You also have the right to complain to the Information Commissioner&rsquo;s Office (ICO), the UK regulator for data protection matters.
          </p>
        </Section>

        <Section title="13. Security">
          <p>
            We take reasonable technical and organisational measures to protect personal data against unauthorised access, loss, misuse or
            alteration.
          </p>
          <p>
            However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute
            security.
          </p>
        </Section>

        <Section title="14. Third-party websites">
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. You
            should read their privacy policies separately.
          </p>
        </Section>

        <Section title="15. Changes to this Privacy Policy">
          <p>
            We may update this Privacy Policy from time to time. Please check this page periodically for any changes. The latest version will always
            be posted on this page.
          </p>
        </Section>
      </Prose>
    </div>
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
