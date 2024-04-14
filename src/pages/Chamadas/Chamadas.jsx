import IconCard from "../../components/IconCard/IconCard";
import { chamadasData } from "../../data/ChamadasCardsList";

import styles from './Chamadas.module.css'

const Activities = () => {
  return (
    <section className={`${styles.activitiesContainer}`}>
      <h1>Atividades</h1>

      <section className={`${styles.activitiesCardsSection}`}>
        {chamadasData.map((activitieCard) => (
          <IconCard icon={activitieCard.icon} title={activitieCard.title} text={activitieCard.text} url={activitieCard.url} key={activitieCard.url} />
        ))}
      </section>
    </section>
  );
}

export default Activities;
