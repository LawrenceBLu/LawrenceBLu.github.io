import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

const projects = [
    {
        id:1,
        title: "Drawing Emotion Classification",
        description: "An exploration into whether finetuned CNN/Transformer Vision models can discover different emotional intent in children's drawings.",
        image: "/projects/Sentiment_analysis.png",
        tag: ["Python", "Pytorch", "Numpy", "Pandas", "Deep Learning", "Google Colab"],
        purpose: "Education Support"
    },
    {
        id:2,
        title: "Deep RL Agent in Minecraft",
        description: "An investigation into the potential of Tabular/Deep Q-Learning RL agents to learn complex obstacle jumping behavior in a Minecraft environment.",
        image: "/projects/Malmo_agent.png",
        tag: ["Python", "Docker", "Reinforcement Learning", "Deep Learning", "Project Malmo"],
        purpose: "Robotics & Autonomy"
    },
    {
        id:3,
        title: "Crime Analysis into Montreal",
        description: "An interesting dive into the possible correlation between Montreal's favorite sport, Hockey, and its crime rate.",
        image: "/projects/Montreal_hockey.png",
        tag: ["Exploratory Data Analysis", "Python", "Pandas", "Numpy", "Matplotlib", "Scikit-learn"],
        purpose: "Public Safety Planning"
    },
]

export const ProjectsSection = () => {
    const { ref, inView } = useInView({ threshold: 0.2 });
    return <section ref={ref} id="projects" className={cn("py-24 px-4 relative reveal", inView && "reveal-in")}>
        <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary"> Projects </span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Focusing on AI/ML projects outside of work.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-6">
                            <p className="px-2 py-1 text-xs font-medium bg-secodary text-secondary-foreground italic -mt-3 mb-4">{project.purpose}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tag.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        
                            <h3 className="justify-center text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>;
};