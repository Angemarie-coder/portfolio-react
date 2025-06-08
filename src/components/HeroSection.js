import React from "react";
import "../styles/heroSection.css";
import personalInfo from "../data/personalInfo.json";

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{personalInfo.hero.name}</h1>
            <h2>{personalInfo.hero.professional_title}</h2>
            <p>{personalInfo.hero.tagline}</p>
            <button
              className="get-started-btn"
              onClick={() => scrollToSection(personalInfo.hero.cta_button.link)}
            >
              {personalInfo.hero.cta_button.text}
            </button>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <img
                src={personalInfo.hero.photo.src}
                alt={personalInfo.hero.photo.alt}
                className="hero-person-image"
              />
              <div className="floating-elements">
                <div className="element element-1">📧</div>
                <div className="element element-2">💬</div>
                <div className="element element-3">⭐</div>
                <div className="element element-4">📊</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
