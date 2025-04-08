import Accordion from "../../components/Accordion/Accordion.jsx";
// import Committee from "../../components/Committee/Committee.jsx";
import styles from "./Articles.module.css";

import ArticleList from "../../components/TextList/TextList.jsx";

const importantDates = [
  <>
    <strong>Prazo Inicial de submissão de short paper:</strong> 31/03/2025;
  </>,
  <>
    <strong>Prazo final de submissão de short paper:</strong> 30/04/2025;
  </>,
  <>
    <strong>Notificação dos autores dos short paper aprovados:</strong>{" "}
    14/05/2025;
  </>,
  <>
    <strong>Apresentação dos short paper:</strong> 21/05/2025.
  </>,
];

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
];

function TopicsOfInterest() {
  return (
    <>
      <p className={`paragraph ${styles.p}`}>
        São especialmente esperadas contribuições que abordem o tema principal
        do evento - &ldquo;Do Código à Liderança: A Importância do Equilíbrio
        entre Soft e Hard Skills&ldquo;, Esse tema busca promover reflexões e
        debates acerca do papel das competências técnicas (hard skills) e das
        habilidades interpessoais (soft skills) na formação de profissionais
        mais completos e preparados para os desafios contemporâneos..
      </p>
      <br></br>
      <p className={`paragraph ${styles.p}`}>
        Outros tópicos são também esperados, mas não limitados a:
      </p>
      <ArticleList items={interestTopics} />
    </>
  );
}

const subInstructions = [
  <>
    Em um cenário cada vez mais multidisciplinar, colaborativo e dinâmico,
    torna-se imprescindível fomentar tanto o domínio de tecnologias e
    ferramentas quanto as capacidades de comunicação, empatia, liderança, gestão
    de tempo, trabalho em equipe, entre outras habilidades humanas essenciais. ;
  </>,
  <>
    Todas as produções podem ser submetidas em Português ou Inglês, em formato
    PDF e seguindo o{" "}
    <a
      className={styles.link}
      target="_blank"
      href="https://docs.google.com/document/d/10NmMCyjb7yvL8G0-KjRFJlvRQ_dYcEp5/edit?tab=t.0"
    >
      template
    </a>{" "}
    para publicação conforme as regras da ABNT. As submissões devem ser feitas
    por meio do{" "}
    <a
      className={styles.link}
      target="_blank"
      href="https://docs.google.com/forms/d/e/1FAIpQLSfrycRREg3ggTQYOa63cOlFWKqqY-YqIuUfqSnEdoacJW6SIA/viewform"
    >
      formulário
    </a>
    . Submissões em inglês são recomendadas. Os short papers devem conter apenas
    um abstract, mesmo que escrito em português;
  </>,
  <>
    Os trabalhos submetidos não devem ter sido publicados nem estar em processo
    de avaliação ou edição para publicação em outro lugar;
  </>,
  <>
    Na versão de submissão do trabalho, o cabeçalho não deverá conter qualquer
    tipo de identificação dos autores. Toda e qualquer referência que
    identifique a proveniência do trabalho deve ser removida, como nomes de
    projetos, instituições, ferramentas e citações que identifiquem os autores.
    Trabalhos que possuírem identificação serão rejeitados nesta etapa. Caso
    aceitos, os autores deverão incluir na versão final seus dados, como nomes,
    filiações, e-mails, bem como demais informações necessárias ao artigo,
    incluindo citações a outros trabalhos dos autores;
  </>,
  <>
    A seleção de trabalhos será realizada por membros do Comitê de Programa do
    VII SERCOMP. O processo de revisão será conduzido de forma duplamente
    anônima (double-blind review) por pelo menos dois revisores;
  </>,
  <>
    Os seguintes critérios serão considerados na avaliação: relevância ao
    escopo, qualidade técnica, clareza e pertinência.
  </>,
];

function SubmissionInstructions() {
  return (
    <>
      <p className={`paragraph ${styles.p}`}>
        Os short papers podem ser submetidos para o VII SERCOMP sobre trabalhos
        de pesquisas já concluídas, com ideias e resultados, e seguindo as
        normas da ABNT. Os short papers devem ter entre 8 e 10 páginas
        (incluindo figuras, tabelas, diagramas, referências em anexos).
      </p>

      <br />
      <p className={`paragraph ${styles.p}`}>
        Alguns aspectos adicionais devem ser observados:
      </p>
      <ArticleList items={subInstructions} />
    </>
  );
}

const publication = [
  <>
    Para que os short papers aceitos sejam publicados nos anais do evento, será
    necessário passar por uma segunda etapa, na qual serão transformados em
    artigos completos (full papers) com 8 a 10 páginas. A publicação está
    condicionada à inscrição de pelo menos um dos autores no VII SERCOMP, assim
    como à apresentação do trabalho durante o evento;
  </>,
  <>
    As datas para esta segunda etapa serão divulgadas posteriormente, e os
    autores serão informados por e-mail com instruções e confirmação.
  </>,
];

const presentation = [
  <>
    Os artigos aprovados serão apresentados em sessões técnicas no formato oral,
    durante o evento, prevista para acontecer no dia 21 de maio de 2025.
  </>,
];

function SectionButton() {
  return (
    <div className={styles.sectionButtons}>
      <a
        href={
          "https://docs.google.com/document/d/10NmMCyjb7yvL8G0-KjRFJlvRQ_dYcEp5/edit?rtpof=true&sd=true&tab=t.0"
        }
        className="btn btn-primary"
        target="_blank"
      >
        Template de Artigo
      </a>
      <a
        href={
          "https://docs.google.com/forms/d/e/1FAIpQLSfrycRREg3ggTQYOa63cOlFWKqqY-YqIuUfqSnEdoacJW6SIA/viewform"
        }
        className="btn btn-primary"
        target="_blank"
      >
        Submissão de Artigos
      </a>
    </div>
  );
}

export default function Articles() {
  return (
    <section className={"container"}>
      <h1 className={"mainTitle"}>
        Conheça mais sobre a <strong>Submissão de Artigos</strong>
      </h1>
      <Accordion
        title={"Datas Importantes"}
        content={<ArticleList items={importantDates} />}
      />
      <Accordion
        title={"Tópicos de Interesse"}
        content={<TopicsOfInterest />}
      />
      <Accordion
        title={"Instruções para Submissão"}
        content={<SubmissionInstructions />}
      />
      <Accordion
        title={"Publicação"}
        content={<ArticleList items={publication} />}
      />
      <Accordion
        title={"Apresentação"}
        content={<ArticleList items={presentation} />}
      />

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
