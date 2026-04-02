import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/ui/container";

const serviceLinks = [
  { href: "/aeo-agency", label: "AEO Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/ai-visibility-audit", label: "AI visibility audit" },
  { href: "/working-with-tilio", label: "Working with Tilio" },
  { href: "/ai-checker", label: "Free AI visibility check" },
  { href: "/contact", label: "Get in touch" },
];

const resourceLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/uk-aeo-solutions", label: "UK AEO solutions" },
  { href: "/how-we-measure-ai-visibility", label: "How we measure visibility" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms" },
];

const logoUrl = "https://res.cloudinary.com/ddsqkll4f/image/upload/q_auto/f_auto/v1775048162/Untitled_design_36_dkgwxb.png";
const siteName = "Tilio";
const companyNumber = "16563350";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-zinc-200 bg-background">
      <div className="pointer-events-none absolute inset-0 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="relative h-full">
          <div className="absolute left-0 top-0 h-full w-[0.5px] border-l border-dashed border-zinc-300" />
          <div className="absolute right-0 top-0 h-full w-[0.5px] border-r border-dashed border-zinc-300" />
        </div>
      </div>
      <Container className="py-14 text-sm text-zinc-600">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] divide-y md:divide-y-0 md:divide-x divide-dashed divide-zinc-200">
          <div className="max-w-sm space-y-4 pb-10 md:pb-0 md:pr-10">
            <Link href="/" className="inline-flex items-center text-zinc-900">
              {logoUrl ? (
                <Image
                  src={logoUrl}
                  alt={siteName}
                  width={110}
                  height={28}
                  className="h-7 w-auto"
                />
              ) : (
                <span className="text-lg font-semibold">{siteName}</span>
              )}
            </Link>
            <p className="leading-relaxed text-zinc-600">
              Tilio is a UK answer engine optimisation (AEO) agency. We help brands earn mentions and citations in AI answers
              across ChatGPT, Claude, Perplexity, and Google AI Overviews.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center rounded-[10px] border border-[#93c5fd] bg-[#93c5fd]/20 px-4 py-2 text-xs font-medium text-[#1d4ed8] transition-all duration-200 hover:bg-[#93c5fd] hover:text-[#1e3a8a]"
            >
              <span className="mr-2">Book intro call</span>
              <span className="inline-flex rounded-[8px] border border-[#93c5fd] p-0.5 transition-all duration-200 group-hover:border-[#60a5fa]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5" aria-hidden>
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          <FooterColumn title="Services" links={serviceLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />

          <div className="pt-10 md:pt-0 md:px-10 pb-0">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-900">Company</h2>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-[#1d4ed8]">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.linkedin.com/company/trytilio/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#1d4ed8]"
                >
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-[3px] border border-zinc-400 text-[10px] font-semibold text-zinc-700">
                    in
                  </span>
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-dashed border-zinc-300 pt-6 text-xs text-zinc-500">
          <p>
            {`© ${year} ${siteName}. All rights reserved.`}
          </p>
          <p className="mt-1">{`Company No. ${companyNumber}`}</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="py-10 md:py-0 md:px-10">
      <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-900">{title}</h2>
      <ul className="mt-4 space-y-3">
        {links.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="transition-colors hover:text-[#1d4ed8]">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
