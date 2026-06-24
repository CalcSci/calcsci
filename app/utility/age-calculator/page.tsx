"use client";

import { useMemo, useState } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CalculatorSchema from "@/components/CalculatorSchema";


export default function AgeCalculatorPage() {
  const currentYear = new Date().getFullYear();

  const years = useMemo(
    () => Array.from({ length: 100 }, (_, i) => currentYear - i),
    [currentYear]
  );

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [result, setResult] = useState("");
  const [nextBirthday, setNextBirthday] = useState("");

  const today = new Date();

  const calculateAge = () => {
    if (!day || !month || !year) {
      setResult("Please select your Date of Birth.");
      setNextBirthday("");
      return;
    }

    const birthDate = new Date(
      Number(year),
      Number(month) - 1,
      Number(day)
    );

    let yearsAge =
      today.getFullYear() - birthDate.getFullYear();
    let monthsAge =
      today.getMonth() - birthDate.getMonth();
    let daysAge =
      today.getDate() - birthDate.getDate();

    if (daysAge < 0) {
      monthsAge--;
      const previousMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      );
      daysAge += previousMonth.getDate();
    }

    if (monthsAge < 0) {
      yearsAge--;
      monthsAge += 12;
    }

    setResult(
      `${yearsAge} Years, ${monthsAge} Months and ${daysAge} Days`
    );

    let next = new Date(
      today.getFullYear(),
      Number(month) - 1,
      Number(day)
    );

    if (next < today) {
      next = new Date(
        today.getFullYear() + 1,
        Number(month) - 1,
        Number(day)
      );
    }

    const diff =
      next.getTime() - today.getTime();

    const daysRemaining = Math.ceil(
      diff / (1000 * 60 * 60 * 24)
    );

    setNextBirthday(
      `${daysRemaining} day(s) remaining until your next birthday 🎂`
    );
  };

  return (
  <>
    <BreadcrumbSchema
      items={[
        {
          name: "Home",
          url: "/",
        },
        {
          name: "Utility",
          url: "/utility",
        },
        {
          name: "Age Calculator",
          url: "/utility/age-calculator",
        },
      ]}
    />
    <CalculatorSchema
      name="Age Calculator"
      description="Free online Age Calculator to calculate your exact age in years, months and days."
      url="/utility/age-calculator"
    />
    <CalculatorSchema
      name="Age Calculator"
      description="Free online Age Calculator to calculate your exact age in years, months and days."
      url="/utility/age-calculator"
    />

    <main className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Age Calculator
        </h1>

        <p className="text-xl">
          Calculate your exact age in years, months and days.
        </p>
      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-center mb-8">
            Enter Your Date of Birth
          </h2>

          <p className="text-center text-gray-600 mb-8">
            Today:
            {" "}
            {today.toLocaleDateString()}
          </p>

          <div className="grid md:grid-cols-3 gap-4">

            <select
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="border border-gray-300 rounded-xl p-4 text-lg"
            >
              <option value="">Day</option>

              {days.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>

            <select
              value={month}
              onChange={(e) => setMonth(String(e.target.selectedIndex))}
              className="border border-gray-300 rounded-xl p-4 text-lg"
            >
              <option value="">Month</option>

              {months.map((m, index) => (
                <option key={m} value={index + 1}>
                  {m}
                </option>
              ))}
            </select>

            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="border border-gray-300 rounded-xl p-4 text-lg"
            >
              <option value="">Year</option>

              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>

          </div>

          <button
            onClick={calculateAge}
            className="w-full mt-8 bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
          >
            Calculate Age
          </button>

          {result && (
            <div className="bg-green-50 border border-green-300 rounded-xl p-6 text-center mt-8">
              <h3 className="text-2xl font-bold text-green-700">
                Your Age
              </h3>

              <p className="text-xl mt-4 text-gray-800">
                {result}
              </p>

              <p className="mt-4 text-lg text-blue-700">
                {nextBirthday}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-md p-8">

          <h2 className="text-3xl font-bold mb-6">
            About Age Calculator
          </h2>

          <p className="text-gray-700 mb-4">
            Use our free online Age Calculator to calculate your exact
            age in years, months and days. It is useful for education,
            official forms, retirement planning, insurance and many
            other purposes.
          </p>

          <p className="text-gray-700">
            Simply select your birth date and instantly get your exact
            age along with the countdown to your next birthday.
          </p>

        </div>
      </section>
        </main>
  </>
  );
}