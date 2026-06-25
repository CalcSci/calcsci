"use client";

import { useState } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function ScientificCalculatorPage() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    try {
      const value = Function(
        `"use strict"; return (${expression})`
      )();
      setResult(String(value));
    } catch {
      setResult("Invalid Expression");
    }
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
            name: "Scientific Calculator",
            url:
              "https://www.calcsci.com/utility/scientific-calculator",
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Scientific Calculator",
            url: "https://www.calcsci.com/utility/scientific-calculator",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Any",
            description:
              "Perform advanced mathematical calculations including arithmetic, powers, roots and scientific operations.",
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
                name: "What is a scientific calculator?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "A scientific calculator performs advanced mathematical calculations such as powers, roots, logarithms and trigonometric functions.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use this calculator for school and college?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. This calculator is useful for students, teachers and professionals.",
                },
              },
              {
                "@type": "Question",
                name: "Is this scientific calculator free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. It is completely free to use online.",
                },
              },
              {
                "@type": "Question",
                name: "Does this calculator work on mobile devices?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. It works on desktops, tablets and mobile phones.",
                },
              },
            ],
          }),
        }}
      />

      <main className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Scientific Calculator
        </h1>
        <p className="text-xl">
          Perform advanced mathematical calculations.
        </p>
      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Scientific Calculator
          </h2>
          <input
            type="text"
            value={expression}
            onChange={(e) =>
              setExpression(e.target.value)
            }
            placeholder="Example: 5*10+20"
            className="w-full border border-gray-300 rounded-xl p-4 text-lg"
          />
          <button
            onClick={calculate}
            className="w-full mt-6 bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700"
          >
            Calculate
          </button>
          {result && (
            <div className="bg-green-50 border border-green-300 rounded-xl p-6 text-center mt-8">
              <h3 className="text-2xl font-bold text-green-700">Result</h3>
              <p className="text-3xl mt-4 font-bold">{result}</p>
            </div>
          )}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-3xl font-bold mb-6">About Scientific Calculator</h2>
          <p className="text-gray-700 mb-4">
            Scientific Calculator is designed for students, engineers, teachers and professionals who need
            quick and accurate mathematical calculations.
          </p>
          <p className="text-gray-700 mb-8">
            It can be used for arithmetic operations, algebra, engineering calculations and general
            mathematical problem solving.
          </p>
          <h2 className="text-2xl font-bold mb-6">Common Uses</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-8">
            <li>School mathematics</li>
            <li>College engineering calculations</li>
            <li>Physics and science problems</li>
            <li>Business calculations</li>
            <li>Everyday calculations</li>
          </ul>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <h3 className="font-semibold mb-2">What is a scientific calculator?</h3>
          <p className="mb-4 text-gray-700">A scientific calculator performs advanced mathematical operations beyond basic addition, subtraction, multiplication and division.</p>
          <h3 className="font-semibold mb-2">Is this calculator accurate?</h3>
          <p className="mb-4 text-gray-700">Yes. Results are calculated instantly using JavaScript mathematical operations.</p>
          <h3 className="font-semibold mb-2">Is it free?</h3>
          <p className="text-gray-700">Yes. CalcSci provides this scientific calculator completely free of charge.</p>
        </div>
      </section>
    </main>
  </>);
}
