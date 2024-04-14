import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import orgMembersData from '../../data/OrganizationData.js';
import styles from './Organization.module.css';

export default function Organization() {
    return (
        <section className={`${styles.orgsContainer} container mySwiper`}>
            <h2>ORGANIZAÇÃO DO VI SERCOMP</h2>
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
                    }
                }}
            >
                {orgMembersData.map((member, index) => (
                    <SwiperSlide key={index}>
                        <article className={`org swiper-slide ${styles.org}`}>
                            <div className={styles.avatar}>
                                <img src={member.image} alt={member.alt}/>
                            </div>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
