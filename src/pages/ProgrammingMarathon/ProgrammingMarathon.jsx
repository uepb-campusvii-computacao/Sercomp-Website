import Accordion from "../../components/Accordion/Accordion.jsx";
import ProgrammingMarathonList from "../../components/TextList/TextList.jsx";

import styles from "./ProgrammingMarathon.module.css";

const overview = [
  <>
    A Maratona de Programação é um evento de caráter competitivo e educativo, destinado a desafiar as habilidades de programação e resolução de problemas dos participantes. Ela ocorrerá ao longo de 4,5 horas, divididas em três fases distintas, que proporcionarão uma experiência dinâmica e intensa para as equipes.
  </>
];

const eventStructure = [
  <>
    <strong>Fase de Preparação (30 minutos):</strong> Durante os primeiros 30 minutos do evento, as equipes serão recebidas no ambiente do laboratório de informática, onde terão tempo para se organizar e se familiarizar com o espaço. Esse período inclui a apresentação das instruções gerais sobre a dinâmica da competição, além de orientações práticas sobre o uso dos recursos disponíveis. Também serão esclarecidas dúvidas sobre o regulamento e os problemas da competição. Será utilizado a plataforma <em>beecrowd</em>.
  </>,
  <>
    <strong>Fase de Resolução (3h30min):</strong> A fase principal da maratona terá 3 horas e 30 minutos de duração. Nesse período, as equipes terão que aplicar seus conhecimentos em programação para resolver os problemas computacionais apresentados. Durante esse tempo, as equipes terão que concluir a resolução dos problemas e realizar a submissão de suas soluções.
  </>,
  <>
    <strong>Fase Final (30 minutos):</strong> Nos últimos 30 minutos da competição, as equipes receberão os avisos finais, incluindo o resultado da competição. Durante esse tempo, também serão realizados registros fotográficos por equipe. A premiação ocorrerá no dia 21/05/2024.
  </>
];

const teamComposition = [
  <>
    Cada equipe deverá ser formada por três membros (exatamente), independentemente de serem ou não graduandos no curso de Ciência da Computação do Campus VII da UEPB. O evento terá a participação de até 15 equipes, levando em consideração a capacidade dos laboratórios de informática onde a competição será realizada.
  </>,
  <>
    As inscrições serão aceitas por ordem de chegada até o número máximo de equipes disponíveis. No ato de inscrição, via <a href="https://docs.google.com/forms/d/e/1FAIpQLSex4sP2GHAdOP5gyTVCy0fTjbfckEfu3w9-R4Zhua4ouxcQ_w/viewform" target="_blank" className={styles.link}>formulário</a>, cada equipe deve indicar um nome para a equipe.
  </>,
  <>
    Em caso de ausência de integrantes no dia da maratona, a equipe poderá competir com número inferior de participantes, mas será julgada da mesma forma.
  </>
];

const testDescription = [
  <>
    Cada equipe receberá uma prova composta de até 10 problemas computacionais, desafiando as equipes a se organizarem para encontrar as melhores soluções. Os problemas serão variados, estruturados para testar o domínio de conceitos como algoritmos, estruturas de dados, análise de desempenho de código e raciocínio lógico.
  </>,
  <>
    O tempo disponível para resolver os problemas será de 3 horas e 30 minutos. As equipes terão que administrar bem esse tempo para resolver o maior número possível de questões, respeitando o tempo de execução de cada uma.
  </>
];

