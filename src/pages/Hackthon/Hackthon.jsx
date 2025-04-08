import Accordion from "../../components/Accordion/Accordion.jsx";
import HackthonList from "../../components/TextList/TextList.jsx";

import styles from "./Hackthon.module.css";

const overview = [
  <>
    O Hackathon &quot;Cidades Sustentáveis&quot; representa uma oportunidade
    única para reunir mentes criativas e inovadoras em torno de um objetivo
    comum: promover o desenvolvimento de soluções tecnológicas que melhorem a
    qualidade de vida nas áreas urbanas. Ao longo da competição, as equipes
    terão a chance de desenvolver plataformas e aplicativos que abordam desafios
    específicos relacionados à sustentabilidade, mobilidade, energia, resíduos e
    outros aspectos essenciais para criar cidades mais resilientes e habitáveis.
    Com a orientação de mentores especializados e o apoio de tecnologias
    avançadas, os participantes terão a oportunidade não apenas de competir por
    prêmios emocionantes, mas também de fazer uma diferença tangível em suas
    próprias comunidades e no mundo em geral.
  </>,
];

const objectives = [
  <>
    O principal objetivo do hackathon é incentivar a criatividade e a
    colaboração entre os participantes, desafiando-os a desenvolver soluções
    para problemas práticos e reais em um curto espaço de tempo.
  </>,
];

const problemAndSolution = [
  <>A formação técnica isolada não é suficiente para os desafios atuais.</>,
  <>
    Fomentar o desenvolvimento equilibrado de competências técnicas e
    interpessoais nos profissionais da área.
  </>,
];

const challenge = [
  <>
    Desenvolva uma plataforma que permita que os cidadãos acessem facilmente
    informações sobre os projetos financiados pelo governo em suas comunidades,
    incluindo detalhes sobre orçamento, cronograma, progresso e resultados
    alcançados. Além disso, a plataforma terá as seguintes funcionalidades:
  </>,
  <>
    <strong>Serviços de prestação de contas:</strong> Capacitar os responsáveis
    pela gestão dos projetos a reportarem regularmente o progresso e a
    utilização dos recursos, com métricas claras e indicadores de desempenho;
  </>,
  <>
    <strong>Serviços de engajamento comunitário:</strong> Permitir o
    envolvimento dos cidadãos no monitoramento e avaliação dos projetos, de tal
    forma que forneçam feedback e relatem problemas diretamente na plataforma;
  </>,
  <>
    <strong>Monitoramento e análise de Dados:</strong> Utilizar técnicas de
    ciência de dados para analisar os dados coletados e identificar padrões,
    tendências e possíveis irregularidades na utilização dos recursos públicos.
  </>,
  <>
    Essas funcionalidades visam promover a transparência, a prestação de contas
    e o engajamento comunitário, fortalecendo a governança e contribuindo para a
    eficácia e eficiência na utilização dos recursos públicos em projetos de
    desenvolvimento comunitário.
  </>,
];

const techs = [
  <>
    Com um leque de tecnologias à disposição, contamos com os participantes do
    desafio para transformar suas ideias em realidade. Esperamos ver projetos
    que explorem as capacidades do React para Front-End, Node.js para Back-End e
    Firebase para banco de dados.
  </>,
];

const teams = [
  <>
    Cada equipe deverá ser composta por, no mínimo, 1 e, no máximo, 5 pessoas,
    designadas no ato da inscrição. Os participantes inscritos nas equipes
    deverão ter disponibilidade para participar integralmente de todo o ciclo do
    hackathon. Ao se inscrever, a equipe deverá fornecer os dados completos dos
    membros, incluindo e-mails válidos e informações de contato, e também deve
    descrever o projeto e as tecnologias que serão usadas.
  </>,
];

const formLink =
  "https://docs.google.com/document/d/1WbGeYF41YXII9XiXQX0tE02PIwkJo2AABCUxVpVO_W8/edit?tab=t.0";

const registration = [
  <>
    As inscrições estão condicionadas a estudantes interessados em participar
    desta competição a fim de desenvolver soluções tecnológicas voltadas para a
    transparência e prestação de contas na gestão de recursos públicos nas
    cidades. As inscrições serão realizadas entre os dias 10/04/2025 a
    30/04/2025, por meio deste{" "}
    <a href={formLink} target="_blank" className={styles.link}>
      formulário
    </a>
    . Para tanto, é necessário atingir os seguintes passos:
  </>,
  <>
    <strong>Passo 1:</strong> Reúna uma equipe multidisciplinar de até 5
    membros. Seja você um desenvolvedor, cientista de dados, designer,
    especialista em negócios ou qualquer outro perfil, todos são bem-vindos!
  </>,
  <>
    <strong>Passo 2:</strong> Prepare uma breve descrição da sua aplicação,
    descrevendo os requisitos: funcionais e não funcionais; modelo de análise:
    perfil do usuário, sequência de eventos do instrumento, diagrama de casos de
    uso e tecnologias de suporte; modelo de arquitetura e modelo de projeto (com
    interfaces da aplicação).
  </>,
  <>
    <strong>Passo 3:</strong> Preencha o formulário até a data limite de
    inscrição.
  </>,
];

