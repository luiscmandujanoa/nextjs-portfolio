import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-lg font-semibold tracking-tight">
          Luis Mandujano
        </div>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="#hero"
            className="hover:text-accent transition"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-accent transition"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-accent transition"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-accent transition"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
