import { useState } from "react";
import styles from "./Accordion.module.css";

export default function Accordion({ title, content }) {
  const [openAccordion, setOpenAccordion] = useState(false);

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
