import { siteConfig } from "@/lib/site-config";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tilio",
    url: siteConfig.siteUrl,
    logo: "https://res.cloudinary.com/ddsqkll4f/image/upload/v1774819696/AEO_499month_6_oomwrq.png",
    description: siteConfig.description,
    foundingLocation: {
      "@type": "Place",
      name: "Exeter, UK",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    sameAs: ["https://www.linkedin.com/company/trytilio/"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: `${siteConfig.siteUrl}/contact`,
    },
    offers: {
      "@type": "Offer",
      name: "Managed AEO Plan",
      price: "499",
      priceCurrency: "GBP",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "499",
        priceCurrency: "GBP",
        unitText: "MONTH",
      },
      url: `${siteConfig.siteUrl}/pricing`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

type ArticleJsonLdProps = {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  imageUrl?: string;
};

export function ArticleJsonLd({ title, description, slug, publishedAt, updatedAt, imageUrl }: ArticleJsonLdProps) {
  const url = `${siteConfig.siteUrl}/blog/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished: publishedAt,
    ...(updatedAt ? { dateModified: updatedAt } : {}),
    author: {
      "@type": "Organization",
      name: "Tilio",
      url: siteConfig.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Tilio",
      url: siteConfig.siteUrl,
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/ddsqkll4f/image/upload/v1774819696/AEO_499month_6_oomwrq.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    ...(imageUrl ? { image: imageUrl } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function AiCheckerWebAppJsonLd() {
  const url = `${siteConfig.siteUrl}/ai-checker`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "AI Overview Checker",
    alternateName: ["AI Visibility Checker", "AI Search Readiness Tool", "Free AI Overview Checker"],
    description:
      "Free tool to check how your brand appears in AI overviews from Google, ChatGPT, and Perplexity. Analyse visibility signals and get an instant readiness score.",
    url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    provider: {
      "@type": "Organization",
      name: "Tilio",
      url: siteConfig.siteUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

type BreadcrumbItem = {
  name: string;
  url: string;
};

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
