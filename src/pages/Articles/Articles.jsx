import Accordion from "../../components/Accordion/Accordion.jsx";
// import Comissao from "../../components/Comissao/Comissao";
import styles from "./Articles.module.css";
import PropTypes from "prop-types";

function ImportantsDate() {
  return (
    <ul className={styles.articleList}>
      <li className={`${styles.ulLi}`}>
        Prazo Inicial de submissão de short paper: 07/04/2024;
      </li>
      <li className={`${styles.ulLi}`}>
        Prazo final de submissão de short paper: 06/05/2024;
      </li>
      <li className={`${styles.ulLi}`}>
        Notificação dos autores dos short paper aprovados: 15/05/2024;
      </li>
      <li className={`${styles.ulLi}`}>
        Apresentação dos short paper: 22/05/2024.
      </li>
    </ul>
  );
}

function TopicsOfInterest() {
  return (
    <>
      <p className={`paragrafo ${styles.p}`}>
        São especialmente esperadas contribuições que abordem o tema principal
        do evento - &ldquo;Ciência de Dados na Web 3.0: Desvendando o Futuro da
        Informação Digital&ldquo;, bem como os grandes temas de desafios de
        pesquisa em Computação e TIC definidos pela comunidade de pesquisa
        nessas áreas.
      </p>
      <br></br>
      <p className={`paragrafo ${styles.p}`}>
        Outros tópicos são também esperados, mas não limitados a:
      </p>
      <ul className={styles.articleList}>
        <li className={styles.ulLi}>Internet das Coisas (IoT);</li>
        <li className={styles.ulLi}>Segurança da Informação;</li>
        <li className={styles.ulLi}>Computação em Nuvem;</li>
        <li className={styles.ulLi}>Redes de Computadores;</li>
        <li className={styles.ulLi}>Sistemas Distribuídos;</li>
        <li className={styles.ulLi}>Realidade Virtual e Aumentada;</li>
        <li className={styles.ulLi}>Computação Gráfica;</li>
        <li className={styles.ulLi}>Interação Humano-Computador;</li>
        <li className={styles.ulLi}>Inteligência Artificial;</li>
        <li className={styles.ulLi}>Aprendizado de Máquina;</li>
        <li className={styles.ulLi}>Processamento de Linguagem Natural;</li>
        <li className={styles.ulLi}>Computação Móvel;</li>
        <li className={styles.ulLi}>Robótica;</li>
        <li className={styles.ulLi}>Sistemas Inteligentes;</li>
        <li className={styles.ulLi}>Blockchain;</li>
        <li className={styles.ulLi}>Ética em Tecnologia;</li>
        <li className={styles.ulLi}>Inovação Tecnológica;</li>
        <li className={styles.ulLi}>Educação em Computação;</li>
        <li className={styles.ulLi}>Informática na Educação na Web 3.0;</li>
        <li className={styles.ulLi}>
          Aplicações de Inteligência Artificial na Saúde, Agricultura, Meio
          Ambiente, entre outros.
        </li>
      </ul>
    </>
  );
}

