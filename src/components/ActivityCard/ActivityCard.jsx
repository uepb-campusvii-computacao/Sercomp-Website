import PropTypes from "prop-types";
import ActivityCardBase from "./ActivityCardBase";
import styles from "./ActivityCard.module.css";

export default function ActivityCard({ imageUrl, speakerName, title, description, summaryText }) {
  return (
    <ActivityCardBase
      title={title}
      name={speakerName}
      description={description}
      summaryText={summaryText}
      imageNode={
        <div className={`${styles.speakers}`}>
          <div className={`${styles.speaker}`}>
            <img src={imageUrl} alt={speakerName} />
            <span>{speakerName}</span>
          </div>
        </div>
      }
    />
  );
}

ActivityCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  speakerName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  summaryText: PropTypes.string.isRequired,
};
