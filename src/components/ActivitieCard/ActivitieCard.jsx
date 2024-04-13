import styles from './ActivitieCard.module.css';

const ActivitieCard = ({ icon, title, text, url }) => {
  return (
    <section className={`${styles.activitieCardContainer}`}>
      {icon}
      <h1 className={`${styles.activitieTitle}`}>{title}</h1>
      <p className={`${styles.activitieText}`}>{text}</p>
      <a href={url} className={`${styles.activitieAcessURL}`}>Acessar</a>
    </section>
  );
}

export default ActivitieCard;