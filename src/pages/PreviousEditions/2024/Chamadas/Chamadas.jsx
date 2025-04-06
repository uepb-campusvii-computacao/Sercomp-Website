import IconCard from "../../../../components/IconCard/IconCard";
import { chamadasData } from "../../2024/Data/ChamadasCardsList";

import styles from './Chamadas.module.css'

const Activities = () => {
  return (
    <section className={`${styles.activitiesContainer}`}>
      <section className={`${styles.activitiesCardsSection}`}>
        {chamadasData.map((activitieCard) => (
          <IconCard icon={activitieCard.icon} title={activitieCard.title} text={activitieCard.text} url={activitieCard.url} key={activitieCard.url} />
        ))}
      </section>
    </section>
  );
}

export default Activities;
