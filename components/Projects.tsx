import { FaGithub } from "react-icons/fa";
import data from "@/data/projects.json";

export function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-semibold mb-10 text-foreground">
        / Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {data.projects.map((project) => (
          <div
            key={project.id}
            className="bg-card rounded-xl p-5 hover:shadow-md transition"
          >
            <div className="flex gap-4 text-sm">
              <a href={project.repo} target="_blank" className="text-accent">
                <FaGithub size={20} />
              </a>

              {project.live && (
                <a href={project.live} target="_blank" className="text-accent">
                  Live
                </a>
              )}
            </div>

            <h3 className="text-lg font-semibold mt-4">{project.name}</h3>

            <p className="text-muted mt-2 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.stack.map((tech) => (
                <span key={tech} className="text-xs py-1 text-muted">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
