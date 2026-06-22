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