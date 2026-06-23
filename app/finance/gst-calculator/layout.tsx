import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GST Calculator - Calculate GST Online | CalcSci",

  description:
    "Free GST Calculator by CalcSci. Calculate GST amount, GST inclusive price and GST exclusive price instantly for 5%, 12%, 18% and 28% GST rates.",

  alternates: {
    canonical: "/finance/gst-calculator",
  },

  openGraph: {
    title: "GST Calculator - Calculate GST Online | CalcSci",

    description:
      "Free GST Calculator by CalcSci. Calculate GST amount, GST inclusive price and GST exclusive price instantly.",

    url: "https://www.calcsci.com/finance/gst-calculator",

    siteName: "CalcSci",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GST Calculator | CalcSci",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "GST Calculator - Calculate GST Online | CalcSci",

    description:
      "Free GST Calculator by CalcSci. Calculate GST amount instantly.",

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