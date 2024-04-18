import PropTypes from "prop-types";
import ActivityCardBase from "./ActivityCardBase";
import styles from "./ActivityCard.module.css";

export default function ActivityCard({ image_url, name, title, description }) {

  return(
    <ActivityCardBase title={title} name={name} description={description} imageNode={
      <div className={`${styles.ministrantes}`}>            
        <div className={`${styles.ministrante}`}>
          <img src={image_url} alt={name} />
          <span>{name}</span>
        </div>
    </div>
    }/>
  );
}

ActivityCard.propTypes = {
  image_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
