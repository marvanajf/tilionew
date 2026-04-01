import { defineField, defineType } from "sanity";

/** Matches `lib/sanity/queries.ts` and the Next.js blog routes. */
export default defineType({
  name: "post",
  title: "Blog post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "updatedAt", type: "datetime" }),
    defineField({
      name: "metaTitle",
      type: "string",
      title: "Meta title",
      description: "Overrides the page title in search results. Leave blank to use the post title.",
    }),
    defineField({
      name: "metaDescription",
      type: "text",
      title: "Meta description",
      rows: 3,
      description: "Search engine snippet — aim for 140–160 characters.",
      validation: (Rule) =>
        Rule.required()
          .min(50)
          .max(160)
          .warning("Meta description should be between 50 and 160 characters."),
    }),
    defineField({ name: "canonicalUrl", type: "url", title: "Canonical URL (optional override)" }),
    defineField({
      name: "featuredImage",
      type: "image",
      title: "Featured image",
      description: "Used as the Open Graph / social share image. Recommended 1200×630 px.",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt text",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "excerpt",
      type: "text",
      rows: 3,
      description: "Short summary shown on the blog index and used as the fallback meta description.",
      validation: (Rule) =>
        Rule.required()
          .min(50)
          .max(300)
          .warning("Excerpt should be between 50 and 300 characters."),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      description: "The person who wrote this post. Leave blank to fall back to Tilio as author.",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alternative text",
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      authorName: "author.name",
    },
    prepare({ title, publishedAt, authorName }) {
      const date = publishedAt ? new Date(publishedAt as string).toLocaleDateString("en-GB") : "";
      const byline = [date, authorName].filter(Boolean).join(" · ");
      return {
        title: title ?? "Untitled",
        subtitle: byline,
      };
    },
  },
});
