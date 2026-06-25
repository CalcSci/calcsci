import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ohm's Law Calculator - Voltage, Current & Resistance | CalcSci",
  description:
    "Free Ohm's Law Calculator by CalcSci. Calculate voltage, current or resistance instantly using Ohm's Law.",
  alternates: {
    canonical: "/engineering/ohms-law-calculator",
  },
  openGraph: {
    title: "Ohm's Law Calculator - Voltage, Current & Resistance | CalcSci",
    description:
      "Calculate voltage, current or resistance instantly using Ohm's Law.",
    url: "https://www.calcsci.com/engineering/ohms-law-calculator",
    siteName: "CalcSci",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ohm's Law Calculator | CalcSci",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ohm's Law Calculator - Voltage, Current & Resistance | CalcSci",
    description: "Calculate voltage, current or resistance instantly using Ohm's Law.",
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
