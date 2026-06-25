"use client";

import { useState } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function SIPCalculatorPage() {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [returnRate, setReturnRate] = useState("");
  const [years, setYears] = useState("");
  const [investedAmount, setInvestedAmount] = useState("");
  const [estimatedReturns, setEstimatedReturns] = useState("");
  const [maturityValue, setMaturityValue] = useState("");

  const calculateSIP = () => {
    const P = Number(monthlyInvestment);
    const annualRate = Number(returnRate);
    const Y = Number(years);

    if (!P || !annualRate || !Y) {
      return;
    }

    const r = annualRate / 12 / 100;
    const n = Y * 12;
    const maturity = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    const invested = P * n;
    const returns = maturity - invested;

    setInvestedAmount(invested.toFixed(0));
    setEstimatedReturns(returns.toFixed(0));
    setMaturityValue(maturity.toFixed(0));
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
            name: "SIP Calculator",
            url: "https://www.calcsci.com/finance/sip-calculator",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "SIP Calculator",
            url: "https://www.calcsci.com/finance/sip-calculator",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            description:
              "Calculate SIP returns, wealth gained and maturity value instantly.",
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
                name: "What is SIP?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "SIP stands for Systematic Investment Plan. It allows investors to invest a fixed amount regularly in mutual funds.",
                },
              },
              {
                "@type": "Question",
                name: "How is SIP maturity calculated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "SIP maturity is calculated using monthly investment amount, expected annual return rate and investment duration.",
                },
              },
              {
                "@type": "Question",
                name: "Can SIP generate wealth over the long term?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Long-term SIP investing benefits from compounding and can help build substantial wealth.",
                },
              },
              {
                "@type": "Question",
                name: "Is this SIP Calculator free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. The CalcSci SIP Calculator is completely free to use.",
                },
              },
            ],
          }),
        }}
      />
      <main className="bg-gray-50 min-h-screen">
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 px-4">
          SIP Calculator
        </h1>
        <p className="text-base md:text-xl px-4">
          Calculate Mutual Fund SIP Returns
          Instantly
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Enter SIP Details
          </h2>

          <div className="space-y-6">
            <input
              type="number"
              placeholder="Monthly Investment (₹)"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-base md:text-lg"
            />
            <input
              type="number"
              placeholder="Expected Return (%)"
              value={returnRate}
              onChange={(e) => setReturnRate(e.target.value)}
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
              onClick={calculateSIP}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700"
            >
              Calculate SIP
            </button>
          </div>

          {maturityValue && (
            <div className="mt-8 bg-green-50 border border-green-300 rounded-xl p-4 md:p-6">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                SIP Result
              </h3>
              <p className="mb-2">
                Total Investment:
                <strong>
                  {" "}
                  ₹{investedAmount}
                </strong>
              </p>
              <p className="mb-2">
                Estimated Returns:
                <strong>
                  {" "}
                  ₹{estimatedReturns}
                </strong>
              </p>
              <p>
                Maturity Value:
                <strong>
                  {" "}
                  ₹{maturityValue}
                </strong>
              </p>
            </div>
          )}
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            About SIP Calculator
          </h2>
          <p className="text-gray-700 mb-4">
            The SIP Calculator helps investors estimate
            the future value of their mutual fund
            investments through Systematic Investment
            Plans (SIP).
          </p>
          <p className="text-gray-700 mb-8">
            Simply enter your monthly investment,
            expected annual return and investment
            duration to estimate total investment,
            wealth gained and maturity value.
          </p>
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <h3 className="font-semibold mb-2">
            What is SIP?
          </h3>
          <p className="mb-4 text-gray-700">
            SIP stands for Systematic Investment Plan,
            allowing investors to invest regularly in
            mutual funds.
          </p>
          <h3 className="font-semibold mb-2">
            Is SIP better than lump sum investment?
          </h3>
          <p className="mb-4 text-gray-700">
            SIP helps average investment costs over
            time and reduces market timing risk.
          </p>
          <h3 className="font-semibold mb-2">
            How accurate is this SIP Calculator?
          </h3>
          <p className="mb-4 text-gray-700">
            It provides estimates based on the return
            rate entered by the user.
          </p>
          <h3 className="font-semibold mb-2">
            Is this calculator free?
          </h3>
          <p className="text-gray-700">
            Yes, the CalcSci SIP Calculator is
            completely free.
          </p>
        </div>
      </section>
    </main>
    </>
  );
}