const victoryCriteria = [
  <>
    A equipe vencedora será aquela que resolver o maior número de problemas corretamente. A pontuação principal é baseada nessa quantidade de problemas resolvidos. Em caso de empate, o critério de desempate será o tempo total de resolução.
  </>,
  <>
    Esse tempo é calculado com base no momento em que cada problema foi resolvido corretamente, somado a uma penalidade de 10 minutos para cada tentativa incorreta feita antes da submissão correta. Esse cálculo é feito automaticamente pela plataforma <em>beecrowd</em>.
  </>,
  <>
    Por exemplo, considere que as equipes X e Y resolveram duas questões cada uma. A equipe X submeteu corretamente a primeira questão após 21 minutos do início da competição, tendo cometido duas tentativas incorretas (o que gera 20 minutos de penalidade), e a segunda questão após 54 minutos, com quatro tentativas incorretas (gerando 40 minutos de penalidade). Assim, o tempo total da equipe X é de 135 minutos: (21+20)+(54+40). Já a equipe Y resolveu a primeira questão aos 24 minutos, após uma tentativa incorreta (10 minutos de penalidade), e a segunda aos 78 minutos, após duas tentativas incorretas (20 minutos de penalidade), totalizando 132 minutos: (24+10)+(78+20). Embora ambas tenham resolvido o mesmo número de problemas, a equipe Y vence por ter o menor tempo total.
  </>
];

const languages = [
  <>
    A prova será apresentada em língua portuguesa, garantindo o acesso a todos os participantes, independentemente de sua origem.
  </>,
  <>
    Os problemas podem ser resolvidos em qualquer uma destas linguagens de programação: C, C++, Python ou Java. As equipes têm liberdade para escolher a linguagem com a qual se sentem mais confortáveis. Cada questão pode ter soluções submetidas considerando linguagens diferentes, desde que respeitem as limitações da plataforma.
  </>
];

const allowedResources = [
  <>
    Cada equipe terá acesso a um computador para a implementação e submissão das soluções, sendo possível utilizar as IDEs disponíveis na máquina. É proibido o uso de dispositivos eletrônicos adicionais, como celulares, <em>smartwatches</em>, fones de ouvido, notebooks pessoais ou qualquer outro dispositivo conectado à Internet. O uso de tais recursos acarretará na desclassificação imediata da equipe.
  </>,
  <>
    É permitido o uso de materiais impressos, como livros, anotações ou documentos relacionados à programação. No entanto, materiais digitais e acesso à internet são estritamente proibidos. As equipes submeterão as soluções via <em>beecrowd</em>, podendo usar o navegador apenas para acessar a plataforma (máximo de três abas abertas).
  </>
];

const unforeseenSituations = [
  <>
    Qualquer situação não prevista neste regulamento será decidida pelo Comitê da Maratona de Programação, cujas decisões serão irresignáveis e finais. O comitê está encarregado de garantir que a competição ocorra de forma justa e organizada, tomando as decisões necessárias para assegurar a integridade do evento.
  </>
];

const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSex4sP2GHAdOP5gyTVCy0fTjbfckEfu3w9-R4Zhua4ouxcQ_w/viewform";

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
      <h1 className={"mainTitle"}>
        Conheça mais sobre a <strong>Maratona de Programação VII SERCOMP 2025</strong>
      </h1>
      <Accordion
        title={"Regras da Maratona de Programação"}
        content={<ProgrammingMarathonList items={overview} />}
      />
      <Accordion
        title={"Estrutura do Evento"}
        content={<ProgrammingMarathonList items={eventStructure} />}
      />
      <Accordion
        title={"Composição das Equipes e Participação"}
        content={<ProgrammingMarathonList items={teamComposition} />}
      />
      <Accordion
        title={"A Prova"}
        content={<ProgrammingMarathonList items={testDescription} />}
      />
      <Accordion
        title={"Determinação da Vitória"}
        content={<ProgrammingMarathonList items={victoryCriteria} />}
      />
      <Accordion
        title={"Idioma e Linguagens de Programação"}
        content={<ProgrammingMarathonList items={languages} />}
      />
      <Accordion
        title={"Recursos Permitidos"}
        content={<ProgrammingMarathonList items={allowedResources} />}
      />
      <Accordion
        title={"Situações Não Previstas"}
        content={<ProgrammingMarathonList items={unforeseenSituations} />}
      />
      <SectionButton />
    </section>
  );
}