import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "CAGR Calculator - Compound Annual Growth Rate Calculator | CalcSci",
  description:
    "Free CAGR Calculator by CalcSci. Calculate Compound Annual Growth Rate (CAGR) instantly for investments and business growth.",
  alternates: {
    canonical: "/finance/cagr-calculator",
  },
  openGraph: {
    title:
      "CAGR Calculator - Compound Annual Growth Rate Calculator | CalcSci",
    description:
      "Calculate CAGR instantly using beginning value, ending value and investment period.",
    url: "https://www.calcsci.com/finance/cagr-calculator",
    siteName: "CalcSci",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CAGR Calculator | CalcSci",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "CAGR Calculator - Compound Annual Growth Rate Calculator | CalcSci",
    description:
      "Calculate CAGR instantly using beginning value, ending value and investment period.",
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
