import Accordion from "../../../../components/Accordion/Accordion.jsx";
import styles from "./Ideathon.module.css";
import IdeathonList from '../../../../components/TextList/TextList.jsx'


const overview = [<>O Ideathon vai além de ser apenas uma competição. É uma plataforma dinâmica e inclusiva, onde mentes criativas e apaixonadas se unem para impulsionar a inovação e o conhecimento em direção ao cumprimento dos Objetivos de Desenvolvimento Sustentável estabelecidos pelas Nações Unidas. Participar do Ideathon é embarcar em uma jornada de transformação, onde suas ideias têm o poder de moldar um futuro promissor para o mundo. É uma oportunidade única para colaborar, aprender e criar soluções que transcendem os limites do convencional. Junte-se a nós nesta comunidade de agentes de mudança e ajude a construir um amanhã melhor para todos!</>];

const objectives = [
   <>O Ideathon visa estimular a inovação e o empreendedorismo, desafiando os participantes a desenvolver soluções criativas e sustentáveis para os desafios relacionados à segurança alimentar global na era da Web 3.0;</>,
   <>Os participantes serão incentivados a utilizar princípios de ciência de dados descentralizada para abordar questões urgentes, como disponibilidade, acessibilidade, qualidade e sustentabilidade dos alimentos em todo o mundo;</>,
   <>Além disso, o Ideathon busca promover a colaboração entre diversos setores, incluindo academia, indústria, governo e sociedade civil, para impulsionar o progresso em direção a um futuro mais seguro e justo no que diz respeito à alimentação.</>
]

const participants = [<>Podem participar do Ideathon estudantes de graduação e pós-graduação de qualquer universidade do Brasil, bem como profissionais interessados no tema.</>];

const problem = [
   <>O Brasil, infelizmente, voltou a figurar no mapa da fome. Após anos de progresso na redução da insegurança alimentar, a recente crise econômica, agravada pela pandemia de COVID-19, desencadeou um aumento significativo na pobreza e na falta de acesso a alimentos nutritivos em diversas regiões do país. Este retrocesso é alarmante e evidencia a urgência de ações coordenadas e eficazes para enfrentar esse desafio que é garantir o direito básico à alimentação para todos os brasileiros.</>,
   <>Estamos buscando soluções inovadoras para enfrentar o desafio urgente da insegurança alimentar. Sua participação é fundamental para criar soluções práticas e eficazes que possam ajudar as pessoas a terem acesso a alimentos nutritivos e de qualidade.</>
]

const thematicItems = [
   <>Monitoramento da Produção Agrícola Descentralizada: Com o aumento da demanda por alimentos e os desafios ambientais em curso, o monitoramento da produção agrícola descentralizada torna-se cada vez mais complexo. Diversos fatores, como mudanças climáticas, pragas e doenças de plantas, além de questões socioeconômicas, impactam a produção agrícola em diferentes regiões. A falta de um sistema eficiente de monitoramento descentralizado dificulta a identificação precoce de problemas e a implementação de medidas preventivas, levando a possíveis crises alimentares e perdas econômicas para os agricultores.</>,
   <>Rede de Compartilhamento de Excedentes Alimentares: O desperdício de alimentos é um problema global significativo, enquanto muitas comunidades ainda enfrentam dificuldades de acesso a alimentos suficientes e nutritivos. A falta de uma rede eficaz de compartilhamento de excedentes alimentares entre produtores, distribuidores e consumidores contribui para esse cenário. Os alimentos muitas vezes são descartados devido a questões de logística, regulamentações ou simplesmente falta de conhecimento sobre alternativas para seu uso. Isso resulta em desperdício de recursos preciosos e agravamento da insegurança alimentar em muitas áreas;</>,
   <>Acesso a Alimentos Nutritivos por meio de Mercados Descentralizados: O acesso a alimentos nutritivos é essencial para a saúde e o bem-estar das comunidades. No entanto, em muitas regiões, especialmente áreas rurais e periféricas, o acesso a alimentos de qualidade é limitado devido à falta de mercados descentralizados. Isso pode ser resultado de infraestrutura precária, falta de transporte adequado, ou concentração de mercados em áreas urbanas. Como resultado, muitas comunidades têm dificuldade em obter alimentos frescos e nutritivos, contribuindo para problemas de saúde e nutricionais.</>,
   <>Alerta Antecipado de Crises Alimentares com Dados Descentralizados: As crises alimentares são frequentemente desencadeadas por uma combinação de fatores, como eventos climáticos extremos, conflitos, instabilidade política e problemas econômicos. A falta de um sistema eficaz de alerta antecipado baseado em dados descentralizados dificulta a resposta rápida e coordenada a essas crises. A coleta, análise e compartilhamento de dados relevantes em tempo real são essenciais para identificar padrões emergentes e antecipar problemas, permitindo que sejam tomadas medidas preventivas e mitigatórias de forma eficaz.</>
];

