import PropTypes from "prop-types";
import styles from "./MesaRedonda.module.css";

function MesaRedonda({ titulo, membros }) {
  return (
    <>
      <section className={`container ${styles.cronContainer}`}>
        <article className={`${styles.cronMember} ${styles.cardWithoutText}`}>
          <div className={`${styles.cronDetails}`}>
            <h2 className={`${styles.cronDetailsTitle}`}>{titulo}</h2>
            <div className={styles.mesaContainer}>
              {membros.map((membro, index) => (
                <div key={index} className={`${styles.cronMemberImage}`}>
                  <img src={membro.imagem} alt={membro.nome} />
                  <p>{membro.nome}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

MesaRedonda.propTypes = {
  titulo: PropTypes.string.isRequired,
  membros: PropTypes.arrayOf(
    PropTypes.shape({
      imagem: PropTypes.string.isRequired,
      nome: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MesaRedonda;
