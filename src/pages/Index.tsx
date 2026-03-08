import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="noise min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
