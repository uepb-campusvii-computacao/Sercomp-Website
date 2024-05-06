import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { monitoresData } from "../../data/MonitoresData";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import styles from './Comite.module.css';


function Comite() {
    return (
        <section className="container">
            <h1 className="titulo-principal">Conheça o comitê do <strong>SERCOMP</strong></h1>
            <section className={`container ${styles.orgsContainer} mySwiper`} >
                <div className="swiper-wrapper">
                    <Swiper
                        modules={[Autoplay]}
                        className="mySwiper"
                        spaceBetween={30}
                        autoplay={{ delay: 2000 }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            450: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            800: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            }
                        }}
                    >
                        {monitoresData.map((monitor, index) => (
                            <SwiperSlide key={index}>
                                <article className={`swiper-slide ${styles.org}`}>
                                    <div className={styles.avatar}>
                                        <img src={monitor.image} alt={monitor.name} />
                                    </div>
                                    <div className={styles.orgInfo}>
                                        <h5>{monitor.name}</h5>
                                        <h6>{monitor.area}</h6>
                                    </div>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </section>
    );
}


export default Comite;
