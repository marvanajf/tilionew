# Migration Notes

## Goal

Rebuild the Tilio public marketing site and blog in Next.js + TypeScript for deployment on Vercel, while preserving live URL structure and SEO parity.

## Core Migration Decisions

- Clean rebuild in this new repository only.
- The old `tilio` folder is reference-only.
- Do not recreate any dashboard/admin/platform legacy logic unless explicitly requested.
- Same domain and same live public paths/slugs after launch.
- Only add redirects for genuine alternate legacy URLs that must also resolve.
- Use Sanity for blog content, without changing public blog URL structure.
- Preserve original blog publish dates and SEO-critical blog metadata.
- Keep forms lightweight and production-ready for Vercel without unnecessary database complexity.

## 1) Confirmed Live Route Inventory

### Marketing Pages

- `/`
- `/pricing`
- `/ai-checker`
- `/aeo-agency`
- `/uk-aeo-solutions`
- `/ai-visibility-audit`
- `/about`
- `/contact`

### Legal Pages

- `/terms-of-service`
- `/privacy-policy`

### Blog Index

- `/blog`

### Blog Posts

- `/blog/what-ai-health-answers-cite-intent-mentions-and-source-mix`
- `/blog/how-to-make-your-business-show-up-in-chatgpt-aeo-seo-guide`
- `/blog/how-should-a-head-of-seo-approach-aeo`
- `/blog/do-serp-keywords-lead-to-answer-engine-performance`
- `/blog/query-fanouts-are-getting-longer-heres-why-that-matters`
- `/blog/the-business-case-for-investing-in-aeo-in-2026`
- `/blog/google-ucp-uk-sme-aeo-playbook`
- `/blog/affordable-aeo-plans-for-smes-uk-2026`
- `/blog/strong-seo-only-gets-you-so-far-in-ai-search`
- `/blog/aeo-vs-geo-which-one`
- `/blog/cmas-proposed-google-search-rules`
- `/blog/the-ai-search-surfaces-that-matter-in-2026`
- `/blog/best-aeo-tools-for-tracking-brand-mentions-in-ai-answers-2026`
- `/blog/answer-engine-optimisation-uk-a-search-intent-playbook-for-smes`
- `/blog/how-ai-search-engines-choose-which-businesses-to-mention`
- `/blog/the-ultimate-guide-to-aeo-agencies-in-the-uk-2026`
- `/blog/aeo-for-seos-the-comprehensive-playbook`
- `/blog/what-is-aeo-answer-engine-optimization`
- `/blog/in-search-its-still-googles-world`
- `/blog/how-to-get-found-in-ai-search`

## 2) Route-by-Route Rebuild Tracker

Legend:
- Implementation status: `Not started` | `In progress` | `Complete`
- Metadata status: `Not started` | `In progress` | `Complete`

