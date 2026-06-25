import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FD Calculator - Fixed Deposit Maturity Calculator | CalcSci",
  description:
    "Free FD Calculator by CalcSci. Calculate Fixed Deposit maturity amount, interest earned and total returns instantly.",
  alternates: {
    canonical: "/finance/fd-calculator",
  },
  openGraph: {
    title: "FD Calculator - Fixed Deposit Maturity Calculator | CalcSci",
    description:
      "Free FD Calculator by CalcSci. Calculate Fixed Deposit maturity amount, interest earned and total returns instantly.",
    url: "https://www.calcsci.com/finance/fd-calculator",
    siteName: "CalcSci",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FD Calculator | CalcSci",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FD Calculator - Fixed Deposit Maturity Calculator | CalcSci",
    description:
      "Free FD Calculator by CalcSci. Calculate Fixed Deposit maturity amount, interest earned and total returns instantly.",
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
