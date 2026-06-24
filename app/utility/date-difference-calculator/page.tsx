"use client";

import { useState } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function DateDifferenceCalculatorPage() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [result, setResult] = useState("");

  const calculateDifference = () => {
    if (!startDate || !endDate) {
      setResult("Please select both dates.");
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    setResult(`${diffDays} day(s)`);
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
            name: "Date Difference Calculator",
            url: "https://www.calcsci.com/utility/date-difference-calculator",
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Date Difference Calculator",
            url:
              "https://www.calcsci.com/utility/date-difference-calculator",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
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
                name: "How do I calculate the difference between two dates?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Select the start and end dates and the calculator will instantly show the total number of days between them.",
                },
              },
              {
                "@type": "Question",
                name: "Can I calculate years and months?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Date difference calculations can be used to determine years, months and days between dates.",
                },
              },
            ],
          }),
        }}
      />

      <main className="bg-gray-50 min-h-screen">
        <section className="bg-blue-600 text-white py-16 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Date Difference Calculator
          </h1>
          <p className="text-xl">
            Calculate the number of days between two dates.
          </p>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Select Dates
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border border-gray-300 rounded-xl p-4"
              />

              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border border-gray-300 rounded-xl p-4"
              />
            </div>

            <button
              onClick={calculateDifference}
              className="w-full mt-8 bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700"
            >
              Calculate Difference
            </button>

            {result && (
              <div className="bg-green-50 border border-green-300 rounded-xl p-6 text-center mt-8">
                <h3 className="text-2xl font-bold text-green-700">
                  Difference
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
            <h2 className="text-3xl font-bold mb-6">
              About Date Difference Calculator
            </h2>
            <p className="text-gray-700 mb-4">
              Use our free Date Difference Calculator to
              calculate the exact number of days between
              two dates instantly.
            </p>
            <p className="text-gray-700">
              Useful for age calculations, project planning,
              travel planning and financial calculations.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-6">
              Frequently Asked Questions
            </h2>
            <h3 className="font-semibold mb-2">
              How do I calculate the difference between two dates?
            </h3>
            <p className="mb-4 text-gray-700">
              Select a start date and an end date and the calculator will instantly show the number of days between them.
            </p>
            <h3 className="font-semibold mb-2">
              Does the calculator account for leap years?
            </h3>
            <p className="mb-4 text-gray-700">
              Yes. Leap years and varying month lengths are automatically considered.
            </p>
            <h3 className="font-semibold mb-2">
              Can I calculate years and months?
            </h3>
            <p className="mb-4 text-gray-700">
              Yes. Date difference calculations can be converted into years, months and days.
            </p>
            <h3 className="font-semibold mb-2">
              Is the calculator free?
            </h3>
            <p className="text-gray-700">
              Yes. The Date Difference Calculator on CalcSci is completely free.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
