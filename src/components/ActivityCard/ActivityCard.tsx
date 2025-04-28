import * as PropTypes from "prop-types";
import { TitleProp, DescriptionProp, SpeakerProp, SummaryProp, ContentProp } from "../../types/TextProps";

import ActivityCardBase from "./ActivityCardBase";
import styles from "./ActivityCard.module.css";

export default function ActivityCard( {imageUrl}:ContentProp, {speakerName}:SpeakerProp,{title}:TitleProp, {description}:DescriptionProp, {summaryText}:SummaryProp ) {
  return (
    <ActivityCardBase
      title={title}
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
