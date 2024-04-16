import { useState } from "react";
import imagem from "../../assets/images/participacoes/almeida.png";
import styles from "./ActivityCard.module.css";

export default function ActivityCard({ image_url, name, title, description }) {
  const [showText, setShowText] = useState(false);

  const text = showText ? description : description.slice(0, 200).concat("...");

  return (
    <div className={styles.activityCardContainer}>
      <div className={styles.activityCardPerson}>
        <img src={image_url} alt={name} />
        <span>{name}</span>
      </div>
      <div className={styles.activityCardDescription}>
        <h2>{title}</h2>
        <p>{text}</p>
        <button onClick={() => setShowText(!showText)}>
          {showText ? "Ler menos" : "Ler mais..."}
        </button>
      </div>
    </div>
  );
}
