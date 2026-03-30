import { analyzeRobots, fetchRobotsTxt } from "./robots";
import { normalizeDomain, toHttpsBaseUrl } from "./normalize-domain";
import { checkPage } from "./page-check";
import type { AiCheckInsight, AiCheckResult } from "./types";

function sortInsights(insights: AiCheckInsight[]): AiCheckInsight[] {
  return [...insights].sort((a, b) => a.priority - b.priority);
}

export async function performAiVisibilityCheck(rawInput: string): Promise<AiCheckResult> {
  const domain = normalizeDomain(rawInput);
  if (!domain) {
    throw new Error("Invalid domain");
  }

  const baseUrl = toHttpsBaseUrl(domain);
  const { text: robotsTxt, ok: robotsOk } = await fetchRobotsTxt(baseUrl);

  const robotsAnalysis = analyzeRobots(robotsTxt);
  const allowsAll = robotsTxt === null || !robotsOk ? true : robotsAnalysis.allowsAllWildcards;

  const { allowsGPTBot, allowsAnthropicBot, allowsPerplexityBot } = robotsTxt === null || !robotsOk
    ? {
        allowsGPTBot: true,
        allowsAnthropicBot: true,
        allowsPerplexityBot: true,
      }
    : robotsAnalysis;

  const botPermissionsScore =
    (allowsGPTBot ? 5 : 0) + (allowsAnthropicBot ? 5 : 0) + (allowsPerplexityBot ? 5 : 0);

  const pageResult = await checkPage(baseUrl, allowsAll);

  const aiVisibilityScore = Math.min(100, pageResult.pageScore + botPermissionsScore);

  const insights: AiCheckInsight[] = [...pageResult.insights];

  if (!robotsOk) {
    insights.push({
      priority: 6,
      message: "robots.txt could not be fetched. We treat crawler permissions as permissive by default until a file is available.",
      type: "info",
    });
  } else {
    if (!allowsGPTBot) {
      insights.push({
        priority: 1,
        message: "GPTBot appears blocked or restricted in robots.txt. This may reduce ChatGPT-related visibility signals.",
        type: "bots",
      });
    }
    if (!allowsAnthropicBot) {
      insights.push({
        priority: 1,
        message: "Anthropic/Claude crawlers appear blocked or restricted in robots.txt.",
        type: "bots",
      });
    }
    if (!allowsPerplexityBot) {
      insights.push({
        priority: 1,
        message: "PerplexityBot appears blocked or restricted in robots.txt.",
        type: "bots",
      });
    }
    if (!allowsAll) {
      insights.push({
        priority: 2,
        message: "The generic User-agent: * rules may restrict crawling of important pages.",
        type: "robots",
      });
    }
  }

  insights.sort((a, b) => a.priority - b.priority);

  return {
    domain,
    aiVisibilityScore,
    robotsTxtAccessible: robotsOk,
    robotsTxtAllowsCrawlers: allowsAll,
    allowsGPTBot,
    allowsAnthropicBot,
    allowsPerplexityBot,
    botPermissionsScore,
    signals: pageResult.signals,
    insights: sortInsights(insights),
    rawRobotsTxt: robotsTxt,
    homepageFetched: pageResult.fetched,
    homepageStatus: pageResult.status,
  };
}
