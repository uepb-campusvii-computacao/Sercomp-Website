import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { classMonitorsData } from "../../data/ClassMonitorsData";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import styles from './Committee.module.css';


function Committee() {
    return (
        <section className="container">
            <h1 className="mainTitle">Conheça o comitê do <strong>SERCOMP</strong></h1>
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
                        {classMonitorsData.map((classMonitor, index) => (
                            <SwiperSlide key={index}>
                                <article className={`swiper-slide ${styles.org}`}>
                                    <div className={styles.avatar}>
                                        {/* <img src={classMonitor.image} alt={classMonitor.name} /> */}
                                    </div>
                                    <div className={styles.committeeInfo}>
                                        {/* <h5>{classMonitor.name}</h5>
                                        <h6>{classMonitor.area}</h6> */}
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


export default Committee;
