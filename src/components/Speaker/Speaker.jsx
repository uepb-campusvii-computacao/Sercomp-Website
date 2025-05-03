import * as PropTypes from "prop-types";

import styles from './Speaker.module.css'

function Speaker({ name, imagemSrc, lectureTitle, description }) {
  return (
    <article className={styles.cronMember}>
      <div className={styles.cronDetails}>
        <div className={styles.cronMemberImage}>
          <img src={imagemSrc} alt={name} />
        </div>
        <p>{lectureTitle}</p>
      </div>

      <div className={styles.cronMemberInfo}>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </article>
  );
}

Speaker.propTypes = {
    name: PropTypes.string.isRequired,
    imagemSrc: PropTypes.string.isRequired,
    lectureTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Speaker;
