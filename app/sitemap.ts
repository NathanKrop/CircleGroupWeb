import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.circlegroupke.org";

  const staticRoutes = [
    "",
    "/about",
    "/team",
    "/programs",
    "/partners",
    "/research",
    "/stories",
    "/work-with-us",
    "/contact",
    "/policies",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    // Program detail pages
    ...[
      "life-skills-training",
      "career-readiness",
      "entrepreneurship",
      "safeguarding",
      "school-institutional-training",
    ].map((slug) => ({
      url: `${baseUrl}/programs/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
