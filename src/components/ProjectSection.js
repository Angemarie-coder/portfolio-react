import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import "../styles/projectSection.css";
import projects from "../data/projects.json";

const ProjectSection = () => {
  const [showAll, setShowAll] = useState(false);
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 320;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const displayedProjects = showAll
    ? projects.projects.items
    : projects.projects.items.slice(0, 4);
  const hasMoreProjects = projects.projects.items.length > 4;

  return (
    <section id="projects" className="project-section">
      <div className="project-container">
        {/* Header */}
        <div className="project-header">
          <h1 className="project-title">{projects.projects.title}</h1>
          <div className="title-underline"></div>
        </div>

        {/* Navigation Controls */}
        {!showAll && hasMoreProjects && (
          <div className="project-controls">
            <div className="scroll-buttons">
              <button onClick={() => scroll("left")} className="scroll-btn">
                <ChevronLeft className="scroll-icon" />
              </button>
              <button onClick={() => scroll("right")} className="scroll-btn">
                <ChevronRight className="scroll-icon" />
              </button>
            </div>
          </div>
        )}

        {/* Projects Container */}
        <div className={showAll ? "project-grid" : "project-scroll-wrapper"}>
          <div
            ref={scrollContainerRef}
            className={
              showAll ? "project-grid-content" : "project-scroll-container"
            }
          >
            {displayedProjects.map((project, index) => (
              <div
                key={index}
                className={`project-card ${
                  !showAll ? "project-card-scroll" : ""
                }`}
              >
                {/* Project Image */}
                <div className="project-image-container">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-content">
                    <div className="project-image-title">{project.name}</div>
                  </div>
                  <div className="project-image-icon">
                    <ExternalLink className="external-link-icon" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="project-card-content">
                  <h3 className="project-card-title">{project.name}</h3>

                  <p className="project-card-description">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="project-technologies">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-tag-more">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="project-links">
                    <a
                      href={project.links.live_demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-btn live-demo"
                    >
                      <ExternalLink className="btn-icon" />
                      Live Demo
                    </a>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-btn github"
                    >
                      <Github className="btn-icon" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Show Less Button */}
        {showAll && hasMoreProjects && (
          <div className="show-less-container">
            <button onClick={() => setShowAll(false)} className="show-less-btn">
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
