import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Date Difference Calculator - Calculate Days Between Dates | CalcSci",
  description:
    "Free online Date Difference Calculator. Calculate the number of days, months and years between two dates instantly.",
  alternates: {
    canonical: "/utility/date-difference-calculator",
  },
  openGraph: {
    title:
      "Date Difference Calculator - Calculate Days Between Dates | CalcSci",
    description:
      "Free online Date Difference Calculator. Calculate the number of days, months and years between two dates instantly.",
    url:
      "https://www.calcsci.com/utility/date-difference-calculator",
    siteName: "CalcSci",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Date Difference Calculator | CalcSci",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Date Difference Calculator - Calculate Days Between Dates | CalcSci",
    description:
      "Free online Date Difference Calculator. Calculate the number of days, months and years between two dates instantly.",
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
