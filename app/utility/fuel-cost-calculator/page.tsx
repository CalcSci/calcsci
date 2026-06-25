"use client";

import { useState } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function FuelCostCalculatorPage() {
  const [distance, setDistance] = useState("");
  const [mileage, setMileage] = useState("");
  const [fuelPrice, setFuelPrice] = useState("");
  const [fuelNeeded, setFuelNeeded] = useState("");
  const [tripCost, setTripCost] = useState("");

  const calculateFuelCost = () => {
    const d = Number(distance);
    const m = Number(mileage);
    const p = Number(fuelPrice);
    if (!d || !m || !p || d <= 0 || m <= 0 || p <= 0) {
      setFuelNeeded("Please enter valid values.");
      setTripCost("");
      return;
    }
    const liters = d / m;
    const cost = liters * p;
    setFuelNeeded(liters.toFixed(2));
    setTripCost(cost.toFixed(2));
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
            name: "Fuel Cost Calculator",
            url:
              "https://www.calcsci.com/utility/fuel-cost-calculator",
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Fuel Cost Calculator",
            url: "https://www.calcsci.com/utility/fuel-cost-calculator",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            description:
              "Calculate fuel consumption and trip cost based on distance, mileage and fuel price.",
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
                name: "How do I calculate fuel cost for a trip?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Divide total distance by vehicle mileage to find fuel needed, then multiply by fuel price.",
                },
              },
              {
                "@type": "Question",
                name: "Can I calculate petrol trip cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Enter distance, mileage and petrol price to estimate trip cost.",
                },
              },
              {
                "@type": "Question",
                name: "Can I calculate diesel trip cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. The calculator works for diesel, petrol and other fuels.",
                },
              },
              {
                "@type": "Question",
                name: "Is this Fuel Cost Calculator free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. CalcSci provides this calculator free of charge.",
                },
              },
            ],
          }),
        }}
      />

      <main className="bg-gray-50 min-h-screen">
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 px-4">Fuel Cost Calculator</h1>
        <p className="text-base md:text-xl px-4">Calculate petrol and diesel trip costs instantly.</p>
      </section>
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Fuel Cost Calculator</h2>
          <div className="grid gap-4">
            <input
              type="number"
              placeholder="Distance (km)"
              value={distance}
              onChange={(e) =>
                setDistance(e.target.value)
              }
                className="border border-gray-300 rounded-xl p-3 md:p-4 text-base md:text-lg w-full"
            />
            <input
              type="number"
              placeholder="Vehicle Mileage (km/l)"
              value={mileage}
              onChange={(e) =>
                setMileage(e.target.value)
              }
                className="border border-gray-300 rounded-xl p-3 md:p-4 text-base md:text-lg w-full"
            />
            <input
              type="number"
              placeholder="Fuel Price (₹ per litre)"
              value={fuelPrice}
              onChange={(e) =>
                setFuelPrice(e.target.value)
              }
                className="border border-gray-300 rounded-xl p-3 md:p-4 text-base md:text-lg w-full"
            />
          </div>
          <button
            onClick={calculateFuelCost}
            className="w-full mt-6 md:mt-8 bg-blue-600 text-white py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold hover:bg-blue-700"
          >
            Calculate Fuel Cost
          </button>
          {fuelNeeded && (
            <div className="bg-green-50 border border-green-300 rounded-xl p-6 text-center mt-8">
              <h3 className="text-2xl font-bold text-green-700">Trip Results</h3>
              <p className="text-lg mt-4">Fuel Required: <strong>{fuelNeeded} Litres</strong></p>
              <p className="text-lg mt-2">Estimated Cost: <strong>₹{tripCost}</strong></p>
            </div>
          )}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About Fuel Cost Calculator</h2>
          <p className="text-gray-700 mb-4">
            Fuel Cost Calculator helps estimate how much fuel
            your vehicle will consume and the total trip cost.
            It is useful for road trips, business travel and
            daily commuting.
          </p>
          <p className="text-gray-700 mb-8">
            Simply enter distance, vehicle mileage and current
            fuel price to get an instant estimate.
          </p>
          <h2 className="text-2xl font-bold mb-6">Example Calculation</h2>
          <div className="bg-gray-50 border rounded-xl p-6 mb-8">
            <p>Distance: 500 km</p>
            <p>Mileage: 20 km/l</p>
            <p>Fuel Price: ₹100/l</p>
            <p>Fuel Needed: 25 Litres</p>
            <p>Trip Cost: ₹2,500</p>
          </div>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <h3 className="font-semibold mb-2">How is fuel cost calculated?</h3>
          <p className="mb-4 text-gray-700">Fuel cost equals fuel required multiplied by fuel price per litre.</p>
          <h3 className="font-semibold mb-2">Can I use it for petrol and diesel?</h3>
          <p className="mb-4 text-gray-700">Yes. The calculator works with any fuel type.</p>
          <h3 className="font-semibold mb-2">Is this calculator free?</h3>
          <p className="text-gray-700">Yes. You can use the Fuel Cost Calculator without any cost.</p>
        </div>
      </section>
    </main>
  </>);
}
