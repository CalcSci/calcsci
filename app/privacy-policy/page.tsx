export default function PrivacyPolicyPage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Privacy Policy
        </h1>

        <p className="text-xl">
          Your privacy is important to us.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-bold mb-4">
            Information We Collect
          </h2>

          <p className="text-gray-700 mb-8">
            CalcSci may collect limited information such as email
            addresses submitted through our contact page and anonymous
            usage information through analytics tools.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Cookies
          </h2>

          <p className="text-gray-700 mb-8">
            We may use cookies to improve user experience, remember
            preferences, and understand website traffic patterns.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Google Analytics
          </h2>

          <p className="text-gray-700 mb-8">
            We may use Google Analytics to understand how visitors use
            our website and improve our services.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Advertising
          </h2>

          <p className="text-gray-700 mb-8">
            In the future, CalcSci may use advertising services such as
            Google AdSense. Third-party vendors may use cookies to serve
            ads based on users' visits to this website and other websites.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Third-Party Links
          </h2>

          <p className="text-gray-700 mb-8">
            Our website may contain links to external websites. We are
            not responsible for the privacy practices of those websites.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Contact Us
          </h2>

          <p className="text-gray-700">
            If you have any questions regarding this Privacy Policy,
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