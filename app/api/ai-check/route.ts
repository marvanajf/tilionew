import { NextResponse } from "next/server";

import { getCachedAiCheck, setCachedAiCheck } from "@/lib/ai-checker/cache";
import { normalizeDomain } from "@/lib/ai-checker/normalize-domain";
import { performAiVisibilityCheck } from "@/lib/ai-checker/perform-check";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ success: false, error: "Invalid JSON body" }, { status: 400 });
    }

    const domain =
      typeof body === "object" && body !== null && "domain" in body && typeof (body as { domain: unknown }).domain === "string"
        ? (body as { domain: string }).domain
        : "";

    const clean = normalizeDomain(domain);
    if (!clean) {
      return NextResponse.json({ success: false, error: "Invalid or missing domain" }, { status: 400 });
    }

    const cached = getCachedAiCheck(clean);
    if (cached) {
      return NextResponse.json({ success: true, result: cached, cached: true });
    }

    const result = await performAiVisibilityCheck(domain);
    setCachedAiCheck(clean, result);
    return NextResponse.json({ success: true, result, cached: false });
  } catch (err) {
    console.error("[ai-check]", err);
    return NextResponse.json({ success: false, error: "Unable to complete AI visibility check" }, { status: 500 });
  }
}
