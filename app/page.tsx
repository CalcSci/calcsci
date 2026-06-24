"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const calculators = [
    {
      name: "Age Calculator",
      icon: "📅",
      href: "/utility/age-calculator",
    },
    {
      name: "BMI Calculator",
      icon: "⚖️",
      href: "/utility/bmi-calculator",
    },
    {
      name: "Percentage Calculator",
      icon: "📊",
      href: "/utility/percentage-calculator",
    },
    {
      name: "EMI Calculator",
      icon: "💰",
      href: "/finance/emi-calculator",
    },
    {
      name: "GST Calculator",
      icon: "🧾",
      href: "/finance/gst-calculator",
    },
  ];

  const filteredCalculators = useMemo(() => {
    return calculators.filter((calculator) =>
      calculator.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <main className="bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "CalcSci",
            url: "https://www.calcsci.com",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.calcsci.com/?q={search_term_string}",
              "query-input":
                "required name=search_term_string",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-blue-600 text-white py-12 shadow-md">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">
            CalcSci
          </h1>

          <p className="mt-4 text-xl">
            Smart Calculators for Everyday Life &
            Engineering
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Find the Right Calculator in Seconds
        </h2>

        <input
          type="text"
          placeholder="Search calculators..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="mt-8 w-full max-w-2xl p-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {search && (
          <div className="max-w-2xl mx-auto mt-4 bg-white rounded-xl shadow-md p-4 text-left">
            {filteredCalculators.length > 0 ? (
              filteredCalculators.map(
                (calculator) => (
                  <Link
                    key={calculator.href}
                    href={calculator.href}
                    className="block p-3 rounded-lg hover:bg-blue-50"
                  >
                    {calculator.icon}{" "}
                    {calculator.name}
                  </Link>
                )
              )
            ) : (
              <p className="text-gray-500">
                No calculators found.
              </p>
            )}
          </div>
        )}
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3 pb-16">
        {/* Finance */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-2xl font-bold mb-6 text-blue-600">
            📊 Finance
          </h3>

          <div className="space-y-3">
            <Link href="/finance/emi-calculator">
              <div className="bg-blue-50 border border-blue-200 p-3 rounded-xl hover:bg-blue-100 cursor-pointer">
                💰 EMI Calculator
              </div>
            </Link>

            <div className="bg-gray-100 p-3 rounded-xl">
              📈 SIP Calculator
            </div>

            <Link href="/finance/gst-calculator">
              <div className="bg-blue-50 border border-blue-200 p-3 rounded-xl hover:bg-blue-100 cursor-pointer">
                🧾 GST Calculator
              </div>
            </Link>
          </div>
        </div>

        {/* Utility */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-2xl font-bold mb-6 text-blue-600">
            🧮 Utility
          </h3>

          <div className="space-y-3">
            <Link href="/utility/age-calculator">
              <div className="bg-blue-50 border border-blue-200 p-3 rounded-xl hover:bg-blue-100 cursor-pointer">
                📅 Age Calculator
              </div>
            </Link>

            <Link href="/utility/bmi-calculator">
              <div className="bg-blue-50 border border-blue-200 p-3 rounded-xl hover:bg-blue-100 cursor-pointer">
                ⚖️ BMI Calculator
              </div>
            </Link>

            <Link href="/utility/percentage-calculator">
              <div className="bg-blue-50 border border-blue-200 p-3 rounded-xl hover:bg-blue-100 cursor-pointer">
                📊 Percentage Calculator
              </div>
            </Link>

            <div className="bg-gray-100 p-3 rounded-xl">
              ⛽ Fuel Cost Calculator
            </div>
          </div>
        </div>

        {/* Engineering */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-2xl font-bold mb-6 text-blue-600">
            ⚙️ Engineering
          </h3>

          <div className="space-y-3">
            <div className="bg-gray-100 p-3 rounded-xl">
              🔌 Ohm&apos;s Law Calculator
            </div>

            <div className="bg-gray-100 p-3 rounded-xl">
              💻 Binary Converter
            </div>

            <div className="bg-gray-100 p-3 rounded-xl">
              📡 dB Calculator
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}