"use client";

import { useState } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function DiscountCalculatorPage() {
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercent, setDiscountPercent] = useState("");
  const [discountAmount, setDiscountAmount] = useState("");
  const [finalPrice, setFinalPrice] = useState("");

  const calculateDiscount = () => {
    const price = Number(originalPrice);
    const discount = Number(discountPercent);
    if (
      !price ||
      price <= 0 ||
      discount < 0 ||
      discount > 100
    ) {
      setDiscountAmount("Please enter valid values.");
      setFinalPrice("");
      return;
    }
    const amount = (price * discount) / 100;
    const salePrice = price - amount;
    setDiscountAmount(amount.toFixed(2));
    setFinalPrice(salePrice.toFixed(2));
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
            name: "Discount Calculator",
            url:
              "https://www.calcsci.com/finance/discount-calculator",
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Discount Calculator",
            url: "https://www.calcsci.com/finance/discount-calculator",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            description:
              "Calculate discount amount, savings and final sale price instantly.",
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
                name: "How do you calculate a discount?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Multiply the original price by the discount percentage and divide by 100.",
                },
              },
              {
                "@type": "Question",
                name: "How do I calculate the final sale price?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Subtract the discount amount from the original price.",
                },
              },
              {
                "@type": "Question",
                name: "Can I calculate percentage savings?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Enter the original price and discount percentage to see total savings.",
                },
              },
              {
                "@type": "Question",
                name: "Is this Discount Calculator free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. CalcSci provides this calculator completely free.",
                },
              },
            ],
          }),
        }}
      />

      <main className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 px-4">Discount Calculator</h1>
        <p className="text-base md:text-xl px-4">Calculate discount amount and final sale price instantly.</p>
      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Discount Calculator</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="number"
              placeholder="Original Price"
              value={originalPrice}
              onChange={(e) =>
                setOriginalPrice(e.target.value)
              }
              className="border border-gray-300 rounded-xl p-3 md:p-4 text-base md:text-lg w-full"
            />
            <input
              type="number"
              placeholder="Discount (%)"
              value={discountPercent}
              onChange={(e) =>
                setDiscountPercent(e.target.value)
              }
              className="border border-gray-300 rounded-xl p-3 md:p-4 text-base md:text-lg w-full"
            />
          </div>
          <button
            onClick={calculateDiscount}
            className="w-full mt-6 md:mt-8 bg-blue-600 text-white py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold hover:bg-blue-700"
          >
            Calculate Discount
          </button>
          {discountAmount && (
            <div className="bg-green-50 border border-green-300 rounded-xl p-6 text-center mt-8">
              <h3 className="text-2xl font-bold text-green-700">Results</h3>
              <p className="text-lg mt-4">Discount Amount: <strong>{discountAmount}</strong></p>
              <p className="text-lg mt-2">Final Price: <strong>{finalPrice}</strong></p>
            </div>
          )}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About Discount Calculator</h2>
          <p className="text-gray-700 mb-4">
            Discount Calculator helps shoppers quickly determine how much money they save during sales,
            promotions and special offers.
          </p>
          <p className="text-gray-700 mb-8">
            Enter the original price and discount percentage to instantly calculate your savings and final
            purchase price.
          </p>
          <h2 className="text-2xl font-bold mb-6">Example Calculation</h2>
          <div className="bg-gray-50 border rounded-xl p-6 mb-8">
            <p>Original Price: ₹1,000</p>
            <p>Discount: 20%</p>
            <p>Savings: ₹200</p>
            <p>Final Price: ₹800</p>
          </div>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <h3 className="font-semibold mb-2">How is discount calculated?</h3>
          <p className="mb-4 text-gray-700">Multiply the original price by the discount percentage and divide by 100.</p>
          <h3 className="font-semibold mb-2">What is the sale price?</h3>
          <p className="mb-4 text-gray-700">Sale price equals original price minus the discount amount.</p>
          <h3 className="font-semibold mb-2">Is this calculator free?</h3>
          <p className="text-gray-700">Yes. You can use it unlimited times without any charges.</p>
        </div>
      </section>
    </main>
  </>);
}
