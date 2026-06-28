import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"],
    weight: ["400", "700"],
});

const dmSans = DM_Sans({
    variable: "--font-dm-sans",
    subsets: ["latin"],
    weight: ["400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
    weight: ["400", "500"],
});

export const metadata: Metadata = {
    title: "Luis Mandujano · Software Developer",
    description:
        "Software Developer especializado en Next.js, React y análisis de datos. Mira mis proyectos y experiencia.",
    openGraph: {
        title: "Luis Mandujano · Software Developer",
        description:
            "Software Developer especializado en Next.js, React y análisis de datos.",
        url: "https://luismandujano.vercel.app",
        siteName: "Luis Mandujano",
        locale: "es_PE",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Luis Mandujano · Software Developer",
        description:
            "Software Developer especializado en Next.js, React y análisis de datos.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="es"
            className={`${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
        >
            <body className="bg-background text-foreground flex min-h-screen flex-col">
                <Navbar />
                <main className="container mx-auto flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
