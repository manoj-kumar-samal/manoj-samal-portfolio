
import { TechShowcase } from "@/components/TechShowcase";
import { HeroSection } from "@/components/HeroSection";
import { SkillsGrid } from "@/components/SkillsGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <HeroSection />
      <TechShowcase />
      <SkillsGrid />
    </div>
  );
};

export default Index;
