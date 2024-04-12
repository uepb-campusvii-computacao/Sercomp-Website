import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import styles from './Partners.module.css'
import partnersData from '../../data/PartnersData.js';

export default function Partners() {
    return (
        <section className={styles.partners}>
            <div className={`container ${styles.partnersContainer}`}>
                <h1>CONHEÇA NOSSOS PARCEIROS</h1>
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
                    {partnersData.map((partner, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.avatarPartner}>
                                <a href={partner.href} target="_blank" rel="noreferrer">
                                    <img src={partner.image} alt={partner.alt} />
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </section>
    );
}