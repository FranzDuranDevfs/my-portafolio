"use client";
import "../styles/Projects.scss";
import { useState } from "react";
import ButtonList from "../components/ButtonList";
import CardList from "../components/CardList";

export default function Projects({ dataProjects }) {
  const allCategories = [
    "ALL",
    ...new Set(dataProjects.map((category) => category.category)),
  ];

  const [activeSection, setActiveSection] = useState("ALL");

  const [categories] = useState(allCategories);
  const [articles, setArticles] = useState(dataProjects);

  const filterCategory = (category) => {
    if (category === "ALL") {
      setArticles(dataProjects);
      setActiveSection(category);
      return;
    }
    const filterData = dataProjects.filter(
      (article) => article.category === category
    );
    setArticles(filterData);

    setActiveSection(category);
  };

  return (
    <section id="projects" className="projects-container">
      <div className="projects-content">
        <div className="projects-tittle">
          <h2>PROJECTS</h2>
          <span></span>
        </div>
        <ButtonList
          categories={categories}
          filterCategory={filterCategory}
          activeSection={activeSection}
        />
        <CardList articles={articles} />
      </div>
    </section>
  );
}
