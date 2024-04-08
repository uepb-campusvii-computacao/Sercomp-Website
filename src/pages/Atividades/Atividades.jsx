import Palestrante from '../../components/Palestrante/Palestrante'
import Partners from '../../components/Partners/Partners'

import styles from './Atividades.module.css'

import cleisson from '../../assets/images/participacoes/cleisson.png';
import karliane from '../../assets/images/participacoes/karliane.png';

function Atividades() {
  return (
    <>
        <section className={styles.cron}>
            <h2 className={styles.tituloBase}>Atividades Confirmadas no V SERCOMP</h2>
            <h2 className={styles.tituloBase}>Palestras</h2>

            <section className={`container ${styles.cronContainer}`}>
                <Palestrante
                    nome="Cleisson Christian Lima da Costa Ramos"
                    imagemSrc={cleisson}
                    tituloPalestra="Palestra I: Desafios e Estratégias de Mitigação de Vulnerabilidades em Sistemas Operacionais - Explorando na prática"
                    descricao="Bacharel em Sistemas de Informação; Pós-graduação em Segurança de Informação; Pós em Educação, Desenvolvimento e Políticas Educativas; MBA em Gestão em TI; Pós em Formação em Educação a Distância. Atualmente trabalha como analista de segurança da informação (Red Team - Cyber Security) na Under Protection, além de trabalhar como docente do curso de Sistemas de Informação da UNIFACISA. Tem experiência como docente no ensino superior, graduação e pós (dez anos), além do ensino técnico na área de computação, totalizando vinte anos ministrando disciplinas nas áreas de tecnologia da informação e comunicação, computação, sistemas de informação e segurança da informação. Trabalhou durante cinco anos como coordenador de curso (Análise e Desenvolvimento de Sistemas), além de ministrar palestras e cursos de capacitação nas áreas de Segurança da Informação (Pentest) e Tecnologias da Informação."
                />

                <Palestrante
                    nome="Karliane Medeiros Ovidio Vale"
                    imagemSrc={karliane}
                    tituloPalestra="Palestra II: Desvendando insights valiosos: como a mineração de dados pode impulsionar a tomada de decisão estratégica"
                    descricao="Graduada em Tecnologia em Processamento de Dados pela Universidade Potiguar em 1999, com especialização em Tecnologia e Desenvolvimento de Sistemas Orientado a Objeto para Web em 2005 pela mesma universidade, além de mestrado e doutorado em Sistemas e Computação pela UFRN. Ela possui experiência na área de Ciência da Computação, com ênfase em desenvolvimento de sistemas, e é professora na Universidade Federal do Rio Grande do Norte, onde participa de pesquisas no laboratório de inteligência computacional aplicada a negócios. Também tem experiência como coordenadora de curso técnico e docente em outras universidades e faculdades."
                />
            </section>
        </section>
        <Partners />
    </>
  );
}

export default Atividades;
