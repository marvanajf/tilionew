import { defineField, defineType } from "sanity";

export default defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Full name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      type: "string",
      title: "Role / title",
      description: "e.g. Founder & CEO, Head of Content",
    }),
    defineField({
      name: "headshot",
      type: "image",
      title: "Headshot",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt text",
        }),
      ],
    }),
    defineField({
      name: "bio",
      type: "text",
      title: "Short bio",
      rows: 4,
      description: "A brief description shown alongside posts.",
      validation: (Rule) => Rule.max(500).warning("Keep the bio under 500 characters."),
    }),
    defineField({
      name: "linkedin",
      type: "url",
      title: "LinkedIn URL",
    }),
    defineField({
      name: "twitter",
      type: "url",
      title: "X / Twitter URL",
    }),
    defineField({
      name: "website",
      type: "url",
      title: "Personal website",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "headshot",
    },
  },
});
