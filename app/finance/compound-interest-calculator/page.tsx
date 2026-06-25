"use client";

import { useState } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function CompoundInterestCalculatorPage() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [interest, setInterest] = useState("");
  const [maturity, setMaturity] = useState("");

  const calculateCompoundInterest = () => {
    const P = Number(principal);
    const R = Number(rate);
    const T = Number(years);
    if (!P || !R || !T) return;

    const maturityAmount = P * Math.pow(1 + R / 100, T);
    const interestEarned = maturityAmount - P;

    setInterest(interestEarned.toFixed(0));
    setMaturity(maturityAmount.toFixed(0));
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://www.calcsci.com",
          },
          {
            name: "Finance",
            url: "https://www.calcsci.com/finance",
          },
          {
            name: "Compound Interest Calculator",
            url: "https://www.calcsci.com/finance/compound-interest-calculator",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Compound Interest Calculator",
            url: "https://www.calcsci.com/finance/compound-interest-calculator",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            description:
              "Calculate compound interest, total interest earned and maturity value instantly.",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is compound interest?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Compound interest is interest earned on both the original principal and previously earned interest.",
                },
              },
              {
                "@type": "Question",
                name: "How is compound interest calculated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Compound interest is calculated using the principal amount, interest rate and investment duration.",
                },
              },
              {
                "@type": "Question",
                name: "Why is compound interest powerful?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Compound interest accelerates investment growth because interest is earned on accumulated interest over time.",
                },
              },
              {
                "@type": "Question",
                name: "Is this Compound Interest Calculator free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. The CalcSci Compound Interest Calculator is completely free.",
                },
              },
            ],
          }),
        }}
      />
      <main className="bg-gray-50 min-h-screen">
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 px-4">
          Compound Interest Calculator
        </h1>
        <p className="text-base md:text-xl px-4">
          Calculate Investment Growth Instantly
        </p>
      </section>
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Enter Investment Details
          </h2>
          <div className="space-y-6">
            <input
              type="number"
              placeholder="Principal Amount (₹)"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-base md:text-lg"
            />
            <input
              type="number"
              placeholder="Annual Interest Rate (%)"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-base md:text-lg"
            />
            <input
              type="number"
              placeholder="Investment Period (Years)"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-base md:text-lg"
            />
            <button
              onClick={calculateCompoundInterest}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700"
            >
              Calculate
            </button>
          </div>
          {maturity && (
            <div className="mt-8 bg-green-50 border border-green-300 rounded-xl p-4 md:p-6">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Result
              </h3>
              <p className="mb-2">
                Interest Earned:
                <strong> ₹{interest}</strong>
              </p>
              <p>
                Maturity Amount:
                <strong> ₹{maturity}</strong>
              </p>
            </div>
          )}
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            About Compound Interest Calculator
          </h2>
          <p className="text-gray-700 mb-4">
            The Compound Interest Calculator helps
            investors estimate future investment value
            by applying compound growth over time.
          </p>
          <p className="text-gray-700 mb-8">
            Enter your principal amount, annual
            interest rate and investment duration to
            calculate interest earned and maturity
            value instantly.
          </p>
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <h3 className="font-semibold mb-2">
            What is compound interest?
          </h3>
          <p className="mb-4 text-gray-700">
            Compound interest allows investors to earn
            interest on both principal and previously
            earned interest.
          </p>
          <h3 className="font-semibold mb-2">
            Why is compound interest important?
          </h3>
          <p className="mb-4 text-gray-700">
            It helps investments grow faster over long
            periods through compounding.
          </p>
          <h3 className="font-semibold mb-2">
            How accurate is this calculator?
          </h3>
          <p className="mb-4 text-gray-700">
            Results are estimates based on the values
            entered by the user.
          </p>
          <h3 className="font-semibold mb-2">
            Is this calculator free?
          </h3>
          <p className="text-gray-700">
            Yes, the CalcSci Compound Interest
            Calculator is completely free.
          </p>
        </div>
      </section>
    </main>
    </>
  );
}
