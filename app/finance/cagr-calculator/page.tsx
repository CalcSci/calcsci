"use client";

import { useState } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function CAGRCalculatorPage() {
  const [beginningValue, setBeginningValue] = useState("");
  const [endingValue, setEndingValue] = useState("");
  const [years, setYears] = useState("");
  const [cagr, setCagr] = useState("");

  const calculateCAGR = () => {
    const start = Number(beginningValue);
    const end = Number(endingValue);
    const period = Number(years);
    if (
      !start ||
      !end ||
      !period ||
      start <= 0 ||
      end <= 0 ||
      period <= 0
    ) {
      setCagr("Please enter valid values.");
      return;
    }
    const result =
      (Math.pow(end / start, 1 / period) - 1) * 100;
    setCagr(result.toFixed(2));
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
            name: "CAGR Calculator",
            url:
              "https://www.calcsci.com/finance/cagr-calculator",
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "CAGR Calculator",
            url: "https://www.calcsci.com/finance/cagr-calculator",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            description:
              "Calculate Compound Annual Growth Rate (CAGR) using beginning value, ending value and investment period.",
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
                name: "What is CAGR?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "CAGR stands for Compound Annual Growth Rate and measures the annual growth rate of an investment over a specified period.",
                },
              },
              {
                "@type": "Question",
                name: "Why is CAGR important?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "CAGR helps investors compare the performance of investments over time using a standardized annual growth rate.",
                },
              },
              {
                "@type": "Question",
                name: "Can CAGR be used for stocks and mutual funds?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. CAGR is commonly used to evaluate stocks, mutual funds, business growth and other investments.",
                },
              },
              {
                "@type": "Question",
                name: "Is this CAGR Calculator free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. CalcSci provides this CAGR Calculator completely free.",
                },
              },
            ],
          }),
        }}
      />

      <main className="bg-gray-50 min-h-screen">
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 px-4">CAGR Calculator</h1>
        <p className="text-base md:text-xl px-4">Calculate Compound Annual Growth Rate instantly.</p>
      </section>
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">CAGR Calculator</h2>
          <div className="grid gap-4">
            <input
              type="number"
              placeholder="Beginning Value"
              value={beginningValue}
              onChange={(e) =>
                setBeginningValue(e.target.value)
              }
              className="border border-gray-300 rounded-xl p-3 md:p-4 text-base md:text-lg w-full"
            />
            <input
              type="number"
              placeholder="Ending Value"
              value={endingValue}
              onChange={(e) =>
                setEndingValue(e.target.value)
              }
              className="border border-gray-300 rounded-xl p-3 md:p-4 text-base md:text-lg w-full"
            />
            <input
              type="number"
              placeholder="Investment Period (Years)"
              value={years}
              onChange={(e) =>
                setYears(e.target.value)
              }
              className="border border-gray-300 rounded-xl p-3 md:p-4 text-base md:text-lg w-full"
            />
          </div>
          <button
            onClick={calculateCAGR}
            className="w-full mt-6 md:mt-8 bg-blue-600 text-white py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold hover:bg-blue-700"
          >
            Calculate CAGR
          </button>
          {cagr && (
            <div className="bg-green-50 border border-green-300 rounded-xl p-6 text-center mt-8">
              <h3 className="text-2xl font-bold text-green-700">CAGR Result</h3>
              <p className="text-2xl md:text-3xl font-bold mt-4">{cagr}%</p>
            </div>
          )}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About CAGR Calculator</h2>
          <p className="text-gray-700 mb-4">
            CAGR (Compound Annual Growth Rate) Calculator helps
            investors determine the average annual growth rate
            of an investment over a period of time.
          </p>
          <p className="text-gray-700 mb-8">
            It is widely used for evaluating mutual funds,
            stocks, business revenue growth and long-term
            investment performance.
          </p>
          <h2 className="text-2xl font-bold mb-6">Example Calculation</h2>
          <div className="bg-gray-50 border rounded-xl p-6 mb-8">
            <p>Beginning Value: ₹10,000</p>
            <p>Ending Value: ₹20,000</p>
            <p>Investment Period: 5 Years</p>
            <p>CAGR: 14.87%</p>
          </div>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <h3 className="font-semibold mb-2">What does CAGR mean?</h3>
          <p className="mb-4 text-gray-700">CAGR represents the average annual growth rate of an investment assuming profits are reinvested.</p>
          <h3 className="font-semibold mb-2">Is CAGR better than total return?</h3>
          <p className="mb-4 text-gray-700">CAGR provides a standardized annual growth rate, making it easier to compare different investments.</p>
          <h3 className="font-semibold mb-2">Is this calculator free?</h3>
          <p className="text-gray-700">Yes. The CAGR Calculator is completely free to use.</p>
        </div>
      </section>
    </main>
  </>);
}
