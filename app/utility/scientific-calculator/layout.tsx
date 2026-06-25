import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Scientific Calculator - Advanced Online Calculator | CalcSci",
  description:
    "Free Scientific Calculator by CalcSci. Perform advanced mathematical calculations including trigonometry, powers, roots and logarithms.",
  alternates: {
    canonical: "/utility/scientific-calculator",
  },
  openGraph: {
    title:
      "Scientific Calculator - Advanced Online Calculator | CalcSci",
    description: "Perform advanced mathematical calculations instantly.",
    url: "https://www.calcsci.com/utility/scientific-calculator",
    siteName: "CalcSci",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Scientific Calculator | CalcSci",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Scientific Calculator - Advanced Online Calculator | CalcSci",
    description: "Perform advanced mathematical calculations instantly.",
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
