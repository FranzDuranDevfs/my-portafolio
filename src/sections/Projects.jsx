"use client";

import Image from "next/image";
import "../styles/Projects.scss";
import { useState } from "react";

export default function Projects({ dataProjects }) {
  const featuredProjects = dataProjects.filter(
    (project) => project.featured
  );

  const allCategories = [
    "ALL",
    ...new Set(featuredProjects.map((project) => project.category)),
  ];

  const [activeSection, setActiveSection] = useState("ALL");

  const filteredProjects =
    activeSection === "ALL"
      ? featuredProjects
      : featuredProjects.filter(
          (project) => project.category === activeSection
        );

  return (
    <section id="projects" className="projects-container">
      <div className="projects-content">
        <div className="projects-title">
          <h2>PROJECTS</h2>
          <span />
        </div>

        <div className="projects-intro">
          <p className="projects-eyebrow">FEATURED WORK</p>

          <h3>
            Projects built with a focus on product, usability and
            real-world development.
          </h3>

          <p>
            A selection of projects where I worked with interfaces, APIs,
            dynamic data, authentication, responsive design and reusable
            components.
          </p>
        </div>

        <div className="projects-filters">
          {allCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveSection(category)}
              className={
                activeSection === category ? "active-filter" : ""
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-list">
          {filteredProjects.map((project, index) => (
            <article
              className={`project-case-study ${
                index === 0 ? "project-case-study-featured" : ""
              }`}
              key={project.id}
            >
              <div className="project-case-study-image">
                <Image
                  src={project.images[0].src || project.images[0]}
                  alt={`${project.title} interface`}
                  width={1000}
                  height={1000}
                />

                <span className="project-case-study-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="project-case-study-content">
                <div className="project-case-study-header">
                  <div>
                    <span className="project-case-study-category">
                      {project.category}
                    </span>

                    <h3>{project.title}</h3>
                  </div>

                  <span className="project-case-study-role">
                    {project.role}
                  </span>
                </div>

                <p className="project-case-study-summary">
                  {project.summary}
                </p>

                <div className="project-case-study-section">
                  <span>WHAT I BUILT</span>

                  <p>{project.solution}</p>
                </div>

                <div className="project-case-study-section">
                  <span>KEY FEATURES</span>

                  <ul>
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-case-study-stack">
                  {project.stack.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-case-study-actions">
                  {project.url && project.url !== "#" && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW LIVE
                      <span>↗</span>
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW CODE
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}