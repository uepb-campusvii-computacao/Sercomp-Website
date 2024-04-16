import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ActivityCard.module.css";

export default function ActivityCard({ image_url, name, title, description }) {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
  };

  const truncatedDescription = showText
    ? description
    : `${description.slice(0, 200)}...`;

  return (
    <div className={styles.activityCardContainer}>
      <div className={styles.activityCardHeader}>
        <div className={styles.activityCardPerson}>
          <img src={image_url} alt={name} />
          <span>{name}</span>
        </div>
      </div>
      <div>
        <div className={styles.activityCardBody}>
          <h2>{title}</h2>
          <p>{truncatedDescription}</p>
        </div>
        <div className={styles.activityCardFooter}>
          <button className={styles.link} onClick={toggleText}>
            {showText ? "Ler menos" : "Ler mais..."}
          </button>
        </div>
      </div>
    </div>
  );
}

ActivityCard.propTypes = {
  image_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
