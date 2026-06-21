import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GST Calculator India - Add or Remove GST | CalcSci",
  description:
    "Free GST Calculator by CalcSci. Calculate 5%, 12%, 18% and 28% GST instantly. Add GST or remove GST from any amount.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}