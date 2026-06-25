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
              {
                "@type": "Question",
                name: "What salary is required for a ₹50 lakh home loan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "A ₹50 lakh home loan typically requires a monthly salary of around ₹1.5 lakh or higher, depending on the lender's FOIR requirements and existing liabilities.",
                },
              },
              {
                "@type": "Question",
                name: "What is FOIR?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "FOIR stands for Fixed Obligation to Income Ratio and measures the percentage of income used to pay fixed obligations like EMIs.",
                },
              },
              {
                "@type": "Question",
                name: "Can a self-employed person use this calculator?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Self-employed borrowers can also use this calculator, but actual eligibility may vary based on their income proof and business stability.",
                },
              },
              {
                "@type": "Question",
                name: "Does credit score affect eligibility?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. A strong credit score improves loan eligibility by showing better repayment history and lower risk to lenders.",
                },
              },
              {
                "@type": "Question",
                name: "Can I increase my loan eligibility?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. You can increase eligibility by reducing existing EMIs, improving credit score, or adding a co-applicant.",
                },
              },
              {
                "@type": "Question",
                name: "How do banks calculate eligibility?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Banks calculate eligibility using income, expenses, existing debts, credit history, age and employment status.",
                },
              },
            ],
          }),
        }}
      />
      <main className="bg-gray-50 min-h-screen">
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 px-4">
          Loan Eligibility Calculator
        </h1>
        <p className="text-base md:text-xl px-4">Estimate Your Loan Eligibility Instantly</p>
      </section>
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Enter Your Details
          </h2>
          <div className="space-y-6">
            <input
              type="number"
              placeholder="Monthly Income (₹)"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-base md:text-lg"
            />
            <input
              type="number"
              placeholder="Existing Monthly EMI (₹)"
              value={existingEmi}
              onChange={(e) => setExistingEmi(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-base md:text-lg"
            />
            <input
              type="number"
              placeholder="Loan Tenure (Years)"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-base md:text-lg"
            />
            <button
              onClick={calculateEligibility}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700"
            >
              Calculate Eligibility
            </button>
          </div>
          {eligibility && (
            <div className="mt-8 bg-green-50 border border-green-300 rounded-xl p-4 md:p-6">
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
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
            How Loan Eligibility Is Calculated
          </h2>
          <p className="text-gray-700 mb-4">
            Loan eligibility is based on several key factors that
            lenders evaluate before approving a loan.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li>Monthly income</li>
            <li>Existing EMIs</li>
            <li>Loan tenure</li>
            <li>Interest rate</li>
            <li>FOIR (Fixed Obligation to Income Ratio)</li>
          </ul>
          <h2 className="text-2xl font-bold mb-6">
            Factors Affecting Loan Eligibility
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li>Salary</li>
            <li>Credit score</li>
            <li>Age</li>
            <li>Employment type</li>
            <li>Existing debts</li>
          </ul>
          <h2 className="text-2xl font-bold mb-6">
            Tips to Improve Loan Eligibility
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li>Reduce EMIs</li>
            <li>Improve credit score</li>
            <li>Increase down payment</li>
            <li>Apply with a co-applicant</li>
          </ul>
          <h2 className="text-2xl font-bold mb-6">
            Example Calculation
          </h2>
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 mb-8">
            <p className="text-gray-700 mb-2">
              Monthly Income: <strong>₹80,000</strong>
            </p>
            <p className="text-gray-700 mb-2">
              Existing EMI: <strong>₹10,000</strong>
            </p>
            <p className="text-gray-700 mb-2">
              Tenure: <strong>20 Years</strong>
            </p>
            <p className="text-gray-700">
              Eligible Loan: <strong>₹45,00,000</strong>
            </p>
          </div>
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
            How is loan eligibility calculated?
          </h3>
          <p className="mb-4 text-gray-700">
            Lenders look at income, EMIs, tenure, FOIR and credit history to calculate eligibility.
          </p>
          <h3 className="font-semibold mb-2">
            What salary is required for a ₹50 lakh home loan?
          </h3>
          <p className="mb-4 text-gray-700">
            A salary of around ₹1.5 lakh per month may be required, depending on the lender and your existing liabilities.
          </p>
          <h3 className="font-semibold mb-2">
            What is FOIR?
          </h3>
          <p className="mb-4 text-gray-700">
            FOIR is the Fixed Obligation to Income Ratio, measuring how much of your income goes toward fixed payments like EMIs.
          </p>
          <h3 className="font-semibold mb-2">
            Can a self-employed person use this calculator?
          </h3>
          <p className="mb-4 text-gray-700">
            Yes. Self-employed users can use it, though actual lender eligibility may depend on their income documentation.
          </p>
          <h3 className="font-semibold mb-2">
            Does credit score affect eligibility?
          </h3>
          <p className="mb-4 text-gray-700">
            Yes. A strong credit score improves your chances of higher loan eligibility and better interest rates.
          </p>
          <h3 className="font-semibold mb-2">
            Can I increase my loan eligibility?
          </h3>
          <p className="mb-4 text-gray-700">
            Yes. You can increase eligibility by lowering EMIs, improving your credit score, or adding a co-applicant.
          </p>
          <h3 className="font-semibold mb-2">
            How do banks calculate eligibility?
          </h3>
          <p className="text-gray-700">
            Banks calculate eligibility using income, existing debts, credit score, age and employment stability.
          </p>
        </div>
      </section>
    </main>
    </>
  );
}
