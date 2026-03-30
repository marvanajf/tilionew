export type AiCheckInsight = {
  priority: number;
  message: string;
  type: "robots" | "bots" | "page" | "info";
};

export type AiCheckSignals = {
  hasStructuredData: boolean;
  hasMetaDescription: boolean;
  hasTitle: boolean;
  hasCanonical: boolean;
  hasOpenGraph: boolean;
  hasTwitterCard: boolean;
  hasH1: boolean;
  hasHtmlLang: boolean;
  hasViewportMeta: boolean;
};

export type AiCheckResult = {
  domain: string;
  aiVisibilityScore: number;
  robotsTxtAccessible: boolean;
  robotsTxtAllowsCrawlers: boolean;
  allowsGPTBot: boolean;
  allowsAnthropicBot: boolean;
  allowsPerplexityBot: boolean;
  botPermissionsScore: number;
  signals: AiCheckSignals;
  insights: AiCheckInsight[];
  rawRobotsTxt: string | null;
  homepageFetched: boolean;
  homepageStatus: number | null;
};

export type AiCheckApiResponse =
  | { success: true; result: AiCheckResult; cached: boolean }
  | { success: false; error: string };
