import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import data from "@/data/projects.json";

export function Projects() {
    return (
        <section id="projects" className="bg-background-alt">
            <div className="mx-auto max-w-5xl px-6 py-20">
                <h2 className="text-foreground mb-10 font-serif text-3xl font-bold">
                    / Projects
                </h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {data.projects.map((project) => (
                        <article
                            key={project.id}
                            className="bg-card border-border hover:border-border-strong hover:bg-card-hover flex flex-col rounded-xl border p-6 transition-colors"
                        >
                            {/* Header con iconos */}
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Ver código de ${project.name} en GitHub`}
                                        className="text-foreground-secondary hover:text-accent transition-colors"
                                    >
                                        <FaGithub size={20} />
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Ver demo de ${project.name}`}
                                            className="text-foreground-secondary hover:text-accent transition-colors"
                                        >
                                            <FiExternalLink size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Contenido */}
                            <div className="flex flex-1 flex-col">
                                <h3 className="text-foreground mb-2 font-serif text-lg font-bold">
                                    {project.name}
                                </h3>
                                <p className="text-foreground-secondary flex-1 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Stack */}
                            <div className="border-border mt-6 flex flex-wrap gap-2 border-t pt-4">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-accent bg-accent-subtle rounded px-2 py-0.5 font-mono text-xs"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
