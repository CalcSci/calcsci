import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Age Calculator - Calculate Your Exact Age Online | CalcSci",

  description:
    "Free online Age Calculator to calculate your exact age in years, months and days. Find your age instantly and know how many days remain until your next birthday.",

  alternates: {
    canonical: "/utility/age-calculator",
  },

  openGraph: {
    title:
      "Age Calculator - Calculate Your Exact Age Online | CalcSci",

    description:
      "Free online Age Calculator to calculate your exact age in years, months and days.",

    url: "https://www.calcsci.com/utility/age-calculator",

    siteName: "CalcSci",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Age Calculator | CalcSci",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Age Calculator - Calculate Your Exact Age Online | CalcSci",

    description:
      "Free online Age Calculator to calculate your exact age in years, months and days.",

    images: ["/og-image.png"],
  },
};

export default function AgeCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}