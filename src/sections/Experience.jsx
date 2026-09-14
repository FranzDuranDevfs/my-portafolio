"use client";
import React, { useState } from "react";
import styles from "../styles/Experience.module.scss";

const data = [
  {
    year: "2023 - 2024",
    months: "1 year and 11 months",
    position: "Developer FullStack",
    company: "Proyment",
    description: `Led multiple web development projects from start to finish, focusing on frontend design and layout. Collaborated on backend database creation for a key project and contributed to technical decision-making. Integrated tools such as Firebase, Cloudinary, Google Maps, EmailJS, and Intercom to optimize functionality, performance, and user experience across developed platforms.`,
    technologies:
      "React.js, Next.js, JavaScript, SCSS, Prisma, Sequelize, PostgreSQL, Node.js",
  },
  {
    year: 2022,
    months: "2 months",
    position: "Teaching Assistant",
    company: "Bootcamp Henry",
    description:
      "Coordinate student integration into study group, guide initial steps, assist with exercises, promote group collaboration, and propose Bootcamp process improvements.",
  },
];
export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpandClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    //}
  };

  return (
    <section className={styles.container} id="experiences">
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>EXPERIENCE</h2>
          <span />
        </div>
        <div className={styles.cards}>
          {data.map((item, index) => (
            <div
              key={index}
              className={`${styles.card} ${
                expandedIndex === index ? styles.cardExpanded : ""
              }`}
            >
              <h3>{item.year}</h3>
              <h4>{item.position}</h4>
              <span>
                <p>{item.months}</p>
                <p>{item.company}</p>
              </span>
              <p className={styles.description}>
                {expandedIndex === index || item.description.length <= 210
                  ? item.description
                  : item.description.substring(0, 210) + "..."}
              </p>
              {/* Mostrar tecnologías si está expandido */}
              {expandedIndex === index && (
                <p className={styles.technologies}>
                  <strong>Technologies used:</strong> {item.technologies}
                </p>
              )}
              <button
                onClick={() => handleExpandClick(index)}
                className={styles.toggleButton}
              >
                {expandedIndex === index ? "Read less" : "Read more"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
