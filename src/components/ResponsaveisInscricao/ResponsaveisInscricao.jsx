import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import styles from './ResponsaveisInscricao.module.css';

import responsaveisInscricao from '../../data/ResponsaveisInscricoes.js'

const Comissao = () => {
    return (
        <section className={`container ${styles.orgsContainer} mySwiper`}>
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
                        }
                    }}
                >
                    {responsaveisInscricao.map((resp, index) => (
                        <SwiperSlide key={index}>
                            <article className={`${styles.org} swiper-slide`}>
                                <div className={styles.avatar}>
                                    <img src={resp.image} alt={resp.name} />
                                </div>
                                <div className={`${styles.orgInfo}`}>
                                    <h5>{resp.name}</h5>
                                    <small>{resp.time}</small>
                                    <p className="uil uil-phone"><a href={`https://wa.me/${resp.phone}`} target="_blank">Contactar</a></p>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Comissao;
