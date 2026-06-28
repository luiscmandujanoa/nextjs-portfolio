import Link from "next/link";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export function Navbar() {
    return (
        <header className="bg-background/80 border-border sticky top-0 z-50 border-b backdrop-blur-md">
            <nav
                className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
                aria-label="Navegación principal"
            >
                <Link
                    href="#hero"
                    className="text-foreground hover:text-accent font-serif text-lg font-semibold tracking-tight transition-colors"
                    aria-label="Ir al inicio"
                >
                    Luis Mandujano
                </Link>

                <ul className="flex list-none items-center gap-6" role="list">
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className="text-foreground-secondary hover:text-accent text-sm font-medium transition-colors"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
