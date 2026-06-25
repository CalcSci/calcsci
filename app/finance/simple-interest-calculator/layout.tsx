import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple Interest Calculator - Calculate Interest Online | CalcSci",
  description:
    "Free Simple Interest Calculator by CalcSci. Calculate simple interest, total interest earned and final amount instantly.",
  alternates: {
    canonical: "/finance/simple-interest-calculator",
  },
  openGraph: {
    title: "Simple Interest Calculator - Calculate Interest Online | CalcSci",
    description:
      "Free Simple Interest Calculator by CalcSci. Calculate simple interest, total interest earned and final amount instantly.",
    url: "https://www.calcsci.com/finance/simple-interest-calculator",
    siteName: "CalcSci",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Simple Interest Calculator | CalcSci",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simple Interest Calculator - Calculate Interest Online | CalcSci",
    description:
      "Free Simple Interest Calculator by CalcSci. Calculate simple interest, total interest earned and final amount instantly.",
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
