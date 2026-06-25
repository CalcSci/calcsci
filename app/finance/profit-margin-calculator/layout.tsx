import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Profit Margin Calculator - Calculate Business Profit Margin | CalcSci",
  description:
    "Free Profit Margin Calculator by CalcSci. Calculate profit, profit margin percentage and revenue instantly.",
  alternates: {
    canonical: "/finance/profit-margin-calculator",
  },
  openGraph: {
    title:
      "Profit Margin Calculator - Calculate Business Profit Margin | CalcSci",
    description: "Calculate profit margin percentage quickly and easily.",
    url: "https://www.calcsci.com/finance/profit-margin-calculator",
    siteName: "CalcSci",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Profit Margin Calculator | CalcSci",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Profit Margin Calculator - Calculate Business Profit Margin | CalcSci",
    description: "Calculate profit margin percentage quickly and easily.",
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
