export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 shadow-md">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold">CalcSci</h1>
          <p className="mt-2 text-lg">
            Smart Calculators for Everyday Life & Engineering
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Find the Right Calculator in Seconds
        </h2>

        <input
          type="text"
          placeholder="Search calculators..."
          className="mt-8 w-full max-w-2xl p-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3 pb-16">
        {/* Finance */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-2xl font-bold mb-4">📊 Finance</h3>

          <ul className="space-y-2">
            <li>💰 EMI Calculator</li>
            <li>📈 SIP Calculator</li>
            <li>🧾 GST Calculator</li>
          </ul>
        </div>

        {/* Utility */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-2xl font-bold mb-4">🧮 Utility</h3>

          <ul className="space-y-2">
            <li>📅 Age Calculator</li>
            <li>⚖️ BMI Calculator</li>
            <li>⛽ Fuel Cost Calculator</li>
          </ul>
        </div>

        {/* Engineering */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-2xl font-bold mb-4">⚙️ Engineering</h3>

          <ul className="space-y-2">
            <li>🔌 Ohm's Law Calculator</li>
            <li>💻 Binary Converter</li>
            <li>📡 dB Calculator</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        © 2026 CalcSci.com | Smart Calculators for Everyone
      </footer>
    </main>
  );
}