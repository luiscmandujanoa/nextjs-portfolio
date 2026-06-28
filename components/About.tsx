const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Node.js",
    "NestJS",
];

export function About() {
    return (
        <section id="about" className="bg-background-alt">
            <div className="mx-auto max-w-5xl px-6 py-20">
                <h2 className="text-foreground mb-8 font-serif text-3xl font-bold">
                    / About Me
                </h2>

                <div className="grid gap-12 md:grid-cols-2">
                    <div className="text-foreground-secondary space-y-4 leading-relaxed">
                        <p>
                            Software Developer with experience at companies such
                            as BBVA, TCS, and Inetum, where I worked on software
                            development and data analysis. I am interested in
                            building interfaces that are as functional as they
                            are well-designed.
                        </p>
                        <p>
                            When I'm not working, I'm watching soccer or
                            exercising.
                        </p>
                    </div>

                    <div>
                        <p className="text-foreground-secondary mb-4">
                            Technologies I work with:
                        </p>
                        <ul className="grid grid-cols-2 gap-2">
                            {technologies.map((tech) => (
                                <li
                                    key={tech}
                                    className="text-foreground-secondary flex items-center gap-2 text-sm"
                                >
                                    <span className="text-accent">▹</span>
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
