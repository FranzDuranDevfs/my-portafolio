"use client";

import React, { useState } from "react";
import styles from "../styles/Experience.module.scss";

const data = [
  {
    year: "Mar 2026 – Sept 2026",
    position: "Frontend Developer",
    company: "Colibrí",
    description:
      "Frontend development for a web platform focused on entrepreneurship tracking and evaluation. I build role-based dashboards and product workflows, integrating dynamic backend data into responsive and reusable interfaces.",
    responsibilities: [
      "Developed role-based dashboards and project workflows.",
      "Implemented modules for Identity, Stage, Trajectory, Evidence and Reputation.",
      "Integrated frontend features with REST APIs and backend services.",
      "Built reusable React components and dynamic data-driven interfaces.",
      "Implemented responsive layouts across desktop, tablet and mobile.",
      "Collaborated with the development team using Git and GitHub.",
    ],
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "REST APIs",
      "Git",
      "GitHub",
    ],
  },
  {
    year: "2023 – 2024",
    position: "Full Stack Developer",
    company: "Proyment",
    description:
      "Worked on multiple web development projects from planning to implementation, with a strong focus on frontend development, responsive interfaces and user experience.",
    responsibilities: [
      "Developed and delivered multiple web applications from start to finish.",
      "Built frontend interfaces and responsive layouts using React and Next.js.",
      "Collaborated on backend architecture and database development.",
      "Integrated third-party services to extend product functionality.",
      "Contributed to technical decisions across frontend and backend development.",
    ],
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Sequelize",
      "SCSS",
      "Firebase",
      "Cloudinary",
    ],
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpandClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className={styles.container} id="experiences">
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>EXPERIENCE</h2>
          <span />
        </div>

        <div className={styles.cards}>
          {data.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <article
                key={`${item.company}-${item.year}`}
                className={`${styles.card} ${
                  isExpanded ? styles.cardExpanded : ""
                }`}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.date}>{item.year}</span>

                  <h3>{item.position}</h3>

                  <p className={styles.company}>{item.company}</p>
                </div>

                <p className={styles.description}>{item.description}</p>

                <div className={styles.technologies}>
                  {item.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                {isExpanded && (
                  <div className={styles.responsibilities}>
                    <h4>Key contributions</h4>

                    <ul>
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => handleExpandClick(index)}
                  className={styles.toggleButton}
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? "Read less" : "Read more"}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}