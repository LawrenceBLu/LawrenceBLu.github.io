import { useMemo, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";


const experiences = [
    {
        title: "Assistant Engineer",
        company: "ADLINK",
        date: "June 2024 - September 2024",
        description: [
            "Refactoring application backend to FastAPI and RESTful API structure",
            "Parsing/extracting content from PDFs via Tesseract and table manipulation modules",
            "Leveraging LLMs to create a RAG application that optimizes device information retrieval by about 50% - 60%",
            "Constructing a multi-agentic RAG LLM with ReAct logic for multi-modal retrieval and ML model tool usage"
        ],
        link: "https://www.adlinktech.com/"
    },
    {
        title: "Augmented Reality Instructor",
        company: "Integem",
        date: "June 2023 - August 2023",
        description: [
            "Teaching a total of 100+ students Python programming and Artificial Intelligence model building",
            "Guiding students in training AI models for custom projects using Google’s AIY Vision Kit and Nvidia’s Jetson Nano"
        ],
        link: "https://www.integem.com/"
    },
    {
        title: "Development Science Informatics AI/Analytics Intern",
        company: "Genentech",
        date: "June 2022 - September 2022",
        description: [
            "Data mining datasets consisting of 100+ independent variables using R to determine the best fit machine learning regression model for predicting disease biomarkers",
            "Building a documentation website to enhance the workflow efficiency and accessibility of the team’s machine learning tools by ~50%",
            "Developing python scripts for preprocessing image data prior to deep learning model training"
        ],
        link: "https://www.gene.com/"
    },
    {
        title: "Application Engineering Intern",
        company: "Advantech",
        date: "June 2021 - September 2021",
        description: [
            "Working with lab equipment for system compatibility testing: Burn-in Testing, Thermal Chamber, SW tools",
            "Managing engineering samples and test-fixture inventory using self-made python scripts, which improved workflow efficiency by ~50%",
        ],
        link: "https://www.advantech.com/"
    },
]


export const ExperienceSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = useMemo(() => experiences[activeIdx], [activeIdx]);
  const { ref, inView } = useInView({ threshold: 0.2 });

  const TAB_H = 44;
  const RAIL_H = TAB_H * experiences.length;

  return (
    <section ref={ref} id="experience" className={cn("py-24 px-4 relative reveal", inView && "reveal-in")}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        {/* ONE centered grid that contains BOTH columns */}
        <div className="grid grid-cols-1 md:grid-cols-[180px_minmax(0,1fr)] gap-10 items-start">
          {/* LEFT COLUMN */}
          <div className="relative pl-4" style={{ height: RAIL_H }}>
            {/* rail */}
            <div className="absolute left-0 top-0 h-full w-px bg-slate-700/60" />

            {/* active indicator */}
            <div
              className="absolute left-0 w-[2px] bg-primary transition-transform duration-200"
              style={{
                height: TAB_H,
                transform: `translateY(${activeIdx * TAB_H}px)`,
              }}
            />

            {/* tabs */}
            <div>
              {experiences.map((exp, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={exp.company}
                    onClick={() => setActiveIdx(idx)}
                    className={[
                      "w-full text-left font-mono text-sm h-11 px-3 rounded cursor-pointer",
                      "transition-colors duration-150",
                      isActive
                        ? "text-primary bg-slate-800/40"
                        : "text-slate-400 hover:text-slate-10 hover:bg-slate-800/30",
                    ].join(" ")}
                  >
                    {exp.company}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div key={active.company} className="min-w-0 text-left animate-fade-in-fast">
            <h3 className="text-xl font-semibold text-slate-100 break-words">
              {active.title}
            </h3>
            <h4>
              <a
                href={active.link}
                className="text-primary font-semibold hover:underline underline-offset-4 break-words"
                target="_blank"
                rel="noreferrer"
              >
                {active.company}
              </a>
            </h4>
            

            <p className="mt-2 font-mono text-sm text-slate-400">{active.date}</p>

            <ul className="mt-6 space-y-4">
              {active.description.map((b) => (
                <li key={b} className="flex gap-3 text-slate-300 leading-relaxed">
                  <span className="text-primary mt-[0.03em] shrink-0">➛</span>
                  <span className="min-w-0 break-words">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};