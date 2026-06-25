"use client";

import { useState } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function LoanEligibilityCalculatorPage() {
  const [income, setIncome] = useState("");
  const [existingEmi, setExistingEmi] = useState("");
  const [tenure, setTenure] = useState("");
  const [eligibility, setEligibility] = useState("");

  const calculateEligibility = () => {
    const monthlyIncome = Number(income);
    const currentEmi = Number(existingEmi);
    const loanYears = Number(tenure);
    if (!monthlyIncome || !loanYears) return;

    const availableEmi = monthlyIncome * 0.5 - currentEmi;
    const estimatedLoan = availableEmi * loanYears * 12;

    setEligibility(estimatedLoan.toFixed(0));
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
            name: "Finance",
            url: "https://www.calcsci.com/finance",
          },
          {
            name: "Loan Eligibility Calculator",
            url: "https://www.calcsci.com/finance/loan-eligibility-calculator",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Loan Eligibility Calculator",
            url: "https://www.calcsci.com/finance/loan-eligibility-calculator",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            description:
              "Estimate your loan eligibility based on income, existing EMIs and loan tenure.",
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
                name: "What is a loan eligibility calculator?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "A loan eligibility calculator estimates how much loan you may qualify for based on your income, existing EMIs and loan tenure.",
                },
              },
              {
                "@type": "Question",
                name: "How is loan eligibility calculated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Loan eligibility is generally based on income, repayment capacity, existing debts and loan duration.",
                },
              },
              {
                "@type": "Question",
                name: "Does existing EMI affect loan eligibility?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Existing EMIs reduce repayment capacity and can lower your eligible loan amount.",
                },
              },
              {
                "@type": "Question",
                name: "Is this calculator free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. The CalcSci Loan Eligibility Calculator is completely free to use.",
                },
              },
            ],
          }),
        }}
      />
      <main className="bg-gray-50 min-h-screen">
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Loan Eligibility Calculator
        </h1>
        <p className="text-xl">Estimate Your Loan Eligibility Instantly</p>
      </section>
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Enter Your Details
          </h2>
          <div className="space-y-6">
            <input
              type="number"
              placeholder="Monthly Income (₹)"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4"
            />
            <input
              type="number"
              placeholder="Existing Monthly EMI (₹)"
              value={existingEmi}
              onChange={(e) => setExistingEmi(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4"
            />
            <input
              type="number"
              placeholder="Loan Tenure (Years)"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4"
            />
            <button
              onClick={calculateEligibility}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700"
            >
              Calculate Eligibility
            </button>
          </div>
          {eligibility && (
            <div className="mt-8 bg-green-50 border border-green-300 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Estimated Loan Eligibility
              </h3>
              <p className="text-xl">
                ₹{Number(eligibility).toLocaleString()}
              </p>
            </div>
          )}
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-3xl font-bold mb-6">
            About Loan Eligibility Calculator
          </h2>
          <p className="text-gray-700 mb-4">
            The Loan Eligibility Calculator helps estimate
            how much loan you may qualify for based on your
            monthly income, existing EMIs and desired loan tenure.
          </p>
          <p className="text-gray-700 mb-8">
            It provides a quick estimate of your borrowing
            capacity before applying for a home loan,
            personal loan or business loan.
          </p>
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <h3 className="font-semibold mb-2">
            What is a loan eligibility calculator?
          </h3>
          <p className="mb-4 text-gray-700">
            It estimates the maximum loan amount you may be
            eligible for based on your income and liabilities.
          </p>
          <h3 className="font-semibold mb-2">
            Does existing EMI affect eligibility?
          </h3>
          <p className="mb-4 text-gray-700">
            Yes. Existing EMIs reduce your repayment capacity
            and therefore reduce the loan amount you may qualify for.
          </p>
          <h3 className="font-semibold mb-2">
            Is the result exact?
          </h3>
          <p className="mb-4 text-gray-700">
            No. It is an estimate. Actual approval depends on
            lender policies, credit score and documentation.
          </p>
          <h3 className="font-semibold mb-2">
            Is this calculator free?
          </h3>
          <p className="text-gray-700">
            Yes. The CalcSci Loan Eligibility Calculator is
            completely free to use.
          </p>
        </div>
      </section>
    </main>
    </>
  );
}
