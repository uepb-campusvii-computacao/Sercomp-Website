import Accordion from "../../components/Accordion/Accordion.jsx";
// import Committee from "../../components/Committee/Committee.jsx";
import styles from "./Articles.module.css";

import ArticleList from '../../components/TextList/TextList.jsx'

function CalledSubmission() {
  return (
    <>
      <p className={`paragraph ${styles.p}`}>
        A Universidade Estadual da Paraíba (UEPB), por meio do Centro de Ciências Exatas e Sociais Aplicadas (CCEA) do Campus VII, em Patos-PB, tem a honra de anunciar a realização do <strong>VII SERCOMP – Congresso Sertanejo de Computação</strong>, que ocorrerá entre os dias <strong>19 e 21 de maio de 2025.</strong>
      </p>
      <p className={`paragraph ${styles.p}`}>
        O SERCOMP tem se consolidado como um dos principais eventos científicos e tecnológicos da região do Sertão Nordestino, promovendo um espaço de integração entre estudantes, pesquisadores, professores, profissionais da área de Computação e Tecnologia da Informação, além de representantes do setor público e do setor produtivo. O evento visa fortalecer as redes de cooperação acadêmica e estimular a divulgação e a produção científica regional.
      </p>
    </>
  )
}

function Theme() {
  return (
    <>
      <p className={`paragraph ${styles.p}`}>
        A edição de 2025 tem como tema central: <strong>“Do Código à Liderança: A Importância do Equilíbrio entre Soft e Hard Skills”.</strong> Esse tema busca promover reflexões e debates acerca do papel das competências técnicas (hard skills) e das habilidades interpessoais (soft skills) na formação de profissionais mais completos e preparados para os desafios contemporâneos. Em um cenário cada vez mais multidisciplinar, colaborativo e dinâmico, torna-se imprescindível fomentar tanto o domínio de tecnologias e ferramentas quanto as capacidades de comunicação, empatia, liderança, gestão de tempo, trabalho em equipe, entre outras habilidades humanas essenciais.
      </p>
    </>
  )
}

function CallObjective() {
  return (
    <>
      <p className={`paragraph ${styles.p}`}>
        A presente chamada tem como objetivo convidar pesquisadores, estudantes de graduação e pós-graduação, docentes, profissionais da área de tecnologia e membros da comunidade científica em geral para submissão de artigos científicos inéditos, que versem sobre o tema central do evento ou que se enquadrem nos tópicos de interesse elencados abaixo.
      </p>
    </>
  )
}

const importantDates = [
  <><strong>Início do período de submissões:</strong> 31/03/2025;</>,
  <><strong>Prazo final para submissão dos artigos:</strong> 30/04/2025;</>,
  <><strong>Divulgação dos artigos aprovados:</strong> 14/05/2025;</>,
  <><strong>Apresentação dos trabalhos no evento:</strong> 21/05/2025.</>,
  <><strong>Prazo final para envio da versão corrigida do artigo, considerando as revisões recomendadas pelo Comitê Científico:</strong> 30/05/2025.</>
]

const interestTopics = [
  <>Desenvolvimento de Soft Skills em cursos de Computação;</>,
  <>Liderança, trabalho em equipe e competências socioemocionais;</>,
  <>Metodologias de ensino e aprendizagem ativa na Computação;</>,
  <>Robótica educacional e tecnologias aplicadas à educação;</>,
  <>Inteligência Artificial e Aprendizado de Máquina;</>,
  <>Internet das Coisas (IoT);</>,
  <>Engenharia de Software;</>,
  <>Experiências em extensão tecnológica e inovação;</>,
  <>Desenvolvimento Web e Mobile;</>,
  <>Computação Aplicada à Educação Básica;</>,
  <>Realidade Aumentada e Realidade Virtual;</>,
  <>Inclusão digital e diversidade na tecnologia;</>,
  <>Jogos digitais e gamificação;</>,
  <>Soluções computacionais voltadas ao desenvolvimento regional;</>,
]

function TopicsOfInterest() {
  return (
    <>
      <p className={`paragraph ${styles.p}`}>
        Os trabalhos submetidos poderão abordar, mas não se limitar aos seguintes temas:
      </p>
      <br />
      <ArticleList items={interestTopics} />
    </>
  );
}

