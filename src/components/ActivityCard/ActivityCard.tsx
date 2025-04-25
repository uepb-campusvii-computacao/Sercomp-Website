import * as PropTypes from "prop-types";
import { TitleProp, DescriptionProp, SpeakerProp, SummaryProp } from "../../types/TextProps";

import ActivityCardBase from "./ActivityCardBase";
import styles from "./ActivityCard.module.css";

export default function ActivityCard( {imageUrl}:SpeakerProp, {speakers}:SpeakerProp,{title}:TitleProp, {description}:DescriptionProp, {summary}:SummaryProp ) {
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