| Route | Type | Content source | Implementation status | Metadata status | Notes |
| --- | --- | --- | --- | --- | --- |
| `/` | Marketing | Rewritten marketing copy and design system | In progress | In progress | Scaffolded route shell and placeholder metadata created |
| `/pricing` | Marketing | Current live page copy and pricing blocks | In progress | In progress | Scaffolded route shell and placeholder metadata created |
| `/ai-checker` | Marketing | Current live page copy and tool explainer | In progress | In progress | Scaffolded route shell and placeholder metadata created |
| `/aeo-agency` | Marketing | Current live page copy | In progress | In progress | Scaffolded route shell and placeholder metadata created |
| `/uk-aeo-solutions` | Marketing | Current live page copy | In progress | In progress | Scaffolded route shell and placeholder metadata created |
| `/ai-visibility-audit` | Marketing | Current live page copy | In progress | In progress | Scaffolded route shell and placeholder metadata created |
| `/about` | Marketing | Existing About content + updated copy | In progress | In progress | Scaffolded route shell and placeholder metadata created |
| `/contact` | Marketing | Existing contact content + final contact details | In progress | In progress | Scaffolded route shell and placeholder metadata created |
| `/terms-of-service` | Legal | Final legal copy from stakeholder/legal | In progress | In progress | Scaffolded route shell and placeholder metadata created |
| `/privacy-policy` | Legal | Final legal copy from stakeholder/legal | In progress | In progress | Scaffolded route shell and placeholder metadata created |
| `/blog` | Blog index | Sanity post listing query | In progress | In progress | Scaffolded blog index shell with confirmed slug links |
| `/blog/what-ai-health-answers-cite-intent-mentions-and-source-mix` | Blog post | Sanity `post` document | In progress | In progress | Covered by dynamic route shell and static params |
| `/blog/how-to-make-your-business-show-up-in-chatgpt-aeo-seo-guide` | Blog post | Sanity `post` document | In progress | In progress | Covered by dynamic route shell and static params |
| `/blog/how-should-a-head-of-seo-approach-aeo` | Blog post | Sanity `post` document | In progress | In progress | Covered by dynamic route shell and static params |
| `/blog/do-serp-keywords-lead-to-answer-engine-performance` | Blog post | Sanity `post` document | In progress | In progress | Covered by dynamic route shell and static params |
| `/blog/query-fanouts-are-getting-longer-heres-why-that-matters` | Blog post | Sanity `post` document | In progress | In progress | Covered by dynamic route shell and static params |
| `/blog/the-business-case-for-investing-in-aeo-in-2026` | Blog post | Sanity `post` document | In progress | In progress | Covered by dynamic route shell and static params |
| `/blog/google-ucp-uk-sme-aeo-playbook` | Blog post | Sanity `post` document | In progress | In progress | Covered by dynamic route shell and static params |
| `/blog/affordable-aeo-plans-for-smes-uk-2026` | Blog post | Sanity `post` document | In progress | In progress | Covered by dynamic route shell and static params |
| `/blog/strong-seo-only-gets-you-so-far-in-ai-search` | Blog post | Sanity `post` document | In progress | In progress | Covered by dynamic route shell and static params |
| `/blog/aeo-vs-geo-which-one` | Blog post | Sanity `post` document | In progress | In progress | Covered by dynamic route shell and static params |
| `/blog/cmas-proposed-google-search-rules` | Blog post | Sanity `post` document | In progress | In progress | Covered by dynamic route shell and static params |
| `/blog/the-ai-search-surfaces-that-matter-in-2026` | Blog post | Sanity `post` document | In progress | In progress | Covered by dynamic route shell and static params |
| `/blog/best-aeo-tools-for-tracking-brand-mentions-in-ai-answers-2026` | Blog post | Sanity `post` document | In progress | In progress | Covered by dynamic route shell and static params |
| `/blog/answer-engine-optimisation-uk-a-search-intent-playbook-for-smes` | Blog post | Sanity `post` document | In progress | In progress | Covered by dynamic route shell and static params |
| `/blog/how-ai-search-engines-choose-which-businesses-to-mention` | Blog post | Sanity `post` document | In progress | In progress | Covered by dynamic route shell and static params |
| `/blog/the-ultimate-guide-to-aeo-agencies-in-the-uk-2026` | Blog post | Sanity `post` document | In progress | In progress | Covered by dynamic route shell and static params |
| `/blog/aeo-for-seos-the-comprehensive-playbook` | Blog post | Sanity `post` document | In progress | In progress | Covered by dynamic route shell and static params |
| `/blog/what-is-aeo-answer-engine-optimization` | Blog post | Sanity `post` document | In progress | In progress | Covered by dynamic route shell and static params |
| `/blog/in-search-its-still-googles-world` | Blog post | Sanity `post` document | In progress | In progress | Covered by dynamic route shell and static params |
| `/blog/how-to-get-found-in-ai-search` | Blog post | Sanity `post` document | In progress | In progress | Covered by dynamic route shell and static params |

## 3) Sanity Blog Migration Plan

### Recommended Sanity Schema (post)

- `title` (string, required)
- `slug` (slug, required, unique, must match current live slug exactly)
- `publishedAt` (datetime, required)
- `updatedAt` (datetime, optional)
- `metaTitle` (string, optional but strongly recommended)
- `metaDescription` (text, optional but strongly recommended)
- `canonicalUrl` (url, optional for custom canonicals)
- `featuredImage` (image + alt text, required for social cards where available)
- `body` (portable text, required)
- `author` (reference or string, optional based on editorial needs)
- `categories`/`tags` (array, optional)
- `excerpt` (text, optional for blog cards and metadata fallbacks)

### Migration Rules

- Slug parity: import each post with the exact current slug from live URL, no auto-regeneration.
- Publish date parity: import original `publishedAt` exactly as currently live.
- Updated date: set `updatedAt` only when there is true editorial update history.
- Metadata parity: preserve existing meta title/description and custom canonical if any.
- Internal link parity: normalize internal links to the same target slugs/paths in the new site.
- Featured image parity: migrate original assets and keep alt text where available.

### What Must Be Exported or Collected Before Launch

- Full blog post body content for all confirmed slugs.
- Original publish dates for all posts.
- Existing SEO metadata (title, description, canonical overrides, OG image data).
- Featured images and asset URLs/files.
- Author data and taxonomy (if currently shown publicly).
- Existing internal links from within blog content.

## 4) Next.js App Router Architecture

### Route/File Structure

- `app/layout.tsx` (global layout, base metadata, shared header/footer)
- `app/page.tsx` (`/`)
- `app/pricing/page.tsx`
- `app/ai-checker/page.tsx`
- `app/aeo-agency/page.tsx`
- `app/uk-aeo-solutions/page.tsx`
- `app/ai-visibility-audit/page.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`
- `app/terms-of-service/page.tsx`
- `app/privacy-policy/page.tsx`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- `app/api/contact/route.ts` (lightweight server-side form handling)

### Shared Building Blocks

