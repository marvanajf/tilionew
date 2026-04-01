"use client";

import Image from "next/image";
import { createContext, useCallback, useContext, useMemo, useState } from "react";

import { MarketingFramedSection } from "@/components/marketing/sections";
import type { AiCheckApiResponse, AiCheckResult } from "@/lib/ai-checker/types";

type AiCheckerContextValue = {
  domain: string;
  setDomain: (v: string) => void;
  loading: boolean;
  error: string | null;
  result: AiCheckResult | null;
  cached: boolean | null;
  submit: (e: React.FormEvent) => void;
};

const AiCheckerContext = createContext<AiCheckerContextValue | null>(null);

function useAiChecker() {
  const ctx = useContext(AiCheckerContext);
  if (!ctx) {
    throw new Error("useAiChecker must be used within AiCheckerProvider");
  }
  return ctx;
}

export function AiCheckerProvider({ children }: { children: React.ReactNode }) {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AiCheckResult | null>(null);
  const [cached, setCached] = useState<boolean | null>(null);

  const submit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);
      setResult(null);
      setCached(null);
      setLoading(true);
      try {
        const res = await fetch("/api/ai-check", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ domain: domain.trim() }),
        });
        let data: AiCheckApiResponse;
        try {
          data = (await res.json()) as AiCheckApiResponse;
        } catch {
          setError("Invalid response from server.");
          return;
        }
        if (!res.ok || !data.success) {
          setError(data.success === false ? data.error : "Request failed");
          return;
        }
        setResult(data.result);
        setCached(data.cached);
        requestAnimationFrame(() => {
          document.getElementById("ai-checker-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      } catch {
        setError("Network error. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    [domain],
  );

  const value = useMemo(
    () => ({
      domain,
      setDomain,
      loading,
      error,
      result,
      cached,
      submit,
    }),
    [domain, loading, error, result, cached, submit],
  );

  return <AiCheckerContext.Provider value={value}>{children}</AiCheckerContext.Provider>;
}

/** Form + inline errors only — place inside `MarketingHero` children. */
export function AiCheckerHeroForm() {
  const { domain, setDomain, loading, error, submit } = useAiChecker();

  return (
    <div className="w-full">
      <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="min-w-0 flex-1 text-left">
          <label htmlFor="ai-check-domain" className="block text-sm font-medium text-zinc-900">
            Website domain
          </label>
          <input
            id="ai-check-domain"
            name="domain"
            type="text"
            autoComplete="url"
            placeholder="example.com"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-background px-3 py-2.5 text-sm text-zinc-900 outline-none ring-zinc-300 placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2"
          />
        </div>
        <button
          type="submit"
          disabled={loading || !domain.trim()}
          className="inline-flex shrink-0 items-center justify-center rounded-[10px] border border-[#93c5fd] bg-[#93c5fd]/20 px-6 py-2.5 text-sm font-medium text-[#1d4ed8] transition-colors hover:bg-[#93c5fd] hover:text-[#1e3a8a] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Checking…" : "Run check"}
        </button>
      </form>

      {error ? (
        <p className="mt-4 text-center text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function PassRow({ label, ok }: { label: string; ok: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-zinc-100 py-3 text-sm last:border-b-0">
      <span className="text-zinc-700">{label}</span>
      <span className={ok ? "font-medium text-emerald-700" : "font-medium text-amber-800"}>{ok ? "Pass" : "Review"}</span>
    </div>
  );
}

/** Full score + checks + insights — sits in the section below the hero. */
export function AiCheckerResultsSection() {
  const { loading, result, cached } = useAiChecker();

  return (
    <MarketingFramedSection id="ai-checker-results" className="scroll-mt-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">Technical readiness results</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-zinc-600 md:text-base">
          A snapshot of the technical signals that affect whether AI systems can access and interpret your site — not a measure of live mentions or citations.
        </p>

        {loading ? (
          <p className="mt-10 text-center text-sm text-zinc-600" aria-live="polite">
            Checking your site…
          </p>
        ) : null}

        {!loading && !result ? (
          <p className="mt-10 text-center text-sm text-zinc-500">Run a check above to see your snapshot score, pass/fail rows, and insights.</p>
        ) : null}

        {result ? (
          <div className="mt-10 space-y-6" aria-live="polite">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-zinc-200 pb-6">
              <div>
                <p className="text-sm text-zinc-500">AI visibility score</p>
                <p className="text-4xl font-semibold tabular-nums text-zinc-900">{result.aiVisibilityScore}</p>
                <p className="mt-1 text-xs text-zinc-500">out of 100</p>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(result.domain)}&sz=64`}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded"
                />
                <div className="text-right sm:text-left">
                  <p className="text-sm font-medium text-zinc-900">{result.domain}</p>
                  {cached ? <p className="text-xs text-zinc-500">Cached result (last hour)</p> : null}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-zinc-900">Checks</h3>
              <div className="mt-2 rounded-xl border border-zinc-200 px-4">
                <PassRow label="robots.txt reachable" ok={result.robotsTxtAccessible} />
                <PassRow label="Generic crawl (User-agent: *)" ok={result.robotsTxtAllowsCrawlers} />
                <PassRow label="GPTBot allowed" ok={result.allowsGPTBot} />
                <PassRow label="Anthropic / Claude crawlers allowed" ok={result.allowsAnthropicBot} />
                <PassRow label="PerplexityBot allowed" ok={result.allowsPerplexityBot} />
                <PassRow label="Homepage fetched" ok={result.homepageFetched} />
                <PassRow label="Structured data (JSON-LD)" ok={result.signals.hasStructuredData} />
                <PassRow label="Meta description" ok={result.signals.hasMetaDescription} />
                <PassRow label="Page title" ok={result.signals.hasTitle} />
                <PassRow label="Canonical URL" ok={result.signals.hasCanonical} />
                <PassRow label="Open Graph tags" ok={result.signals.hasOpenGraph} />
                <PassRow label="Twitter Card tags" ok={result.signals.hasTwitterCard} />
                <PassRow label="H1 heading" ok={result.signals.hasH1} />
                <PassRow label="HTML lang attribute" ok={result.signals.hasHtmlLang} />
                <PassRow label="Viewport meta" ok={result.signals.hasViewportMeta} />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-zinc-900">Insights</h3>
              <ul className="mt-2 space-y-2 text-sm leading-relaxed text-zinc-600">
                {result.insights.map((insight, i) => (
                  <li key={`${insight.message}-${i}`} className="rounded-lg border border-zinc-100 bg-background px-3 py-2">
                    {insight.message}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-zinc-500">
              Bot permission score contribution: {result.botPermissionsScore} / 15. This is a directional check, not a guarantee of AI placement.
            </p>
          </div>
        ) : null}
      </div>
    </MarketingFramedSection>
  );
}
