import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CalcSci - Free Online Calculators & Scientific Tools",

    short_name: "CalcSci",

    description:
      "Free online calculators for finance, health, education, engineering and science.",

    start_url: "/",

    display: "standalone",

    background_color: "#ffffff",

    theme_color: "#2563eb",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}