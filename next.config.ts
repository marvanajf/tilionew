import type { NextConfig } from "next";

import { legacyPathRedirects } from "./lib/seo-legacy-redirects";
import { siteConfig } from "./lib/site-config";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "/s2/favicons/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    const canonical = new URL(siteConfig.siteUrl);
    const favicon = [
      {
        source: "/favicon.ico",
        destination: "/icon.png",
        permanent: true,
      },
    ] as const;

    const apexToWww =
      canonical.hostname.startsWith("www.") ?
        {
          source: "/:path*",
          has: [{ type: "host" as const, value: canonical.hostname.slice("www.".length) }],
          destination: `${canonical.origin}/:path*`,
          permanent: true,
        }
      : null;

    return [
      ...legacyPathRedirects,
      ...favicon,
      ...(apexToWww ? [apexToWww] : []),
    ];
  },
};

export default nextConfig;
