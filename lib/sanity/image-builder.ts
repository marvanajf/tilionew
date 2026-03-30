import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

import { getSanityConfig } from "./client";

export function sanityImageUrl(source: SanityImageSource | undefined): string | undefined {
  const config = getSanityConfig();
  if (!config || !source) {
    return undefined;
  }

  const builder = createImageUrlBuilder({
    projectId: config.projectId,
    dataset: config.dataset,
  });

  try {
    return builder.image(source).width(1600).auto("format").url();
  } catch {
    return undefined;
  }
}
