import { ArrowDownToLine, ArrowRight, Briefcase, Code, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

export const AboutSection = () => {
    const { ref, inView } = useInView({ threshold: 0.2 });
    return (
        <section ref={ref} id="about" className={cn("py-24 px-4 relative reveal", inView && "reveal-in")}>
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 space-y-6 text-center md:text-left">
                        <h3 className="text-2xl font-semibold">Aspiring AI Engineer</h3>

                        <p className="text-muted-foreground">
                            Recent Computer Science (specialization in Intelligent Systems) graduate from UC Irvine, with a minor in Statistics.
                        </p>

                        <p className="text-muted-foreground">
                            I'm passionate about applied deep learning — building neural network solutions that improve workflows and create real-world impact.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="button inline-flex items-center gap-1">
                                Get In Touch <ArrowRight size={18}/>
                            </a>
                            

                            <a href="/projects/Website_Resume.pdf" target="_blank" className="px-6 py-2 inline-flex items-center gap-1 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV <ArrowDownToLine size={18}/>
                            </a>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 flex justify-center md:justify-end">
                        <img src="/projects/headshot_square.JPG" alt="Picture of myself" className="w-[250px] md:w-[500px] h-auto rounded-full border-4 border-white"/>
                    </div>

                </div>
            </div>
        </section>
    );
}