# Design Guidance

This file defines non-negotiable UI design standards for this codebase.

## Section Design Baseline

- New or updated sections must follow the same design quality and visual principles used on the home page (`/`).
- Use the home page as the reference for:
  - spacing rhythm
  - typography hierarchy
  - framing lines and container alignment
  - card treatment and visual balance
  - CTA styling and emphasis
- Typography across all pages must match home page principles:
  - heading scale and weight should be consistent with home-page sections
  - body copy should use home-page reading styles (`text-sm`/`md:text-base`, balanced line height, neutral body color)
  - do not introduce ad-hoc page-specific font scales that make one page feel visually different from the rest
- CTA rule for all future pages:
  - each section should include one clear primary CTA
  - avoid multiple competing CTAs inside the same section unless explicitly requested
  - CTA copy should be specific and action-oriented

## Prohibited Pattern

- Do not add small all-caps/uppercase pre-title labels above section titles.
- Section headings should use direct, clear title text without eyebrow/kicker labels.
- Every section must have a clear heading. Do not ship sections that are only body text in a container.

## Quality Standard

- If a new section looks materially lower quality than home page sections, it should be redesigned before completion.
- Prioritize clarity, readability, and brand consistency over adding decorative elements.
- Do not introduce random decorative UI elements (for example: random blue dots, arbitrary accent markers, or ad-hoc visual effects).
- Do not add random outlines/borders around text containers unless they are clearly needed for structure and readability.
- Avoid random gray section backgrounds; default to clean white sections unless a deliberate, approved exception is required.
- For bulleted content sections, follow the same pattern used in the `What you get` section on `/aeo-agency`:
  - semantic HTML list (`<ul><li>`)
  - native bullet markers (no custom decorative bullets)
  - clean spacing and home-consistent body typography
  - no unnecessary bordered containers around the list unless explicitly needed
- For numbered multi-step sections, follow the pattern used in **A complete AEO system, not isolated fixes** on `/aeo-agency`:
  - use an ordered list (`<ol>`) with semantic steps
  - large tabular step numbers (`01`, `02`, …) plus title and body—no boxed card grid around each step
  - separate steps with light horizontal dividers or spacing only; avoid heavy outlines around each step
- For simple feature/fit/audience sections (for example "who this service is for"), follow the pattern used in **What this service is for** on `/aeo-agency`:
  - semantic unordered list (`<ul><li>`)
  - plain text rows with light dividers
  - no boxed mini-cards for each item
  - prioritize readable spacing and hierarchy over decoration
- For long-form explanatory sections, prefer the two-column sticky split pattern used on `/aeo-agency`:
  - left column: concise section context (small label, title, intro)
  - right column: detailed content that scrolls
  - keep typography restrained and avoid decorative boxes

## Framing Lines

- Keep section framing consistent with home page principles.
- Horizontal section lines must visually connect with the vertical framing lines.
- Do not use full-width borders when the vertical framing lines are inset in a container frame.

## Scope

- These rules apply to `/aeo-agency` and all future pages by default.
