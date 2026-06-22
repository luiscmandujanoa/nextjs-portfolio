import data from "@/data/data.json";

export function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-semibold mb-10">/ Projects</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {data.projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">{project.name}</h3>

            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-gray-500 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-5 text-sm">
              <a
                href={project.repo}
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  className="text-green-600 hover:underline"
                >
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
