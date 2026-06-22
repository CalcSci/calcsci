
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BMI Calculator - Body Mass Index Calculator | CalcSci",

  description:
    "Free BMI Calculator by CalcSci. Calculate your Body Mass Index instantly and know whether you are underweight, normal, overweight or obese.",

  alternates: {
    canonical: "/utility/bmi-calculator",
  },

  openGraph: {
    title: "BMI Calculator - Body Mass Index Calculator | CalcSci",

    description:
      "Free BMI Calculator by CalcSci. Calculate your Body Mass Index instantly and know whether you are underweight, normal, overweight or obese.",

    url: "https://www.calcsci.com/utility/bmi-calculator",

    siteName: "CalcSci",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BMI Calculator | CalcSci",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "BMI Calculator - Body Mass Index Calculator | CalcSci",

    description:
      "Free BMI Calculator by CalcSci. Calculate your Body Mass Index instantly and know whether you are underweight, normal, overweight or obese.",

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
