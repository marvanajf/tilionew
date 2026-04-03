export const marketingRoutes = [
  "/",
  "/pricing",
  "/ai-checker",
  "/aeo-agency",
  "/uk-aeo-solutions",
  "/ai-visibility-audit",
  "/how-we-measure-ai-visibility",
  "/working-with-tilio",
  "/geo-agency",
  "/about",
  "/contact",
] as const;

export const legalRoutes = ["/terms-of-service", "/privacy-policy"] as const;

export const blogIndexRoute = "/blog" as const;
/** Primary learn index URL (sitemap + breadcrumbs). */
export const learnIndexRoute = "/learn" as const;
export const learnCentreRoute = "/resources/learn" as const;

export const learnArticleRoutes = [
  "/learn/mentions-vs-citations-in-ai-search",
  "/learn/how-tracked-prompts-work",
  "/learn/how-competitor-benchmarking-works-in-ai-search",
  "/learn/what-good-ai-visibility-reporting-looks-like",
  "/learn/how-to-choose-an-aeo-agency-in-the-uk",
] as const;

export const blogPostSlugs = [
  "what-ai-health-answers-cite-intent-mentions-and-source-mix",
  "how-to-make-your-business-show-up-in-chatgpt-aeo-seo-guide",
  "how-should-a-head-of-seo-approach-aeo",
  "do-serp-keywords-lead-to-answer-engine-performance",
  "query-fanouts-are-getting-longer-heres-why-that-matters",
  "the-business-case-for-investing-in-aeo-in-2026",
  "google-ucp-uk-sme-aeo-playbook",
  "affordable-aeo-plans-for-smes-uk-2026",
  "strong-seo-only-gets-you-so-far-in-ai-search",
  "aeo-vs-geo-which-one",
  "cmas-proposed-google-search-rules",
  "the-ai-search-surfaces-that-matter-in-2026",
  "best-aeo-tools-for-tracking-brand-mentions-in-ai-answers-2026",
  "answer-engine-optimisation-uk-a-search-intent-playbook-for-smes",
  "how-ai-search-engines-choose-which-businesses-to-mention",
  "the-ultimate-guide-to-aeo-agencies-in-the-uk-2026",
  "aeo-for-seos-the-comprehensive-playbook",
  "what-is-aeo-answer-engine-optimization",
  "in-search-its-still-googles-world",
  "how-to-get-found-in-ai-search",
] as const;

export const blogPostRoutes = blogPostSlugs.map((slug) => `/blog/${slug}` as const);
