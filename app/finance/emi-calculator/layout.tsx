import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EMI Calculator - Loan EMI Calculator India | CalcSci",
  description:
    "Free EMI Calculator by CalcSci. Calculate monthly EMI, total interest and total payment for home loans, personal loans and car loans.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}