import { createClient, type SanityClient } from "@sanity/client";

export type SanityClientConfig = {
  projectId: string;
  dataset: string;
  apiVersion: string;
  useCdn: boolean;
};

export function getSanityConfig(): SanityClientConfig | null {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-01-01";

  if (!projectId || !dataset) {
    return null;
  }

  return {
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
  };
}

/** Read-only client for published content (browser-safe project id + dataset only). */
export function getSanityReadClient(): SanityClient | null {
  const config = getSanityConfig();
  if (!config) {
    return null;
  }

  return createClient({
    projectId: config.projectId,
    dataset: config.dataset,
    apiVersion: config.apiVersion,
    useCdn: config.useCdn,
  });
}

export function isSanityConfigured(): boolean {
  return getSanityConfig() !== null;
}
