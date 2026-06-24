import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "SIP Calculator - Calculate Mutual Fund SIP Returns | CalcSci",
  description:
    "Free SIP Calculator by CalcSci. Calculate your monthly SIP investment returns, wealth gained and maturity amount instantly.",
  alternates: {
    canonical: "/finance/sip-calculator",
  },
  openGraph: {
    title:
      "SIP Calculator - Calculate Mutual Fund SIP Returns | CalcSci",
    description:
      "Free SIP Calculator by CalcSci. Calculate your monthly SIP investment returns, wealth gained and maturity amount instantly.",
    url: "https://www.calcsci.com/finance/sip-calculator",
    siteName: "CalcSci",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SIP Calculator | CalcSci",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SIP Calculator - Calculate Mutual Fund SIP Returns | CalcSci",
    description:
      "Free SIP Calculator by CalcSci. Calculate your monthly SIP investment returns, wealth gained and maturity amount instantly.",
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
