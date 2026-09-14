"use client";
import Image from "next/image";
import styles from "../styles/Skill.module.scss";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../styles/SwiperSlideSkill.scss";

export default function SwiperSlideSkill({ data }) {
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        // install Swiper modules
        modules={[Pagination, Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 2.5,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 4.5,
            spaceBetween: 15,
          },
        }}
        pagination={{
          clickable: true,
          el: ".paginationSkill",
        }}
        loop={true}
        autoplay={{
          delay: 1000,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
        }}
        style={{ zIndex: 0 }}
        className={styles.swiper}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={styles.cardMobile}>
              <span>{item.name}</span>
              <div className={styles.imageContent}>
                <Image src={item.image} alt="" width="auto" height="auto" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="paginationSkill"></div>
    </div>
  );
}
