"use client";
import "../styles/About.scss";
import image from "../../public/assets/perfil.png";
import Image from "next/image";

export default function About() {
  const handleClickNav = (scrollToId) => {
    document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });
  };
  const description =
    "I'm a Full-Stack Developer based in Buenos Aires, Argentina, with nearly two years of experience in web design and development. I've led personal projects from start to finish and collaborated with other developers on team-based initiatives, delivering functional, scalable, and user-focused solutions. I stand out for combining clean design, efficient code, and optimized performance. Whether working independently or as part of a team, I always aim to deliver real value through every product I build.";
  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <div className="about-title">
          <h2>ABOUT</h2>
          <span></span>
        </div>
        <div className="about-container-perfil">
          <div className="about-perfil-img">
            <div className="about-perfil-img-hexagon">
              <Image src={image} alt="Franz Duran" loading="lazy" />
            </div>
          </div>
          <div className="about-perfil-text">
            <h3>Who s this guy?</h3>
            <p>{description}</p>
            <p
              onClick={() => handleClickNav("contact")}
              className="about-perfil-text-p"
            >
              {" "}
              Let s make something special.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
