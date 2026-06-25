import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unit Converter - Length, Weight & Temperature | CalcSci",
  description:
    "Free Unit Converter by CalcSci. Convert length, weight and temperature units instantly.",
  alternates: {
    canonical: "/utility/unit-converter",
  },
  openGraph: {
    title: "Unit Converter - Length, Weight & Temperature | CalcSci",
    description: "Convert length, weight and temperature units instantly.",
    url: "https://www.calcsci.com/utility/unit-converter",
    siteName: "CalcSci",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Unit Converter | CalcSci",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unit Converter - Length, Weight & Temperature | CalcSci",
    description: "Convert length, weight and temperature units instantly.",
    images: ["/og-image.png"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
