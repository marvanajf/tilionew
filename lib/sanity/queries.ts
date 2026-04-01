/** GROQ fragments — `post` document type in Sanity Studio must match these field names. */

const authorProjection = `author->{
  name,
  "slug": slug.current,
  role,
  "headshotUrl": headshot.asset->url,
  "headshotAlt": headshot.alt,
  bio,
  linkedin,
  twitter,
  website
}`;

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
  },
  ${authorProjection}
`;

const postBodyFields = `
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  updatedAt,
  excerpt,
  metaTitle,
  metaDescription,
  canonicalUrl,
  featuredImage{
    alt,
    "url": asset->url
  },
  ${authorProjection},
  body
`;

export const postListQuery = `*[_type == "post" && !(_id in path("drafts.**")) && defined(slug.current)] | order(publishedAt desc) {
  ${postCardFields}
}`;

export const postBySlugQuery = `*[_type == "post" && !(_id in path("drafts.**")) && slug.current == $slug][0] {
  ${postBodyFields}
}`;

export const postSlugsQuery = `*[_type == "post" && !(_id in path("drafts.**")) && defined(slug.current)].slug.current`;
