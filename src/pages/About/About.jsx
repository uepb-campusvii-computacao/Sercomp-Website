// import TeamSection from "../../components/TeamSection/TeamSection";
// import { caccMembers, guests, teachers } from "../../data/SobreData";
// import styles from './About.module.css';
import { Mensagem } from '../../components/Mensagem/Mensagem.jsx';

function About() {
    return (<Mensagem texto={"Mais informações em breve..."}/>)

    // return (
    //     <>
    //         <section className={styles.header}>
    //             <div className={`container ${styles.descriptionHeaderContainer}`}>

    //                 <div className={styles.descriptionHeaderLeft}>
    //                     <div>
    //                         <h4>Sobre o VI SERCOMP</h4>
    //                         <p>
    //                             INSERIR TEXTO
    //                         </p>

    //                     </div>
    //                 </div>

    //             </div>
    //         </section>

    //         <TeamSection title="Membros do CACC" membersData={caccMembers} />
    //         <TeamSection title="Professores Participantes do VI SERCOMP" membersData={teachers} />
    //         <TeamSection title="Convidados do VI SERCOMP" membersData={guests} />
    //     </>
    // );
}

export default About;