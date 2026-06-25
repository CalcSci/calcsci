import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compound Interest Calculator - Calculate Investment Growth | CalcSci",
  description:
    "Free Compound Interest Calculator by CalcSci. Calculate investment growth, total interest earned and maturity value instantly.",
  alternates: {
    canonical: "/finance/compound-interest-calculator",
  },
  openGraph: {
    title: "Compound Interest Calculator - Calculate Investment Growth | CalcSci",
    description:
      "Free Compound Interest Calculator by CalcSci. Calculate investment growth, total interest earned and maturity value instantly.",
    url: "https://www.calcsci.com/finance/compound-interest-calculator",
    siteName: "CalcSci",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Compound Interest Calculator | CalcSci",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compound Interest Calculator - Calculate Investment Growth | CalcSci",
    description:
      "Free Compound Interest Calculator by CalcSci. Calculate investment growth, total interest earned and maturity value instantly.",
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
