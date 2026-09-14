"use client";

import "../styles/Landing.scss";
import icon from "../../public/assets/flecha.png";
import Image from "next/image";

export default function Landing() {
  const handleClickNav = (scrollToId) => {
    document.getElementById(scrollToId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="landing">
      <div className="landing-info">
        <p className="landing-info-role">Frontend Developer</p>

        <h1 className="landing-info-text">
          Hi, I'm <span>Franz Duran</span>.<br />
          I build modern web applications
          <br />
          with React & Next.js.
        </h1>

        <p className="landing-info-description">
          Full Stack Developer focused on frontend development, dashboards,
          reusable interfaces and REST API integration.
        </p>
      </div>

      <button
        className="landing-button"
        onClick={() => handleClickNav("projects")}
      >
        View my work
        <Image src={icon} alt="Arrow" loading="eager" />
      </button>
    </section>
  );
}
