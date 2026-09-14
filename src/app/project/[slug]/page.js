"use client";
import { dataProjects } from "@/components/Data";
import Image from "next/image";
import styles from "../../../styles/Dinamic.module.scss";
import "remixicon/fonts/remixicon.css";
import SwiperInfoProjects from "@/components/SwiperInfoProjects";
import { usePathname, useRouter } from "next/navigation";

export default function ProjectsPage() {
  const pathName = usePathname();

  const data = dataProjects.filter((item) => item.href === pathName);

  const { tittle, images, description, date, url, urlGihub, color,developer,stack } = data[0];
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.carrousel} style={{ background: color }}>
          <SwiperInfoProjects data={images} />
        </div>
        <div className={styles.text}>
          <h1>{tittle}</h1>
          <h3>{date}</h3>
          <span>{developer}</span>
          <span>STACK: {stack}</span>
          <p>{description}</p>
        </div>
        <div className={styles["cardList-info-container-buttons"]}>
          <a
            className={styles["cardList-a"]}
            href={url}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <i className="ri-share-box-line"></i>
            <span>VIEW SITE</span>
          </a>
          {urlGihub && (
            <a
              className={styles["cardList-a"]}
              href={urlGihub}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <i className="ri-github-line"></i>
              <span>VIEW REPOSITORY</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
