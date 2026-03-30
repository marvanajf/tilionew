export type RouteContentPlan = {
  route: string;
  type: "marketing" | "legal" | "contact";
  localSourceStatus: "available" | "partial" | "missing";
  localReferenceFiles: string[];
  needsFromStakeholder: string[];
  migrationNotes: string[];
};

export const nonBlogContentPlans: RouteContentPlan[] = [
  {
    route: "/",
    type: "marketing",
    localSourceStatus: "partial",
    localReferenceFiles: ["tilio/index.html"],
    needsFromStakeholder: [
      "Current live home page copy and section order",
      "Final CTA destinations and labels",
      "Current SEO title/description/canonical",
    ],
    migrationNotes: [
      "Old local file has only a basic static marketing draft.",
      "Use live site as source of truth for final copy parity.",
    ],
  },
  {
    route: "/pricing",
    type: "marketing",
    localSourceStatus: "missing",
    localReferenceFiles: [],
    needsFromStakeholder: [
      "Pricing tiers, feature matrix, and CTA copy",
      "Any pricing FAQs and disclaimer text",
      "Current SEO metadata",
    ],
    migrationNotes: ["No pricing page was found in the local legacy folder."],
  },
  {
    route: "/ai-checker",
    type: "marketing",
    localSourceStatus: "missing",
    localReferenceFiles: [],
    needsFromStakeholder: [
      "Page copy and section structure",
      "Any form/tool interaction requirements",
      "Current SEO metadata",
    ],
    migrationNotes: ["No local source page was found for this route."],
  },
  {
    route: "/aeo-agency",
    type: "marketing",
    localSourceStatus: "missing",
    localReferenceFiles: [],
    needsFromStakeholder: ["Page copy blocks", "Service positioning content", "Current SEO metadata"],
    migrationNotes: ["No local source page was found for this route."],
  },
  {
    route: "/uk-aeo-solutions",
    type: "marketing",
    localSourceStatus: "missing",
    localReferenceFiles: [],
    needsFromStakeholder: ["Page copy blocks", "Any geo-specific claims/disclaimers", "Current SEO metadata"],
    migrationNotes: ["No local source page was found for this route."],
  },
  {
    route: "/ai-visibility-audit",
    type: "marketing",
    localSourceStatus: "missing",
    localReferenceFiles: [],
    needsFromStakeholder: ["Page copy and lead flow details", "CTA destination", "Current SEO metadata"],
    migrationNotes: ["No local source page was found for this route."],
  },
  {
    route: "/about",
    type: "marketing",
    localSourceStatus: "partial",
    localReferenceFiles: ["tilio/about.html"],
    needsFromStakeholder: ["Final about copy", "Current SEO metadata"],
    migrationNotes: ["Local about page exists but appears generic and likely not current live content."],
  },
  {
    route: "/contact",
    type: "contact",
    localSourceStatus: "partial",
    localReferenceFiles: ["tilio/contact.html", "tilio/js/main.js"],
    needsFromStakeholder: [
      "Final contact copy and details",
      "Destination inbox/provider settings for form submissions",
      "Current SEO metadata",
    ],
    migrationNotes: ["Local contact form exists but only simulated submission in JS."],
  },
  {
    route: "/terms-of-service",
    type: "legal",
    localSourceStatus: "missing",
    localReferenceFiles: [],
    needsFromStakeholder: ["Final legal copy", "Effective date / version details", "Current SEO metadata"],
    migrationNotes: ["No local source page was found with this exact slug."],
  },
  {
    route: "/privacy-policy",
    type: "legal",
    localSourceStatus: "missing",
    localReferenceFiles: [],
    needsFromStakeholder: ["Final legal copy", "Effective date / version details", "Current SEO metadata"],
    migrationNotes: ["No local source page was found with this exact slug."],
  },
];

export function getContentPlanByRoute(route: string): RouteContentPlan | undefined {
  return nonBlogContentPlans.find((plan) => plan.route === route);
}
