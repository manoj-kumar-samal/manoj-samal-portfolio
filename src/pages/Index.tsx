import { TechShowcase } from "@/components/TechShowcase";
import { HeroSection } from "@/components/HeroSection";
import { SkillsGrid } from "@/components/SkillsGrid";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useTheme } from "next-themes";
import {ProjectsSection} from "@/components/ProjectsSection";



const Index = () => {
  const { theme } = useTheme();
  
  const backgroundClass = theme === 'dark' 
    ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    : "bg-gradient-to-br from-black via-indigo-950 to-black";

  return (
    <div className={`min-h-screen ${backgroundClass} transition-colors duration-500`}>
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="tech">
        <TechShowcase />
      </section>
      <section id="skills">
        <SkillsGrid />
      </section>
      <section id="projects">
        <ProjectsSection/>
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