const timeline = [
  <>
    <strong>Inscrições:</strong> As equipes devem submeter suas inscrições,
    conceber suas ideias e fornecer documentação associada no período de
    10/04/2025 a 30/04/2025, por meio do formulário de inscrição.;
  </>,
  <>
    <strong>Divulgação das Equipes Selecionadas:</strong> 10 equipes serão
    selecionadas para participar do hackathon serão divulgadas publicamente até
    19/05/2025, fornecendo visibilidade e reconhecimento aos participantes antes
    do evento;
  </>,
  <>
    <strong>Brainstorming:</strong> As equipes terão a oportunidade de
    amadurecer suas ideias e redefinir o escopo durante a sessão de
    brainstorming, que ocorrerá em 20/05/2025 a partir das 9h as 10h;
  </>,
  <>
    <strong>Desenvolvimento:</strong> O desenvolvimento das soluções terá início
    em 20/05/2025, com a implementação de funcionalidades sob mentoria. Nesse
    mesmo dia, as equipes terão das 13h às 17h30 para trabalhar no
    desenvolvimento da aplicação, sendo necessário entregar, no mínimo, um
    protótipo.
  </>,
  <>
    <strong>Apresentação:</strong> As equipes apresentarão suas soluções para a
    comunidade em 21/05/2025, a partir das 16:30h, no Auditório da UEPB-Patos,
    as equipes finalistas terão até 3 minutos para apresentar sua solução para o
    júri e para os outros participantes.
  </>,
  <>
    <strong>Premiação do Hackathon:</strong> A premiação das equipes vencedoras
    ocorrerá em 21/05/2024, a partir das 08:30.
  </>,
];

const intellectualPropertyRights = [
  <>
    Os participantes do hackathon, incluindo os finalistas e vencedores, no ato
    da inscrição, assumem total e exclusiva responsabilidade pela aplicação que
    será apresentado ao final do evento, por sua titularidade e originalidade,
    incluindo, sem limitação, responsabilidade por eventuais violações à
    intimidade, privacidade, honra e imagem de qualquer pessoa, a deveres de
    segredo, à propriedade industrial, direito autoral e/ou a respeito de todas
    e quaisquer eventuais reivindicações de terceiros que se sintam
    prejudicados, eximindo a organizadora de qualquer responsabilidade relativa
    a tais fatos, aspectos, direitos e/ou situações.{" "}
  </>,
  <>
    A organizadora declara ciência expressa que, os direitos de autor sobre os
    aplicativos apresentados ao final da competição pertencem e permanecerão
    pertencentes integralmente aos seus respectivos proprietários.
  </>,
];

const terms = [
  <>
    Os participantes, no ato da inscrição deste Hackathon e uma vez sendo
    finalistas e/ou premiados, autorizam a utilização, de modo gratuito,
    definitivo e irrevogável, de seu nome e imagem, e ainda, do nome, imagem e
    características do aplicativo apresentado, no todo ou em parte, em qualquer
    meio/veículo escolhido pela organizadora, especialmente virtual, a qualquer
    tempo e por período indeterminado, sem restrição de quantidade, qualidade e
    frequência, mesmo que para fins publicitários, sem que isso lhe implique
    qualquer tipo de ônus e/ou contrapartida devida pela comissão organizadora.
  </>,
];

const disqualification = [
  <>
    <strong>Será desclassificada a equipe que:</strong>
  </>,
  <>Ferir os princípios de fair play;</>,
  <>Causar tumulto ou confusão durante o evento;</>,
  <>Pedir apoio para qualquer pessoa fora do evento;</>,
  <>Copiar soluções já existentes;</>,
  <>
    Se ausentar durante a etapa presencial da competição (a equipe deverá manter
    sempre ao menos um representante no local do evento).
  </>,
];

