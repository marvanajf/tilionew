type RobotsGroup = { agents: string[]; disallow: string[]; allow: string[] };

function parseRobotsGroups(robotsTxt: string): RobotsGroup[] {
  const groups: RobotsGroup[] = [];
  let agents: string[] = [];
  let disallow: string[] = [];
  let allow: string[] = [];

  const save = () => {
    if (agents.length) {
      groups.push({ agents: [...agents], disallow: [...disallow], allow: [...allow] });
    }
    agents = [];
    disallow = [];
    allow = [];
  };

  for (const rawLine of robotsTxt.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim().toLowerCase();
    const val = line.slice(idx + 1).trim();

    if (key === "user-agent") {
      const v = val.toLowerCase();
      if (agents.length === 0) {
        agents = [v];
      } else if (disallow.length === 0 && allow.length === 0) {
        agents.push(v);
      } else {
        save();
        agents = [v];
      }
    } else if (agents.length) {
      if (key === "disallow") disallow.push(val);
      if (key === "allow") allow.push(val);
    }
  }
  save();
  return groups;
}

function pathBlockedByDisallow(path: string, disallowRules: string[]): boolean {
  const p = path.startsWith("/") ? path : `/${path}`;
  for (const rule of disallowRules) {
    if (rule === "") continue;
    if (rule === "/") return true;
    if (p === rule || p.startsWith(`${rule}/`) || p.startsWith(rule)) {
      return true;
    }
  }
  return false;
}

function isAllowedForAgent(groups: RobotsGroup[], agentName: string, path: string): boolean {
  const agent = agentName.toLowerCase();
  const specific = groups.find((g) => g.agents.some((a) => a === agent));
  const star = groups.find((g) => g.agents.includes("*"));
  const group = specific ?? star;
  if (!group) return true;
  const blocked = pathBlockedByDisallow(path, group.disallow);
  if (!blocked) return true;
  for (const a of group.allow) {
    if (!a) continue;
    const ap = path.startsWith("/") ? path : `/${path}`;
    if (ap === a || ap.startsWith(`${a}/`) || ap.startsWith(a)) {
      return true;
    }
  }
  return false;
}

export async function fetchRobotsTxt(baseUrl: string): Promise<{ text: string | null; ok: boolean }> {
  try {
    const res = await fetch(`${baseUrl.replace(/\/$/, "")}/robots.txt`, {
      headers: { "User-Agent": "TilioAIChecker/1.0" },
      signal: AbortSignal.timeout(12000),
      cache: "no-store",
    });
    if (!res.ok) return { text: null, ok: false };
    const text = await res.text();
    return { text, ok: true };
  } catch {
    return { text: null, ok: false };
  }
}

export function analyzeRobots(robotsTxt: string | null, path: string = "/") {
  if (!robotsTxt || !robotsTxt.trim()) {
    return {
      allowsAllWildcards: true,
      allowsGPTBot: true,
      allowsAnthropicBot: true,
      allowsPerplexityBot: true,
    };
  }
  const groups = parseRobotsGroups(robotsTxt);
  return {
    allowsAllWildcards: isAllowedForAgent(groups, "*", path),
    allowsGPTBot: isAllowedForAgent(groups, "gptbot", path),
    allowsAnthropicBot:
      isAllowedForAgent(groups, "anthropic-ai", path) || isAllowedForAgent(groups, "claude-web", path),
    allowsPerplexityBot: isAllowedForAgent(groups, "perplexitybot", path),
  };
}
