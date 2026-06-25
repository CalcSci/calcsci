"use client";

import { useState } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function UnitConverterPage() {
  const [category, setCategory] = useState("length");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const convert = () => {
    const num = Number(value);
    if (!num && num !== 0) return;

    switch (category) {
      case "length":
        setResult(`${num} m = ${(num / 1000).toFixed(4)} km`);
        break;

      case "weight":
        setResult(`${num} kg = ${(num * 1000).toFixed(2)} g`);
        break;

      case "temperature":
        setResult(`${num} °C = ${((num * 9) / 5 + 32).toFixed(2)} °F`);
        break;

      default:
        setResult("");
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
            name: "Unit Converter",
            url: "https://www.calcsci.com/utility/unit-converter",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Unit Converter",
            url: "https://www.calcsci.com/utility/unit-converter",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Any",
            description: "Convert length, weight and temperature units instantly.",
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
                name: "What is a unit converter?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A unit converter converts values from one measurement unit to another.",
                },
              },
              {
                "@type": "Question",
                name: "Can I convert meters to kilometers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. This calculator can convert meters to kilometers instantly.",
                },
              },
              {
                "@type": "Question",
                name: "Can I convert kilograms to grams?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. This calculator supports kilogram to gram conversion.",
                },
              },
              {
                "@type": "Question",
                name: "Can I convert Celsius to Fahrenheit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. This calculator converts Celsius temperatures to Fahrenheit.",
                },
              },
            ],
          }),
        }}
      />
      <main className="bg-gray-50 min-h-screen">
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Unit Converter</h1>

        <p className="text-xl">Convert Length, Weight and Temperature Units</p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Unit Converter</h2>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-4 mb-6"
          >
            <option value="length">Length (m → km)</option>
            <option value="weight">Weight (kg → g)</option>
            <option value="temperature">Temperature (°C → °F)</option>
          </select>

          <input
            type="number"
            placeholder="Enter value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-4 mb-6"
          />

          <button
            onClick={convert}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700"
          >
            Convert
          </button>

          {result && (
            <div className="mt-8 bg-green-50 border border-green-300 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-green-700 mb-4">Result</h3>

              <p className="text-xl">{result}</p>
            </div>
          )}
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-3xl font-bold mb-6">About Unit Converter</h2>
          <p className="text-gray-700 mb-4">
            Unit Converter helps convert common measurement units quickly and accurately.
          </p>
          <p className="text-gray-700 mb-8">
            It supports length, weight and temperature conversions for students, professionals and everyday users.
          </p>
          <h2 className="text-2xl font-bold mb-6">Popular Conversions</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-8">
            <li>1 Kilometer = 1000 Meters</li>
            <li>1 Kilogram = 1000 Grams</li>
            <li>0°C = 32°F</li>
            <li>100°C = 212°F</li>
          </ul>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <h3 className="font-semibold mb-2">What is a unit converter?</h3>
          <p className="mb-4 text-gray-700">A unit converter changes a value from one measurement unit into another.</p>
          <h3 className="font-semibold mb-2">Is this converter free?</h3>
          <p className="mb-4 text-gray-700">Yes. It is completely free.</p>
          <h3 className="font-semibold mb-2">Is it accurate?</h3>
          <p className="text-gray-700">Yes. Standard conversion formulas are used.</p>
        </div>
      </section>
    </main>
    </>
  );
}
