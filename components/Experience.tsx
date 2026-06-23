"use client";

import { useState } from "react";
import { experiences } from "@/data/experiences.json";

export function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-semibold mb-10 text-foreground">/ Experience</h2>
      <div className="flex">
        <div className="flex flex-col border-r-0">
          {experiences.map((currentExperience, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`text-left px-5 py-4 text-sm font-medium transition-all border-r-2 hover:cursor-pointer hover:bg-accent/30 ${activeTab === i ? "border-accent text-accent" : ""}`}
            >
              {currentExperience.company}
            </button>
          ))}
        </div>

        <div className="flex-1 p-6">
          {experiences.map((currentExperience, i) => (
            <div key={i} className={i === activeTab ? "block" : "hidden"}>
              <h3 className="text-lg font-semibold mb-3">
                {currentExperience.jobTitle} @{" "}
                <span className="text-accent">{currentExperience.company}</span>
              </h3>
              <p className="text-muted tracking-widest mb-3">
                {currentExperience.duration}
              </p>
              <ul>
                {currentExperience.desc.map((currentDesc, i) => (
                  <li key={i} className="mb-3 flex items-start">
                    <span className="text-accent font-bold mx-4">&gt;</span>
                    <p className="text-muted leading-loose">{currentDesc}</p>
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
