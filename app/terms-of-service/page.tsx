import type { Metadata } from "next";

import { buildPageMetadata } from "@/components/seo/metadata";
import { RouteMigrationChecklist } from "@/components/migration/route-migration-checklist";
import { getContentPlanByRoute } from "@/lib/content-migration";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service",
  description: "Terms of service route migration checklist.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  const plan = getContentPlanByRoute("/terms-of-service");
  if (!plan) return null;

  return <RouteMigrationChecklist title="Terms of Service" plan={plan} />;
}
