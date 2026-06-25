"use client";

import { useState } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function FDCalculatorPage() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [interest, setInterest] = useState("");
  const [maturity, setMaturity] = useState("");

  const calculateFD = () => {
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
            name: "FD Calculator",
            url: "https://www.calcsci.com/finance/fd-calculator",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "FD Calculator",
            url: "https://www.calcsci.com/finance/fd-calculator",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            description:
              "Calculate fixed deposit maturity amount and interest earned instantly.",
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
                name: "What is a Fixed Deposit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "A Fixed Deposit is an investment where money is deposited for a fixed period and earns interest at a predetermined rate.",
                },
              },
              {
                "@type": "Question",
                name: "How is FD maturity amount calculated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "FD maturity amount is calculated using the deposit amount, interest rate and investment duration.",
                },
              },
              {
                "@type": "Question",
                name: "Is FD investment safe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Fixed Deposits offered by regulated banks are generally considered low-risk investments.",
                },
              },
              {
                "@type": "Question",
                name: "Is this FD Calculator free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. The CalcSci FD Calculator is completely free to use.",
                },
              },
            ],
          }),
        }}
      />
      <main className="bg-gray-50 min-h-screen">
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">FD Calculator</h1>
        <p className="text-xl">Calculate Fixed Deposit Returns</p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Enter FD Details
          </h2>

          <div className="space-y-6">
            <input
              type="number"
              placeholder="Deposit Amount (₹)"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4"
            />

            <input
              type="number"
              placeholder="Interest Rate (%)"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4"
            />

            <input
              type="number"
              placeholder="Duration (Years)"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4"
            />

            <button
              onClick={calculateFD}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700"
            >
              Calculate FD
            </button>
          </div>

          {maturity && (
            <div className="mt-8 bg-green-50 border border-green-300 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                FD Result
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
          <h2 className="text-3xl font-bold mb-6">
            About FD Calculator
          </h2>
          <p className="text-gray-700 mb-4">
            The FD Calculator helps investors estimate
            the maturity amount and interest earned on
            Fixed Deposit investments.
          </p>
          <p className="text-gray-700 mb-8">
            Simply enter the deposit amount, interest
            rate and investment period to calculate
            your returns instantly.
          </p>
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <h3 className="font-semibold mb-2">
            What is a Fixed Deposit?
          </h3>
          <p className="mb-4 text-gray-700">
            A Fixed Deposit is a financial product
            offered by banks where money is invested
            for a fixed duration at a fixed interest
            rate.
          </p>
          <h3 className="font-semibold mb-2">
            Is FD safer than mutual funds?
          </h3>
          <p className="mb-4 text-gray-700">
            Fixed Deposits generally carry lower risk
            than mutual funds, but may offer lower
            returns.
          </p>
          <h3 className="font-semibold mb-2">
            How accurate is this FD Calculator?
          </h3>
          <p className="mb-4 text-gray-700">
            It provides estimates based on the values
            entered by the user.
          </p>
          <h3 className="font-semibold mb-2">
            Is this calculator free?
          </h3>
          <p className="text-gray-700">
            Yes, the CalcSci FD Calculator is
            completely free.
          </p>
        </div>
      </section>
    </main>
    </>
  );
}
