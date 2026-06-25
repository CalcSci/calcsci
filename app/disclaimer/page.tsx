export default function DisclaimerPage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 px-4">
            Disclaimer
        </h1>

          <p className="text-base md:text-xl px-4">
            These calculators are provided "as is" without any warranties.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-bold mb-4">
            General Information
          </h2>

          <p className="text-gray-700 mb-8">
            The information and calculators provided on CalcSci are for
            educational and informational purposes only.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Accuracy of Calculations
          </h2>

          <p className="text-gray-700 mb-8">
            While we strive to provide accurate calculations and
            information, we do not guarantee that all results are
            error-free, complete, or suitable for every situation.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            No Professional Advice
          </h2>

          <p className="text-gray-700 mb-8">
            The calculators and content on this website should not be
            considered financial, medical, legal, engineering, or other
            professional advice. Users should verify important decisions
            with qualified professionals.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Limitation of Liability
          </h2>

          <p className="text-gray-700 mb-8">
            CalcSci and its owners shall not be held responsible for any
            losses, damages, or consequences arising from the use of this
            website or reliance on its calculations.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Contact Us
          </h2>

          <p className="text-gray-700">
            If you have any questions regarding this Disclaimer,
            please contact us at:
            <br />
            <span className="font-semibold text-blue-600">
              contact@calcsci.com
            </span>
          </p>

        </div>

      </section>

    </main>
  );
}