"use client";

import { useState } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CalculatorSchema from "@/components/CalculatorSchema";

export default function BMICalculatorPage() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w || h <= 0 || w <= 0) {
      setBmi("Please enter valid height and weight.");
      setCategory("");
      return;
    }

    const heightInMeters = h / 100;
    const bmiValue = w / (heightInMeters * heightInMeters);

    const finalBMI = bmiValue.toFixed(1);

    setBmi(finalBMI);

    if (bmiValue < 18.5) {
      setCategory("⚠️ Underweight");
    } else if (bmiValue < 25) {
      setCategory("✅ Normal Weight");
    } else if (bmiValue < 30) {
      setCategory("⚠️ Overweight");
    } else {
      setCategory("🚨 Obese");
    }
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
          name: "BMI Calculator",
          url: "/utility/bmi-calculator",
        },
      ]}
    />
    <CalculatorSchema
      name="BMI Calculator"
      description="Free BMI Calculator to calculate Body Mass Index and determine whether you are underweight, normal, overweight or obese."
      url="/utility/bmi-calculator"
    />
        <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">
          BMI Calculator
        </h1>

        <p className="text-xl">
          Calculate your Body Mass Index instantly.
        </p>
      </section>

      {/* Calculator */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-center mb-8">
            Enter Your Details
          </h2>

          <div className="space-y-6">

            <div>
              <label className="block mb-2 font-semibold">
                Height (cm)
              </label>

              <input
                type="number"
                placeholder="Example: 170"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full border border-gray-300 rounded-xl p-4 text-lg"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Weight (kg)
              </label>

              <input
                type="number"
                placeholder="Example: 70"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full border border-gray-300 rounded-xl p-4 text-lg"
              />
            </div>

            <button
              onClick={calculateBMI}
              className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
            >
              Calculate BMI
            </button>

            {bmi && (
              <div className="bg-green-50 border border-green-300 rounded-xl p-6 text-center">

                <h3 className="text-2xl font-bold text-green-700">
                  Your BMI
                </h3>

                <p className="text-4xl font-bold mt-4 text-gray-800">
                  {bmi}
                </p>

                <p className="text-xl mt-4 text-blue-700">
                  {category}
                </p>

              </div>
            )}

          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-md p-8">

          <h2 className="text-3xl font-bold mb-6">
            About BMI Calculator
          </h2>

          <p className="text-gray-700 mb-4">
            BMI (Body Mass Index) is a simple calculation using your
            height and weight to estimate whether your body weight is
            within a healthy range.
          </p>

          <p className="text-gray-700 mb-4">
            BMI Categories:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Underweight: Less than 18.5</li>
            <li>Normal Weight: 18.5 – 24.9</li>
            <li>Overweight: 25 – 29.9</li>
            <li>Obese: 30 and above</li>
          </ul>

        </div>
      </section>
       </main>
  </>
  );
}