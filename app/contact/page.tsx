export default function ContactPage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Contact Us
        </h1>

        <p className="text-xl">
          We'd love to hear from you.
        </p>
      </section>

      {/* Contact Card */}
      <section className="max-w-4xl mx-auto px-6 py-16">

        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">

          <h2 className="text-3xl font-bold mb-6">
            Get in Touch
          </h2>

          <p className="text-gray-700 mb-4">
            Thank you for visiting CalcSci.
          </p>

          <p className="text-gray-700 mb-4">
            If you have any questions, suggestions, bug reports,
            or calculator requests, feel free to contact us.
          </p>

          <div className="mt-8">
            <p className="text-lg font-semibold">
              📧 Email
            </p>

            <p className="text-blue-600 text-lg mt-2">
              support@calcsci.com
            </p>
          </div>

          <p className="text-gray-500 mt-8">
            We usually respond within 24-48 hours.
          </p>

        </div>

      </section>

    </main>
  );
}