import React, { useState } from "react";
import "../styles/header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        Ange<span className="logo-accent">Craft</span>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
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
    </header>
  );
};

export default Header;
