import * as PropTypes from "prop-types";
import styles from './TeamSection.module.css';

const TeamSection = ({ title, membersData }) => {
  return (
    <section className={styles.team}>
      <h2>{title}</h2>
      <div className={`container ${styles.teamContainer}`}>
        {membersData.map((member, index) => (
          <article className={styles.teamMember} key={index}>
            <div className={styles.teamMemberImage}>
              <img src={member.image} alt={member.name} />
            </div>
            <div className={styles.teamMemberInfo}>
              <h4>{member.name}</h4>
              <p>{member.position}</p>
            </div>
            <div className={styles.teamMemberSocials}>
              {member.socials?.map((social, idx) => (
                <a href={social.link} target="_blank" rel="noopener noreferrer" key={idx}>
                  <i className={`uil uil-${social.name.toLowerCase()}`}></i>
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

TeamSection.propTypes = {
  title: PropTypes.string.isRequired,
  membersData: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      socials: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
};

export default TeamSection;