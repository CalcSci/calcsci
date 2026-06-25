"use client";

import { useState } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function BinaryToDecimalConverterPage() {
  const [binary, setBinary] = useState("");
  const [result, setResult] = useState("");

  const convert = () => {
    if (!binary) {
      setResult("Please enter a binary number.");
      return;
    }
    if (!/^[01]+$/.test(binary)) {
      setResult("Invalid binary number. Use only 0 and 1.");
      return;
    }
    const decimal = parseInt(binary, 2);
    setResult(decimal.toString());
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
            name: "Engineering",
            url: "https://www.calcsci.com/engineering",
          },
          {
            name: "Binary to Decimal Converter",
            url:
              "https://www.calcsci.com/engineering/binary-to-decimal-converter",
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Binary to Decimal Converter",
            url:
              "https://www.calcsci.com/engineering/binary-to-decimal-converter",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Any",
            description:
              "Convert binary numbers into decimal values instantly.",
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
                name: "What is a binary number?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "A binary number uses only 0 and 1 digits and is the fundamental number system used by computers.",
                },
              },
              {
                "@type": "Question",
                name: "How do I convert binary to decimal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Each binary digit represents a power of 2. Adding the powers corresponding to 1s gives the decimal value.",
                },
              },
              {
                "@type": "Question",
                name: "What is binary 1010 in decimal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Binary 1010 equals decimal 10.",
                },
              },
              {
                "@type": "Question",
                name: "Is this converter free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The Binary to Decimal Converter is completely free to use.",
                },
              },
            ],
          }),
        }}
      />

      <main className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 px-4">Binary to Decimal Converter</h1>
        <p className="text-base md:text-xl px-4">Convert binary numbers into decimal values instantly.</p>
      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Enter Binary Number</h2>

          <input
            type="text"
            placeholder="Example: 1010"
            value={binary}
            onChange={(e) => setBinary(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-base md:text-lg"
          />

          <button
            onClick={convert}
            className="w-full mt-6 md:mt-8 bg-blue-600 text-white py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold hover:bg-blue-700 transition"
          >
            Convert to Decimal
          </button>

          {result && (
            <div className="bg-green-50 border border-green-300 rounded-xl p-6 text-center mt-8">
              <h3 className="text-2xl font-bold text-green-700">Decimal Value</h3>
              <p className="text-3xl mt-4 font-bold text-gray-800">{result}</p>
            </div>
          )}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About Binary to Decimal Converter</h2>
          <p className="text-gray-700 mb-4">
            Binary to Decimal Converter helps students, programmers and engineers quickly convert
            binary numbers into decimal values.
          </p>
          <p className="text-gray-700 mb-8">
            Binary numbers use only 0 and 1 digits, while decimal numbers use digits from 0 to 9.
            This converter instantly performs the conversion.
          </p>
          <h2 className="text-2xl font-bold mb-6">Example Conversion</h2>
          <div className="bg-gray-50 border rounded-xl p-6 mb-8">
            <p className="font-semibold">Binary: 1010</p>
            <p className="mt-2">Decimal: 10</p>
          </div>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <h3 className="font-semibold mb-2">What is a binary number?</h3>
          <p className="mb-4 text-gray-700">Binary numbers contain only the digits 0 and 1.</p>
          <h3 className="font-semibold mb-2">Why do computers use binary?</h3>
          <p className="mb-4 text-gray-700">Computers use electronic states that naturally represent 0 and 1 values.</p>
          <h3 className="font-semibold mb-2">Is this converter accurate?</h3>
          <p className="text-gray-700">Yes. Standard binary conversion rules are used.</p>
        </div>
      </section>
    </main>
  </>);
}
