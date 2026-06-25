"use client";

import { useState } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function ProfitMarginCalculatorPage() {
  const [costPrice, setCostPrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [profit, setProfit] = useState("");
  const [margin, setMargin] = useState("");

  const calculateProfitMargin = () => {
    const cost = Number(costPrice);
    const sell = Number(sellingPrice);
    if (
      !cost ||
      !sell ||
      cost <= 0 ||
      sell <= 0
    ) {
      setProfit("Please enter valid values.");
      setMargin("");
      return;
    }
    const profitValue = sell - cost;
    const marginValue =
      (profitValue / sell) * 100;
    setProfit(profitValue.toFixed(2));
    setMargin(marginValue.toFixed(2));
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
            name: "Profit Margin Calculator",
            url: "https://www.calcsci.com/finance/profit-margin-calculator",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Profit Margin Calculator",
            url: "https://www.calcsci.com/finance/profit-margin-calculator",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            description: "Calculate profit amount and profit margin percentage instantly.",
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
                name: "What is profit margin?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Profit margin is the percentage of revenue remaining after deducting costs.",
                },
              },
              {
                "@type": "Question",
                name: "How is profit margin calculated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Profit margin equals profit divided by selling price multiplied by 100.",
                },
              },
              {
                "@type": "Question",
                name: "Why is profit margin important?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Profit margin helps businesses measure profitability and pricing efficiency.",
                },
              },
              {
                "@type": "Question",
                name: "Is this Profit Margin Calculator free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. CalcSci provides this calculator completely free.",
                },
              },
            ],
          }),
        }}
      />
      <main className="bg-gray-50 min-h-screen">
        <section className="bg-blue-600 text-white py-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 px-4">Profit Margin Calculator</h1>
          <p className="text-base md:text-xl px-4">Calculate profit and profit margin instantly.</p>
        </section>
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Profit Margin Calculator</h2>
          <div className="grid gap-4">
            <input
              type="number"
              placeholder="Cost Price (₹)"
              value={costPrice}
              onChange={(e) =>
                setCostPrice(e.target.value)
              }
              className="border border-gray-300 rounded-xl p-3 md:p-4 text-base md:text-lg w-full"
            />
            <input
              type="number"
              placeholder="Selling Price (₹)"
              value={sellingPrice}
              onChange={(e) =>
                setSellingPrice(e.target.value)
              }
              className="border border-gray-300 rounded-xl p-3 md:p-4 text-base md:text-lg w-full"
            />
          </div>
          <button
            onClick={calculateProfitMargin}
            className="w-full mt-6 md:mt-8 bg-blue-600 text-white py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold hover:bg-blue-700"
          >
            Calculate Profit Margin
          </button>
          {profit && (
            <div className="bg-green-50 border border-green-300 rounded-xl p-6 text-center mt-8">
              <h3 className="text-2xl font-bold text-green-700">Results</h3>
              <p className="text-lg mt-4">Profit: <strong>₹{profit}</strong></p>
              <p className="text-lg mt-2">Profit Margin: <strong>{margin}%</strong></p>
            </div>
          )}
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About Profit Margin Calculator</h2>
          <p className="text-gray-700 mb-4">
            Profit Margin Calculator helps businesses,
            freelancers, shop owners and online sellers
            determine profitability quickly and accurately.
          </p>
          <p className="text-gray-700 mb-8">
            Enter your cost price and selling price to
            calculate profit amount and profit margin
            percentage instantly.
          </p>
          <h2 className="text-2xl font-bold mb-6">Example Calculation</h2>
          <div className="bg-gray-50 border rounded-xl p-6 mb-8">
            <p>Cost Price: ₹1,000</p>
            <p>Selling Price: ₹1,500</p>
            <p>Profit: ₹500</p>
            <p>Profit Margin: 33.33%</p>
          </div>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <h3 className="font-semibold mb-2">What is a good profit margin?</h3>
          <p className="mb-4 text-gray-700">
            A good profit margin varies by industry, but
            generally higher margins indicate better
            profitability.
          </p>
          <h3 className="font-semibold mb-2">Can this calculator be used for retail businesses?</h3>
          <p className="mb-4 text-gray-700">
            Yes. It works for retail stores, e-commerce,
            freelancers and service businesses.
          </p>
          <h3 className="font-semibold mb-2">Is this calculator free?</h3>
          <p className="text-gray-700">
            Yes. You can use the Profit Margin Calculator
            without any charges.
          </p>
        </div>
      </section>
    </main>
  </>
  );
}