const subInstructions = [
  <>
    Título do artigo, claro, conciso e representativo do conteúdo abordado;
  </>,
  <>
    Resumo e Palavras-chave em língua portuguesa;
  </>,
  <>
    Abstract e Keywords em língua inglesa;
  </>,
  <>
    Introdução, com contextualização, justificativa e objetivos;
  </>,
  <>
    Referencial Teórico, com fundamentação teórica e revisão de literatura;
  </>,
  <>
    Metodologia, detalhando os procedimentos, instrumentos e abordagens adotadas;
  </>,
  <>
    Resultados e Discussões, apresentando e interpretando os achados do estudo;
  </>,
  <>
    Considerações Finais, com as conclusões, limitações e sugestões para trabalhos futuros;
  </>,
  <>
    Referências bibliográficas, formatadas de acordo com as normas da ABNT NBR 6023:2018.
  </>
]

const SubPreviousEditions = [
  <>
    Anais do I SERCOMP: <a className={styles.link} target="_blank" href={"https://www.pimentacultural.com/livro/sercomp/"}>Clique aqui</a>
  </>,
  <>
    Anais do II SERCOMP: <a className={styles.link} target="_blank" href={"https://www.pimentacultural.com/livro/sercomp-2019/"}>Clique aqui</a>
  </>,
  <>
    Anais do V SERCOMP: <a className={styles.link} target="_blank" href={" https://www.pimentacultural.com/livro/anais-v-sercomp/"}>Clique aqui</a>
  </>
]

function SubmissionInstructions() {
  return (
    <>
      <p className={`paragraph ${styles.p}`}>
        Os artigos submetidos ao VII SERCOMP deverão ser elaborados em conformidade com o <a href={"https://docs.google.com/document/d/10NmMCyjb7yvL8G0-KjRFJlvRQ_dYcEp5/edit?usp=sharing&ouid=103862556168592401800&rtpof=true&sd=true"} className={styles.link} target="_blank">
          Template oficial</a> disponibilizado pela organização do evento. A estrutura do manuscrito deverá conter, obrigatoriamente, os seguintes elementos:
      </p>
      <br />
      <ArticleList items={subInstructions} />
      <br />
      <p className={`paragraph ${styles.p}`}>
        Como forma de valorizar e dar continuidade à produção científica já consolidada nas edições anteriores do evento, é obrigatório que o artigo submetido ao VII SERCOMP 2025 contenha, em sua fundamentação teórica ou contextualização, pelo menos uma citação a trabalhos publicados nos anais de edições anteriores do SERCOMP. A ausência dessa referência poderá ser considerada um critério eliminatório durante o processo de avaliação. Os anais das edições anteriores estão disponíveis para consulta no site oficial do evento:
      </p>
      <br />
      <ArticleList items={SubPreviousEditions} />
      <br />
      <p className={`paragraph ${styles.p}`}>
        A extensão dos artigos deverá ser de, no mínimo, 8 (oito) e, no máximo, 10 (dez) páginas, incluindo todas as seções obrigatórias, tabelas, figuras, quadros e referências bibliográficas.
      </p>
      <p className={`paragraph ${styles.p}`}>
        No que diz respeito ao formato do arquivo, os trabalhos deverão ser submetidos exclusivamente em formato DOCX, respeitando integralmente o template oficial do evento.
      </p>
      <p className={`paragraph ${styles.p}`}>
        Importante ressaltar que, para fins de avaliação, a versão submetida deverá estar anonimizada, ou seja, sem identificação de autoria, afiliações institucionais ou qualquer informação que possa revelar a identidade dos(as) autores(as), garantindo, assim, o rigor do processo de avaliação duplamente cega.
      </p>
      <p className={`paragraph ${styles.p}`}>
        A submissão dos trabalhos deverá ser realizada por meio do <a
          href={"https://docs.google.com/forms/d/e/1FAIpQLSfrycRREg3ggTQYOa63cOlFWKqqY-YqIuUfqSnEdoacJW6SIA/viewform"}
          className={styles.link} target="_blank"
        >Formulário eletrônico</a> indicado pela comissão organizadora, dentro do prazo estabelecido no cronograma oficial do evento.

      </p>
    </>
  );
}

