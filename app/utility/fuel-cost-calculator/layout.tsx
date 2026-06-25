import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Fuel Cost Calculator - Calculate Trip Fuel Cost | CalcSci",
  description:
    "Free Fuel Cost Calculator by CalcSci. Calculate petrol or diesel trip cost instantly based on distance, mileage and fuel price.",
  alternates: {
    canonical: "/utility/fuel-cost-calculator",
  },
  openGraph: {
    title:
      "Fuel Cost Calculator - Calculate Trip Fuel Cost | CalcSci",
    description: "Calculate petrol and diesel trip expenses instantly.",
    url: "https://www.calcsci.com/utility/fuel-cost-calculator",
    siteName: "CalcSci",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fuel Cost Calculator | CalcSci",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Fuel Cost Calculator - Calculate Trip Fuel Cost | CalcSci",
    description: "Calculate petrol and diesel trip expenses instantly.",
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
