"use client";

import { useState } from "react";
import { experiences } from "@/data/experiences.json";

export function Experience() {
    const [activeTab, setActiveTab] = useState(0);
    const TAB_HEIGHT = 52;

    return (
        <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="text-foreground mb-10 font-serif text-3xl font-bold">
                / Experience
            </h2>

            <div className="flex gap-0">
                {/* Columna de empresas */}
                <div className="border-border-strong relative flex shrink-0 flex-col border-r">
                    {/* Indicador animado */}
                    <span
                        className="bg-accent absolute right-[-1px] w-[4px] transition-transform duration-300 ease-in-out rounded-tl-lg rounded-bl-lg"
                        style={{
                            height: `${TAB_HEIGHT}px`,
                            transform: `translateY(${activeTab * TAB_HEIGHT}px)`,
                        }}
                    />

                    {experiences.map((exp, i) => (
                        <button
                            key={exp.company}
                            onClick={() => setActiveTab(i)}
                            className={`hover:bg-accent-subtle hover:text-accent px-5 text-left text-sm font-medium transition-colors ${activeTab === i ? "text-accent" : "text-foreground-secondary"} `}
                            style={{ height: `${TAB_HEIGHT}px` }}
                            aria-selected={activeTab === i}
                            role="tab"
                        >
                            {exp.company}
                        </button>
                    ))}
                </div>

                {/* Panel de contenido */}
                <div className="flex-1 px-8 py-2" role="tabpanel">
                    {experiences.map((exp, i) => (
                        <div
                            key={exp.company}
                            className={i === activeTab ? "block" : "hidden"}
                        >
                            <h3 className="text-foreground mb-1 font-serif text-xl font-bold">
                                {exp.jobTitle}{" "}
                                <span className="text-accent">
                                    @ {exp.company}
                                </span>
                            </h3>

                            <p className="text-muted mb-6 text-sm tracking-wide">
                                {exp.duration}
                            </p>

                            <ul className="space-y-3">
                                {exp.desc.map((desc, j) => (
                                    <li
                                        key={j}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="text-accent mt-1 shrink-0">
                                            ▹
                                        </span>
                                        <p className="text-foreground-secondary leading-relaxed">
                                            {desc}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
