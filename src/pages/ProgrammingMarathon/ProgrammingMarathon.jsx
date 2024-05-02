import Accordion from "../../components/Accordion/Accordion.jsx";
import ProgrammingMarathonList from '../../components/TextList/TextList.jsx';

import styles from './ProgrammingMarathon.module.css';

const generalProvisions = [
   {
      title: <>A maratona terá uma duração total de 5 horas, dividida em três fases:</>,
      items: [
         <>60 minutos iniciais destinados à preparação das equipes no ambiente do laboratório de informática, incluindo instruções gerais;</>,
         <>3 horas e 30 minutos para a resolução dos problemas;</>,
         <>30 minutos para finalização e avisos finais. O resultado será divulgado no dia 24/05/2024.</>
      ]
   }
]

const determinationOfVictory = [
  <>
    A equipe vencedora será aquela que resolver a maior quantidade de problemas no menor tempo possível.
  </>
]

const languageAndProgrammingLanguages = [
  <>
    A prova será apresentada em língua portuguesa.
  </>,
  <>
    Os problemas poderão ser resolvidos em qualquer uma das linguagens de programação disponíveis (ex.: C, C++, Python ou Java).
  </>
]

const allowedFeatures = [
   {
      title: <>Cada equipe terá à disposição um computador para implementação e submissão das soluções. É vedado o uso de outros recursos digitais e acesso à Internet para o desenvolvimento das soluções.</>,
      items: [
         <>Equipes que utilizarem dispositivos eletrônicos além do computador fornecido, como celulares, smartwatches, fones de ouvido, etc., serão desclassificadas.</>,
      ]
   },
  <>
    É permitido o uso de materiais impressos.
  </>,
]

const unforeseenSituations = [
  <>
    O Comitê Diretor da Maratona de Programação será responsável por decidir sobre quaisquer situações não contempladas neste regulamento.
  </>,
]

const formLink = "https://docs.google.com/forms/d/e/1FAIpQLScNjzs25Fp-P-iFhkra3Ee2xTL7RwpXo0iwqsK21aQxKjG-oA/viewform?fbzx=1557500173599892534"

function SectionButton() {
  return (
    <div className={styles.sectionButtons}>
      <a href={formLink} className="btn btn-primary" target="_blank">
        Formulário de Inscrição
      </a>
    </div>
  );
}

export default function ProgrammingMarathon() {
   return (
      <section className={"container"}>
         <h1 className={"titulo-principal"}>
            Conheça mais sobre a <strong>Maratona de Programação</strong>
         </h1>
         <Accordion title={"Disposições Gerais"} content={<ProgrammingMarathonList items={generalProvisions} />} />
         <Accordion title={"Determinação da Vitória"} content={<ProgrammingMarathonList items={determinationOfVictory} />} />
         <Accordion title={"Idioma e Linguagens de Programação"} content={<ProgrammingMarathonList items={languageAndProgrammingLanguages} />} />
         <Accordion title={"Recursos Permitidos"} content={<ProgrammingMarathonList items={allowedFeatures} />} />
         <Accordion title={"Situações Não Previstas"} content={<ProgrammingMarathonList items={unforeseenSituations} />} />
         <SectionButton />
      </section>
   );
}
