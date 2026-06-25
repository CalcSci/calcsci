import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex flex-wrap justify-between items-center gap-2">
        <Link href="/" className="text-2xl md:text-3xl font-bold">
          CalcSci
        </Link>

        <nav className="flex flex-wrap gap-3 md:gap-6 items-center">
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