const generalProvisions = [
  <>
    O presente Regulamento e este Hackathon poderão ser alterados, suspensos ou
    cancelados a qualquer tempo, comprometendo-se a comissão organizadora, desde
    já, a comunicar o novo Regulamento ou às novas condições do Hackathon ou,
    ainda, o seu cancelamento definitivo, se for o caso, sem que exista direito
    a qualquer indenização em favor dos participantes. A organizadora não se
    responsabilizará por participações que não sejam computadas por problemas
    técnicos que ocorram na transmissão dos dados. A responsabilidade da
    comissão organizadora em relação ao prêmio termina no momento em que forem
    entregues aos ganhadores.
  </>,
  <>
    A comissão organizadora não será responsável por problemas, falhas ou mau
    funcionamento técnico de qualquer tipo, em redes de computadores, servidores
    ou provedores, equipamentos de computadores, hardware ou software, nem por
    erro, interrupção, defeito, atraso ou falha em operações ou transmissões
    para o correto processamento de inscrições, incluindo, mas não se limitando,
    a transmissão imprecisa das inscrições ou de eventuais falhas em recebê-las,
    em razão de problemas técnicos, congestionamento na internet ou no site
    ligado à maratona, vírus, queda de energia, falha de programação (bugs) ou
    violação por terceiros (hackers).
  </>,
  <>
    Eventuais tentativas por parte dos participantes de violar, de forma
    deliberada, alguns dos sites da organizadora ou do evento ou, ainda, de
    prejudicar o funcionamento legítimo da maratona, poderá constituir uma
    afronta às leis penais e civis, podendo acarretar a devida responsabilização
    por danos e prejuízos que vier a causar.
  </>,
  <>
    Da mesma forma, a organizadora não se responsabiliza pela ocorrência de
    casos fortuitos ou de força maior que possam impedir a participação do
    interessado neste Hackathon e/ou Evento.
  </>,
  <>
    Eventuais despesas necessárias ao desenvolvimento e execução do aplicativo,
    assim como, a inscrição deste no Hackathon e sua participação no evento, mas
    não se limitando a estes, são de responsabilidade exclusiva do participante
    individualmente ou em equipe, ficando, a organizadora, eximida de qualquer
    dever, responsabilidade e/ou ônus.
  </>,
  <>
    A inscrição neste Hackathon implica na aceitação imediata, integral e
    automática de todas as cláusulas e condições previstas neste Regulamento,
    assim como, nas previstas no Regulamento Geral do Evento. Todas as funções,
    aplicações e/ou tecnologias desenvolvidas devem ser originais.
  </>,
  <>
    Cada participante deverá trazer seus próprios equipamentos (laptop, tablet e
    outros) para desenvolver as soluções para a competição, sendo que será
    fornecida rede wi-fi e energia no dia do evento pela organização. Os
    participantes deverão usar o crachá fornecido no ato do credenciamento
    durante todo o período e em todos os espaços em que será realizada a
    maratona.
  </>,
  <>
    A comissão organizadora reserva-se o direito de decidir em sem consultar os
    participantes acerca de qualquer situação ou fato não previsto neste edital,
    e reserva-se o direito de acrescentar, diminuir ou remanejar o número de
    vagas para o hackathon conforme demanda.
  </>,
];

const guidelinesForParticipants = [
  <>
    As despesas dos participantes referentes a transporte, material de consumo e
    quaisquer outras necessárias para a participação deste evento serão de
    responsabilidade dos próprios participantes.
  </>,
];

