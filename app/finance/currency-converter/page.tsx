"use client";

import { useState } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const rates: Record<string, number> = {
  USD: 1,
  INR: 86,
  EUR: 0.92,
  GBP: 0.79,
  AED: 3.67,
};

export default function CurrencyConverterPage() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [result, setResult] = useState("");

  const convert = () => {
    const value = Number(amount);
    if (!value || value <= 0) {
      setResult("Please enter a valid amount.");
      return;
    }
    const usdAmount = value / rates[from];
    const converted = usdAmount * rates[to];
    setResult(converted.toFixed(2));
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
            name: "Currency Converter",
            url:
              "https://www.calcsci.com/finance/currency-converter",
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Currency Converter",
            url: "https://www.calcsci.com/finance/currency-converter",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            description:
              "Convert currencies quickly and easily using our free online Currency Converter.",
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
                name: "What is a currency converter?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "A currency converter helps convert one currency into another using exchange rates.",
                },
              },
              {
                "@type": "Question",
                name: "How are currency conversions calculated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "The amount is multiplied by the exchange rate between two currencies.",
                },
              },
              {
                "@type": "Question",
                name: "Can I convert INR to USD?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. The Currency Converter supports INR, USD and other major currencies.",
                },
              },
              {
                "@type": "Question",
                name: "Is this Currency Converter free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. CalcSci provides this Currency Converter completely free.",
                },
              },
            ],
          }),
        }}
      />

      <main className="bg-gray-50 min-h-screen">
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Currency Converter</h1>
        <p className="text-xl">Convert currencies quickly and easily.</p>
      </section>
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Currency Converter</h2>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value)
            }
            className="w-full border border-gray-300 rounded-xl p-4 mb-4"
          />
          <div className="grid md:grid-cols-2 gap-4">
            <select
              value={from}
              onChange={(e) =>
                setFrom(e.target.value)
              }
              className="border border-gray-300 rounded-xl p-4"
            >
              <option value="USD">USD</option>
              <option value="INR">INR</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="AED">AED</option>
            </select>
            <select
              value={to}
              onChange={(e) =>
                setTo(e.target.value)
              }
              className="border border-gray-300 rounded-xl p-4"
            >
              <option value="USD">USD</option>
              <option value="INR">INR</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="AED">AED</option>
            </select>
          </div>
          <button
            onClick={convert}
            className="w-full mt-8 bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700"
          >
            Convert
          </button>
          {result && (
            <div className="bg-green-50 border border-green-300 rounded-xl p-6 text-center mt-8">
              <h3 className="text-2xl font-bold text-green-700">Converted Amount</h3>
              <p className="text-3xl mt-4 font-bold">{result} {to}</p>
            </div>
          )}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-3xl font-bold mb-6">About Currency Converter</h2>
          <p className="text-gray-700 mb-4">
            Currency Converter helps travelers, businesses,
            students and investors convert money between
            different currencies quickly and easily.
          </p>
          <p className="text-gray-700 mb-8">
            Select the source currency, target currency
            and amount to instantly calculate the converted
            value.
          </p>
          <h2 className="text-2xl font-bold mb-6">Example Conversion</h2>
          <div className="bg-gray-50 border rounded-xl p-6 mb-8">
            <p>Amount: 100 USD</p>
            <p>Converted To: INR</p>
            <p>Result: 8,600 INR</p>
          </div>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <h3 className="font-semibold mb-2">What is a currency converter?</h3>
          <p className="mb-4 text-gray-700">A currency converter calculates the value of one currency in another currency.</p>
          <h3 className="font-semibold mb-2">Who uses currency converters?</h3>
          <p className="mb-4 text-gray-700">Travelers, importers, exporters, students and investors frequently use currency converters.</p>
          <h3 className="font-semibold mb-2">Is this converter free?</h3>
          <p className="text-gray-700">Yes. It is completely free to use on CalcSci.</p>
        </div>
      </section>
    </main>
  </>);
}
