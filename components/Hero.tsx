import Image from "next/image";

export function Hero() {
    return (
        <section
            id="hero"
            className="mx-auto flex max-w-5xl flex-col items-center gap-12 px-6 py-24 md:flex-row"
        >
            <div className="flex-1 space-y-6">
                <h1 className="text-foreground font-serif text-5xl leading-tight font-bold tracking-tight md:text-6xl">
                    Hi, I'm <span className="text-accent">Luis</span>
                    <span className="text-accent animate-blink ml-2">|</span>
                </h1>

                <p className="text-foreground-secondary max-w-md leading-relaxed">
                    Software Developer focused on building modern web
                    applications with Next.js and React. I enjoy creating clean,
                    functional and performant interfaces.
                </p>

                <div className="flex items-center gap-4">
                    <a
                        href="#projects"
                        className="bg-accent text-background hover:bg-accent-hover inline-block rounded-lg px-5 py-2.5 font-sans font-medium transition-colors"
                    >
                        View projects
                    </a>
                    <a
                        href="#contact"
                        className="border-border text-foreground-secondary hover:text-accent hover:border-accent inline-block rounded-lg border px-5 py-2.5 font-sans transition-colors"
                    >
                        Contact me
                    </a>
                </div>
            </div>

            <div className="flex flex-1 justify-center">
                <Image
                    src="/illustrations/undraw_programming_j1zw.svg"
                    alt="Luis Mandujano, Software Developer"
                    width={400}
                    height={400}
                    priority
                />
            </div>
        </section>
    );
}
