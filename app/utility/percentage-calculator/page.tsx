"use client";

import { useState } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function PercentageCalculatorPage() {
  const [percentage, setPercentage] = useState("");
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    const p = Number(percentage);
    const n = Number(number);

    if (!p || !n) {
      setResult("Please enter valid values.");
      return;
    }

    const answer = (p / 100) * n;
    setResult(
      `${p}% of ${n} = ${answer.toLocaleString()}`
    );
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
            name: "Utility",
            url: "https://www.calcsci.com/utility",
          },
          {
            name: "Percentage Calculator",
            url: "https://www.calcsci.com/utility/percentage-calculator",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Percentage Calculator",
            url:
              "https://www.calcsci.com/utility/percentage-calculator",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            description:
              "Free online Percentage Calculator to calculate percentages instantly.",
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
                name: "How do I calculate a percentage?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Multiply the number by the percentage and divide by 100.",
                },
              },
              {
                "@type": "Question",
                name: "What is 20% of 500?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "20% of 500 equals 100.",
                },
              },
              {
                "@type": "Question",
                name: "Can I calculate percentage increase?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Percentage increase compares the increase relative to the original value.",
                },
              },
            ],
          }),
        }}
      />
    <main className="bg-gray-50 min-h-screen">
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 px-4">
          Percentage Calculator
        </h1>

        <p className="text-base md:text-xl px-4 mt-4">
          Calculate percentages instantly.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            What is X% of Y?
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="number"
              placeholder="Percentage"
              value={percentage}
              onChange={(e) =>
                setPercentage(e.target.value)
              }
              className="border border-gray-300 rounded-xl p-3 md:p-4 text-base md:text-lg w-full"
            />

            <input
              type="number"
              placeholder="Number"
              value={number}
              onChange={(e) =>
                setNumber(e.target.value)
              }
              className="border border-gray-300 rounded-xl p-3 md:p-4 text-base md:text-lg w-full"
            />
          </div>

          <button
            onClick={calculate}
            className="w-full mt-8 bg-blue-600 text-white py-4 rounded-xl font-semibold"
          >
            Calculate
          </button>

          {result && (
            <div className="bg-green-50 border border-green-300 rounded-xl p-6 text-center mt-8">
              <h3 className="text-2xl font-bold text-green-700">
                Result
              </h3>

              <p className="text-xl mt-4">
                {result}
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            About Percentage Calculator
          </h2>

          <p className="text-gray-700 mb-4">
            Our free Percentage Calculator helps you calculate
            percentages quickly and accurately. It is useful
            for discounts, taxes, exam scores, profit margins,
            investments and daily calculations.
          </p>

          <p className="text-gray-700 mb-4">
            Simply enter a percentage value and a number to
            instantly determine the result.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Frequently Asked Questions
          </h2>

          <h3 className="font-semibold mb-2">
            How do I calculate a percentage?
          </h3>

          <p className="text-gray-700 mb-4">
            Multiply the number by the percentage and divide
            by 100.
          </p>

          <h3 className="font-semibold mb-2">
            What is 20% of 500?
          </h3>

          <p className="text-gray-700 mb-4">
            20% of 500 is 100.
          </p>

          <h3 className="font-semibold mb-2">
            Why use a Percentage Calculator?
          </h3>

          <p className="text-gray-700">
            It saves time and reduces calculation errors when
            working with percentages.
          </p>
        </div>
      </section>
    </main>
    </>
  );
}
