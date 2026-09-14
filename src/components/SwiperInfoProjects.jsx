"use client";
import Image from "next/image";
import styles from "../styles/SwiperInfoProjects.module.scss";
import {Navigation, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/scss/navigation';
import "../styles/SwiperSlideSkill.scss";

export default function SwiperInfoProjects({ data }) {
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation={true}
        style={{ zIndex: 0 }}
        className={styles.swiper}
      >
        {data.slice(1).map((item, index) => (
          <SwiperSlide key={index}>
            <div className={styles.imgContent}>
              <Image src={item} alt="" width="auto" height="auto" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
