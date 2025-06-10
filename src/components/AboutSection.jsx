import React from "react";
import "../styles/aboutSection.css";
import personalInfo from "../data/personalInfo.json";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h1 className="about-title">{personalInfo.about.title}</h1>
        <div className="about-content">
          <div className="about-item">
            <h2>Introduction</h2>
            <p>{personalInfo.about.personal_introduction.description}</p>
          </div>
          <div className="about-item">
            <h2>Background & Interests</h2>
            <p>{personalInfo.about.background_and_interests.description}</p>
          </div>
          <div className="about-item">
            <h2>Skills & Technologies</h2>
            <p>{personalInfo.about.skills_and_technologies.description}</p>
            <div className="skills-list">
              {personalInfo.about.skills_and_technologies.technologies.map(
                (tech, index) => (
                  <div key={index} className="skill-category">
                    <h3>{tech.category}</h3>
                    <ul>
                      {tech.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="about-item">
            <h2>Unique Qualities</h2>
            <p>{personalInfo.about.unique_qualities.description}</p>
            <p>{personalInfo.about.unique_qualities.likes}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
