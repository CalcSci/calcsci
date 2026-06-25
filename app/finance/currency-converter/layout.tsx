import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Currency Converter - Convert Currencies Online | CalcSci",
  description:
    "Free Currency Converter by CalcSci. Convert between major world currencies instantly.",
  alternates: {
    canonical: "/finance/currency-converter",
  },
  openGraph: {
    title: "Currency Converter - Convert Currencies Online | CalcSci",
    description: "Convert currencies instantly with our free online converter.",
    url: "https://www.calcsci.com/finance/currency-converter",
    siteName: "CalcSci",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Currency Converter | CalcSci",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Currency Converter - Convert Currencies Online | CalcSci",
    description: "Convert currencies instantly with our free online converter.",
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
