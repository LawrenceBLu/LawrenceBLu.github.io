import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";
import {
  Linkedin,
  Github,
} from "lucide-react";

export const ContactSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} id="contact" className={cn("py-24 px-4 relative reveal bg-secondary/30", inView && "reveal-in")}>
      <div className="container mx-auto max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
        <a href="mailto:lawrencebdlu@gmail.com" className="button">Say Hello</a>
      </div>
      <div className="pt-8 md:opacity-0">
          <h4 className="font-medium mb-4"> Connect With Me</h4>
          <div className="flex space-x-4 justify-center">
            <a href="https://www.linkedin.com/in/lawrenceblu/" target="_blank">
              <Linkedin />
            </a>
            <a href="https://github.com/LawrenceBLu" target="_blank">
              <Github />
            </a>
          </div>
      </div>
      
    </section>
  );
};