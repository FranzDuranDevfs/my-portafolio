"use client";
import styles from "../styles/ProjectjSlide.module.scss";
import React, { useState } from "react";
import Image from "next/image";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../styles/SwiperSlideSkill.scss";
import "../styles/Projects.scss";
import Link from "next/link";

export default function ProjectjSlide({ articles }) {
  
  const [showInfo, setShowInfo] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);

  function handleShowInfo(item) {
    setCurrentArticle(item);
    setShowInfo(true);
  }

  function handleHideInfo() {
    setCurrentArticle(null);
    setShowInfo(false);
  }
  return (
    <section className={styles.container}>
      <Swiper
        // install Swiper modules
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: ".paginationProjects",
        }}

        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          375: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        className={styles.swiperContent}
      >
        {articles.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={styles.cardList}>
              <div className={styles.cardListContainer} key={item.id}>
                <Image src={item.images[0]} alt={item.tittle} />

                <div className={styles.cardListContainerCapa}>
                  <h4>{item.tittle}</h4>
                  <Link href={`${item.href}`}>
                    <div
                      className={styles.cardListButton}
                      onClick={() => handleShowInfo(item)}
                    >
                      LEARN MORE
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="paginationProjects"></div>
    </section>
  );
}
