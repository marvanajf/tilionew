/** GROQ fragments — `post` document type in Sanity Studio must match these field names. */

const postCardFields = `
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  updatedAt,
  excerpt,
  metaTitle,
  metaDescription,
  featuredImage{
    alt,
    "url": asset->url
  }
`;

const postBodyFields = `
  ${postCardFields},
  canonicalUrl,
  body
`;

export const postListQuery = `*[_type == "post" && !(_id in path("drafts.**")) && defined(slug.current)] | order(publishedAt desc) {
  ${postCardFields}
}`;

export const postBySlugQuery = `*[_type == "post" && !(_id in path("drafts.**")) && slug.current == $slug][0] {
  ${postBodyFields}
}`;

export const postSlugsQuery = `*[_type == "post" && !(_id in path("drafts.**")) && defined(slug.current)].slug.current`;
