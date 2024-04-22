import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef } from "react";
import styles from "./ActivitySlider.module.css";
import ActivityCardMultipleImage from "../ActivityCard/ActivityCardMultipleImage";

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
    <div className={`${styles.activitySliderContainer} confirmed-activities`}>
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
            <ActivityCardMultipleImage
              ministrantes={activity.ministrantes}
              title={activity.titulo_atividade_confirmada}
              description={activity.descricao_atividade_confirmada}
              texto_resumo={activity.texto_resumo}
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

ActivitySlider.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      ministrantes: PropTypes.arrayOf(
        PropTypes.shape({
          imagem_ministrante: PropTypes.string.isRequired,
          nome_ministrante: PropTypes.string.isRequired,
        })
      ).isRequired,
      titulo_atividade_confirmada: PropTypes.string.isRequired,
      descricao_atividade_confirmada: PropTypes.node.isRequired,
      texto_resumo: PropTypes.string.isRequired
    })
  ).isRequired,
};
