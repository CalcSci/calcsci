import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan Eligibility Calculator - Check Loan Eligibility | CalcSci",
  description:
    "Free Loan Eligibility Calculator by CalcSci. Estimate how much loan you may be eligible for based on income, existing EMIs and loan tenure.",
  alternates: {
    canonical: "/finance/loan-eligibility-calculator",
  },
  openGraph: {
    title: "Loan Eligibility Calculator - Check Loan Eligibility | CalcSci",
    description: "Free Loan Eligibility Calculator by CalcSci. Estimate your loan eligibility instantly.",
    url: "https://www.calcsci.com/finance/loan-eligibility-calculator",
    siteName: "CalcSci",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Loan Eligibility Calculator | CalcSci",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Eligibility Calculator - Check Loan Eligibility | CalcSci",
    description: "Estimate your loan eligibility instantly.",
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
