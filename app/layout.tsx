import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import GoogleAnalytics from "./components/GoogleAnalytics";
import MicrosoftClarity from "./components/MicrosoftClarity";

export const metadata: Metadata = {
  title: "CalcSci - Free Online Calculators & Scientific Tools",
  description:
    "Free online calculators for finance, health, education, engineering and science.",

  metadataBase: new URL("https://www.calcsci.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "CalcSci - Free Online Calculators & Scientific Tools",
    description:
      "Free online calculators for finance, health, education, engineering and science.",
    url: "https://www.calcsci.com",
    siteName: "CalcSci",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CalcSci - Free Online Calculators & Scientific Tools",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <GoogleAnalytics />
        <MicrosoftClarity />

        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}