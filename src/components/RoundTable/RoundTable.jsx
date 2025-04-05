import PropTypes from "prop-types";
import styles from "./RoundTable.module.css";

function RoundTable({ title, members }) {
  return (
    <>
      <section className={`container ${styles.roundTableContainer}`}>
        <article className={`${styles.roundTableMember} ${styles.cardWithoutText}`}>
          <div className={`${styles.roundTableDetails}`}>
            <h2 className={`${styles.roundTableDetailsTitle}`}>{title}</h2>
            <div className={styles.roundContainer}>
              {members.map((member, index) => (
                <div key={index} className={`${styles.roundTableMemberImage}`}>
                  <img src={member.image} alt={member.name} />
                  <p>{member.name}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

RoundTable.propTypes = {
  title: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RoundTable;
