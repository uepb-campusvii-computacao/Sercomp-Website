import TeamSection from "../../components/TeamSection/TeamSection";
import { caccMembers, guests, teachers } from "../../data/SobreData";
import styles from './About.module.css';
import { Mensagem } from '../../components/Mensagem/Mensagem.jsx';

function About() {
    //return (<Mensagem texto={"Mais informações em breve..."}/>)

     return (
         <>
             <section className={styles.header}>
                 <div className={`container ${styles.descriptionHeaderContainer}`}>

                     <div className={styles.descriptionHeaderLeft}>
                         <div>
                             <h4>Sobre o VI SERCOMP</h4>
                             <p>
                             O VI SERCOMP, ou Congresso Sertanejo de Computação, é um evento anual de destaque no cenário acadêmico e profissional, organizado pela Universidade Estadual da Paraíba (UEPB). Este ano, o evento será realizado nos dias 20 a 24 de maio de 2024, sob o tema "Ciência de Dados na Web 3.0: Desvendando o Futuro da Informação Digital". Com linhas de ação que englobam desde a Transformação Digital e Inovação até a Gestão na Era Digital, o congresso visa promover discussões profundas e colaborativas sobre os desafios e oportunidades trazidos pela revolução digital em curso.
                             </p>
                             <p>O contexto atual é marcado por uma convergência de tecnologias inovadoras, como Inteligência Artificial, Internet das Coisas e grandes volumes de dados, que estão impulsionando uma Transformação Digital em todas as esferas da sociedade. Empresas, instituições de ensino, governos e organizações sociais enfrentam a pressão para se adaptarem a esse novo cenário, onde a agilidade e a capacidade de inovação são cruciais.</p>
                            <p>Neste sentido, o VI SERCOMP surge como uma resposta estratégica, proporcionando um espaço para a reflexão, discussão e aprendizado coletivo sobre os impactos da Transformação Digital. Reunindo especialistas, pesquisadores, profissionais e entusiastas das áreas de Computação, o congresso busca construir pontes entre teoria e prática, promovendo uma compreensão mais profunda dos desafios e oportunidades da era digital.</p>
                            <p>Os objetivos do VI SERCOMP são variados e ambiciosos, indo desde a troca de conhecimento e experiências até a identificação de soluções para os desafios da Transformação Digital. O evento oferece palestras, painéis, workshops, minicursos e outras atividades práticas, proporcionando uma experiência enriquecedora para todos os participantes.</p>
                            <p>A relevância do VI SERCOMP é evidente em diversos aspectos. Além de promover a atualização profissional e o networking estratégico, o congresso contribui para o avanço do conhecimento na área de Transformação Digital. Sediado pela UEPB, o evento projeta impacto não apenas a nível regional, mas também nacional, consolidando a instituição como referência na área.</p>
                            <p>Em um mundo em constante evolução tecnológica, o VI SERCOMP desempenha um papel crucial ao preparar os participantes para os desafios futuros. Capacitar líderes e influenciadores a antecipar e enfrentar as mudanças é essencial para a sustentabilidade e sucesso nas organizações e comunidades.</p>
                            <p>Assim, o VI SERCOMP se apresenta como um espaço fundamental para explorar as inovações e desafios no cenário da Transformação Digital, contribuindo para o avanço do conhecimento e a formação de profissionais preparados para enfrentar os desafios do futuro digital.</p>

                         </div>
                     </div>

                 </div>
             </section>

             {/*<TeamSection title="Membros do CACC" membersData={caccMembers} />
             <TeamSection title="Professores Participantes do VI SERCOMP" membersData={teachers} />
            <TeamSection title="Convidados do VI SERCOMP" membersData={guests} />*/}
         </>
    );
}

export default About;