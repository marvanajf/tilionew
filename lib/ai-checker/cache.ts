import type { AiCheckResult } from "./types";

type CacheEntry = { storedAt: number; result: AiCheckResult };

const store = new Map<string, CacheEntry>();
const ONE_HOUR_MS = 60 * 60 * 1000;

export function getCachedAiCheck(domain: string): AiCheckResult | null {
  const entry = store.get(domain);
  if (!entry) return null;
  if (Date.now() - entry.storedAt > ONE_HOUR_MS) {
    store.delete(domain);
    return null;
  }
  return entry.result;
}

export function setCachedAiCheck(domain: string, result: AiCheckResult): void {
  store.set(domain, { storedAt: Date.now(), result });
}
