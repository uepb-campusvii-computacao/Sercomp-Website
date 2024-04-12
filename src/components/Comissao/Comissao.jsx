import PropTypes from 'prop-types';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import styles from './Comissao.module.css';

const Comissao = ({ comissaoData, title, description }) => {
    return (
        <section className={`container ${styles.orgsContainer} mySwiper`}>
            <h2 className="titulo-base">{title}</h2>
            <p className={styles.paragrafo}>{description}</p>
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
                    {comissaoData.map((professor, index) => (
                        <SwiperSlide key={index}>
                            <article className={`swiper-slide ${styles.org}`}>
                                <div className={styles.avatar}>
                                    <img src={professor.image} alt={professor.name} />
                                </div>
                                <div className={styles.orgInfo}>
                                    <h5>{professor.name}</h5>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

Comissao.propTypes = {
    comissaoData: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default Comissao;
