import { useMemo, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";


const experiences = [
    {
        title: "AI Assistant Engineer Intern",
        company: "ADLINK Technology",
        company_tab: "ADLINK",
        date: "June 2024 - September 2024",
        description: [
            "Migrating application backend to FastAPI and REST, improving modularity and API maintainability",
            "Building a PDF OCR and table extraction pipeline via Tesseract and parsing modules for LLM readability",
            "Leveraging LLMs to create a RAG application that optimized device information retrieval efficiency by about 50% - 60%",
            "Constructing a multi-agentic ReAct RAG system for multi-modal retrieval and ML tool usage"
        ],
        link: "https://www.adlinktech.com/"
    },
    {
        title: "Augmented Reality Instructor",
        company: "Integem",
        company_tab: "Integem",
        date: "June 2023 - August 2023",
        description: [
            "Instructing 100+ K-12 students in Python programming and applied AI through custom hands-on projects",
            "Guiding students through AI model training workflows and edge development using Google AIY Vision Kit and Nvidia Jetson Nano"
        ],
        link: "https://www.integem.com/"
    },
    {
        title: "Development Science Informatics AI/Analytics Intern",
        company: "Genentech",
        company_tab: "Genentech",
        date: "June 2022 - September 2022",
        description: [
            "Mining datasets with 100+ variables in R and benchmarked regression machine learning models to predict disease biomarkers",
            "Building an internal documentation website for machine learning tools, improving accessibility and team workflow efficiency by ~50%",
            "Developing Python image preprocessing pipelines to prepare datasets for deep learning model training"
        ],
        link: "https://www.gene.com/"
    },
    {
        title: "Application Engineering Intern",
        company: "Advantech",
        company_tab: "Advantech",
        date: "June 2021 - September 2021",
        description: [
            "Testing industrial products for quality assurance and system compatibility via Burn-in Testing, Temperature Reliability, I/O Operability",
            "Automating engineering samples and test-fixture inventory tracking using self-developed python scripts, reducing manual effort and improving workflow efficiency by ~50%",
            "Assisting with documenting failure symptoms and errors found with golden samples to support engineering root-cause analysis"
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
                    key={exp.company_tab}
                    onClick={() => setActiveIdx(idx)}
                    className={[
                      "w-full text-left font-mono text-sm h-11 px-3 rounded cursor-pointer",
                      "transition-colors duration-150",
                      isActive
                        ? "text-primary bg-slate-800/40"
                        : "text-slate-400 hover:text-slate-10 hover:bg-slate-800/30",
                    ].join(" ")}
                  >
                    {exp.company_tab}
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