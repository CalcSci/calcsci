import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Age Calculator - Calculate Exact Age | CalcSci",
  description:
    "Free online Age Calculator by CalcSci. Calculate your exact age in years, months and days and see the countdown to your next birthday.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}