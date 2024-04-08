import TeamSection from "../../components/TeamSection/TeamSection";
import { caccMembers, guests, teachers } from "../../data/SobreData";
import styles from './About.module.css';

function About() {
    return (
        <>
            <section className={styles.header}>
                <div className={`container ${styles.descriptionHeaderContainer}`}>

                    <div className={styles.descriptionHeaderLeft}>
                        <div>
                            <h4>Sobre o V SERCOMP</h4>
                            <p>
                                O V SERCOMP - Congresso Sertanejo de Computação - “Segurança em Tecnologia da Informação e Sistemas Inteligentes”
                                surge com o objetivo de colocar em prática soluções de sistemas de informação seguros e plataformas tecnológicas
                                que desempenham diversas funções que se aproximam da capacidade racional do ser humano de solucionar problemas.
                                A utilização desses sistemas segue em ascensão, pois grandes empresas precisam automatizar seus processos.
                            </p>
                            <p>
                                O objetivo é realizar o “V SERCOMP - Congresso Sertanejo de Computação - “Segurança em Tecnologia da Informação e Sistemas Inteligentes”
                                para estudantes de graduação e curso técnico, professores e pesquisadores interessados em soluções de sistemas de informação
                                seguros e sistemas inteligentes mediantes aos problemas do cotidiano da população local.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <TeamSection title="Membros do CACC" membersData={caccMembers} />
            <TeamSection title="Professores Participantes do V SERCOMP" membersData={teachers} />
            <TeamSection title="Convidados do V SERCOMP" membersData={guests} />
        </>
    );
}

export default About;
