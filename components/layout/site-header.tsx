import Link from "next/link";
import Image from "next/image";

const servicesItems = [
  { href: "/aeo-agency", label: "AEO Services" },
  { href: "/ai-visibility-audit", label: "AI Visibility Audit" },
];

const resourcesItems = [
  { href: "/blog", label: "Blog" },
  { href: "/ai-checker", label: "AI Checker" },
];

const logoUrl = process.env.NEXT_PUBLIC_LOGO_URL;
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Tilio";

function ContactCta({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/contact"
      className={`inline-flex items-center justify-center rounded-[10px] border border-[#93c5fd] bg-[#93c5fd]/20 px-4 py-2 text-sm font-medium text-[#1d4ed8] transition-colors hover:bg-[#93c5fd] hover:text-[#1e3a8a] ${className}`.trim()}
    >
      Contact
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-background/95 backdrop-blur-[8px]">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="relative flex min-h-16 items-center">
          <div className="flex flex-1 items-center justify-start">
            <Link href="/" className="inline-flex items-center text-lg font-semibold text-zinc-900">
              {logoUrl ? (
                <Image src={logoUrl} alt={siteName} width={110} height={28} className="h-7 w-auto" priority />
              ) : (
                siteName
              )}
            </Link>
          </div>

          <nav aria-label="Primary" className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <ul className="flex items-center gap-1 text-sm">
              <li className="group relative">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-full px-3 py-2 font-medium text-zinc-600 transition-colors hover:text-zinc-900"
                >
                  Services
                  <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform group-hover:rotate-180" aria-hidden>
                    <path
                      d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <div className="invisible absolute left-0 top-full mt-2 min-w-56 rounded-xl border border-zinc-200 bg-background p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                  {servicesItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </li>

              <li className="group relative">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-full px-3 py-2 font-medium text-zinc-600 transition-colors hover:text-zinc-900"
                >
                  Resources
                  <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform group-hover:rotate-180" aria-hidden>
                    <path
                      d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <div className="invisible absolute left-0 top-full mt-2 min-w-56 rounded-xl border border-zinc-200 bg-background p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                  {resourcesItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </li>

              <li>
                <Link
                  href="/pricing"
                  className="inline-flex items-center rounded-full px-3 py-2 font-medium text-zinc-600 transition-colors hover:text-zinc-900"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex flex-1 items-center justify-end gap-2">
            <ContactCta />
            <details className="relative lg:hidden">
              <summary className="list-none cursor-pointer rounded-md p-2 text-zinc-900">
                <svg viewBox="0 0 16 16" className="h-5 w-5" aria-hidden>
                  <rect x="1" y="3" width="14" height="1.5" rx=".75" fill="currentColor" />
                  <rect x="1" y="7.25" width="14" height="1.5" rx=".75" fill="currentColor" />
                  <rect x="1" y="11.5" width="14" height="1.5" rx=".75" fill="currentColor" />
                </svg>
              </summary>
              <div className="absolute right-0 mt-2 w-72 rounded-xl border border-zinc-200 bg-background p-3 shadow-xl">
                <p className="px-2 pb-1 text-xs font-semibold uppercase tracking-wide text-zinc-500">Services</p>
                {servicesItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-2 py-2 text-sm text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                  >
                    {item.label}
                  </Link>
                ))}

                <p className="mt-3 px-2 pb-1 text-xs font-semibold uppercase tracking-wide text-zinc-500">Resources</p>
                {resourcesItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-2 py-2 text-sm text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="mt-3 border-t border-zinc-200 pt-3">
                  <Link href="/pricing" className="block rounded-lg px-2 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900">
                    Pricing
                  </Link>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
