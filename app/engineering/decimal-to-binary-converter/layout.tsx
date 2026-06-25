import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Decimal to Binary Converter - Convert Decimal Numbers | CalcSci",
  description:
    "Free Decimal to Binary Converter by CalcSci. Convert decimal numbers into binary values instantly.",
  alternates: {
    canonical: "/engineering/decimal-to-binary-converter",
  },
  openGraph: {
    title:
      "Decimal to Binary Converter - Convert Decimal Numbers | CalcSci",
    description: "Convert decimal numbers into binary values instantly.",
    url: "https://www.calcsci.com/engineering/decimal-to-binary-converter",
    siteName: "CalcSci",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Decimal to Binary Converter | CalcSci",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Decimal to Binary Converter - Convert Decimal Numbers | CalcSci",
    description: "Convert decimal numbers into binary values instantly.",
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
