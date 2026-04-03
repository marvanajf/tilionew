import Link from "next/link";
import Image from "next/image";
import type { ReactNode, SVGProps } from "react";

import { HeroDotsCanvas } from "@/components/ui/hero-dots-canvas";

import { Container } from "@/components/ui/container";

type IconProps = SVGProps<SVGSVGElement>;

export function SparkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden {...props}>
      <path d="M12 2l1.8 4.8L19 8.6l-4 3.2 1.3 5.2L12 14.1 7.7 17l1.3-5.2-4-3.2 5.2-1.8L12 2z" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}

export function PulseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden {...props}>
      <path d="M2 12h4l2.5-6 4 12 2.5-6H22" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden {...props}>
      <path d="M12 3l7 3v6c0 4.7-2.8 7.8-7 9-4.2-1.2-7-4.3-7-9V6l7-3z" />
      <path d="M9.5 12l2 2 3-3.2" />
    </svg>
  );
}

export function ChartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden {...props}>
      <path d="M3 3v18h18" />
      <path d="M7 15l4-4 3 2 4-5" />
    </svg>
  );
}

type HeroProps = {
  eyebrow: string;
  title: string;
  /** Shown under the main title in a smaller weight (use instead of joining with an em dash). */
  titleSubheading?: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  secondaryCtaVariant?: "default" | "white";
  /** Rendered after the description and before the primary/secondary CTAs (e.g. interactive tools). */
  children?: ReactNode;
  /** Rendered above the title (e.g. logo or badge). */
  preTitle?: ReactNode;
  bleedBehindHeader?: boolean;
  showFramingLines?: boolean;
  backgroundImageUrl?: string;
  lightText?: boolean;
  /** Subtle dot grid inside the hero frame. Off when `backgroundImageUrl` is set. Set `false` to disable. */
  dotPattern?: boolean;
  /** Taller vertical padding for the hero block. */
  size?: "default" | "tall";
  /** Soft ambient glow overlays that pulse over the dot grid for a gentle breathing effect. */
  ambientDots?: boolean;
};

