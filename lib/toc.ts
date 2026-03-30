export type TocEntry = {
  id: string;
  text: string;
  level: 2 | 3;
};

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

type RawBlock = {
  _type?: string;
  style?: string;
  children?: { _type?: string; text?: string }[];
};

export function extractTocFromBody(body: unknown): TocEntry[] {
  if (!Array.isArray(body)) return [];

  return body
    .filter((block): block is RawBlock => {
      const b = block as RawBlock;
      return b._type === "block" && (b.style === "h2" || b.style === "h3");
    })
    .map((block) => {
      const text = (block.children ?? [])
        .filter((s) => s._type === "span")
        .map((s) => s.text ?? "")
        .join("");
      const level = block.style === "h2" ? 2 : 3;
      return { id: slugifyHeading(text), text, level } as TocEntry;
    })
    .filter((entry) => entry.text.length > 0);
}
