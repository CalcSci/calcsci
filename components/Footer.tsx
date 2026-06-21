import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">

        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <Link
            href="/about"
            className="hover:text-yellow-300 transition"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="hover:text-yellow-300 transition"
          >
            Contact
          </Link>

          <Link
            href="/privacy-policy"
            className="hover:text-yellow-300 transition"
          >
            Privacy Policy
          </Link>

          <Link
            href="/disclaimer"
            className="hover:text-yellow-300 transition"
          >
            Disclaimer
          </Link>
        </div>

        <p className="text-gray-400 text-sm">
          © 2026 CalcSci.com. All rights reserved.
        </p>

      </div>
    </footer>
  );
}