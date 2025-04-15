import Accordion from "../../components/Accordion/Accordion.jsx";
import HackthonList from "../../components/TextList/TextList.jsx";

import styles from "./Hackthon.module.css";

const overview = [
  <>
    O Hackathon é uma competição de inovação tecnológica que tem como objetivo incentivar a criatividade e a colaboração entre os participantes, desafiando-os a desenvolver soluções para problemas práticos e reais em um curto espaço de tempo.
  </>,
  <>
    Durante o evento, os participantes irão se deparar com um tema sorteado na hora, sendo desafiados a usar sua habilidade técnica, criatividade e capacidade de trabalhar em equipe para criar um protótipo funcional e eficaz. O evento busca proporcionar uma experiência de aprendizado, desenvolvimento e crescimento profissional, ao mesmo tempo que oferece a oportunidade de apresentar soluções inovadoras a um público qualificado.
  </>,
  <>
    O hackathon será dividido em várias fases, começando com a divulgação dos temas e o sorteio de um desafio a ser trabalhado, seguido de mentorias, desenvolvimento do protótipo e, finalmente, a apresentação das soluções desenvolvidas. Acompanhe abaixo as etapas do hackathon, com suas datas e objetivos, para garantir que você e sua equipe aproveitem ao máximo essa experiência.
  </>
];

