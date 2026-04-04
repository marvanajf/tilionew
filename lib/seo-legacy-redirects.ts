/**
 * 301s for legacy product/platform URLs so crawlers and bookmarks converge on the current site.
 * Only applies when traffic hits this Next deployment; apex must still point here (see Vercel domains).
 */
export const legacyPathRedirects = [
  { source: "/white-label", destination: "/", permanent: true },
  { source: "/product", destination: "/pricing", permanent: true },
  { source: "/platformpricing", destination: "/pricing", permanent: true },
  { source: "/platform-pricing", destination: "/pricing", permanent: true },
  { source: "/content", destination: "/learn", permanent: true },
  { source: "/aeo-content", destination: "/learn", permanent: true },
  { source: "/docs/:path*", destination: "/learn", permanent: true },
  { source: "/uk/aeo-agency/:path*", destination: "/aeo-agency", permanent: true },
  { source: "/uk/aeo-services/:path*", destination: "/uk-aeo-solutions", permanent: true },
] as const;
