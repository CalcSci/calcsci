"use client";

import { useState } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function OhmsLawCalculatorPage() {
  const [voltage, setVoltage] = useState("");
  const [resistance, setResistance] = useState("");
  const [current, setCurrent] = useState("");

  const calculateCurrent = () => {
    const v = Number(voltage);
    const r = Number(resistance);
    if (!v || !r) return;
    const i = v / r;
    setCurrent(i.toFixed(2));
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
            name: "Ohm's Law Calculator",
            url: "https://www.calcsci.com/engineering/ohms-law-calculator",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Ohm's Law Calculator",
            url: "https://www.calcsci.com/engineering/ohms-law-calculator",
            applicationCategory: "EducationalApplication",
            operatingSystem: "Any",
            description:
              "Calculate voltage, current and resistance using Ohm's Law.",
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
                name: "What is Ohm's Law?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Ohm's Law states that current equals voltage divided by resistance.",
                },
              },
              {
                "@type": "Question",
                name: "What is the formula for Ohm's Law?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Current (I) = Voltage (V) ÷ Resistance (R).",
                },
              },
              {
                "@type": "Question",
                name: "What are the units used?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Voltage is measured in volts (V), current in amperes (A), and resistance in ohms (Ω).",
                },
              },
              {
                "@type": "Question",
                name: "Is this calculator free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. The CalcSci Ohm's Law Calculator is completely free.",
                },
              },
            ],
          }),
        }}
      />
      <main className="bg-gray-50 min-h-screen">
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Ohm&apos;s Law Calculator
        </h1>
        <p className="text-xl">
          Calculate Electrical Current Using Voltage and Resistance
        </p>
      </section>
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Enter Values
          </h2>
          <div className="space-y-6">
            <input
              type="number"
              placeholder="Voltage (V)"
              value={voltage}
              onChange={(e) => setVoltage(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4"
            />
            <input
              type="number"
              placeholder="Resistance (Ω)"
              value={resistance}
              onChange={(e) => setResistance(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4"
            />
            <button
              onClick={calculateCurrent}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700"
            >
              Calculate Current
            </button>
          </div>
          {current && (
            <div className="mt-8 bg-green-50 border border-green-300 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Current
              </h3>
              <p className="text-xl">{current} A</p>
            </div>
          )}
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-3xl font-bold mb-6">
            About Ohm's Law Calculator
          </h2>
          <p className="text-gray-700 mb-4">
            Ohm's Law Calculator helps students, engineers and electronics enthusiasts calculate electrical current from voltage and resistance values.
          </p>
          <p className="text-gray-700 mb-8">
            Ohm's Law is one of the most important formulas in electrical engineering and electronics.
          </p>
          <h2 className="text-2xl font-bold mb-6">
            Ohm's Law Formula
          </h2>
          <p className="text-gray-700 mb-6">
            Current (I) = Voltage (V) ÷ Resistance (R)
          </p>
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 mb-8">
            <p className="font-semibold mb-2">Example:</p>
            <p className="text-gray-700">
              I = V ÷ R = 12.0 V ÷ 6.0 Ω = 2.00 A
            </p>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm text-gray-500">Voltage</p>
                <p className="text-xl font-semibold">12.0 V</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm text-gray-500">Resistance</p>
                <p className="text-xl font-semibold">6.0 Ω</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm text-gray-500">Current</p>
                <p className="text-xl font-semibold">2.00 A</p>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <h3 className="font-semibold mb-2">
            What is Ohm's Law?
          </h3>
          <p className="mb-4 text-gray-700">
            Ohm's Law describes the relationship between voltage, current and resistance in an electrical circuit.
          </p>
          <h3 className="font-semibold mb-2">
            What is the formula?
          </h3>
          <p className="mb-4 text-gray-700">
            Current = Voltage ÷ Resistance.
          </p>
          <h3 className="font-semibold mb-2">
            Who uses Ohm's Law?
          </h3>
          <p className="mb-4 text-gray-700">
            Students, electricians, electronics technicians and engineers use it daily.
          </p>
          <h3 className="font-semibold mb-2">
            Is this calculator free?
          </h3>
          <p className="text-gray-700">
            Yes. It is completely free to use.
          </p>
        </div>
      </section>
    </main>
    </>
  );
}
