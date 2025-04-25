import { Swiper, SwiperSlide } from "swiper/react";
import * as PropTypes from "prop-types";
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
              speakers={activity.speakers}
              title={activity.confirmedActivityTitle}
              description={activity.confirmedActivityDescription}
              summaryText={activity.summaryText}
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
      speakers: PropTypes.arrayOf(
        PropTypes.shape({
          speakerImage: PropTypes.string.isRequired,
          speakerName: PropTypes.string.isRequired,
        })
      ).isRequired,
      confirmedActivityTitle: PropTypes.string.isRequired,
      confirmedActivityDescription: PropTypes.node.isRequired,
      summaryText: PropTypes.string.isRequired,
    })
  ).isRequired,
};
