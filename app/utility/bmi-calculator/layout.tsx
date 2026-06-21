import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BMI Calculator - Body Mass Index Calculator | CalcSci",
  description:
    "Free BMI Calculator by CalcSci. Calculate your Body Mass Index instantly and know whether you are underweight, normal, overweight or obese.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}