export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">About CalcSci</h1>

      <p className="mb-4">
        Welcome to CalcSci, your trusted destination for free online
        calculators and scientific tools.
      </p>

      <p className="mb-4">
        Our mission is to simplify complex calculations through accurate,
        easy-to-use, and fast web-based tools.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        What We Offer
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Mathematics Calculators</li>
        <li>Finance Calculators</li>
        <li>Health & Fitness Calculators</li>
        <li>Unit Conversion Tools</li>
        <li>Engineering Calculators</li>
        <li>Educational Calculation Tools</li>
      </ul>

      <p className="mt-8">
        We believe everyone should have access to reliable calculation tools
        without downloading apps or paying subscriptions.
      </p>
    </main>
  );
}