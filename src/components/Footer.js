import React from "react";
import "../styles/footer.css";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-logo">
            Ange<span className="logo-accent">Craft</span>
          </div>
          <nav className="footer-nav">
            <a href="#hero" onClick={() => scrollToSection("hero")}>
              Home
            </a>
            <a href="#about" onClick={() => scrollToSection("about")}>
              About
            </a>
            <a href="#experience" onClick={() => scrollToSection("experience")}>
              Experience
            </a>
            <a href="#projects" onClick={() => scrollToSection("projects")}>
              Projects
            </a>
            <a href="#contact" onClick={() => scrollToSection("contact")}>
              Contact
            </a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} AngeCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
