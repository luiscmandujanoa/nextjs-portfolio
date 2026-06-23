import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="max-w-5xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12"
    >
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Hi, I’m <span className="text-accent">Luis</span>.
          <span className="text-accent animate-blink ml-1">|</span>
        </h1>

        <p className="mt-6 text-muted leading-loose">
          Software Developer focused on building modern web applications with
          Next.js and React. I enjoy creating clean, functional and performant
          interfaces. Currently focused on improving my skills through real
          projects.
        </p>

        <a
          href="#contact"
          className="inline-block mt-8 px-5 py-2 border border-accent rounded-lg hover:bg-foreground transition text-accent"
        >
          Let's work together
        </a>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="w-64 h-64 rounded-2xl flex items-center justify-center text-gray-400">
          <Image
            src="/illustrations/undraw_programming_j1zw.svg"
            alt="Developer illustration"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
