export type LearnArticle = {
  category: string;
  title: string;
  description: string;
  href: string | null;
};

export const learnArticles: LearnArticle[] = [
  {
    category: "Foundations",
    title: "Mentions vs citations in AI search",
    description:
      "Two key signals in AI visibility reporting, why they're related but not the same, and what to look for when reviewing your data.",
    href: "/learn/mentions-vs-citations-in-ai-search",
  },
  {
    category: "Measurement",
    title: "How tracked prompts work",
    description:
      "What tracked prompts are, why one prompt is never enough, and how prompt groups and buyer intent connect in AI visibility measurement.",
    href: "/learn/how-tracked-prompts-work",
  },
  {
    category: "Strategy",
    title: "How competitor benchmarking works in AI search",
    description:
      "Fair comparison across brands, shared prompt sets, mentions vs citations in competitive reporting, and how benchmarks turn into AEO priorities.",
    href: "/learn/how-competitor-benchmarking-works-in-ai-search",
  },
  {
    category: "Measurement",
    title: "What good AI visibility reporting looks like",
    description:
      "Dashboards vs monthly reports, what to include—from prompts and citations to competitors and cited pages—and how to spot thin or noisy reporting.",
    href: "/learn/what-good-ai-visibility-reporting-looks-like",
  },
  {
    category: "Strategy",
    title: "How to choose an AEO agency in the UK",
    description:
      "What to look for, what to avoid, and how to tell the difference between real AEO work and vague AI SEO claims when evaluating UK providers.",
    href: "/learn/how-to-choose-an-aeo-agency-in-the-uk",
  },
];
