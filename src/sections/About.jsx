"use client";

import "../styles/About.scss";
import image from "../../public/assets/perfil.png";
import Image from "next/image";

export default function About() {
  const handleClickNav = (scrollToId) => {
    document.getElementById(scrollToId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const description = `
    I'm a Frontend Developer specialized in React and Next.js, based in
    Buenos Aires, Argentina. I have experience building web applications,
    dashboards and product interfaces, working with JavaScript, React,
    Next.js, Tailwind CSS, Node.js, PostgreSQL and REST APIs.
  `;

  const descriptionSecondary = `
    I've worked on professional and personal products, collaborating with
    developers throughout the development lifecycle — from interface
    implementation and API integration to deployment and maintenance.
    I enjoy solving problems, creating reusable components and turning
    product requirements into clear and scalable user experiences.
  `;

  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <div className="about-title">
          <h2>ABOUT ME</h2>
          <span></span>
        </div>

        <div className="about-container-perfil">
          <div className="about-perfil-img">
            <div className="about-perfil-img-hexagon">
              <Image
                src={image}
                alt="Franz Duran - Frontend Developer"
                loading="lazy"
              />
            </div>
          </div>

          <div className="about-perfil-text">
            <span className="about-perfil-role">
              Frontend Developer · React · Next.js
            </span>

            <h3>Building products, not just interfaces.</h3>

            <p>{description}</p>

            <p>{descriptionSecondary}</p>

            <button
              onClick={() => handleClickNav("contact")}
              className="about-perfil-text-button"
            >
              Let's work together →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

