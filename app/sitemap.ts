import type { MetadataRoute } from "next";

import { mkffDirectors } from "@/lib/mkff-about";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://mkff.org",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://mkff.org/about",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://mkff.org/about/history",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://mkff.org/about/why",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://mkff.org/about/directors",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...mkffDirectors.map((director) => ({
      url: `https://mkff.org${director.href}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
