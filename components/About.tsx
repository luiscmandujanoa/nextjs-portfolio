const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "Node.js",
];

export function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-semibold mb-6">/ About Me</h2>

      <div className="space-y-4 text-gray-400 leading-relaxed">
        <p>
          I am currently focused on becoming a Software Developer, building
          modern web applications with Next.js and React.
        </p>

        <p>
          I enjoy creating clean, functional, and scalable user interfaces, and
          I am constantly improving my skills through personal projects.
        </p>

        <p>
          In my spare time, I stay active through exercise, watch football, and
          work on personal projects.
        </p>
      </div>

      <div className="mt-10">
        <h3 className="text-sm font-semibold text-gray-500 mb-3">
          Technologies
        </h3>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-sm px-3 py-1 bg-gray-100 rounded-full text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
