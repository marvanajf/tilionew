import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { siteConfig } from "@/lib/site-config";

/**
 * Enforces the canonical hostname at the edge (belt-and-suspenders with `next.config` redirects).
 * If apex still shows a different site, both hosts are not pointing at this deployment — fix in Vercel/DNS.
 */
/** On the canonical host, skip proxy logic for these paths (avoids odd fetch/audit failures). Apex still 301s to www below. */
const SKIP_PROXY_WHEN_CANONICAL_HOST = new Set([
  "/sitemap.xml",
  "/feed.xml",
  "/robots.txt",
  "/llms.txt",
]);

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const forwarded = request.headers.get("x-forwarded-host");
  const raw = forwarded ?? request.headers.get("host") ?? "";
  const hostname = raw.split(":")[0]?.toLowerCase() ?? "";

  const canonical = new URL(siteConfig.siteUrl);
  const canonicalHost = canonical.hostname.toLowerCase();
  const apexHost = canonicalHost.startsWith("www.") ? canonicalHost.slice(4) : canonicalHost;

  const isApex = Boolean(
    hostname && hostname === apexHost && canonicalHost.startsWith("www."),
  );

  if (SKIP_PROXY_WHEN_CANONICAL_HOST.has(pathname) && !isApex) {
    return NextResponse.next();
  }

  if (isApex) {
    const url = request.nextUrl.clone();
    url.hostname = canonicalHost;
    url.protocol = canonical.protocol;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)", "/"],
};