const ratingCriteria = [
  <>
    As soluções propostas pelas equipes deverão estar prontas até às 17:00 horas
    do dia 21 de Maio de 2025. Em seguida, a avaliação dos aplicativos será
    realizada por meio de uma banca julgadora no dia 21 de Maio de 2024 às 17:30
    horas. Um representante de cada equipe apresentará aos integrantes da banca
    no modelo de “elevator pitch” (uma apresentação sucinta, cativante, geral e
    rápida) da solução criada durante o hackday, em até 20 (dez) minutos. A
    ordem das apresentações das equipes será definida através de sorteio.
  </>,
  <>
    Serão consideradas vencedoras a equipe avaliada com a melhor pontuação,
    tendo por base os critérios:
  </>,
  <>
    <strong>Viabilidade Técnica:</strong> Avalia a viabilidade técnica do
    projeto. A equipe deve demonstrar que sua solução pode ser implementada de
    maneira prática, considerando as tecnologias escolhidas e os recursos
    disponíveis. (Peso: 25%);
  </>,
  <>
    <strong>Usabilidade:</strong> Avalia a experiência do usuário, a interface e
    a facilidade de uso da solução. Um projeto de alta usabilidade deve ser
    intuitivo, fácil de usar e com um design funcional. (Peso: 20%);
  </>,
  <>
    <strong>Impacto:</strong> Avalia o potencial impacto da solução. O impacto
    pode ser social, ambiental ou econômico, dependendo do tema do Hackathon. O
    júri avaliará como a solução pode beneficiar o público-alvo ou resolver
    problemas reais. (Peso: 15%);
  </>,
  <>
    <strong>Qualidade Técnica:</strong> Avalia a qualidade e a robustez do
    protótipo. Isso inclui a clareza e eficiência do código, a estabilidade do
    sistema e a execução geral do projeto. Um código bem estruturado e sem
    falhas é essencial. (Peso: 10%).
  </>,
  <>
    Pontos extra (segundo a ISO / IEC 25000: 2014 - Systems and Software Quality
    Requirements and Evaluation - SQuaRE)
  </>,
  <>
    <strong>Adequação Funcional -</strong> Essa característica representa o grau
    em que um produto ou sistema fornece funções que atendem às necessidades
    declaradas e implícitas quando usadas sob condições especificadas;
  </>,
  <>
    <strong>Eficiência de Desempenho -</strong> Essa característica representa o
    desempenho em relação à quantidade de recursos usados nas condições
    declaradas;
  </>,
  <>
    <strong>Compatibilidade -</strong> Grau para o qual um produto, sistema ou
    componente pode trocar informações com outros produtos, sistemas ou
    componentes, e / ou executar suas funções necessárias, enquanto compartilha
    o mesmo ambiente de hardware ou software;
  </>,
  <>
    <strong>Usabilidade -</strong> Grau em que um produto ou sistema pode ser
    usado por usuários específicos para atingir metas especificadas com
    eficácia, eficiência e satisfação em um contexto específico de uso;
  </>,
  <>
    <strong>Confiabilidade -</strong> Grau para o qual um sistema, produto ou
    componente executa funções especificadas sob condições especificadas por um
    período de tempo especificado;
  </>,
  <>
    <strong>Segurança -</strong> Grau para o qual um produto ou sistema protege
    informações e dados para que pessoas ou outros produtos ou sistemas tenham o
    grau de acesso a dados adequado aos seus tipos e níveis de autorização;
  </>,
  <>
    <strong>Manutenção/Manutenibilidade -</strong> Essa característica
    representa o grau de eficácia e eficiência com o qual um produto ou sistema
    pode ser modificado para melhorá-lo, corrigi-lo ou adaptá-lo a mudanças no
    ambiente e nos requisitos;
  </>,
  <>
    <strong>Portabilidade -</strong> Grau de eficácia e eficiência com o qual um
    sistema, produto ou componente pode ser transferido de um hardware, software
    ou outro ambiente operacional ou de uso para outro.
  </>,
];

function SectionButton() {
  return (
    <div className={styles.sectionButtons}>
      <a href={formLink} className="btn btn-primary" target="_blank">
        Formulário de Inscrição
      </a>
    </div>
  );
}

export default function Hackathon() {
  return (
    <section className={"container"}>
      <h1 className={"mainTitle"}>
        Conheça mais sobre o <strong>Hackathon</strong>
      </h1>
      <Accordion
        title={"Visão Geral"}
        content={<HackthonList items={overview} />}
      />
      <Accordion
        title={"Objetivo do Hackathon"}
        content={<HackthonList items={objectives} />}
      />
      <Accordion
        title={"Problema e Solução"}
        content={<HackthonList items={problemAndSolution} />}
      />
      <Accordion
        title={"Desafio"}
        content={<HackthonList items={challenge} />}
      />
      <Accordion
        title={"Tecnologias Esperadas no Desenvolvimento"}
        content={<HackthonList items={techs} />}
      />
      <Accordion title={"Equipes"} content={<HackthonList items={teams} />} />
      <Accordion
        title={"Inscrições"}
        content={<HackthonList items={registration} />}
      />
      <Accordion
        title={"Cronograma"}
        content={<HackthonList items={timeline} />}
      />
      <Accordion
        title={"Direitos de Propriedade Intelectual"}
        content={<HackthonList items={intellectualPropertyRights} />}
      />
      <Accordion
        title={"Cessão de direitos de imagem, voz e nome"}
        content={<HackthonList items={terms} />}
      />
      <Accordion
        title={"Desclassificação"}
        content={<HackthonList items={disqualification} />}
      />
      <Accordion
        title={"Disposições Gerais"}
        content={<HackthonList items={generalProvisions} />}
      />
      <Accordion
        title={"Orientações aos participantes"}
        content={<HackthonList items={guidelinesForParticipants} />}
      />
      <Accordion
        title={"Critérios de Avaliação"}
        content={<HackthonList items={ratingCriteria} />}
      />
      <SectionButton />
    </section>
  );
}
