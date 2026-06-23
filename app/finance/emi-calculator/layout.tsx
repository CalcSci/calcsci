import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EMI Calculator - Calculate Loan EMI Online | CalcSci",

  description:
    "Free EMI Calculator by CalcSci. Calculate your monthly loan EMI, total interest payable and total payment amount instantly for home, car and personal loans.",

  alternates: {
    canonical: "/finance/emi-calculator",
  },

  openGraph: {
    title: "EMI Calculator - Calculate Loan EMI Online | CalcSci",

    description:
      "Free EMI Calculator by CalcSci. Calculate your monthly loan EMI, total interest payable and total payment amount instantly.",

    url: "https://www.calcsci.com/finance/emi-calculator",

    siteName: "CalcSci",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EMI Calculator | CalcSci",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "EMI Calculator - Calculate Loan EMI Online | CalcSci",

    description:
      "Free EMI Calculator by CalcSci. Calculate your monthly loan EMI instantly.",

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