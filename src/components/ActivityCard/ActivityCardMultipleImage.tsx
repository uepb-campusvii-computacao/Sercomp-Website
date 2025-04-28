import * as PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./ActivityCard.module.css";
import ActivityCardBase from "./ActivityCardBase";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Tooltip from "../ToolTip/ToolTip";
import { Activity } from "../../types/ActivityProps";

export default function ActivityCardMultipleImage( {
  speakers,
  confirmedActivityTitle,
  confirmedActivityDescription,
  summaryText}: Activity) {
  return (
    <ActivityCardBase
      title={confirmedActivityTitle}
      description={confirmedActivityDescription}
      summaryText={summaryText}
      imageNode={
        <Swiper
          className={styles.swiperImages}
          slidesPerView={1}
          spaceBetween={30}
          loop={speakers.length > 1}
          pagination={true}
          autoplay={speakers.length > 1 ? {
            delay: 2500,
            disableOnInteraction: false,
          } : false}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {speakers.map((speaker, index) => (
            <SwiperSlide key={index} className={styles.speaker}>
              <Tooltip text={speaker.speakerName}>
                <span className={styles.imageHeaderTextTruncated}>
                  {speaker.speakerName}
                </span>                
              </Tooltip>
              <img className={styles.speakerImage} src={speaker.speakerImage} alt={speaker.speakerName} />
            </SwiperSlide>
          ))}
        </Swiper>
      }
    />
  );
}

ActivityCardMultipleImage.propTypes = {
  speakers: PropTypes.arrayOf(
    PropTypes.shape({
      speakerImage: PropTypes.string.isRequired,
      speakerName: PropTypes.string.isRequired,
    })
  ).isRequired,
  confirmedActivityTitle: PropTypes.string.isRequired,
  confirmedActivityDescription: PropTypes.node.isRequired,
  summaryText: PropTypes.string.isRequired,
};