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
    defineField({ name: "metaTitle", type: "string", title: "Meta title" }),
    defineField({ name: "metaDescription", type: "text", title: "Meta description", rows: 4 }),
    defineField({ name: "canonicalUrl", type: "url", title: "Canonical URL (optional)" }),
    defineField({
      name: "featuredImage",
      type: "image",
      title: "Featured image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt text",
        }),
      ],
    }),
    defineField({ name: "excerpt", type: "text", rows: 4 }),
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
    },
    prepare({ title, publishedAt }) {
      return {
        title: title ?? "Untitled",
        subtitle: publishedAt ? new Date(publishedAt as string).toLocaleDateString("en-GB") : "",
      };
    },
  },
});
