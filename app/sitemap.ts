import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.calcsci.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.calcsci.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.calcsci.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://www.calcsci.com/privacy-policy",
      lastModified: new Date(),
    },
    {
      url: "https://www.calcsci.com/disclaimer",
      lastModified: new Date(),
    },
    {
      url: "https://www.calcsci.com/terms-and-conditions",
      lastModified: new Date(),
    },
    {
      url: "https://www.calcsci.com/utility/age-calculator",
      lastModified: new Date(),
    },
    {
      url: "https://www.calcsci.com/utility/bmi-calculator",
      lastModified: new Date(),
    },
    {
      url: "https://www.calcsci.com/finance/emi-calculator",
      lastModified: new Date(),
    },
    {
      url: "https://www.calcsci.com/finance/gst-calculator",
      lastModified: new Date(),
    },
  ];
}