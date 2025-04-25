import { useState } from "react";
import styles from "./Accordion.module.css";
import { TitleProp, contentProp } from "../../types/TextProps";

export default function Accordion({title}: TitleProp, {content}: contentProp) {
  const [openAccordion, setOpenAccordion] = useState(true);

  function handleToggleAccordion(){
    setOpenAccordion(!openAccordion)
  }

  return (
    <div className={styles.accordionContainer}>
      <div onClick={handleToggleAccordion} className={styles.accordionTitle}>
        <h2>{title}</h2>
        {openAccordion ? (
          <i className="uil uil-angle-down"></i>
        ) : (
          <i className="uil uil-angle-up"></i>
        )}
      </div>
      <div className={openAccordion ? styles.accordionActive : styles.accordionDisable}>{content}</div>
    </div>
  );
}
