import PropTypes from 'prop-types';

import styles from './Palestrante.module.css'

function Palestrante({ nome, imagemSrc, tituloPalestra, descricao }) {
  return (
    <article className={styles.cronMember}>
      <div className={styles.cronDetails}>
        <div className={styles.cronMemberImage}>
          <img src={imagemSrc} alt={nome} />
        </div>
        <p>{tituloPalestra}</p>
      </div>

      <div className={styles.cronMemberInfo}>
        <h4>{nome}</h4>
        <p>{descricao}</p>
      </div>
    </article>
  );
}

Palestrante.propTypes = {
    nome: PropTypes.string.isRequired,
    imagemSrc: PropTypes.string.isRequired,
    tituloPalestra: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
};

export default Palestrante;
