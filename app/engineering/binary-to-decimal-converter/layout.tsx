import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Binary to Decimal Converter - Convert Binary Numbers | CalcSci",
  description:
    "Free Binary to Decimal Converter by CalcSci. Convert binary numbers into decimal values instantly.",
  alternates: {
    canonical: "/engineering/binary-to-decimal-converter",
  },
  openGraph: {
    title: "Binary to Decimal Converter - Convert Binary Numbers | CalcSci",
    description: "Convert binary numbers into decimal values instantly.",
    url: "https://www.calcsci.com/engineering/binary-to-decimal-converter",
    siteName: "CalcSci",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Binary to Decimal Converter | CalcSci",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Binary to Decimal Converter - Convert Binary Numbers | CalcSci",
    description: "Convert binary numbers into decimal values instantly.",
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
