import { siteConfig } from "@/lib/site-config";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.siteUrl}/#organization`,
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: {
      "@type": "ImageObject",
      url: siteConfig.logoUrl,
      contentUrl: siteConfig.logoUrl,
    },
    description: siteConfig.description,
    foundingLocation: {
      "@type": "Place",
      name: "Exeter, UK",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    sameAs: [siteConfig.linkedIn],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: `${siteConfig.siteUrl}/contact`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

type BlogPostAuthor = {
  name: string;
  linkedin?: string;
};

type ArticleJsonLdProps = {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  updatedAt?: string;
  imageUrl?: string;
  author?: BlogPostAuthor;
};

export function ArticleJsonLd({ title, description, url, publishedAt, updatedAt, imageUrl, author }: ArticleJsonLdProps) {
  const resolvedAuthor = author
    ? {
        "@type": "Person",
        name: author.name,
        ...(author.linkedin ? { sameAs: [author.linkedin] } : {}),
      }
    : {
        "@type": "Organization",
        "@id": `${siteConfig.siteUrl}/#organization`,
        name: siteConfig.name,
        url: siteConfig.siteUrl,
      };

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    datePublished: publishedAt,
    ...(updatedAt ? { dateModified: updatedAt } : {}),
    author: resolvedAuthor,
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.siteUrl}/#organization`,
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.logoUrl,
        contentUrl: siteConfig.logoUrl,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    isPartOf: {
      "@type": "Blog",
      "@id": `${siteConfig.siteUrl}/blog`,
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

type WebPageJsonLdProps = {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
};

export function WebPageJsonLd({ name, description, url, datePublished, dateModified }: WebPageJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    url,
    name,
    description,
    inLanguage: "en-GB",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteConfig.siteUrl}/#website`,
      url: siteConfig.siteUrl,
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.siteUrl}/#organization`,
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqPageJsonLd({ questions }: { questions: FaqItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
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
