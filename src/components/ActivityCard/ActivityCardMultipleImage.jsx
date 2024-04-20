import PropTypes from "prop-types";
import ActivityCardBase from "./ActivityCardBase";
import styles from "./ActivityCard.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Tooltip from "../ToolTip/ToolTip";

function ActivityCardMultipleImage({ ministrantes, title, description, texto_resumo }) {
  return (
    <ActivityCardBase
      title={title}
      description={description}
      texto_resumo={texto_resumo}
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
              <Tooltip text={ministrante.nome_ministrante}>
                <span className={styles.imageHeaderTextTruncated}>
                  {ministrante.nome_ministrante}
                </span>                
              </Tooltip>
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
  description: PropTypes.node.isRequired,
  texto_resumo: PropTypes.string.isRequired,
};

export default ActivityCardMultipleImage;
