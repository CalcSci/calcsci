"use client";

import { useState } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function SimpleInterestCalculatorPage() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [interest, setInterest] = useState("");
  const [totalAmount, setTotalAmount] = useState("");

  const calculateInterest = () => {
    const P = Number(principal);
    const R = Number(rate);
    const T = Number(years);
    if (!P || !R || !T) return;

    const simpleInterest = (P * R * T) / 100;
    const finalAmount = P + simpleInterest;

    setInterest(simpleInterest.toFixed(0));
    setTotalAmount(finalAmount.toFixed(0));
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
            name: "Simple Interest Calculator",
            url: "https://www.calcsci.com/finance/simple-interest-calculator",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Simple Interest Calculator",
            url: "https://www.calcsci.com/finance/simple-interest-calculator",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            description:
              "Calculate simple interest, interest earned and final maturity amount instantly.",
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
                name: "What is simple interest?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Simple interest is interest calculated only on the original principal amount.",
                },
              },
              {
                "@type": "Question",
                name: "How is simple interest calculated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Simple interest is calculated using principal amount, annual interest rate and investment duration.",
                },
              },
              {
                "@type": "Question",
                name: "What is the simple interest formula?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Simple Interest = (Principal × Rate × Time) ÷ 100.",
                },
              },
              {
                "@type": "Question",
                name: "Is this calculator free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. The CalcSci Simple Interest Calculator is completely free.",
                },
              },
            ],
          }),
        }}
      />
      <main className="bg-gray-50 min-h-screen">
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Simple Interest Calculator
        </h1>
        <p className="text-xl">Calculate Simple Interest Instantly</p>
      </section>
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Enter Investment Details
          </h2>
          <div className="space-y-6">
            <input
              type="number"
              placeholder="Principal Amount (₹)"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4"
            />
            <input
              type="number"
              placeholder="Annual Interest Rate (%)"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4"
            />
            <input
              type="number"
              placeholder="Investment Period (Years)"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4"
            />
            <button
              onClick={calculateInterest}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700"
            >
              Calculate
            </button>
          </div>
          {totalAmount && (
            <div className="mt-8 bg-green-50 border border-green-300 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Result
              </h3>
              <p className="mb-2">
                Interest Earned:
                <strong> ₹{interest}</strong>
              </p>
              <p>
                Total Amount:
                <strong> ₹{totalAmount}</strong>
              </p>
            </div>
          )}
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-3xl font-bold mb-6">
            About Simple Interest Calculator
          </h2>
          <p className="text-gray-700 mb-4">
            The Simple Interest Calculator helps you
            calculate interest earned on a principal
            amount over a fixed period using a simple
            interest rate.
          </p>
          <p className="text-gray-700 mb-8">
            Enter the principal amount, annual interest
            rate and investment duration to instantly
            calculate total interest earned and final
            maturity value.
          </p>
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <h3 className="font-semibold mb-2">
            What is simple interest?
          </h3>
          <p className="mb-4 text-gray-700">
            Simple interest is calculated only on the
            original principal amount and does not
            compound over time.
          </p>
          <h3 className="font-semibold mb-2">
            What is the simple interest formula?
          </h3>
          <p className="mb-4 text-gray-700">
            Simple Interest = (Principal × Rate × Time)
            ÷ 100.
          </p>
          <h3 className="font-semibold mb-2">
            Is this calculator accurate?
          </h3>
          <p className="mb-4 text-gray-700">
            Yes. Results are calculated instantly using
            the values entered by the user.
          </p>
          <h3 className="font-semibold mb-2">
            Is this calculator free?
          </h3>
          <p className="text-gray-700">
            Yes. The CalcSci Simple Interest Calculator
            is completely free to use.
          </p>
        </div>
      </section>
    </main>
    </>
  );
}
