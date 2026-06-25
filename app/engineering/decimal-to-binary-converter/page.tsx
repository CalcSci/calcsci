"use client";

import { useState } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function DecimalToBinaryConverterPage() {
  const [decimal, setDecimal] = useState("");
  const [result, setResult] = useState("");

  const convert = () => {
    if (decimal === "") {
      setResult("Please enter a decimal number.");
      return;
    }
    const num = Number(decimal);
    if (isNaN(num) || num < 0) {
      setResult(
        "Please enter a valid positive decimal number."
      );
      return;
    }
    setResult(num.toString(2));
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
            name: "Decimal to Binary Converter",
            url:
              "https://www.calcsci.com/engineering/decimal-to-binary-converter",
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Decimal to Binary Converter",
            url:
              "https://www.calcsci.com/engineering/decimal-to-binary-converter",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Any",
            description:
              "Convert decimal numbers into binary values instantly.",
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
                name: "What is a decimal number?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Decimal numbers use digits from 0 to 9 and are the standard number system used in daily life.",
                },
              },
              {
                "@type": "Question",
                name: "How do I convert decimal to binary?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Decimal numbers are converted to binary by repeatedly dividing by 2 and recording the remainders.",
                },
              },
              {
                "@type": "Question",
                name: "What is decimal 10 in binary?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Decimal 10 equals binary 1010.",
                },
              },
              {
                "@type": "Question",
                name: "Is this converter free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The Decimal to Binary Converter is completely free to use.",
                },
              },
            ],
          }),
        }}
      />

      <main className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 px-4">
          Decimal to Binary Converter
        </h1>
        <p className="text-base md:text-xl px-4">
          Convert decimal numbers into binary values instantly.
        </p>
      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Enter Decimal Number
          </h2>

          <input
            type="number"
            placeholder="Example: 10"
            value={decimal}
            onChange={(e) =>
              setDecimal(e.target.value)
            }
            className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-base md:text-lg"
          />

          <button
            onClick={convert}
            className="w-full mt-6 md:mt-8 bg-blue-600 text-white py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold hover:bg-blue-700 transition"
          >
            Convert to Binary
          </button>

          {result && (
            <div className="bg-green-50 border border-green-300 rounded-xl p-6 text-center mt-8">
              <h3 className="text-2xl font-bold text-green-700">
                Binary Value
              </h3>
              <p className="text-3xl mt-4 font-bold text-gray-800">
                {result}
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About Decimal to Binary Converter</h2>
          <p className="text-gray-700 mb-4">
            Decimal to Binary Converter helps students, programmers and engineers quickly convert
            decimal numbers into binary values.
          </p>
          <p className="text-gray-700 mb-8">
            Binary numbers use only 0 and 1 digits, making them essential for computer systems
            and digital electronics.
          </p>
          <h2 className="text-2xl font-bold mb-6">Example Conversion</h2>
          <div className="bg-gray-50 border rounded-xl p-6 mb-8">
            <p className="font-semibold">Decimal: 10</p>
            <p className="mt-2">Binary: 1010</p>
          </div>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <h3 className="font-semibold mb-2">What is a decimal number?</h3>
          <p className="mb-4 text-gray-700">Decimal numbers use digits from 0 to 9.</p>
          <h3 className="font-semibold mb-2">Why convert decimal to binary?</h3>
          <p className="mb-4 text-gray-700">Binary numbers are used internally by computers and digital devices.</p>
          <h3 className="font-semibold mb-2">Is this converter accurate?</h3>
          <p className="text-gray-700">Yes. Standard decimal-to-binary conversion methods are used.</p>
        </div>
      </section>
    </main>
  </>);
}
