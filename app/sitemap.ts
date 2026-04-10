import type { MetadataRoute } from "next";

// TODO: update host to production URL before launch
const host = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: host,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
