export function Hero() {
  return (
    <section
      id="hero"
      className="max-w-5xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12"
    >
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Hi, I’m Luis.
        </h1>

        <p className="mt-6 text-gray-600 leading-relaxed">
          Frontend Developer focused on building modern web applications with
          Next.js and React.
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed">
          I enjoy creating clean, functional and performant interfaces.
          Currently focused on improving my skills through real projects.
        </p>

        <a
          href="#contact"
          className="inline-block mt-8 px-5 py-2 bg-black text-white rounded-lg hover:opacity-80 transition"
        >
          Say hi 👋
        </a>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="w-64 h-64 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
          Your image / art
        </div>
      </div>
    </section>
  );
}
