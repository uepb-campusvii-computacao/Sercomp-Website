import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef } from "react";
import styles from "./ActivitySlider.module.css";
import ActivityCardMultipleImage from "../ActivityCard/ActivityCardMultipleImage";
import { ActivitySliderProps } from "../../types/ActivityProps";

export default function ActivitySlider({ activities }: ActivitySliderProps) {
  const swiperRef = useRef<SwiperCore | null>(null);

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className={`${styles.activitySliderContainer} confirmed-activities`}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
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
              confirmedActivityTitle={activity.confirmedActivityTitle}
              confirmedActivityDescription={activity.confirmedActivityDescription}
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
