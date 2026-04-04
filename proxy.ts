import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { siteConfig } from "@/lib/site-config";

/**
 * Enforces the canonical hostname at the edge (belt-and-suspenders with `next.config` redirects).
 * If apex still shows a different site, both hosts are not pointing at this deployment — fix in Vercel/DNS.
 */
export function proxy(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-host");
  const raw = forwarded ?? request.headers.get("host") ?? "";
  const hostname = raw.split(":")[0]?.toLowerCase() ?? "";

  const canonical = new URL(siteConfig.siteUrl);
  const canonicalHost = canonical.hostname.toLowerCase();
  const apexHost = canonicalHost.startsWith("www.") ? canonicalHost.slice(4) : canonicalHost;

  if (hostname && hostname === apexHost && canonicalHost.startsWith("www.")) {
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
