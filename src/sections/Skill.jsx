"use client";

import Image from "next/image";
import styles from "../styles/Skill.module.scss";
import { useWindowSize } from "@/components/hooks";
import SwiperSlideSkill from "../components/SwiperSlideSkill";

export default function Skill({ dataSkills }) {
  const size = useWindowSize();
  const mobile = size.width < 1024;

  const frontendSkills = dataSkills.filter((skill) =>
    ["next", "reactjs", "javascript", "redux", "sass", "css", "html"].includes(
      skill.name.toLowerCase(),
    ),
  );

  const backendSkills = dataSkills.filter((skill) =>
    ["nodejs", "sequelize", "postgresql"].includes(skill.name.toLowerCase()),
  );

  const toolsSkills = dataSkills.filter((skill) =>
    ["prismic", "figma", "github"].includes(skill.name.toLowerCase()),
  );

  const SkillCard = ({ item }) => (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={item.image}
          alt={`${item.name} technology`}
          width={72}
          height={72}
        />
      </div>

      <span>{item.name}</span>
    </div>
  );

  return (
    <section id="skills" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>SKILL SET</h2>
          <span />
        </div>

        <p className={styles.intro}>
          Technologies and tools I use to build modern, responsive and
          maintainable web applications.
        </p>

        {mobile ? (
          <SwiperSlideSkill data={dataSkills} />
        ) : (
          <div className={styles.groups}>
            <div className={styles.group}>
              <div className={styles.groupHeader}>
                <span className={styles.groupNumber}>01</span>
                <h3>Frontend</h3>
              </div>

              <div className={styles.skill}>
                {frontendSkills.map((item) => (
                  <SkillCard item={item} key={item.name} />
                ))}
              </div>
            </div>

            <div className={styles.group}>
              <div className={styles.groupHeader}>
                <span className={styles.groupNumber}>02</span>
                <h3>Backend & Data</h3>
              </div>

              <div className={styles.skill}>
                {backendSkills.map((item) => (
                  <SkillCard item={item} key={item.name} />
                ))}
              </div>
            </div>

            <div className={styles.group}>
              <div className={styles.groupHeader}>
                <span className={styles.groupNumber}>03</span>
                <h3>Tools & Workflow</h3>
              </div>

              <div className={styles.skill}>
                {toolsSkills.map((item) => (
                  <SkillCard item={item} key={item.name} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