const CriterioAvaliação = [
  <>
    Relevância e originalidade do tema
  </>,
  <>
    Clareza na apresentação dos objetivos, métodos e resultados
  </>,
  <>
    Fundamentação teórica adequada
  </>,
  <>
    Qualidade da escrita e organização textual
  </>,
  <>
    Contribuições para o campo da Computação ou áreas correlatas
  </>,
  <>
    Adequação ao escopo temático do evento
  </>,
]

function EvaluationCriteria() {
  return (
    <>
      <p className={`paragraph ${styles.p}`}>
        Os trabalhos submetidos serão avaliados por membros do Comitê Científico do evento, com base nos seguintes critérios:
      </p>
      <ArticleList items={CriterioAvaliação} />
    </>
  );
}

const publication = [

  <>
    Inscrição de pelo menos um dos autores no evento.
  </>,
  <>
    Apresentação efetiva do trabalho durante a sessão técnica.
  </>,
  <>
    Entrega do arquivo final revisado dentro do prazo estipulado.
  </>
]
const presentation = [
  <>
    Os artigos aprovados serão apresentados em sessões técnicas no formato oral, durante o evento, prevista para acontecer no dia 21 de maio de 2025.
  </>,
  <>
    Para que o trabalho aprovado seja incluído nos anais oficiais do evento, é obrigatória a inscrição de pelo menos um dos autores no VII SERCOMP.
  </>,
  <>
    A presença do autor apresentador no dia da sessão técnica é indispensável. A ausência na apresentação implicará na exclusão do trabalho dos anais do evento.
  </>
]

const finalProvisions = [
  <>
    A Comissão Organizadora reserva-se o direito de excluir do processo de avaliação ou publicação qualquer trabalho que não atenda aos critérios estabelecidos nesta chamada. Casos omissos serão resolvidos pela coordenação científica do evento.
  </>
]

function SectionButton() {
  return (
    <div className={styles.sectionButtons}>
      <a href={"https://docs.google.com/document/d/10NmMCyjb7yvL8G0-KjRFJlvRQ_dYcEp5/edit?usp=sharing&ouid=103862556168592401800&rtpof=true&sd=true"} className="btn btn-primary" target="_blank">
        Template de Artigo
      </a>
      <a href={"https://docs.google.com/forms/d/e/1FAIpQLSfrycRREg3ggTQYOa63cOlFWKqqY-YqIuUfqSnEdoacJW6SIA/viewform"} className="btn btn-primary" target="_blank">
        Submissão de Artigos
      </a>
    </div>
  );
}

function Contact() {
  return (
    <>
      <p className={`paragraph ${styles.p}`}>
        Para esclarecimentos adicionais, entre em contato com a organização através do e-mail:
      </p>
      <p className={`paragraph ${styles.p}`}>
        <a className={styles.link}>sercomp@evento.uepb.edu.br</a>
      </p>

    </>
  )
}


export default function Articles() {
  return (
    <section className={"container"}>
      <h1 className={"mainTitle"}>
        Conheça mais sobre a <strong>Submissão de Artigos</strong>
      </h1>

      <Accordion
        title={"Chamada para Submissão de Artigos Científicos – VII SERCOMP 2025"}
        content={<CalledSubmission />}
      />
      <Accordion
        title={"Tema da Edição 2025"}
        content={<Theme />}
      />
      <Accordion
        title={"Objetivo das Chamadas"}
        content={<CallObjective />}
      />
      <Accordion title={"Datas Importantes"} content={<ArticleList items={importantDates} />} />

      <Accordion
        title={"Tópicos de Interesse"}
        content={<TopicsOfInterest />}
      />
      <Accordion
        title={"Formato e Normas para Submissão"}
        content={<SubmissionInstructions />}
      />
      <Accordion
        title={"Critérios de Avaliação"}
        content={<EvaluationCriteria />} />

      <Accordion title={"Apresentação dos trabalhos"} content={<ArticleList items={presentation} />} />

      <Accordion title={"Publicação"} content={<ArticleList items={publication} />} />

      <Accordion title={"Disposições Finais"} content={<ArticleList items={finalProvisions} />} />

      <Accordion
        title={"Contato"}
        content={<Contact />} />


      <SectionButton />

      {/* 
        <Committee
          committeeData={committeeArticlesData}
          title={"Comitê de Programa"}
          description={
            "O Comitê de Programa é formado pelos seguintes professores do curso de Ciência da Computação da Universidade Estadual da Paraíba, Campus VII."
          }
        />
      */}
    </section>
  );
}