export function MarketingHero({
  title,
  titleSubheading,
  description,
  primaryCta,
  secondaryCta,
  secondaryCtaVariant = "default",
  children,
  preTitle,
  bleedBehindHeader = false,
  showFramingLines = true,
  backgroundImageUrl,
  lightText = false,
  dotPattern = true,
  size = "default",
  ambientDots = false,
}: HeroProps) {
  const frameLineClass = lightText || backgroundImageUrl ? "bg-background/40" : "bg-zinc-200";

  const paddingClass = bleedBehindHeader
    ? "pb-14 md:pb-20 lg:pb-24 -mt-16 pt-[7.5rem] md:pt-[9rem] lg:pt-[10rem]"
    : size === "tall"
      ? "pt-20 pb-20 md:pt-28 md:pb-28 lg:pt-36 lg:pb-32"
      : "pt-14 pb-14 md:pt-20 md:pb-20 lg:pt-28 lg:pb-24";

  const titleSizeClass =
    "text-3xl font-medium leading-[1.1] tracking-tight md:text-4xl lg:text-5xl";

  return (
    <section
      className={`relative overflow-hidden ${paddingClass}`}
      style={
        backgroundImageUrl
          ? {
              backgroundImage: `url('${backgroundImageUrl}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : undefined
      }
    >
      {dotPattern && !backgroundImageUrl ? (
        <div
          className="pointer-events-none absolute inset-0 z-0 mx-auto w-full max-w-7xl px-6 lg:px-8"
          aria-hidden
        >
          {ambientDots ? (
            <HeroDotsCanvas className="block h-full w-full overflow-hidden" />
          ) : (
            <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(24,24,27,0.085)_1px,transparent_1px)] bg-[length:12px_12px] md:bg-[length:14px_14px]" />
          )}
        </div>
      ) : null}
      {showFramingLines ? (
        <div className="pointer-events-none absolute inset-0 z-[1] mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="relative h-full">
            {!bleedBehindHeader ? <div className={`absolute left-0 right-0 top-0 h-[0.5px] ${frameLineClass}`} /> : null}
            <div className={`absolute bottom-0 left-0 right-0 h-[0.5px] ${frameLineClass}`} />
            <div className={`absolute left-0 top-0 h-full w-[0.5px] ${frameLineClass}`} />
            <div className={`absolute right-0 top-0 h-full w-[0.5px] ${frameLineClass}`} />
          </div>
        </div>
      ) : null}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-10 sm:px-10 md:px-11 lg:px-12">
        <div className="mx-auto max-w-4xl px-3 text-center sm:px-4 md:px-0">
          {preTitle ? <div className="mb-8 flex justify-center">{preTitle}</div> : null}
          <h1
            className={`normal-case ${titleSizeClass} ${lightText ? "text-white" : "text-zinc-900"}`}
          >
            {title}
          </h1>
          {titleSubheading ? (
            <p
              className={`mx-auto mt-3 max-w-3xl text-lg font-medium leading-snug tracking-tight md:text-xl ${lightText ? "text-white/85" : "text-zinc-600"}`}
            >
              {titleSubheading}
            </p>
          ) : null}
          <p
            className={`mx-auto max-w-3xl text-base leading-relaxed md:text-lg lg:text-xl ${titleSubheading ? "mt-6" : "mt-8"} ${lightText ? "text-white/90" : "text-zinc-700"}`}
          >
            {description}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5">
            <Link
              href={primaryCta.href}
              className="group inline-flex items-center rounded-[10px] border border-[#93c5fd] bg-[#93c5fd]/20 px-7 py-2.5 text-sm font-medium text-[#1d4ed8] transition-all duration-200 hover:bg-[#93c5fd] hover:text-[#1e3a8a]"
            >
              <span className="mr-2">{primaryCta.label}</span>
              <span className="inline-flex rounded-[10px] border border-[#93c5fd] p-1 transition-all duration-200 group-hover:border-[#60a5fa]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className={
                  secondaryCtaVariant === "white"
                    ? "inline-flex items-center rounded-[10px] border border-zinc-200 bg-white px-7 py-3 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
                    : "inline-flex items-center rounded-[10px] border border-[#93c5fd] bg-[#93c5fd]/20 px-7 py-3 text-sm font-medium text-[#1d4ed8] transition-colors hover:bg-[#93c5fd] hover:text-[#1e3a8a]"
                }
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
          {children ? <div className="mt-16 mx-auto w-full max-w-2xl">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

/** Full hero-style framing (top, bottom, left, right) aligned to max-w-7xl gutters. */
export function MarketingFramedSection({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative overflow-hidden bg-background py-16 md:py-20 ${className ?? ""}`}>
      <div className="pointer-events-none absolute inset-0 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="relative h-full min-h-[1px]">
          <div className="absolute left-0 right-0 top-0 h-[0.5px] bg-zinc-200" />
          <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-zinc-200" />
          <div className="absolute left-0 top-0 h-full w-[0.5px] bg-zinc-200" />
          <div className="absolute right-0 top-0 h-full w-[0.5px] bg-zinc-200" />
        </div>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

type Feature = {
  title: string;
  description: string;
  icon: (props: IconProps) => ReactNode;
};

type FeatureGridProps = {
  title: string;
  description: string;
  features: Feature[];
};

export function FeatureGridSection({ title, description, features }: FeatureGridProps) {
  return (
    <section className="relative border-t border-zinc-200 bg-background py-16">
      <div className="pointer-events-none absolute inset-0 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="relative h-full">
          <div className="absolute left-0 right-0 top-0 h-[0.5px] bg-zinc-200" />
          <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-zinc-200" />
          <div className="absolute left-0 top-0 h-full w-[0.5px] border-l border-dashed border-zinc-300" />
          <div className="absolute right-0 top-0 h-full w-[0.5px] border-r border-dashed border-zinc-300" />
        </div>
      </div>
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">{title}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600">{description}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-2xl border border-zinc-200 bg-background p-5">
              <div className="inline-flex rounded-xl bg-zinc-100 p-2 text-zinc-700">{feature.icon({ className: "h-5 w-5" })}</div>
              <h3 className="mt-4 text-base font-semibold text-zinc-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function VisibilitySourcesSection() {
  return (
    <section className="relative bg-background">
      <div className="pointer-events-none absolute inset-0 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="relative h-full">
          <div className="absolute left-0 right-0 top-0 h-[0.5px] bg-zinc-200" />
          <div className="absolute left-0 top-0 h-full w-[0.5px] bg-zinc-200" />
          <div className="absolute right-0 top-0 h-full w-[0.5px] bg-zinc-200" />
        </div>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <div>
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">What we monitor, by platform</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500 md:text-base">
                Open any question to see what we actually track, so you know what the programme is measuring before you speak to us.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-5xl grid gap-5 md:grid-cols-2">
              <details className="group rounded-xl border border-zinc-200 bg-background p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-left text-sm font-semibold text-zinc-900">
                  What do we track for ChatGPT?
                  <span className="text-zinc-500 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  For your agreed prompt set, we record whether ChatGPT answers mention your brand, products, or domain, how you are positioned
                  versus alternatives, and when it cites or links to your pages. You see brands and URLs over a set timeframe so you can audit if
                  updates to content and on-page signals are moving the needle.
                </p>
              </details>

              <details className="group rounded-xl border border-zinc-200 bg-background p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-left text-sm font-semibold text-zinc-900">
                  What do we track for Perplexity?
                  <span className="text-zinc-500 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  We monitor how Perplexity answers your tracked questions, when your brand appears, which sources and URLs it cites, and how
                  often you show up versus competitors on the same intents. That tells you where you are winning placement, where you are
                  visible, and which pages or proof points probably need strengthening.
                </p>
              </details>

              <details className="group rounded-xl border border-zinc-200 bg-background p-5 md:col-span-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-left text-sm font-semibold text-zinc-900">
                  What do we track for Google AI Overviews?
                  <span className="text-zinc-500 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  We focus on whether AI Overviews surface for your priority queries, if your brand or site is included when they do, and which
                  URLs Google is treating as authoritative for those answers. That helps you prioritise structured data, entity clarity, and
                  content that is actually eligible to be pulled into the overview, not just traditional blue-link rank.
                </p>
              </details>
            </div>
          </div>

          <div className="mt-16 border-t border-zinc-200 pt-14 md:mt-20 md:pt-18">
          <div className="relative mx-4 overflow-hidden rounded-xl border border-zinc-200 bg-background md:mx-8">
            <div
              className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(24,24,27,0.085)_1px,transparent_1px)] bg-[length:12px_12px] md:bg-[length:14px_14px]"
              aria-hidden
            />
            <div className="relative z-10 px-6 py-10 text-center md:px-10 md:py-14">
              <div className="mx-auto max-w-3xl space-y-4">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">£499 a month. Managed AEO programme.</h2>
                <div className="space-y-3 text-sm font-light leading-normal text-zinc-600 md:text-base">
                  <p>
                    A monthly programme for UK teams who want to show up when people ask ChatGPT, Perplexity, and Google AI Overviews for
                    recommendations. We handle the monitoring, produce answer-ready content each month, and report back with clear findings and
                    prioritised next steps. Done with you — or done for you.
                  </p>
                </div>
                <div className="pt-1">
                  <Link
                    href="/pricing"
                    className="group inline-flex items-center rounded-[10px] border border-[#93c5fd] bg-[#93c5fd]/20 px-6 py-2 text-sm font-medium text-[#1d4ed8] transition-all duration-200 hover:bg-[#93c5fd] hover:text-[#1e3a8a]"
                  >
                    <span className="mr-2">View plan</span>
                    <span className="inline-flex rounded-[10px] border border-[#93c5fd] p-1 transition-all duration-200 group-hover:border-[#60a5fa]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </div>

          <div className="mt-16 border-t border-zinc-200 pt-14 md:mt-20 md:pt-18">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">What you get each month</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500 md:text-base">Monthly deliverables included in the £499/month programme.</p>
            </div>

            <div className="mx-auto mt-12 max-w-5xl">
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-background shadow-[0_1px_0_rgba(0,0,0,0.02)]">
              <div className="grid grid-cols-2 border-b border-zinc-200">
                <div className="px-4 py-3 text-sm font-semibold tracking-tight text-zinc-700 md:px-6">Deliverable</div>
                <div className="px-4 py-3 text-center md:px-6">
                  <p className="text-xs font-medium tracking-tight text-zinc-500">AEO programme</p>
                  <p className="mt-1 text-sm font-semibold text-zinc-900">£499/month</p>
                </div>
              </div>

              <div className="grid grid-cols-2 border-b border-zinc-100 bg-zinc-50">
                <div className="col-span-2 px-4 py-2 text-xs font-semibold tracking-tight text-zinc-600 md:px-6">Monitoring</div>
              </div>
              {[
                ["Platforms tracked", "ChatGPT, Perplexity, Google AI Overviews"],
                ["Tracked prompts", "100 prompts, monitored daily"],
                ["Competitor benchmarking", "Included"],
                ["Language", "English"],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-2 border-b border-zinc-100">
                  <div className="px-4 py-3 text-sm text-zinc-700 md:px-6">{label}</div>
                  <div className="px-4 py-3 text-sm font-medium text-zinc-900 md:px-6">{value}</div>
                </div>
              ))}

              <div className="grid grid-cols-2 border-b border-zinc-100 bg-zinc-50">
                <div className="col-span-2 px-4 py-2 text-xs font-semibold tracking-tight text-zinc-600 md:px-6">Content and actions</div>
              </div>
              {[
                ["Content recommendations", "3 per month"],
                ["Content pieces", "3 per month"],
                ["Prioritised actions", "4 per week"],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-2 border-b border-zinc-100">
                  <div className="px-4 py-3 text-sm text-zinc-700 md:px-6">{label}</div>
                  <div className="px-4 py-3 text-sm font-medium text-zinc-900 md:px-6">{value}</div>
                </div>
              ))}

              <div className="grid grid-cols-2 border-b border-zinc-100 bg-zinc-50">
                <div className="col-span-2 px-4 py-2 text-xs font-semibold tracking-tight text-zinc-600 md:px-6">Reporting and attribution</div>
              </div>
              {[
                ["Monthly report", "Findings, trends and next steps"],
                ["Dashboard access", "Live data, check any time"],
                ["AI traffic attribution", "Google Analytics integration"],
                ["Domains", "Unlimited"],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-2 border-b border-zinc-100 last:border-b-0">
                  <div className="px-4 py-3 text-sm text-zinc-700 md:px-6">{label}</div>
                  <div className="px-4 py-3 text-sm font-medium text-zinc-900 md:px-6">{value}</div>
                </div>
              ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/contact" className="text-sm font-medium text-zinc-900 underline underline-offset-4">
                Get in touch
              </Link>
            </div>
          </div>

          <div className="mt-16 border-t border-zinc-200 pt-14 md:mt-20 md:pt-18">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl">
              <div className="relative">
                <Image
                  src="https://res.cloudinary.com/ddsqkll4f/image/upload/v1774563002/tilio_hero_vumkoh.png"
                  alt=""
                  fill
                  className="object-cover opacity-12"
                  aria-hidden
                />
                <div className="relative bg-background/92 px-6 py-10 backdrop-blur-[1px] md:px-10 md:py-12">
                  <div className="mx-auto max-w-3xl text-center">
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">AEO agency for UK brands</h3>
                    <p className="mt-3 text-base leading-relaxed text-zinc-600">Tilio helps UK businesses get found in AI search.</p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600 md:text-base">
                      We improve how your site is understood, trusted and cited by tools like Google AI Overviews, Perplexity and Claude. That means
                      better visibility when buyers are comparing providers, checking pricing and building a shortlist.
                    </p>
                  </div>

                  <div className="mx-auto mt-10 max-w-3xl space-y-4">
                    <details className="group rounded-xl border border-zinc-200 bg-background/95 p-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-left text-sm font-semibold text-zinc-900">
                        What we do
                        <span className="text-zinc-500 transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-700">
                        <li>Research the prompts and questions that matter</li>
                        <li>Fix technical issues that hold back visibility</li>
                        <li>Improve key pages so they are clearer and easier to cite</li>
                        <li>Monitor AI mentions, competitors and movement over time</li>
                      </ul>
                    </details>

                    <details className="group rounded-xl border border-zinc-200 bg-background/95 p-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-left text-sm font-semibold text-zinc-900">
                        Who we work with
                        <span className="text-zinc-500 transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-700">
                        <li>B2B SaaS</li>
                        <li>Professional services</li>
                        <li>Consultancies</li>
                        <li>Agencies in competitive categories</li>
                      </ul>
                    </details>

                    <details className="group rounded-xl border border-zinc-200 bg-background/95 p-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-left text-sm font-semibold text-zinc-900">
                        How we work
                        <span className="text-zinc-500 transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-700">
                        <li>Based in Exeter, serving clients across the UK</li>
                        <li>Clear reporting and practical handover</li>
                        <li>We can deliver the work or work alongside your team</li>
                      </ul>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-zinc-200 pt-14 md:mt-20 md:pt-18">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">Check your AI visibility</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 md:text-base">
                Start with a free automated scan, or book a fixed-price audit when you need a proper written assessment for ChatGPT, Google AI
                Overviews, and related signals.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
              <article className="rounded-xl border border-zinc-200 bg-background p-6">
                <h4 className="text-lg font-semibold tracking-tight text-zinc-900">Free AI visibility checker</h4>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  Enter your domain for a quick read on robots.txt, major AI crawlers, structured data, and meta tags. Ideal when you want a rough
                  score before you change anything.
                </p>
                <div className="mt-5">
                  <Link
                    href="/ai-checker"
                    className="group inline-flex items-center rounded-[10px] border border-[#93c5fd] bg-[#93c5fd]/20 px-5 py-2 text-sm font-medium text-[#1d4ed8] transition-all duration-200 hover:bg-[#93c5fd] hover:text-[#1e3a8a]"
                  >
                    <span className="mr-2">Run the checker</span>
                    <span className="inline-flex rounded-[10px] border border-[#93c5fd] p-1 transition-all duration-200 group-hover:border-[#60a5fa]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </article>

              <article className="rounded-xl border border-zinc-200 bg-background p-6">
                <h4 className="text-lg font-semibold tracking-tight text-zinc-900">AI visibility audit</h4>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  Deeper analysis with clear deliverables: what AI surfaces today, gaps versus competitors, and what to change first. Delivered in 24
                  hours for a fixed £149.
                </p>
                <div className="mt-5">
                  <Link
                    href="/ai-visibility-audit"
                    className="group inline-flex items-center rounded-[10px] border border-[#93c5fd] bg-[#93c5fd]/20 px-5 py-2 text-sm font-medium text-[#1d4ed8] transition-all duration-200 hover:bg-[#93c5fd] hover:text-[#1e3a8a]"
                  >
                    <span className="mr-2">View the audit</span>
                    <span className="inline-flex rounded-[10px] border border-[#93c5fd] p-1 transition-all duration-200 group-hover:border-[#60a5fa]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const overarchingFaqItems = [
  {
    question: "What does an AEO agency do?",
    answer:
      "An AEO agency helps businesses improve how they appear in AI-generated answers across platforms like ChatGPT, Perplexity and Google AI Overviews. That usually means tracking how your brand is mentioned and cited across a defined set of prompts, benchmarking competitors, and improving the pages most likely to earn stronger visibility in AI search.",
  },
  {
    question: "How much does AEO cost?",
    answer:
      "It depends on the scope. A one-off AI Visibility Audit is £149. Our ongoing managed AEO programme is £499 per month — no long-term contract required — and includes daily monitoring, content work, competitor benchmarking, dashboard access and monthly reporting.",
  },
  {
    question: "What does Tilio do?",
    answer:
      "We are a UK AEO (answer engine optimisation) agency. We help marketing and SEO teams improve how brands show up when people ask ChatGPT, Claude, Perplexity, and Google AI Overviews for recommendations, not only in traditional search results.",
  },
  {
    question: "What is answer engine optimisation (AEO)?",
    answer:
      "AEO is the practice of improving how clearly your brand, pages, and evidence are represented so AI systems can select and cite you in generated answers, not just rank in blue links.",
  },
  {
    question: "Which AI engines do you focus on?",
    answer:
      "We focus on the surfaces UK teams care about most, including ChatGPT, Perplexity, and Google AI Overviews, with structured monitoring and reporting as part of your programme.",
  },
  {
    question: "Who do you work with?",
    answer:
      "It is in-house marketing and SEO teams, founders, and agencies who need clear reporting on AI mentions and citations and a practical roadmap to improve them.",
  },
  {
    question: "How does engagement work?",
    answer:
      "Our public programme is the AEO plan at £499/month: monitoring, reporting, benchmarking, and content support within agreed scope. Contact us if you want to align on priorities first.",
  },
  {
    question: "What do I need to get started?",
    answer:
      "For a quick read on discoverability, run the free AI visibility check. To start a programme, we align on your domains, priority questions, and competitors, then kick off onboarding.",
  },
];

export function OverarchingFaqSection() {
  return (
    <section className="relative bg-background py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="relative h-full">
          <div className="absolute left-0 right-0 top-0 h-[0.5px] border-t border-dashed border-zinc-300" />
          <div className="absolute left-0 top-0 h-full w-[0.5px] border-l border-dashed border-zinc-300" />
          <div className="absolute right-0 top-0 h-full w-[0.5px] border-r border-dashed border-zinc-300" />
        </div>
      </div>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">Frequently asked questions</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 md:text-base">Straight answers on AEO and how we work with UK teams.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
          {overarchingFaqItems.map((item) => (
            <article key={item.question} className="rounded-xl border border-zinc-200 bg-background p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold text-zinc-900">{item.question}</h3>
                <span className="text-zinc-400">+</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

type BulletSectionProps = {
  title: string;
  description: string;
  bullets: string[];
};

export function BulletSection({ title, description, bullets }: BulletSectionProps) {
  return (
    <section className="relative border-t border-zinc-200 bg-background py-8">
      <div className="pointer-events-none absolute inset-0 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="relative h-full">
          <div className="absolute left-0 right-0 top-0 h-[0.5px] bg-zinc-200" />
          <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-zinc-200" />
          <div className="absolute left-0 top-0 h-full w-[0.5px] border-l border-dashed border-zinc-300" />
          <div className="absolute right-0 top-0 h-full w-[0.5px] border-r border-dashed border-zinc-300" />
        </div>
      </div>
      <Container>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900">{title}</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600">{description}</p>
          <ul className="mt-4 grid gap-2 text-sm text-zinc-700 sm:grid-cols-2">
            {bullets.map((bullet) => (
              <li key={bullet} className="rounded-lg bg-background px-3 py-2">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

type CtaBandProps = {
  title: string;
  description: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
};

export function CtaBand({ title, description, primary, secondary }: CtaBandProps) {
  return (
    <section className="relative border-t border-zinc-200 bg-background py-16">
      <div className="pointer-events-none absolute inset-0 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="relative h-full">
          <div className="absolute left-0 right-0 top-0 h-[0.5px] bg-zinc-200" />
          <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-zinc-200" />
          <div className="absolute left-0 top-0 h-full w-[0.5px] bg-zinc-200" />
          <div className="absolute right-0 top-0 h-full w-[0.5px] bg-zinc-200" />
        </div>
      </div>
      <Container>
        <div className="rounded-3xl bg-zinc-900 px-6 py-10 text-white">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-300">{description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={primary.href} className="rounded-full bg-background px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100">
              {primary.label}
            </Link>
            {secondary ? (
              <Link href={secondary.href} className="rounded-full border border-zinc-500 px-5 py-2.5 text-sm font-medium text-zinc-100 hover:border-zinc-300">
                {secondary.label}
              </Link>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
