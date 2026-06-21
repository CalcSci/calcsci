export default function TermsPage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Terms & Conditions
        </h1>

        <p className="text-xl">
          Please read these terms carefully before using CalcSci.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-bold mb-4">
            Acceptance of Terms
          </h2>

          <p className="text-gray-700 mb-8">
            By accessing and using CalcSci, you agree to comply with and
            be bound by these Terms and Conditions.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Use of the Website
          </h2>

          <p className="text-gray-700 mb-8">
            You may use CalcSci for personal, educational, and
            informational purposes only. You agree not to misuse the
            website or attempt to disrupt its operation.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Accuracy of Information
          </h2>

          <p className="text-gray-700 mb-8">
            While we strive to provide accurate information and
            calculators, we do not guarantee that all content and
            calculations are error-free or suitable for every purpose.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Intellectual Property
          </h2>

          <p className="text-gray-700 mb-8">
            All content, logos, designs, and calculators on CalcSci are
            the property of CalcSci unless otherwise stated. Unauthorized
            copying or reproduction is prohibited.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Limitation of Liability
          </h2>

          <p className="text-gray-700 mb-8">
            CalcSci shall not be responsible for any losses, damages, or
            consequences arising from the use of this website or reliance
            on its information or calculations.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Changes to These Terms
          </h2>

          <p className="text-gray-700 mb-8">
            We reserve the right to modify these Terms and Conditions at
            any time. Changes will become effective immediately upon
            publication on this page.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Contact Us
          </h2>

          <p className="text-gray-700">
            If you have any questions regarding these Terms and
            Conditions, please contact us at:
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