function SubmissionInstructions() {
  return (
    <>
      <p className={`paragrafo ${styles.p}`}>
        Os short papers podem ser submetidos para o VI SERCOMP sobre trabalhos
        de pesquisas já concluídas, com ideias e resultados, e seguindo as
        normas da ABNT. Os short papers devem ter entre 3 e 5 páginas (incluindo
        figuras, tabelas, diagramas, referências em anexos).
      </p>

      <br />
      <p className={`paragrafo ${styles.p}`}>
        Alguns aspectos adicionais devem ser observados:
      </p>
      <ul className={styles.articleList}>
        <li className={styles.ulLi}>
          É sugerido que os trabalhos descrevam claramente a metodologia
          científica empregada e apresentem uma análise dos resultados,
          destacando as contribuições de pesquisa em Computação e para a área de
          aplicação. Os trabalhos devem ser posicionados em relação a outras
          obras na área;
        </li>
        <li className={styles.ulLi}>
          Todas as produções podem ser submetidas em Português ou Inglês, em
          formato PDF e seguindo o{" "}
          <a
            className={styles.articleLink}
            target="_blank"
            href="https://docs.google.com/document/d/1hbuUeGbLZSlfIjUT8niSL4XUU3dnIyubB6RZgG39ozI/edit?usp=sharing"
          >
            template
          </a>{" "}
          para publicação conforme as regras da ABNT. As submissões devem ser
          feitas por meio do{" "}
          <a
            className={styles.articleLink}
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeIeyduMf1UCN6TeZpARKE3EBx7b3kZgCz4-ay0_C8TuYnbZA/viewform"
          >
            formulário
          </a>
          . Submissões em inglês são recomendadas. Os short papers devem conter
          apenas um abstract, mesmo que escrito em português;
        </li>
        <li className={styles.ulLi}>
          Os trabalhos submetidos não devem ter sido publicados nem estar em
          processo de avaliação ou edição para publicação em outro lugar;
        </li>
        <li className={styles.ulLi}>
          Na versão de submissão do trabalho, o cabeçalho não deverá conter
          qualquer tipo de identificação dos autores. Toda e qualquer referência
          que identifique a proveniência do trabalho deve ser removida, como
          nomes de projetos, instituições, ferramentas e citações que
          identifiquem os autores. Trabalhos que possuírem identificação serão
          rejeitados nesta etapa. Caso aceitos, os autores deverão incluir na
          versão final seus dados, como nomes, filiações, e-mails, bem como
          demais informações necessárias ao artigo, incluindo citações a outros
          trabalhos dos autores;
        </li>
        <li className={styles.ulLi}>
          A seleção de trabalhos será realizada por membros do Comitê de
          Programa do VI SERCOMP. O processo de revisão será conduzido de forma
          duplamente anônima (double-blind review) por pelo menos dois
          revisores;
        </li>
        <li className={styles.ulLi}>
          Os seguintes critérios serão considerados na avaliação: relevância ao
          escopo, qualidade técnica, clareza e pertinência.
        </li>
      </ul>
    </>
  );
}

function Publication() {
  return (
    <>
      <ul className={styles.articleList}>
        <li className={styles.ulLi}>
          Para que os short papers aceitos sejam publicados nos anais do evento,
          será necessário passar por uma segunda etapa, na qual serão
          transformados em artigos completos (full papers) com 7 a 10 páginas. A
          publicação está condicionada à inscrição de pelo menos um dos autores
          no VI SERCOMP, assim como à apresentação do trabalho durante o evento;
        </li>
        <li className={styles.ulLi}>
          As datas para esta segunda etapa serão divulgadas posteriormente, e os
          autores serão informados por e-mail com instruções e confirmação.
        </li>
      </ul>
    </>
  );
}

function Presentation() {
  return (
    <>
      <p className={`paragrafo ${styles.p}`}>
        Cada trabalho aceito deve ter pelo menos um autor inscrito para
        apresentá-lo durante uma sessão técnica. Cada apresentação terá a
        duração de 10 minutos e será realizada oralmente em uma sessão
        coordenada, cujos detalhes serão divulgados no início do evento.
      </p>
    </>
  );
}

function SectionButton() {
  return (
    <div className={styles.sectionButtons}>
      <a href={"https://docs.google.com/document/d/1hbuUeGbLZSlfIjUT8niSL4XUU3dnIyubB6RZgG39ozI/edit?usp=sharing"} className="btn btn-primary" target="_blank">
        Modelo de documento
      </a>
      <a href={"https://docs.google.com/forms/d/e/1FAIpQLSeIeyduMf1UCN6TeZpARKE3EBx7b3kZgCz4-ay0_C8TuYnbZA/viewform"} className="btn btn-primary" target="_blank">
        Submissão de artigos
      </a>
    </div>
  );
}


export default function Articles() {
  return (
    <section className={"container"}>
      <h1 className={"titulo-principal"}>
        Conheça mais sobre a <strong>Submissão de Artigos</strong>
      </h1>
      <Accordion title={"Datas Importantes"} content={<ImportantsDate />} />
      <Accordion
        title={"Tópicos de Interesse"}
        content={<TopicsOfInterest />}
      />
      <Accordion
        title={"Instruções para Submissão"}
        content={<SubmissionInstructions />}
      />
      <Accordion title={"Publicação"} content={<Publication />} />
      <Accordion title={"Apresentação"} content={<Presentation />} />
      <SectionButton />

      {/* 
        <Comissao
          comissaoData={comissaoArtigosData}
          title={"Comitê de Programa"}
          description={
            "O Comitê de Programa é formado pelos seguintes professores do curso de Ciência da Computação da Universidade Estadual da Paraíba, Campus VII."
          }
        />
      */}
    </section>
  );
}
