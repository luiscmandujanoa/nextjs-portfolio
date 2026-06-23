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
      <h2 className="text-2xl font-semibold mb-6 text-foreground">/ About Me</h2>

      <div className="space-y-4 text-muted leading-loose">
        <p>
          I am currently focused on building modern web applications with
          Next.js and React, creating clean, functional, and scalable user
          interfaces while continuously improving my skills through personal
          projects.
        </p>

        <p>Technologies I have been working with recently include:</p>
        <ul className="grid grid-cols-2">
          {technologies.map((tech) => (
            <li key={tech} className="text-sm mb-1">
              <span className="text-accent font-bold">&gt;</span> {tech}
            </li>
          ))}
        </ul>

        <p>
          In my spare time, I stay active through exercise, watch football, and
          work on personal projects.
        </p>
      </div>
    </section>
  );
}
