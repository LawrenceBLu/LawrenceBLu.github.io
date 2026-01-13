import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

const projects = [
    {
        id:1,
        title: "Sentiment Analysis Classifier",
        description: "Experimented with finetuning pre-trained CNN and Transformer models to classify children's drawings into different emotions.",
        image: "/projects/Sentiment_analysis.png",
        tag: ["Python", "Pytorch", "Numpy", "Pandas", "Deep Learning", "Google Colab"]
    },
    {
        id:2,
        title: "Project Malmo Agent",
        description: "A deep and tabular Q-learning agent trained to complete jumping obstacle courses in Minecraft.",
        image: "/projects/Malmo_agent.png",
        tag: ["Python", "Docker", "Reinforcement Learning", "Deep Learning"]
    },
    {
        id:3,
        title: "Crime Analysis into Montreal",
        description: "An interesting dive into the potential correlation between Montreal's favorite sport, Hockey, and its crime rate.",
        image: "/projects/Montreal_hockey.png",
        tag: ["Data Analysis", "Python", "Pandas", "Numpy", "Matplotlib", "Scikit-learn"]
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
                Here are some of my projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tag.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>;
};