import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          CalcSci
        </Link>

        <nav className="flex gap-6">
          <Link href="/" className="hover:text-yellow-300">
            Home
          </Link>

          <Link href="/about" className="hover:text-yellow-300">
            About
          </Link>

          <Link href="/contact" className="hover:text-yellow-300">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}