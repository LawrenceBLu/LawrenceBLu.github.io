import { useState } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

const skills = [
    // Languages
    {name: "Python", category: "Languages"},
    {name: "C++", category: "Languages"},
    {name: "C", category: "Languages"},
    {name: "Java", category: "Languages"},
    {name: "R", category: "Languages"},
    {name: "Lisp", category: "Languages"},
    {name: "Prolog", category: "Languages"},

    // Libraries
    {name: "Pytorch", category: "Libraries"},
    {name: "Numpy", category: "Libraries"},
    {name: "Pandas", category: "Libraries"},
    {name: "Scikit-learn", category: "Libraries"},
    {name: "Matplotlib", category: "Libraries"},
    // Tools
    {name: "Git", category: "Tools"},
    {name: "VS Code", category: "Tools"},
    {name: "Google Colab", category: "Tools"},
    {name: "Hugging Face", category: "Tools"},
    {name: "Docker", category: "Tools"},
];
const categories = ["All", "Languages", "Libraries", "Tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const filteredSkills = skills.filter((skill) => activeCategory === "All" || skill.category === activeCategory );
    const { ref, inView } = useInView({ threshold: 0.2 });

    return (<section ref={ref} id="skills" className={cn("py-24 px-4 relative reveal bg-secondary/30", inView && "reveal-in")}>
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 cursor-pointer captialize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                        )}>
                        {category}
                    </button>
                ))}
            </div>

            <div key={activeCategory} className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card px-6 py-4 rounded-lg shadow-xs card-hover w-fit">
                        <h3 className="font-semibold text-1xl whitespace-nowrap">{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    </section>);
}