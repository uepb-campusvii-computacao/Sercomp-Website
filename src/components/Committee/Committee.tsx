import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./Committee.module.css";
import { CommitteeProps } from "../../types/CommitteeProps";

const Committee: React.FC<CommitteeProps> = ({ committeeData, title, description }) => {
  return (
    <section className={`container ${styles.committeeContainer} mySwiper`}>
      <h2 className="baseTitle">{title}</h2>
      <p className={styles.paragraph}>{description}</p>
      <div className="swiper-wrapper">
        <Swiper
          modules={[Autoplay]}
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {committeeData.map((member, index) => (
            <SwiperSlide key={index}>
              <article className={`swiper-slide ${styles.committee}`}>
                <div className={styles.avatar}>
                  <img src={member.image} alt={member.name} />
                </div>
                <div className={styles.memberInfo}>
                  <h5>{member.name}</h5>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Committee;
