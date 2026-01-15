
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen min-w-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto z-10">
            <div className="pointer-events-none absolute right-12 top-1/2 -translate-y-1/2 opacity-0 animate-fade-in-delay-3 hidden lg:block">
                <div className="space-y-3 text-right text-[clamp(1.5rem,2.5vw,3rem)] font-semibold leading-none">
                    <p className="floating-word text-white/10">Deep Learning</p>
                    <p className="floating-word text-white/10">Agentic AI</p>
                    <p className="floating-word text-white/10">Neural Nets</p>
                    <p className="floating-word text-white/10">Big Data</p>
                </div>
            </div>
            <div className="flex place-items-center justify-center md:justify-start md:place-items-start">
                {/* <img src="/projects/headshot_square.JPG" alt="Picture of myself" className="w-[250px] md:w-[500px] h-auto rounded-full border-4 border-white opacity-0 animate-fade-in-delay-3"/> */}
                <div className="w-fit flex flex-col items-start space-y-4">
                    <span className="tracking-tight leading-tight text-xl text-semibold text-foreground/90 opacity-0 animate-fade-in-delay-1">Hi, my name is</span>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                        <span className="text-primary opacity-0 animate-fade-in-delay-2">Lawrence</span>
                        <span className="text-gradient ml-4 opacity-0 animate-fade-in-delay-2">Lu</span>
                    </h1>
                    <p className="text-lg md:text-4xl ml-1 text-foreground/70 whitespace-nowrap opacity-0 animate-fade-in-delay-4">
                        Training on All Things Deep Learning.
                    </p>

                    <div className="flex pt-4 w-full place-items-start opacity-0 animate-fade-in-delay-5">
                        <a href="#projects" className="px-6 py-2 inline-flex items-center gap-1 rounded-full border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors duration-300">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in-delay-6">
            <a href="#about">
                <ChevronDown className="h-5 w-5 text-primary scroll-arrow" />
            </a>
        </div>
    </section>
};