- `components/layout/site-header.tsx`
- `components/layout/site-footer.tsx`
- `components/seo/seo.ts` (metadata helper utilities)
- `components/blog/post-card.tsx`
- `components/blog/post-content.tsx`
- `lib/site-config.ts` (site URL, brand defaults, social defaults)
- `lib/routes.ts` (single source of truth for route constants)
- `lib/sanity/client.ts` (Sanity client)
- `lib/sanity/queries.ts` (blog list/detail queries)
- `lib/sanity/mappers.ts` (mapping Sanity docs to page models)

### Sanity Integration Points

- Blog index fetches published posts from Sanity.
- Blog detail fetches by exact slug from Sanity.
- `generateStaticParams` for blog slugs.
- `generateMetadata` for per-post SEO using Sanity metadata fields.
- SSG/ISR strategy based on editorial update frequency.

## 5) Implementation Order

1. Project setup and baseline configuration.
2. Shared layout and reusable UI components.
3. Non-blog marketing pages (`/`, `/pricing`, `/ai-checker`, `/aeo-agency`, `/uk-aeo-solutions`, `/ai-visibility-audit`, `/about`, `/contact` UI shell).
4. Legal pages (`/terms-of-service`, `/privacy-policy`) with final copy placeholders.
5. Sanity setup (project, dataset, schema, client, env vars).
6. Blog schema finalization and content migration/import.
7. Blog rendering (`/blog` and `/blog/[slug]`) with slug parity checks.
8. Contact form backend (`app/api/contact/route.ts`) and lightweight provider integration.
9. Metadata system rollout (global + per-page + per-post).
10. Sitemap and robots generation from route/content sources.
11. QA (route parity, metadata parity, form flow, responsive checks, build checks).
12. Vercel deployment (preview then production).
13. DNS cutover to the rebuilt app on same domain.

## 6) SEO Parity Checklist

Primary rule:
- Every current sitemap URL must remain live on the exact same path after launch.

Checks:
- Title and description present for every route.
- Canonical tags are correct and absolute.
- OG/Twitter metadata present for marketing pages and blog posts.
- `sitemap.xml` includes all confirmed live routes and blog posts.
- `robots.txt` allows intended crawling and references sitemap.
- Internal links point to correct live paths (no placeholder links).
- No accidental `noindex` in production metadata or headers.
- Blog publish dates preserved exactly.
- Blog slugs match confirmed live paths exactly.

## 7) Open Questions / Missing Inputs

- Full export/source for all blog post content (body, metadata, dates, images).
- Ground-truth SEO metadata from current live site where local code is missing.
- Final legal copy for `/terms-of-service` and `/privacy-policy`.
- Final page copy for routes not represented in local `tilio` reference.
- Brand assets (logos, OG defaults, favicon set, social images).
- Contact form destination details (recipient emails/service provider).
- Any truly required alternate legacy URLs that need redirects.

## 8) Current Phase Status

- Scaffold/foundation phase is complete for confirmed marketing, legal, and blog route structure.
- Shared shell is implemented with confirmed-route navigation and footer links.
- Non-blog pages now use route-by-route migration checklists instead of generic placeholders.
- Blog remains in scaffold mode only (index + dynamic slug shell), pending content migration inputs.
- Sanity remains in planning/foundation mode only; live content wiring is intentionally not started.

## 9) Next Implementation Phase (Gated)

Phase objective:
- Complete non-blog content migration first, then legal content integration, then contact form wiring.
- Keep Sanity work limited to schema/data readiness until blog content export is confirmed.

Planned order:
1. Migrate non-blog page copy and structure from live/source materials into scaffolded routes.
2. Add legal copy to `/terms-of-service` and `/privacy-policy`.
3. Implement lightweight production contact flow (`/contact`) for Vercel.
4. Finalize Sanity schema and import plan with real source exports.
5. Wire blog index/detail to Sanity only after required inputs are provided.

## 10) Missing Inputs Required From You

### Non-Blog Marketing Copy

- Final copy and section structure for:
  - `/`
  - `/pricing`
  - `/ai-checker`
  - `/aeo-agency`
  - `/uk-aeo-solutions`
  - `/ai-visibility-audit`
  - `/about` (local source exists but appears generic/outdated)
- CTA destinations and button labels for each page.
- Per-page SEO metadata (title, description, canonical if custom).

### Legal Copy

- Final legal text for:
  - `/terms-of-service`
  - `/privacy-policy`
- Effective dates and any jurisdiction-specific clauses.
- Legal page metadata requirements if different from defaults.

### Contact Shell to Production Form

- Contact destination (email inbox/provider).
- Required fields and validation rules (minimal flow).
- Any required consent text/compliance wording.

### Blog Migration Readiness (Before Sanity Wiring)

- Full blog export for all confirmed slugs:
  - body content
  - exact slug
  - original publishedAt
  - updatedAt (if applicable)
  - meta title/description
  - canonical override (if any)
  - featured image + alt text
  - internal links
  - author/category/tag (if used)
- Asset package or canonical media URLs for featured images.

