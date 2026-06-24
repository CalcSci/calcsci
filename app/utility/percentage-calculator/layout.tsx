import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Percentage Calculator - Calculate Percentages Online | CalcSci",
  description:
    "Free online Percentage Calculator. Calculate percentages, percentage increase, percentage decrease and percentage difference instantly.",
  alternates: {
    canonical: "/utility/percentage-calculator",
  },
  openGraph: {
    title:
      "Percentage Calculator - Calculate Percentages Online | CalcSci",
    description:
      "Free online Percentage Calculator. Calculate percentages instantly.",
    url:
      "https://www.calcsci.com/utility/percentage-calculator",
    siteName: "CalcSci",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Percentage Calculator | CalcSci",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Percentage Calculator - Calculate Percentages Online | CalcSci",
    description:
      "Free online Percentage Calculator. Calculate percentages instantly.",
    images: ["/og-image.png"],
  },
};

export default function PercentageCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
