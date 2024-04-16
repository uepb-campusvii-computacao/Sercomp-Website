import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef } from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import styles from "./ActivitySlider.module.css";

export default function ActivitySlider({ activities }) {
  const swiperRef = useRef(null);

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className={styles.activitySliderContainer}>
      <Swiper
        ref={swiperRef}
        className={`mySwiper ${styles.activitySliderSwiper}`}
        slidesPerView={1.2}
        spaceBetween={16}
        centeredSlides={true}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".activitySliderPrevButton",
          nextEl: ".activitySliderNextButton",
        }}
        breakpoints={{
          800: {
            slidesPerView: 1.5,
            spaceBetween: 64,
          },
        }}
      >
        {activities.map((activity, index) => (
          <SwiperSlide key={index}>
            <ActivityCard
              image_url={activity.imagem_ministrante}
              name={activity.nome_ministrante}
              title={activity.titulo_atividade_confirmada}
              description={activity.descricao_atividade_confirmada}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        onClick={handlePrevClick}
        className={styles.activitySliderPrevButton}
      >
        <i className="uil uil-angle-left"></i>
      </div>

      <div
        onClick={handleNextClick}
        className={styles.activitySliderNextButton}
      >
        <i className="uil uil-angle-right"></i>
      </div>
    </div>
  );
}