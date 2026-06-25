import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discount Calculator - Calculate Sale Price Online | CalcSci",
  description:
    "Free Discount Calculator by CalcSci. Calculate discount amount, sale price and savings instantly.",
  alternates: {
    canonical: "/finance/discount-calculator",
  },
  openGraph: {
    title: "Discount Calculator - Calculate Sale Price Online | CalcSci",
    description: "Calculate discount amount, final sale price and savings instantly.",
    url: "https://www.calcsci.com/finance/discount-calculator",
    siteName: "CalcSci",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Discount Calculator | CalcSci",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Discount Calculator - Calculate Sale Price Online | CalcSci",
    description: "Calculate discount amount, final sale price and savings instantly.",
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
