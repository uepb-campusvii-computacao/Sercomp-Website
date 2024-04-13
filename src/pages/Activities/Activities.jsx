import ActivitieCard from "../../components/ActivitieCard/ActivitieCard";
import { activitiesCards } from "../../data/ActivitieCardsList";

import styles from './Activities.module.css'

const Activities = () => {
  return (
    <section className={`${styles.activitiesContainer}`}>
      <h1>Atividades</h1>

      <section className={`${styles.activitiesCardsSection}`}>
        {activitiesCards.map((activitieCard) => (
          <ActivitieCard icon={activitieCard.icon} title={activitieCard.title} text={activitieCard.text} url={activitieCard.url} key={activitieCard.url} />
        ))}
      </section>
    </section>
  );
}

export default Activities;