const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSe_hVWQG9Wgsg5x-Yul0TrnmLUzIVaAfnBWAvw_jMXJItPbQA/viewform"
const templateLink = "https://docs.google.com/document/d/1YK9lCZqc3DV6zCXjkrDd5WwIzoBB9beQwC0F9fH4Mu4/edit?usp=sharing"

const registrationItems = [
   <>As inscrições são gratuitas e devem ser feitas por meio do <a className={styles.link} href={formLink}>formulário</a>;</>,
   <>Os participantes podem se inscrever individualmente ou em equipes de até 5 pessoas.</>,
   <>Cada participante ou equipe deve selecionar um dos temas propostos e criar uma ideia inovadora alinhada a ele.</>,
   {
      title: <>A proposta deve ser apresentada em um documento PDF (<a className={styles.link} href={templateLink}>Template</a>) que contenha os seguintes elementos:</>,
      items: [
         <>Título da Ideia: No início do documento, deve constar o título claro e conciso da ideia proposta. O título deve refletir a essência da solução proposta e captar a atenção dos avaliadores;</>,
         <>Resumo Executivo (até 300 palavras): Nesta seção, os participantes devem fornecer um resumo sucinto da ideia inovadora. O resumo deve conter uma visão geral da solução proposta, destacando sua relevância e os principais pontos que a distinguem;</>,
         <>Descrição detalhada da solução proposta: Os participantes devem elaborar uma descrição aprofundada da ideia inovadora. Deve-se explicar o funcionamento da solução, os problemas que ela visa resolver e os benefícios que trará para a região do sertão paraibano. Detalhes técnicos e conceituais são bem-vindos para oferecer uma compreensão clara da proposta;</>,
         <>Justificativa: Nesta seção, os participantes devem explicar por que a solução é relevante e necessária no contexto global. Argumentos sólidos devem ser apresentados, destacando os desafios globais que a ideia aborda e como ela contribuirá para o desenvolvimento sustentável;</>,
         <>Utilização de conceitos de inovação ou ciência de dados: Os participantes devem demonstrar como a ideia incorpora conceitos de inovação ou ciência de dados. Seja por meio de novas abordagens tecnológicas, aplicação de algoritmos avançados ou uso criativo de dados, essa seção deve ilustrar como a proposta está na vanguarda do conhecimento;</>,
         <>Viabilidade técnica, econômica e social: Nesta parte, os participantes devem apresentar uma análise detalhada da viabilidade da solução. Isso inclui considerações sobre a implementação tecnológica, a viabilidade financeira e econômica, bem como o potencial de aceitação social. Elementos como infraestrutura necessária, custos estimados e possíveis fontes de financiamento devem ser abordados;</>,
         <>Plano de Implementação: Os participantes devem descrever como planejam implementar a ideia. Detalhes sobre etapas de desenvolvimento, prazos, recursos humanos envolvidos e marcos importantes devem ser apresentados de maneira organizada e clara;</>,
         <>Potenciais impactos positivos na comunidade local: Os participantes devem descrever os impactos positivos que a implementação da ideia terá na comunidade local do sertão paraibano. Isso pode abranger aspectos econômicos, sociais, ambientais ou culturais. Detalhes específicos sobre como a solução contribuirá para melhorias tangíveis na vida das pessoas devem ser fornecidos.</>
      ]
   }
]

