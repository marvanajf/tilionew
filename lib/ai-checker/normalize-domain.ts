const BLOCKED_HOSTNAMES = new Set([
  "localhost",
  "127.0.0.1",
  "0.0.0.0",
  "::1",
  "metadata.google.internal",
  "metadata",
]);

export function normalizeDomain(input: string): string | null {
  const trimmed = input.trim().toLowerCase();
  if (!trimmed) return null;

  let host = trimmed;
  try {
    if (trimmed.includes("://")) {
      const url = new URL(trimmed.startsWith("http") ? trimmed : `https://${trimmed}`);
      host = url.hostname;
    } else {
      host = trimmed.replace(/^www\./, "");
    }
  } catch {
    host = trimmed.replace(/^https?:\/\//, "").split("/")[0] ?? "";
    host = host.replace(/^www\./, "");
  }

  host = host.replace(/^www\./, "").replace(/:\d+$/, "");
  if (!host) return null;

  if (BLOCKED_HOSTNAMES.has(host)) return null;
  if (host.endsWith(".localhost")) return null;
  if (host.startsWith("10.")) return null;
  if (host.startsWith("192.168.")) return null;
  if (host.startsWith("169.254.")) return null;
  if (host === "0.0.0.0") return null;

  if (!/^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/i.test(host)) {
    return null;
  }

  return host;
}

export function toHttpsBaseUrl(domain: string): string {
  return `https://${domain}`;
}
