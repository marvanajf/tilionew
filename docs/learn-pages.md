# Learn pages — design, SEO & AI visibility

This document defines how **Learn** articles under `/learn/*` must be built. It complements [`DESIGN_GUIDANCE.md`](../DESIGN_GUIDANCE.md) (framing, typography rhythm, no decorative noise). If anything conflicts, follow **this doc for Learn URLs** and **DESIGN_GUIDANCE** for general UI standards.

---

## Scope

- **Hub:** [`/resources/learn`](../app/resources/learn/page.tsx) — index of guides (cards link to `/learn/...`).
- **Articles:** one route per guide, e.g. `/learn/mentions-vs-citations-in-ai-search`.
- **Canonical pattern:** `https://tilio.co.uk/learn/<slug>` (see `siteConfig.siteUrl` in code).

---

## Design — hero

The hero must match the established Learn / blog-style treatment:

1. **Dot grid** — `radial-gradient` dots inside `max-w-7xl px-6 lg:px-8`, `z-0`, `aria-hidden`.
2. **Framing** — four solid `bg-zinc-200` lines on the same inset as dots, `z-[1]`, `aria-hidden`.
3. **Content** — `Container` (`max-w-6xl`, site gutters) at `relative z-10` so copy sits **inset from** the vertical framing lines (do not align hero text flush with the frame).
4. **Inner column** — `max-w-3xl` centred within the Container for the title block.
5. **Breadcrumb** — `Learn` → link to `/resources/learn`, then `/` and **category** label (e.g. Foundations, Measurement). Use `<nav aria-label="Breadcrumb">`.
6. **H1** — `text-3xl md:text-4xl`, `font-semibold`, `tracking-tight`, matches article topic.
7. **Lead** — one short paragraph, `text-base md:text-lg`, `text-zinc-600`.
8. **Meta strip** — below a `border-t border-zinc-200`: **category** as a small pill (e.g. `bg-blue-50 text-blue-700` for Foundations; use other tints consistently per category) and **reading time** (e.g. `7 min read`). **Do not** put “Related” links in the hero — those live at the **bottom** of the article.

---

## Design — body

1. **Outer framing** — top `bg-zinc-200` rule plus **dashed** left/right verticals (`border-zinc-300`) inside `max-w-7xl px-6 lg:px-8`, same inset as blog post body framing.
2. **Content wrapper** — `mx-auto w-full max-w-7xl px-6 pt-12 lg:px-8` so the **TOC column’s left border aligns with the left vertical framing line** (same as blog posts). Do **not** wrap the body grid in `Container` — that breaks TOC/frame alignment.
3. **Grid** — `lg:grid-cols-[220px_1fr] lg:gap-16` (adjust first column width only if needed; keep TOC narrow).
4. **Desktop TOC** — `TableOfContents` from `@/components/blog/table-of-contents`, `hidden lg:block`. Pass `postUrl` as the full article URL (`${siteConfig.siteUrl}/learn/...`) for “Explore with AI” links.
5. **Mobile TOC** — `TocMobile` at the top of the article column, `lg:hidden`, same `entries` as desktop.
6. **Article column** — `min-w-0 lg:pr-8` so long lines do not touch the **right** framing line.
7. **Prose** — body `text-sm md:text-base`, `leading-relaxed`, `text-zinc-600`; **H2** `text-xl font-semibold text-zinc-900`, with **stable `id`** on every H2 that appears in the TOC (`id` must match `TocEntry.id`).
8. **Pull quotes / callouts** — optional; use `rounded-xl border border-zinc-200 bg-zinc-50` sparingly.
9. **Related reading** — end of article column: `mt-12 border-t border-zinc-200 pt-8`, heading **Related reading**, list of internal links (methodology, audits, **Back to Learn**, etc.).

---

## Table of contents

- Define `TOC_ENTRIES: TocEntry[]` with `{ id, text, level: 2 }` (level 3 only if you add H3s later).
- **Slug rules for `id`:** kebab-case, stable, unique on the page; must match the corresponding `<h2 id="...">`.
- Do not duplicate blog’s Sanity-driven TOC extraction — Learn pages are static, so maintain the array by hand next to the content.

---

## SEO (required for every Learn article)

1. **`export const metadata`** via `buildPageMetadata({ title, description, path })`  
   - `path` must be `/learn/<slug>`.  
   - Title becomes `title | Tilio` via the site template; keep `title` the human-facing phrase (meta title without repeating `| Tilio` in the string).
2. **Meta description** — unique, accurate, ≤ ~155 characters where possible; include the main intent (what the reader learns).
3. **One H1** per page, same as the primary topic (can match `metadata.title` closely).
4. **Semantic structure** — `<article>`, logical heading order (H2 for main sections), lists where content is lists.
5. **Internal links** — use `next/link`; prefer descriptive anchor text (not “click here”).

---

## AI visibility / structured data (required)

Every Learn article should ship:

1. **`WebPageJsonLd`** — `name` (full public title including `| Tilio` if you mirror OG), `description`, `url`, `datePublished`, `dateModified` (update when content changes).
2. **`FaqPageJsonLd`** — derive **5–8** question/answer pairs from the page (no fluff; answers can be tightened from body copy). This is the main **answer-engine** signal for extractable Q&A.
3. **`BreadcrumbJsonLd`** — `Home` → `Learn` (`/resources/learn`) → **current article title** + URL.

Import from `@/components/seo/json-ld`. Use `siteConfig.siteUrl` for absolute URLs in JSON-LD.

---

## Sitemap (required)

Add every new Learn URL to **`learnArticleRoutes`** in [`lib/routes.ts`](../lib/routes.ts).  
[`app/sitemap.ts`](../app/sitemap.ts) already spreads `...learnArticleRoutes` into static routes — no change needed there per article once the path is in the array.

---

## Learn hub card

Add or update the entry in [`app/resources/learn/page.tsx`](../app/resources/learn/page.tsx) `articles` array:

- `href: "/learn/<slug>"` when live; `href: null` + “Coming soon” UI if not ready.
- Match **category** pill colour to the article meta strip (Foundations = blue, etc.).

---

## Checklist — new Learn article

- [ ] Create `app/learn/<slug>/page.tsx` following the hero + body structure above.
- [ ] `buildPageMetadata` + unique description.
- [ ] `WebPageJsonLd`, `FaqPageJsonLd`, `BreadcrumbJsonLd`.
- [ ] `TOC_ENTRIES` + matching `h2 id`s.
- [ ] `TableOfContents` + `TocMobile` + `PAGE_URL` for `postUrl`.
- [ ] Related reading block at bottom.
- [ ] Append `/learn/<slug>` to `learnArticleRoutes` in `lib/routes.ts`.
- [ ] Add card on `/resources/learn` with `href` when published.

---

## Reference implementation

See [`app/learn/mentions-vs-citations-in-ai-search/page.tsx`](../app/learn/mentions-vs-citations-in-ai-search/page.tsx) as the canonical example.
