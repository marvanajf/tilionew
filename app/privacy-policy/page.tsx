import type { Metadata } from "next";

import { buildPageMetadata } from "@/components/seo/metadata";
import { RouteMigrationChecklist } from "@/components/migration/route-migration-checklist";
import { getContentPlanByRoute } from "@/lib/content-migration";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy route migration checklist.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const plan = getContentPlanByRoute("/privacy-policy");
  if (!plan) return null;

  return <RouteMigrationChecklist title="Privacy Policy" plan={plan} />;
}
