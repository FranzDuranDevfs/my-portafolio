"use client";
import Image from "next/image";
import styles from "../styles/Skill.module.scss";
import { useWindowSize } from "@/components/hooks";
import SwiperSlideSkill from "../components/SwiperSlideSkill";

export default function Skill({ dataSkills }) {
  const size = useWindowSize();
  const mobile = size.width < 1024;

  return (
    <section id="skills" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>SKILL SET</h2>
          <span />
        </div>
        {mobile ? (
          <SwiperSlideSkill data={dataSkills} />
        ) : (
          <div className={styles.skill}>
            {dataSkills.map((item, index) => (
              <div className={styles.card} key={index}>
                <span>{item.name}</span>
                <Image src={item.image} alt="" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
