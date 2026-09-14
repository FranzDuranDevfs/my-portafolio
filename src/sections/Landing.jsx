"use client";
import "../styles/Landing.scss";
import icon from "../../public/assets/flecha.png";
import Image from "next/image";

export default function Landing() {
  const handleClickNav = (scrollToId) => {
    document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="landing">
      <div className="landing-info">
        <h1 className="landing-info-text">
          Hello, I´m <span>Franz Duran</span>.<br /> I´m full-stack web
          developer.
        </h1>
      </div>

      <button className="landing-button" onClick={() => handleClickNav("about")}>
        View my work{" "}
        <Image src={icon} alt="Picture of the author" loading="eager" />
      </button>
    </section>
  );
}
