import * as cheerio from "cheerio";

import type { AiCheckInsight, AiCheckSignals } from "./types";

const UA = "TilioAIChecker/1.0";

export type PageCheckOutcome = {
  signals: AiCheckSignals;
  pageScore: number;
  insights: AiCheckInsight[];
  status: number | null;
  fetched: boolean;
};

export async function checkPage(baseUrl: string, robotsAllowsFetch: boolean): Promise<PageCheckOutcome> {
  const defaultSignals: AiCheckSignals = {
    hasStructuredData: false,
    hasMetaDescription: false,
    hasTitle: false,
    hasCanonical: false,
    hasOpenGraph: false,
    hasTwitterCard: false,
    hasH1: false,
    hasHtmlLang: false,
    hasViewportMeta: false,
  };

  if (!robotsAllowsFetch) {
    return {
      signals: defaultSignals,
      pageScore: 0,
      insights: [{ priority: 1, message: "Homepage was not fetched because robots.txt disallows crawling for generic agents.", type: "robots" }],
      status: null,
      fetched: false,
    };
  }

  let res: Response;
  try {
    res = await fetch(baseUrl.replace(/\/$/, "") + "/", {
      headers: { "User-Agent": UA, Accept: "text/html,application/xhtml+xml" },
      signal: AbortSignal.timeout(15000),
      redirect: "follow",
      cache: "no-store",
    });
  } catch {
    return {
      signals: defaultSignals,
      pageScore: 0,
      insights: [{ priority: 2, message: "Could not fetch the homepage (timeout or network error).", type: "page" }],
      status: null,
      fetched: false,
    };
  }

  const status = res.status;
  if (!res.ok || !res.headers.get("content-type")?.includes("text/html")) {
    return {
      signals: defaultSignals,
      pageScore: 5,
      insights: [
        {
          priority: 2,
          message: `Homepage returned HTTP ${status}. AI crawlers may not be able to read your content reliably.`,
          type: "page",
        },
      ],
      status,
      fetched: true,
    };
  }

  const html = await res.text();
  const $ = cheerio.load(html);

  const hasStructuredData = $('script[type="application/ld+json"]').length > 0;
  const hasMetaDescription = $('meta[name="description"]').attr("content")?.trim().length ? true : false;
  const titleText = $("title").first().text().trim();
  const hasTitle = titleText.length > 5;
  const hasCanonical = Boolean($('link[rel="canonical"]').attr("href")?.trim());
  const hasOpenGraph = $('meta[property^="og:"]').length > 0;
  const hasTwitterCard = $('meta[name^="twitter:"]').length > 0;
  const hasH1 = $("h1").first().text().trim().length > 0;
  const hasHtmlLang = Boolean($("html").attr("lang")?.trim());
  const hasViewportMeta = Boolean($('meta[name="viewport"]').length);

  const signals: AiCheckSignals = {
    hasStructuredData,
    hasMetaDescription,
    hasTitle,
    hasCanonical,
    hasOpenGraph,
    hasTwitterCard,
    hasH1,
    hasHtmlLang,
    hasViewportMeta,
  };

  let points = 0;
  const insights: AiCheckInsight[] = [];

  if (hasStructuredData) {
    points += 14;
  } else {
    insights.push({ priority: 3, message: "No JSON-LD structured data detected. Adding schema helps machines interpret your pages.", type: "page" });
  }
  if (hasMetaDescription) points += 10;
  else insights.push({ priority: 4, message: "Missing meta description. Clear summaries help models quote your positioning.", type: "page" });
  if (hasTitle) points += 10;
  else insights.push({ priority: 4, message: "Title tag is missing or very short.", type: "page" });
  if (hasCanonical) points += 8;
  else insights.push({ priority: 5, message: "No canonical URL set. This can create ambiguity about the preferred page.", type: "page" });
  if (hasOpenGraph) points += 10;
  else insights.push({ priority: 6, message: "No Open Graph tags detected. They help with consistent previews and entity signals.", type: "page" });
  if (hasTwitterCard) points += 4;
  if (hasH1) points += 10;
  else insights.push({ priority: 4, message: "No clear H1 heading found on the homepage.", type: "page" });
  if (hasHtmlLang) points += 6;
  if (hasViewportMeta) points += 6;

  const pageScore = Math.min(85, points);

  return { signals, pageScore, insights, status, fetched: true };
}
