import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import styles from './OrganizationPeople.module.css';
import { OrganizationPeopleProps } from '../../types/OrganizationPeopleProps';

const OrganizationPeople: React.FC<OrganizationPeopleProps> = ({ title, members }) => {
  return (
    <section className={`${styles.orgsContainer} container mySwiper`}>
      <h2>{title}</h2>
      <Swiper
        modules={[Autoplay]}
        className={`mySwiper ${styles.mySwiper}`}
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
        {members.map((member, index) => (
          <SwiperSlide key={index}>
            <article className={styles.org}>
              <div className={styles.avatar}>
                <img src={member.image} alt={member.alt} />
              </div>
              <div className={styles.orgInfo}>
                <h5>{member.name}</h5>
                <small>{member.role}</small>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OrganizationPeople;
