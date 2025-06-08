import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
// import StatsSection from "./components/StatsSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <AboutSection />
      {/* <StatsSection /> */}
      <ProjectSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
