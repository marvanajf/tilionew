import type { NextConfig } from "next";

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
    const out = [
      {
        source: "/favicon.ico",
        destination: "/icon.png",
        permanent: true,
      },
    ] as const;

    if (!canonical.hostname.startsWith("www.")) {
      return [...out];
    }

    const apexHost = canonical.hostname.slice("www.".length);
    return [
      ...out,
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: apexHost }],
        destination: `${canonical.origin}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
