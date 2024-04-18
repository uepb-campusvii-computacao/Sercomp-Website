import PropTypes from "prop-types";
import ActivityCardBase from "./ActivityCardBase";
import styles from "./ActivityCard.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

function ActivityCardMultipleImage({ ministrantes, title, description }) {
  return (
    <ActivityCardBase
      slidesPerView={'auto'}
      title={title}
      description={description}
      imageNode={
        <Swiper
          className={styles.swiperImages}
          slidesPerView={1}
          spaceBetween={30}
          loop={ministrantes.length > 1}
          pagination={true}
          autoplay={ministrantes.length > 1 ? {
            delay: 2500,
            disableOnInteraction: false,
          } : false}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {ministrantes.map((ministrante, index) => (
            <SwiperSlide key={index} className={styles.ministrante}>
                <span>{ministrante.nome_ministrante}</span>
                <img src={ministrante.imagem_ministrante} alt={ministrante.nome_ministrante} />                
            </SwiperSlide>
          ))}
        </Swiper>
      }
    />
  );
}

ActivityCardMultipleImage.propTypes = {
  ministrantes: PropTypes.arrayOf(
    PropTypes.shape({
      imagem_ministrante: PropTypes.string.isRequired,
      nome_ministrante: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ActivityCardMultipleImage;