const timeline = [
  <>
    <strong>Etapa 1: Divulgação dos Temas</strong>
  </>,
  <>
    Antes do evento, divulgaremos no dia 11/04, cinco temas possíveis que os participantes podem desenvolver durante o Hackathon. Os temas serão relacionados a problemas reais e desafiadores nas áreas de tecnologia, inovação social, sustentabilidade, entre outras.
  </>,
  <>
    A divulgação antecipada tem como objetivo fornecer aos participantes uma ideia do que esperar e possibilitar o planejamento inicial das equipes, mesmo antes do sorteio. As equipes devem se preparar para qualquer um dos temas, pois o tema será sorteado durante o evento.
  </>,
  <>
    <strong>Etapa 2 - Inscrições das Equipes</strong>
  </>,
  <>
    As equipes devem se inscrever até a data limite de 30/04 para garantir sua participação no evento, lendo atentamente os termos e condições. As inscrições devem ser feitas por meio do formulário, onde será necessário fornecer informações básicas, como o nome dos participantes, o nome da equipe, e o contato de cada membro.
  </>,
  <>
    A inscrição é essencial para garantir que as equipes sejam registradas corretamente e que possam participar de todas as etapas do evento. As equipes podem se inscrever como grupos já formados.
  </>,
  <>
    Cada equipe poderá ser composta por 1 a 5 participantes, permitindo a participação de equipes menores ou mais amplas. O objetivo é garantir a diversidade e a colaboração entre diferentes perfis de participantes.
  </>,
  <>
    <strong>Etapa 3 - Sorteio do Tema</strong>
  </>,
  <>
    No dia 20/05, das 08:15 às 09:00, será realizado o sorteio do tema. As equipes se reunirão no local do evento, onde um dos temas será escolhido aleatoriamente. A partir desse momento, as equipes devem focar exclusivamente no tema sorteado.
  </>,
  <>
    O sorteio traz um elemento de surpresa e garante que todas as equipes trabalhem em pé de igualdade, já que o tema só será conhecido no início do evento. Isso também estimula a criatividade, pois as equipes terão que pensar rapidamente e se adaptar ao desafio apresentado.
  </>,
  <>
    <strong>Etapa 4 - Mentoria</strong>
  </>,
  <>
    Durante a sessão de mentoria que acontecerá no dia 20/05, das 09:00 às 10:00, as equipes terão a oportunidade de se reunir com mentores experientes de áreas como desenvolvimento de software, design de produtos, negócios, e impacto social.
  </>,
  <>
    Os mentores irão orientar as equipes sobre a abordagem técnica, sugerir soluções para problemas específicos e ajudar a alinhar a execução do projeto com as expectativas do evento.
  </>,
  <>
    A mentoria é um momento importante para as equipes, pois fornecerá informações sobre o desenvolvimento de suas soluções. As equipes podem esclarecer dúvidas técnicas, melhorar seu planejamento e ajustar suas ideias com base no feedback recebido.
  </>,
  <>
    <strong>Etapa 5 - Planejamento</strong>
  </>,
  <>
    Durante a etapa de planejamento que acontecerá no dia 20/05, das 13:00 às 17:30, as equipes devem iniciar o desenvolvimento de suas soluções, organizando as tarefas e preparando o terreno para o desenvolvimento do protótipo. Até as 17:30, as equipes deverão entregar um artefato simples de documentação.
  </>,
  <>
    O artefato deve ter a seguinte estrutura:
  </>,
  <>
    <strong>- Resumo do Projeto:</strong> Breve descrição do problema que a solução busca resolver e o contexto em que o projeto se insere. Deve incluir a ideia central da solução proposta, como ela aborda o problema e qual é o impacto esperado.
  </>,
  <>
    <strong>- Plano de Ação:</strong> As etapas principais que a equipe seguirá para concluir o projeto, incluindo os principais desafios que serão enfrentados e como a equipe planeja superá-los.
  </>,
  <>
    <strong>- Tecnologias:</strong> Indicação das tecnologias que serão utilizadas no desenvolvimento da solução (linguagens de programação, frameworks, APIs, plataformas, etc.).
  </>,
  <>
    <strong>- Cronograma de Execução:</strong> Definição de prazos e responsabilidades, detalhando como as tarefas serão divididas entre os membros da equipe durante o Hackathon.
  </>,
  <>
    Esta etapa é fundamental para garantir que todas as equipes tenham um plano claro e bem estruturado, o que facilita o trabalho durante a programação e aumenta as chances de sucesso.
  </>,
  <>
    A etapa de planejamento será avaliada com base em quatro critérios principais:
  </>,
  <>
    <strong>- Resumo do Projeto (30%)</strong>, que analisa a clareza e o alinhamento da solução com o tema sorteado;
  </>,
  <>
    <strong>- Plano de Ação (30%)</strong>, que avalia a organização das tarefas e a viabilidade da execução;
  </>,
  <>
    <strong>- Escolha das Tecnologias (20%)</strong>, que verifica a adequação das ferramentas escolhidas para o desenvolvimento; e
  </>,
  <>
    <strong>- Cronograma (20%)</strong>, que observa a gestão do tempo e a viabilidade dos prazos propostos.
  </>,
  <>
    Cada critério será pontuado de 0 a 10, com uma pontuação máxima de 100 pontos. As 10 equipes com as maiores pontuações serão selecionadas para avançar para a próxima fase. Após a avaliação, as equipes receberão feedback com pontos fortes e sugestões de melhoria.
  </>,
  <>
    <strong>Etapa 6 - Prototipação</strong>
  </>,
  <>
    Durante os dias 20/05 a 21/05, até as 16:30 as equipes irão desenvolver o protótipo da solução, utilizando o tempo disponível para transformar o planejamento em um produto funcional. O protótipo final deve ser entregue até 16:30 do dia 21/05.
  </>,
  <>
    As equipes devem garantir que o protótipo esteja funcional e pronto para ser apresentado. A entrega do protótipo será feita por meio de uma plataforma definida pelos organizadores (como GitHub, plataforma interna, etc.), onde as equipes irão carregar seu código e documentação.
  </>,
  <>
    Esta é a fase mais intensa do Hackathon, onde as ideias começam a tomar forma e as equipes devem trabalhar em conjunto para implementar a solução proposta. A qualidade do protótipo será um dos principais critérios de avaliação.
  </>,
  <>
    <strong>Etapa 7 - Apresentação</strong>
  </>,
  <>
    No dia 21/05 a partir das 16:30, as equipes finalistas terão até 3 minutos para apresentar sua solução para o júri e para os outros participantes. Durante o pitch, as equipes devem explicar o problema abordado, como a solução foi desenvolvida, qual o impacto da solução e como ela pode ser aplicada no mundo real.
  </>,
  <>
    O pitch deve ser dinâmico, claro e objetivo, já que o tempo é limitado. As equipes podem utilizar slides, demonstrações ao vivo ou outros recursos para ilustrar sua apresentação.
  </>,
  <>
    O pitch é a oportunidade das equipes mostrarem suas soluções de forma concisa e impactante. A apresentação é uma habilidade importante no ambiente de startups e negócios e será avaliada de forma significativa pelo júri.
  </>
];

