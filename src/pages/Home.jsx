import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import SocialRail from "../components/SocialRail";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";

export const Home = () => {
    return (
        <div className="min-h-screen text-foreground overflow-x-hidden">
            {/* <ThemeToggle /> */}
            {/* Background Effects */}
            <StarBackground />
            <SocialRail />
            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <ExperienceSection />
                <SkillsSection />
                <ContactSection />
            </main>


            {/* Footer */}
            <Footer />
        </div>
    );
};