import styles from './IconCard.module.css';
import PropTypes from 'prop-types';

const IconCard = ({ icon, title, text, url }) => {
  return (
    <section className={styles.activitieCardContainer}>
      <header className={styles.activitieHeader}>
        {icon}
        <h1 className={styles.activitieTitle}>{title}</h1>
      </header>
      <div className={styles.activitieBody}>
        <p className={styles.activitieText}>{text}</p>
      </div>
      <footer className={styles.activitieFooter}>
        <a href={url} className={styles.activitieAcessURL}>Acessar</a>
      </footer>
    </section>
  );
}

IconCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default IconCard;
