import PropTypes from "prop-types";
import React, { useState } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import Tooltip from "../ToolTip/ToolTip";
import styles from "./ActivityCard.module.css";

const extractTextFromFragment = (node) => {
  let text = "";

  React.Children.forEach(node, (child) => {
    if (typeof child === "string") {
      text += child;
    } else if (React.isValidElement(child)) {
      text += extractTextFromFragment(child.props.children);
    }
  });

  return text;
};

const MAX_CHARACTERS = 200;

export default function ActivityCardBase({ imageNode, title, description, texto_resumo }) {
  const [showText, setShowText] = useState(false);
  const width = useWindowWidth();

  const toggleText = () => {
    setShowText(!showText);
  };

  const fullText = extractTextFromFragment(texto_resumo);
  const truncatedText = fullText.slice(0, MAX_CHARACTERS);

  return (
    <div className={styles.activityCardContainer}>
      <div className={styles.activityCardHeader}>
        <div className={styles.activityCardPerson}>{imageNode}</div>
      </div>
      <div className={styles.group}>
        <div className={styles.activityCardBody}>
          <Tooltip text={title}>
            <div className={styles.textTruncated}>
              <h2>{title}</h2>
            </div>
          </Tooltip>         
          <div className={styles.bodyDescription}>
            {showText ? (
              description
            ) : (
              width > 1300 &&
              <p>
                {truncatedText}...
              </p>
            )}
          </div>
        </div>
        <div className={styles.activityCardFooter}>
          <button className={styles.link} onClick={toggleText}>
            {showText ? "Ler menos" : "Ler mais..." }
          </button>
        </div>
      </div>
    </div>
  );
}

ActivityCardBase.propTypes = {
  imageNode: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  texto_resumo: PropTypes.string.isRequired
};