const evaluationCriteria = [
  <>
    Os projetos serão avaliados por um júri qualificado, e a pontuação final será determinada com base nos seguintes critérios, com seus respectivos pesos:
  </>,
  <>
    <strong>- Inovação (30 pontos)</strong>
  </>,
  <>
    - Peso: 30%
  </>,
  <>
    - Avalia a originalidade da solução. Quanto mais inovadora e criativa for a solução proposta, maior será a pontuação. O júri buscará ideias que ofereçam algo novo ou uma aplicação inovadora de tecnologias existentes.
  </>,
  <>
    <strong>- Viabilidade Técnica (25 pontos)</strong>
  </>,
  <>
    - Peso: 25%
  </>,
  <>
    - Avalia a viabilidade técnica do projeto. A equipe deve demonstrar que sua solução pode ser implementada de maneira prática, considerando as tecnologias escolhidas e os recursos disponíveis.
  </>,
  <>
    <strong>- Usabilidade (20 pontos)</strong>
  </>,
  <>
    - Peso: 20%
  </>,
  <>
    - Avalia a experiência do usuário, a interface e a facilidade de uso da solução. Um projeto de alta usabilidade deve ser intuitivo, fácil de usar e com um design funcional.
  </>,
  <>
    <strong>- Impacto (15 pontos)</strong>
  </>,
  <>
    - Peso: 15%
  </>,
  <>
    - Avalia o potencial impacto da solução. O impacto pode ser social, ambiental ou econômico, dependendo do tema do Hackathon. O júri avaliará como a solução pode beneficiar o público-alvo ou resolver problemas reais.
  </>,
  <>
    <strong>- Qualidade Técnica (10 pontos)</strong>
  </>,
  <>
    - Peso: 10%
  </>,
  <>
    - Avalia a qualidade e a robustez do protótipo. Isso inclui a clareza e eficiência do código, a estabilidade do sistema e a execução geral do projeto. Um código bem estruturado e sem falhas é essencial.
  </>
];

const awards = [
  <>
    Os prêmios serão concedidos às 3 melhores equipes com as maiores pontuações no final do evento. A distribuição dos prêmios será detalhada em breve, e as equipes vencedoras poderão contar com uma premiação especial, incluindo, mas não se limitando a dinheiro, mentorias, produtos tecnológicos, e oportunidades de exposição.
  </>
];

const finalConsiderations = [
  <>
    O Hackathon visa não apenas premiar as soluções mais criativas e bem-executadas, mas também proporcionar um ambiente de aprendizado e desenvolvimento. As equipes devem seguir as regras, trabalhar colaborativamente e aproveitar ao máximo os recursos e mentoria disponíveis para criar soluções inovadoras e viáveis. O evento é uma oportunidade única para colocar as ideias em prática, desenvolver habilidades técnicas e de apresentação e conectar-se com outros profissionais da área.
  </>
];

const formLink = "https://docs.google.com/forms/d/e/1FAIpQLScdjfzBsdMWnmmfXbTVEEeskewkIb1VEi0g2PVpfGS__NZL-Q/viewform";
const termsLink = "https://docs.google.com/document/d/1WbGeYF41YXII9XiXQX0tE02PIwkJo2AABCUxVpVO_W8/edit?usp=sharing";

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
        Conheça mais sobre o <strong>Hackathon VII SERCOMP 2025</strong>
      </h1>
      <Accordion
        title={"Regras do Hackathon – VII SERCOMP 2025"}
        content={<HackthonList items={overview} />}
      />
      <Accordion
        title={"Cronograma do Evento"}
        content={<HackthonList items={timeline} />}
      />
      <Accordion
        title={"Critérios de Avaliação e Pesos"}
        content={<HackthonList items={evaluationCriteria} />}
      />
      <Accordion
        title={"Premiação"}
        content={<HackthonList items={awards} />}
      />
      <Accordion
        title={"Considerações Finais"}
        content={<HackthonList items={finalConsiderations} />}
      />
      <SectionButton />
    </section>
  );
}