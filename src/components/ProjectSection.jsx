import React from "react";
import "../styles/projectSection.css";
import projects from "../data/projects.json";

const ProjectSection = () => {
  return (
    <section id="projects" className="project-section">
      <div className="project-container">
        <h1 className="project-title">{projects.projects.title}</h1>
        <div className="project-content">
          {projects.projects.items.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image.src}
                alt={project.image.alt}
                className="project-image"
              />
              <div className="project-details">
                <h2>{project.name}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.links.live_demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn live-demo"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn github"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
