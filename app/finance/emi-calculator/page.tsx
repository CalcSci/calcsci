"use client";

import { useState } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CalculatorSchema from "@/components/CalculatorSchema";

export default function EMICalculatorPage() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");

  const [emi, setEmi] = useState("");
  const [totalInterest, setTotalInterest] = useState("");
  const [totalPayment, setTotalPayment] = useState("");

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const years = parseFloat(tenure);

    if (!P || !annualRate || !years || P <= 0 || annualRate <= 0 || years <= 0) {
      setEmi("Please enter valid values.");
      setTotalInterest("");
      setTotalPayment("");
      return;
    }

    const r = annualRate / 12 / 100;
    const n = years * 12;

    const emiValue =
      (P * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    const totalPaymentValue = emiValue * n;
    const totalInterestValue = totalPaymentValue - P;

    setEmi(emiValue.toFixed(2));
    setTotalPayment(totalPaymentValue.toFixed(2));
    setTotalInterest(totalInterestValue.toFixed(2));
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
          name: "Finance",
          url: "/finance",
        },
        {
          name: "EMI Calculator",
          url: "/finance/emi-calculator",
        },
      ]}
    />
    <CalculatorSchema
      name="EMI Calculator"
      description="Free EMI Calculator to calculate monthly loan EMI, total interest and total payment."
      url="/finance/emi-calculator"
    />
        <main className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">
          EMI Calculator
        </h1>

        <p className="text-xl">
          Calculate your monthly loan EMI instantly.
        </p>
      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-center mb-8">
            Enter Loan Details
          </h2>

          <div className="space-y-6">

            <div>
              <label className="block mb-2 font-semibold">
                Loan Amount (₹)
              </label>

              <input
                type="number"
                placeholder="Example: 1000000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="w-full border border-gray-300 rounded-xl p-4 text-lg"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Annual Interest Rate (%)
              </label>

              <input
                type="number"
                placeholder="Example: 8.5"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full border border-gray-300 rounded-xl p-4 text-lg"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Loan Tenure (Years)
              </label>

              <input
                type="number"
                placeholder="Example: 20"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
                className="w-full border border-gray-300 rounded-xl p-4 text-lg"
              />
            </div>

            <button
              onClick={calculateEMI}
              className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
            >
              Calculate EMI
            </button>

            {emi && (
              <div className="grid gap-6 md:grid-cols-3 mt-8">

                <div className="bg-green-50 border border-green-300 rounded-xl p-6 text-center">
                  <h3 className="font-bold text-green-700 mb-2">
                    Monthly EMI
                  </h3>

                  <p className="text-2xl font-bold">
                    ₹ {emi}
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-6 text-center">
                  <h3 className="font-bold mb-2">
                    Total Interest
                  </h3>

                  <p className="text-2xl font-bold">
                    ₹ {totalInterest}
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-300 rounded-xl p-6 text-center">
                  <h3 className="font-bold mb-2">
                    Total Payment
                  </h3>

                  <p className="text-2xl font-bold">
                    ₹ {totalPayment}
                  </p>
                </div>

              </div>
            )}

          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-md p-8">

          <h2 className="text-3xl font-bold mb-6">
            About EMI Calculator
          </h2>

          <p className="text-gray-700 mb-4">
            EMI (Equated Monthly Installment) is the fixed monthly
            amount you pay to repay a loan over a specified period.
          </p>

          <p className="text-gray-700 mb-4">
            Our free EMI Calculator helps you estimate:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Monthly EMI amount</li>
            <li>Total interest payable</li>
            <li>Total amount payable to the lender</li>
          </ul>

        </div>
      </section>
        </main>
  </>
  );
}