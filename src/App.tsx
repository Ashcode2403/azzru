import React, { useState } from 'react';
import { CinematicIntro } from './components/CinematicIntro';
import { GrainOverlay, ScrollProgress } from './components/GrainOverlay';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ShowreelSection } from './components/ShowreelSection';
import { HorizontalScrollPortfolio } from './components/HorizontalScrollPortfolio';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { MovingMediaStrips } from './components/MovingMediaStrips';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { EquipmentSection } from './components/EquipmentSection';
import { RealEstateShowcase } from './components/RealEstateShowcase';
import { MusicVideoShowcase } from './components/MusicVideoShowcase';
import { WeddingFilmsSection } from './components/WeddingFilmsSection';
import { PhotographyGallery } from './components/PhotographyGallery';
import { BehindTheScenes } from './components/BehindTheScenes';
import { ServicesSection } from './components/ServicesSection';
import { SocialSection } from './components/SocialSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Project } from './types';

export function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState('work');

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#FFB800] selection:text-black">
      {/* Intro Reveal Animation */}
      {!introFinished && (
        <CinematicIntro onComplete={() => setIntroFinished(true)} />
      )}

      {/* Global Aesthetics & Overlays */}
      <GrainOverlay />
      <ScrollProgress />
      <CustomCursor />

      {/* Header Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Cinematic Scroll Storyline */}
      <main>
        {/* 1. HERO SECTION */}
        <HeroSection onOpenReel={() => setIsShowreelOpen(true)} />

        {/* 2. CINEMATIC SHOWREEL */}
        <ShowreelSection 
          isOpen={isShowreelOpen} 
          onOpen={() => setIsShowreelOpen(true)} 
          onClose={() => setIsShowreelOpen(false)} 
        />

        {/* 3. SIGNATURE HORIZONTAL SCROLL PORTFOLIO */}
        <HorizontalScrollPortfolio 
          onSelectProject={(proj) => setSelectedProject(proj)} 
        />

        {/* 4. INFINITE MOVING MEDIA STRIPS */}
        <MovingMediaStrips />

        {/* 5. ABOUT SECTION — THE MAN BEHIND THE CAMERA */}
        <AboutSection />

        {/* 6. FUTURISTIC TIMELINE EXPERIENCE */}
        <ExperienceSection />

        {/* 7. INTERACTIVE EXPERTISE */}
        <ExpertiseSection />

        {/* 8. EQUIPMENT SHOWCASE */}
        <EquipmentSection />

        {/* 9. REAL ESTATE SHOWCASE */}
        <RealEstateShowcase 
          onSelectProject={(proj) => setSelectedProject(proj)} 
        />

        {/* 10. MUSIC VIDEO SHOWCASE */}
        <MusicVideoShowcase 
          onSelectProject={(proj) => setSelectedProject(proj)} 
        />

        {/* 11. WEDDING FILMS SHOWCASE */}
        <WeddingFilmsSection 
          onSelectProject={(proj) => setSelectedProject(proj)} 
        />

        {/* 12. EDITORIAL PHOTOGRAPHY MASONRY */}
        <PhotographyGallery />

        {/* 13. BEHIND THE SCENES */}
        <BehindTheScenes />

        {/* 14. SERVICES OFFERINGS */}
        <ServicesSection />

        {/* 15. SOCIAL MEDIA JOURNEY */}
        <SocialSection />

        {/* 16. DRAMATIC CONTACT SECTION */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Detail Modal */}
      <ProjectDetailModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        onSelectProject={(p) => setSelectedProject(p)} 
      />
    </div>
  );
}

export default App;
