import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://circlegroup.co.ke";

  const staticRoutes = [
    "",
    "/about",
    "/team",
    "/programs",
    "/partners",
    "/research",
    "/stories",
    "/get-involved",
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
      "mentorship",
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