const evaluationItems = [
   <>As ideias serão avaliadas por um júri composto por professores e especialistas das áreas relacionadas às temáticas do Ideathon;</>,
   <>As ideias serão avaliadas com base em critérios como grau de inovação, potencial de impacto, viabilidade técnica e aderência às temáticas propostas.</>
]

const prizeItems = [
   <>Serão reconhecidos e premiados 3 projetos notáveis em cada categoria, totalizando 12 projetos premiados;</>,
   <>Os vencedores receberão certificados de mérito por suas contribuições ao desenvolvimento sustentável global;</>,
   <>Os projetos vencedores serão destacados em um evento especial de inovação e empreendedorismo;</>,
   <>A oportunidade de mentoria será oferecida aos projetos vencedores, com profissionais experientes orientando o desenvolvimento e a implementação das ideias;</>,
   <>Os prêmios poderão incluir reconhecimento público, certificados, oportunidades de estágio ou pesquisa, além de orientação para desenvolvimento das ideias vencedoras.</>
]

const cronograma = [
   <><strong>Abertura das Inscrições:</strong> 15/04/2024;</>,
   <><strong>Encerramento das Inscrições:</strong> 15/05/2024;</>,
   <><strong>Avaliação das Ideias:</strong> 17/05/2024;</>,
   <><strong>Anúncio dos finalistas:</strong> 20/05/2024;</>,
   <><strong>Apresentação das Ideias para Comunidade:</strong> 22/05/2024 às 20h no Auditório da UEPB-Patos.</>
]

const disposicoesFinais = [
   <>A participação na competição implica na aceitação de todas as cláusulas deste regulamento;</>,
   <>Os participantes garantem a autoria e originalidade das ideias submetidas;</>,
   <>A organização do Ideathon reserva-se o direito de utilizar as ideias submetidas para fins de divulgação e promoção do evento;</>,
   <>Este regulamento é válido a partir da data de sua publicação e poderá ser alterado pela organização do concurso, mediante aviso prévio aos participantes. Em caso de dúvidas, os interessados podem entrar em contato com a equipe organizadora por meio dos canais de comunicação disponibilizados no site oficial do sercomp.</>,
]

function SectionButton() {
   return (
      <div className={styles.sectionButtons}>
         <a href={formLink} className="btn btn-primary" target="_blank">
            Formulário de Inscrição
         </a>
         <a href={templateLink} className="btn btn-primary" target="_blank">
            Template de Proposta
         </a>
      </div>
   );
}

export default function Ideathon() {
   return (
      <section className={"container"}>
         <h1 className={"titulo-principal"}>
            Conheça mais sobre o <strong>Ideathon</strong>
         </h1>
         <Accordion title={"Visão Geral"} content={<IdeathonList items={overview} />} />
         <Accordion title={"Objetivo do Ideathon"} content={<IdeathonList items={objectives} />} />
         <Accordion title={"Participantes"} content={<IdeathonList items={participants} />} />
         <Accordion title={"Problema Central"} content={<IdeathonList items={problem} />} />
         <Accordion title={"Temáticas"} content={<IdeathonList items={thematicItems} />} />
         <Accordion title={"Inscrições"} content={<IdeathonList items={registrationItems} />} />
         <Accordion title={"Avaliação"} content={<IdeathonList items={evaluationItems} />} />
         <Accordion title={"Premiação"} content={<IdeathonList items={prizeItems} />} />
         <Accordion title={"Cronograma"} content={<IdeathonList items={cronograma} />} />
         <Accordion title={"Disposições Finais"} content={<IdeathonList items={disposicoesFinais} />} />

         <SectionButton />
      </section>
   );
}
