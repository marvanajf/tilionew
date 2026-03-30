import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { SanityImageSource } from "@sanity/image-url";

import { sanityImageUrl } from "@/lib/sanity/image-builder";

type PortableTextValue = {
  _type?: string;
  asset?: { _ref?: string; _type?: string };
  alt?: string;
  href?: string;
};

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mt-4 text-sm leading-relaxed text-zinc-700 first:mt-0 md:text-base">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 text-lg font-semibold tracking-tight text-zinc-900">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-6 text-base font-semibold text-zinc-900">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-2 border-zinc-300 pl-4 text-sm italic text-zinc-600 md:text-base">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700 marker:text-zinc-500 md:text-base">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-zinc-700 marker:text-zinc-500 md:text-base">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-1">{children}</li>,
    number: ({ children }) => <li className="pl-1">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-zinc-900">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const href = (value as PortableTextValue)?.href ?? "#";
      const external = /^https?:\/\//i.test(href);
      if (external) {
        return (
          <a
            href={href}
            className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700">
          {children}
        </Link>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const v = value as PortableTextValue;
      const url = v?.asset ? sanityImageUrl(v as SanityImageSource) : undefined;
      if (!url) {
        return null;
      }
      return (
        <figure className="my-8">
          <Image
            src={url}
            alt={v.alt ?? ""}
            width={1200}
            height={675}
            className="h-auto w-full rounded-xl border border-zinc-200"
          />
        </figure>
      );
    },
  },
};

export function PostPortableText({ value }: { value: unknown }) {
  if (!value || !Array.isArray(value)) {
    return null;
  }

  return (
    <div className="max-w-3xl">
      <PortableText value={value} components={components} />
    </div>
  );
}
