
export default function AboutPage() {
  return (
         <main className="bg-gray-50 min-h-screen">

        <section className="bg-blue-600 text-white py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 px-4">
              About CalcSci
            </h1>

            <p className="text-base md:text-xl px-4">
              Free Online Calculators & Scientific Tools
            </p>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-16">

          <div className="bg-white p-8 rounded-2xl shadow-lg mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our Mission
            </h2>

            <p className="text-gray-700">
              CalcSci aims to make calculations simple,
              accurate and accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-blue-100 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-2">
                Finance
              </h3>
              <p>EMI, SIP, GST and loan calculators.</p>
            </div>

            <div className="bg-green-100 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-2">
                Health
              </h3>
              <p>BMI, calorie and pregnancy calculators.</p>
            </div>

            <div className="bg-purple-100 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-2">
                Science
              </h3>
              <p>Engineering and educational calculators.</p>
            </div>

          </div>

        </section>

      </main>

  );
}