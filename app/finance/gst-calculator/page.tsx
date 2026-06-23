"use client";

import { useState } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
export default function GSTCalculatorPage() {
  const [amount, setAmount] = useState("");
  const [gstRate, setGstRate] = useState("18");
  const [gstType, setGstType] = useState("exclusive");

  const [gstAmount, setGstAmount] = useState("");
  const [finalAmount, setFinalAmount] = useState("");

  const calculateGST = () => {
    const amt = parseFloat(amount);
    const rate = parseFloat(gstRate);

    if (!amt || amt <= 0) {
      setGstAmount("Please enter a valid amount.");
      setFinalAmount("");
      return;
    }

    let gst = 0;
    let total = 0;

    if (gstType === "exclusive") {
      gst = (amt * rate) / 100;
      total = amt + gst;
    } else {
      gst = (amt * rate) / (100 + rate);
      total = amt;
    }

    setGstAmount(gst.toFixed(2));
    setFinalAmount(total.toFixed(2));
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
          name: "GST Calculator",
          url: "/finance/gst-calculator",
        },
      ]}
    />
    <main className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">
          GST Calculator
        </h1>

        <p className="text-xl">
          Calculate GST Inclusive and Exclusive Amounts instantly.
        </p>
      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-center mb-8">
            Enter GST Details
          </h2>

          <div className="space-y-6">

            <div>
              <label className="block mb-2 font-semibold">
                Amount (₹)
              </label>

              <input
                type="number"
                value={amount}
                onChange={(e) =>
                  setAmount(e.target.value)
                }
                placeholder="Example: 1000"
                className="w-full border border-gray-300 rounded-xl p-4 text-lg"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                GST Rate
              </label>

              <select
                value={gstRate}
                onChange={(e) =>
                  setGstRate(e.target.value)
                }
                className="w-full border border-gray-300 rounded-xl p-4 text-lg"
              >
                <option value="5">5%</option>
                <option value="12">12%</option>
                <option value="18">18%</option>
                <option value="28">28%</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                GST Type
              </label>

              <select
                value={gstType}
                onChange={(e) =>
                  setGstType(e.target.value)
                }
                className="w-full border border-gray-300 rounded-xl p-4 text-lg"
              >
                <option value="exclusive">
                  Add GST
                </option>

                <option value="inclusive">
                  Remove GST
                </option>
              </select>
            </div>

            <button
              onClick={calculateGST}
              className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700"
            >
              Calculate GST
            </button>

            {gstAmount && (
              <div className="grid md:grid-cols-2 gap-6 mt-8">

                <div className="bg-green-50 border border-green-300 rounded-xl p-6 text-center">
                  <h3 className="font-bold text-green-700 mb-2">
                    GST Amount
                  </h3>

                  <p className="text-3xl font-bold">
                    ₹ {gstAmount}
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-300 rounded-xl p-6 text-center">
                  <h3 className="font-bold mb-2">
                    Final Amount
                  </h3>

                  <p className="text-3xl font-bold">
                    ₹ {finalAmount}
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
            About GST Calculator
          </h2>

          <p className="text-gray-700 mb-4">
            GST (Goods and Services Tax) is an indirect tax in India.
            This calculator helps you add or remove GST from an amount
            instantly.
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>5% GST</li>
            <li>12% GST</li>
            <li>18% GST</li>
            <li>28% GST</li>
          </ul>

        </div>
      </section>
       </main>
  </>
  );
}