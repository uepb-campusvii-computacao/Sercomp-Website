import logo from "../../../assets/images/v-sercomp.png";
import OrganizationPeople from "../../../components/Organization/OrganizationPeople";
import styles from "./2023.module.css";
import Palestrante from "../../../components/Palestrante/Palestrante";

import cleisson from "../../../assets/images/participacoes/2023/cleisson.png";
import karliane from "../../../assets/images/participacoes/2023/karliane.png";
import matheus from "../../../assets/images/participacoes/2023/matheus.png";
import marcio from "../../../assets/images/participacoes/2023/marcio.png";
import klayton from "../../../assets/images/participacoes/2023/klayton.png";
import samuel from "../../../assets/images/participacoes/2023/samuel.png";
import harllem from "../../../assets/images/participacoes/2023/harllem.png";
import almeida from "../../../assets/images/participacoes/2023/almeida.png";
import esdras from "../../../assets/images/participacoes/2023/esdras.png";
import daniel from "../../../assets/images/participacoes/2023/daniel.png";
import jairo from "../../../assets/images/participacoes/2023/jairo.png";

import rosangela from "../../../assets/images/professores/rosangela.png";
import demetrio from "../../../assets/images/professores/demetrio.png";
import vinicius from "../../../assets/images/professores/vinicius.png";
import jucelio from "../../../assets/images/professores/jucelio.png";
import mikaelle from "../../../assets/images/professores/mikaelle.png";
import francisco from "../../../assets/images/professores/francisco.png";

import TimelineComponent from "../../../components/Timeline/Timeline.jsx";

import shedule from "./schedule.jsx";
import { comissaoArtigosData } from "./commissions.js";
import Comissao from "../../../components/Comissao/Comissao";
import orgMembersData from '../../../data/orgData2023.js';
import { mesaData } from './mesaData.js'
import MesaRedonda from "../../../components/MesaRedonda/MesaRedonda.jsx";

function Edition2023() {
  return (
    <>
      <main>
        <div className="container main-container">
          <div className="main-left">
            <h1>V SERCOMP - Edição 2023</h1>
            <h3>Congresso Sertanejo de Computação</h3>
            <h5>22 a 24 de maio de 2023</h5>
            <p>Segurança em Tecnologia da Informação e Sistemas Inteligentes</p>
          </div>

          <div className="main-right">
            <div className="main-right-image">
              <img loading="lazy" src={logo} alt="estudantes" />
            </div>
          </div>
        </div>
      </main>
      <OrganizationPeople title={"ORGANIZAÇÃO DO V SERCOMP"} members={orgMembersData}/>
      <section className={styles.cron}>
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
      <section>
        <h2 className={styles.tituloBase}>Mesa</h2>
        <MesaRedonda 
          titulo="ChapGPT: possibilidades e desafios no cenário acadêmico e profissional em Computação"
          membros={mesaData}
        />
      </section>

      <section className={`container ${styles.cronContainer}`}>
        <h2 className={styles.tituloBase}>Minicursos</h2>
        <article className={`${styles.cronMember}`}>
          <div className={`${styles.cronDetails}`}>
            <div className={`${styles.cronMemberImage}`}>
              <img src={matheus} alt="Matheus" />
              <p>
                MC01: Desvendando o VueJS: introdução à tecnologia de Front-end
                em alta demanda
              </p>
            </div>
          </div>
          <div className={`${styles.cronMemberInfo}`}>
            <h4>Matheus Paulino dos Santos</h4>
            <p>
              Objetivo: Fornecer aos participantes uma compreensão sólida dos
              conceitos fundamentais do Vue.js e capacitá-los a criar interfaces
              de usuário interativas e reativas.
            </p>
            <br />
            <p>
              Justificativa: Mostrar as vantagens do VueJS para o
              desenvolvimento de aplicações web. VueJS é um framework JavaScript
              poderoso e fácil de aprender, que oferece várias vantagens para o
              desenvolvimento de aplicações web, como modularidade, performance,
              flexibilidade, comunidade ativa, ferramentas avançadas e
              documentação abrangente.
            </p>
            <br />
            <p>
              Pré-requisitos: Saber HTML, CSS e JavaScript básicos; O
              participante precisa trazer seu notebook para participar da
              atividade; Vscode instalado na máquina.
            </p>
          </div>
        </article>

        <article className={`${styles.cronMember}`}>
          <div className={`${styles.cronDetails}`}>
            <div className={`${styles.cronMemberImage}`}>
              <img src={marcio} alt="Márcio" />
              <p>MC02: Universo Front-end com Reactjs</p>
            </div>
          </div>
          <div className={`${styles.cronMemberInfo}`}>
            <h4>Márcio Bizerra Wanderley Filho</h4>
            <p>
              Objetivo: Proporcionar uma visão geral sobre o universo do
              Front-end e apresentar uma ferramenta popular no mercado, a fim de
              familiarizar os participantes com o ecossistema e permitir que
              eles deem seus primeiros passos nessa área.
            </p>
            <br />
            <p>
              Justificativa: O ecossistema front-end do React é muito amplo e
              oferece diversas ferramentas e recursos para os desenvolvedores. O
              React é uma das bibliotecas de front-end mais populares e
              amplamente utilizadas atualmente. Como resultado, existe uma
              grande comunidade de desenvolvedores em torno do React, que cria
              uma grande variedade de ferramentas e recursos para ajudar no
              desenvolvimento de aplicativos React. Esses recursos incluem desde
              bibliotecas de gerenciamento de estado, roteamento e testes, até
              ferramentas de linha de comando que permitem criar rapidamente
              aplicativos React. Como resultado, o ecossistema do React é muito
              amplo e diversificado, oferecendo uma vasta gama de opções para
              desenvolvedores que trabalham com a biblioteca.
            </p>
            <br />
            <p>
              Pré-requisitos: Embora não seja estritamente necessário, ter
              conhecimentos básicos de programação web é recomendado; - O
              participante precisa trazer seu notebook para participar da
              atividade.
            </p>
          </div>
        </article>

        <article className={`${styles.cronMember}`}>
          <div className={`${styles.cronDetails}`}>
            <div className={`${styles.cronMemberImage}`}>
              <img src={klayton} alt="Klayton" />
              <p>MC03: PWA: A evolução das aplicações web</p>
            </div>
          </div>
          <div className={`${styles.cronMemberInfo}`}>
            <h4>Klayton Marcos Veloso da Silva Júnior</h4>
            <p>
              Objetivo: Ensinar os conceitos básicos do Next.js, bem como
              abordar o desenvolvimento de aplicações PWA (Progressive Web
              Apps). Os participantes aprenderão os fundamentos do Next.js,
              incluindo a configuração do ambiente de desenvolvimento, criação
              de páginas, rotas e componentes. Além disso, o curso fornecerá
              conhecimentos sobre o desenvolvimento de aplicações PWA, incluindo
              os princípios de uma PWA, técnicas de caching, acesso offline e
              notificações push. Ao final do curso, os participantes estarão
              aptos a desenvolver aplicações web modernas utilizando Next.js e
              aplicar os conceitos de PWA em suas aplicações.
            </p>
            <br />
            <p>
              Justificativa: A demanda de profissionais de desenvolvimento web
              só aumenta, e algumas skills podem ser um diferencial para se
              destacar no mercado, conhecimentos em desenvolvimento de
              aplicações PWA é um diferencial enorme.
            </p>
            <br />
            <p>
              Pré-requisitos: Ter domínio em HTML/CSS/JavaScript; - O
              participante precisa trazer seu notebook para participar da
              atividade; - Instalar o Vscode, node.js, react, npm.
            </p>
          </div>
        </article>

        <article className={`${styles.cronMember}`}>
          <div className={`${styles.cronDetails}`}>
            <div className={`${styles.cronMemberImage}`}>
              <img src={harllem} alt="Harllem" />
              <img src={samuel} alt="Samuel" />
              <p>MC04: Introdução a API`&apos;`s Rest em Java com Spring Boot</p>
            </div>
          </div>
          <div className={`${styles.cronMemberInfo}`}>
            <h4>Harllem Alves do Nascimento & Samuel Alves Medeiros</h4>
            <p>
              Objetivo: Fornecer aos participantes uma introdução prática e
              abrangente sobre o uso de APIs REST em Java com Spring Boot. Os
              participantes aprenderão os conceitos fundamentais das APIs REST,
              incluindo a arquitetura REST, princípios de design de API, métodos
              HTTP e como criar endpoints RESTful utilizando o framework Spring
              Boot. O minicurso também abordará tópicos como autenticação e
              autorização, validação de entrada, manipulação de erros e
              documentação de API. Ao final do minicurso, os participantes
              estarão aptos a criar suas próprias APIs REST em Java com Spring
              Boot, seguindo as melhores práticas e padrões da indústria.
            </p>
            <br />
            <p>
              Justificativa: A crescente demanda por desenvolvedores Java com
              habilidades em criação de APIs REST, amplamente utilizadas em
              aplicações web e serviços de backend. O uso do popular framework
              Spring Boot permite a criação rápida e eficiente de APIs REST de
              alta qualidade. O curso visa atender a essa demanda do mercado de
              trabalho, fornecendo uma introdução abrangente aos conceitos e
              práticas fundamentais de APIs REST, incluindo arquitetura REST,
              design de API, manipulação de requisições e respostas HTTP,
              autenticação e autorização, validação de entrada e documentação de
              API.
            </p>
            <br />
            <p>
              Pré-requisitos: O básico da linguagem Java; - A atividade será
              feita no laboratório, não há necessidade de levar máquinas.
            </p>
          </div>
        </article>

        <article className={`${styles.cronMember}`}>
          <div className={`${styles.cronDetails}`}>
            <div className={`${styles.cronMemberImage}`}>
              <img src={demetrio} alt="Demetrio" />
              <p>
                MC05: Aplicando Spring Security para proteger APIs desenvolvidas
                com Springboot
              </p>
            </div>
          </div>
          <div className={`${styles.cronMemberInfo}`}>
            <h4>Demetrio Gomes Mestre</h4>
            <p>
              Objetivo: Instruir o participante sobre os cuidados com a
              segurança necessários ao se disponibilizar APIs baseadas em Spring
              Boot e como configurar adequadamente a segurança destas APIs para
              endereçar esses cuidados.
            </p>
            <br />
            <p>
              Justificativa: Diante da evolução considerável nas formas de
              realização de ciberataques à sistemas de informação e da pressão
              exercida pela Lei geral de proteção de dados (LGPD) sobre os
              aspectos de segurança da informação necessários para que
              informações sensíveis não sejam vazadas dos sistemas de
              informação, não há mais espaço para que desenvolvedores
              negligenciam questões relevantes de segurança quando estão
              demandados a disponibilizar sistemas de informação no mundo
              complexo da web.
            </p>
            <br />
            <p>
              Pré-requisitos: É imprescindível conhecimento intermediário na
              linguagem de programação JAVA e é desejável ter conhecimento de
              implementação de back end baseado em Spring Boot; - O participante
              precisa trazer seu notebook para participar da atividade; - Se for
              possível, instalar o Spring Tools 4 for Visual Studio Code.
            </p>
          </div>
        </article>

        <article className={`${styles.cronMember}`}>
          <div className={`${styles.cronDetails}`}>
            <div className={`${styles.cronMemberImage}`}>
              <img src={rosangela} alt="Rosângela" />
              <img src={vinicius} alt="Vinicius" />
              <p>
                MC06: Como utilizar o ChatGPT para escrever textos acadêmicos
              </p>
            </div>
          </div>
          <div className={`${styles.cronMemberInfo}`}>
            <h4>
              Rosângela Araújo de Medeiros & Vinícius Reuteman Feitoza Alves de
              Andrade
            </h4>
            <p>
              Objetivo: Explorar a potencialidade de software de Inteligência
              Artificial para produzir textos acadêmicos, respeitando a lei de
              direitos autorais. Apresentar história da IA e diferentes tipos.
              E, propiciar a experimentação da escrita de trechos de texto
              acadêmico utilizando IA.
            </p>
            <br />
            <p>
              Justificativa: Produzir trabalhos acadêmicos de qualidade requer
              habilidades de pesquisa, redação e comunicação. Com o avanço da
              tecnologia digital, surgem novas ferramentas capazes de facilitar
              nesse processo, como é o caso do Chat GPT. Trata-se de uma
              inteligência artificial que pode favorecer a produção de textos
              acadêmicos, fornecendo sugestões e correcções em tempo real. Neste
              minicurso, os participantes terão a oportunidade de conhecer as
              principais funcionalidades do Chat GPT e aprender como utilizá-lo
              para aprimorar suas produções acadêmicas.
            </p>
            <br />
            <p>
              Pré-requisitos: O participante precisa trazer seu notebook para
              participar da atividade; - Ter alguma IA para escrita de textos
              instalada no notebook ou celular.
            </p>
          </div>
        </article>
      </section>

      <section className={`container ${styles.cronContainer}`}>
        <h2 className={styles.tituloBase}>Oficinas</h2>
        <article className={`${styles.cronMember}`}>
          <div className={`${styles.cronDetails}`}>
            <div className={`${styles.cronMemberImage}`}>
              <img src={almeida} alt="Wlad'myr" />
              <p>
                OF01: Construindo um aplicativo completo com Flutter: aprenda a
                criar um CRUD do zero!
              </p>
            </div>
          </div>

          <div className={`${styles.cronMemberInfo}`}>
            <h4>Wlad`&apos;`myr Almeida da Silva</h4>
            <p>
              Objetivo: Adquirir habilidades no desenvolvimento de aplicativos
              utilizando o framework Flutter e aplicar esse conhecimento para
              criar um aplicativo funcional e completo.
            </p>
            <br />
            <p>
              Justificativa: Os cursos de graduação são projetados para fornecer
              uma formação abrangente em Tecnologia da Informação, preparando os
              estudantes ou profissionais para uma ampla gama de áreas dentro
              desse campo. Com um enfoque específico no desenvolvimento mobile,
              utilizando o framework Flutter, esses cursos capacitam os
              estudantes a se tornarem profissionais especializados nessa área
              em constante evolução. Os estudantes aprendem as melhores práticas
              de desenvolvimento mobile, abordando conceitos avançados de
              Flutter, desenvolvimento de interfaces de usuário responsivas,
              integração com APIs e serviços, gerenciamento de estado de
              aplicativo e muito mais. Com essa sólida formação, os graduados
              estão preparados para enfrentar os desafios do mercado de trabalho
              e contribuir para o desenvolvimento de aplicativos mobile modernos
              e inovadores.
            </p>
            <br />
            <p>
              Pré-requisitos: O participante precisa trazer seu notebook para
              participar da atividade; Visual Studio Code ou Android Studio.
              Instalação do Flutter na máquina e Emulador Para Simular o App.
            </p>
          </div>
        </article>

        <article className={`${styles.cronMember}`}>
          <div className={`${styles.cronDetails}`}>
            <div className={`${styles.cronMemberImage}`}>
              <img src={jucelio} alt="Jucelio" />
              <p>
                OF02: Introdução à Data Science: algoritmos de classificação e
                métodos de análise
              </p>
            </div>
          </div>

          <div className={`${styles.cronMemberInfo}`}>
            <h4>Jucelio Soares dos Santos</h4>
            <p>
              Objetivo: Abordar técnicas de análises implícitas de dados usando
              modelos de classificação. Apresentar a definição dos modelos de
              classificação no aprendizado de máquina supervisionado. Como se dá
              o processo de aprendizado e evitar o super ajuste dos modelos. Em
              seguida, apresentar as seguintes técnicas de modelos de
              classificação: Árvores de decisão, Naive Bayes e Máquinas de
              Vetores de Suporte. Por fim, indicar qual das técnicas obteve
              melhor taxa de acerto.
            </p>
            <br />
            <p>
              Justificativa: Com o advento da Internet e da popularização dos
              sistemas computacionais e de informação, surgiu o Big Data - um
              fenômeno em que dados são produzidos em vários formatos e
              armazenados por uma grande quantidade de dispositivos e
              equipamentos. Esse volume está em rápido crescimento e, por vezes,
              mal estruturado. Como forma de solucionar este problema surgiu o
              aprendizado de máquina que trata-se da aplicação de técnicas e
              algoritmos computacionais na tentativa de encontrar padrões
              ocultos nos dados por meio de análise de dados implícitas. No
              aprendizado de máquina, essas técnicas e algoritmos são
              categorizados em tarefas. As tarefas no aprendizado de máquina
              podem ser supervisionadas e não supervisionadas. As tarefas
              supervisionadas são aquelas em que existe uma classe, ou um
              atributo ao qual se quer descrever ou prever. Os modelos de
              classificação e regressão são exemplos de tarefas supervisionadas.
              Nas técnicas não supervisionadas não existe uma classe. Exemplos
              de tarefas não supervisionadas são os modelos de agrupamento e
              regras de associação. Entre as tarefas de aprendizado de máquina
              citadas, abordaremos neste minicurso os modelos de classificação
              para análise de dados.
            </p>
            <br />
            <p>
              Pré-requisitos: Conhecimentos básicos de Matemática, Estatística e
              Pensamento Lógico; O participante precisa trazer seu notebook para
              participar da atividade; Instalação da Linguagem R e o RStudio.
            </p>
          </div>
        </article>

        <article className={`${styles.cronMember}`}>
          <div className={`${styles.cronDetails}`}>
            <div className={`${styles.cronMemberImage}`}>
              <img src={demetrio} alt="Demetrio" />
              <p>
                OF03: Exploring the possibilities of integrating ChatGPT and
                Whisper APIs into Springboot-based microservices
              </p>
            </div>
          </div>

          <div className={`${styles.cronMemberInfo}`}>
            <h4>Demetrio Gomes Mestre</h4>
            <p>
              Objective: Explore the possibilities of integrating the ChatGPT
              and Whisper APIs with a Spring Boot-based microservices
              application.
            </p>
            <br />
            <p>
              Justification: With the growing interest in the knowledge and
              deepening of the use of Chat GPT, it is essential to provide
              participants with the possibility of using the chat GPT API
              integrated into an application developed in a modern (and
              in-demand) development framework and explore possible interesting
              uses of this integration.
            </p>
            <br />
            <p>
              Prerequisites: Participants need to bring their notebook to
              participate in the activity; If possible, install Spring Tools 4
              for Visual Studio Code.
            </p>
          </div>
        </article>

        <article className={`${styles.cronMember}`}>
          <div className={`${styles.cronDetails}`}>
            <div className={`${styles.cronMemberImage}`}>
              <img src={esdras} alt="Esdras" />
              <p>
                OF04: Developing an Application (CRUD) with Node.js and MongoDB
                - User Registration
              </p>
            </div>
          </div>

          <div className={`${styles.cronMemberInfo}`}>
            <h4>Esdras Samuel de Araujo Ferreira</h4>
            <p>
              Objective: Present the Node.js development environment, performing
              a simple CRUD.
            </p>
            <br />
            <p>
              Justification: Node.js and NoSQL are constantly evolving
              technologies that are widely used in web application development.
              However, many IT professionals have not yet had the opportunity to
              fully explore these technologies, which can hinder the potential
              for innovation and efficiency improvement in their organizations.
            </p>
            <br />
            <p>
              Prerequisites: Participants need to bring their notebook to
              participate in the activity; Installation of VSCode and Node.js.
            </p>
          </div>
        </article>

        <article className={`${styles.cronMember}`}>
          <div className={`${styles.cronDetails}`}>
            <div className={`${styles.cronMemberImage}`}>
              <img src={mikaelle} alt="Mikaelle" />
              <p>
                OF05: LaTeX for Scientific Production: Introduction to Academic
                Document Creation
              </p>
            </div>
          </div>

          <div className={`${styles.cronMemberInfo}`}>
            <h4>Mikaelle Oliveira Santos Gomes</h4>
            <p>
              Objective: The objective of this workshop is to provide a
              comprehensive introduction to LaTeX for high-quality academic
              document production, focusing on scientific production.
              Participants will learn basic concepts, text formatting, table
              creation, figure insertion, citations and bibliographic
              references, as well as creating documents with academic structure.
              The workshop will also cover the advantages of using LaTeX in
              academic writing, allowing participants to create high-quality
              documents.
            </p>
            <br />
            <p>
              Justification: The justification for the LaTeX workshop for
              scientific production is the growing demand for technical skills
              in creating quality academic documents. LaTeX is recognized as an
              efficient tool, but many students and researchers face challenges
              in learning and effectively using it. In addition, knowledge of
              LaTeX is valued in academic and professional contexts,
              contributing to the development of participants in these areas.
            </p>
            <br />
            <p>
              Prerequisites: Participants need to bring their notebook to
              participate in the activity; Overleaf (online) or LaTeX installed.
            </p>
          </div>
        </article>

        <article className={`${styles.cronMember}`}>
          <div className={`${styles.cronDetails}`}>
            <div className={`${styles.cronMemberImage}`}>
              <img src={francisco} alt="Francisco" />
              <p>
                OF06: Electronic Spreadsheets: Organizing and Simplifying Your
                Work through Automation
              </p>
            </div>
          </div>

          <div className={`${styles.cronMemberInfo}`}>
            <h4>Francisco Anderson Mariano da Silva</h4>
            <p>
              Objective: The objective of this workshop is to introduce
              participants to the creation, editing, and management of
              electronic spreadsheets (using, for example, Excel or Google
              Sheets). Participants will learn the main functionalities of
              electronic spreadsheets, such as cell formatting, formula and
              chart creation, and automation of routine tasks.
            </p>
            <br />
            <p>
              Justification: The use of electronic spreadsheets can assist in
              making more accurate decisions, as well as automating routine
              tasks. This workshop on electronic spreadsheets is relevant for
              participants who want to acquire basic skills capable of
              optimizing their time and increasing their productivity
              (involving, for example, creating charts for data visualization,
              and automating the calculation of complex formulas). In addition,
              the workshop offers the opportunity to meet and interact with
              other people interested in the subject. In general, the skills
              acquired in the workshop can help improve academic performance or
              even personal project management.
            </p>
            <br />
            <p>
              Prerequisites: The activity will be done in the laboratory, there
              is no need to bring machines.
            </p>
          </div>
        </article>

        <article className={`${styles.cronMember}`}>
          <div className={`${styles.cronDetails}`}>
            <div className={`${styles.cronMemberImage}`}>
              <img src={daniel} alt="Daniel" />
              <p>
                OF07: Exploring Robotics: Initial Programming Concepts for Youth
                and Beginners
              </p>
            </div>
          </div>

          <div className={`${styles.cronMemberInfo}`}>
            <h4>Daniel Dantas Marques</h4>
            <p>
              Objective: The objective is to introduce young people and
              beginners to the initial concepts of programming through robotics,
              enabling them to understand the basic principles of programming,
              create and program their own robots. The workshop stimulates
              creativity, critical thinking, and problem-solving in a practical
              and interactive way, aimed at young people and beginners who want
              a fun and practical introduction to programming using robotics as
              a learning context.
            </p>
            <br />
            <p>
              Justification: Robotics awakens interest and curiosity in many
              young people, being a motivating way to learn about programming.
              The practical and interactive approach of robotics allows
              participants to create and program their own robots, stimulating
              creativity and critical thinking. The workshop aims to empower
              participants to understand important programming concepts, such as
              programming logic, algorithms, and control structures, in a fun
              and engaging way. This contextualized approach allows the
              development of relevant skills for the 21st century, such as
              problem-solving, teamwork, and computational thinking. The
              workshop is aimed at young people and beginners who want an
              interesting and accessible introduction to programming, using
              robotics as a stimulating learning tool.
            </p>
            <br />
            <p>
              Prerequisites: Participants need to bring their notebook to
              participate in the activity.
            </p>
          </div>
        </article>

        <article className={`${styles.cronMember}`}>
          <div className={`${styles.cronDetails}`}>
            <div className={`${styles.cronMemberImage}`}>
              <img src={jairo} alt="Jairo" />
              <p>
                OF08: Software Testing in Back-End: Strategies and Tools to
                Ensure System Quality
              </p>
            </div>
          </div>

          <div className={`${styles.cronMemberInfo}`}>
            <h4>Jairo Soares de Lima</h4>
            <p>
              Objective: To train participants in techniques and principles of
              testing in a Back-End application, focusing on software quality
              and user experience. Topics include types of tests, automation
              tools, strategies, and best practices for testing in agile
              environments.
            </p>
            <br />
            <p>
              Justification: The justification is the importance of testing as a
              fundamental part of the software development process, especially
              in Back-End applications. With technological advancement and
              system complexity, it is essential to ensure software quality
              through appropriate testing, identifying errors, failures, and
              vulnerabilities before deployment in production. Adequate testing
              strategies and tools contribute to improving code quality,
              reducing errors, increasing system reliability, and optimizing the
              development process.
            </p>
            <br />
            <p>
              Prerequisites: Participants need to bring their notebook to
              participate in the activity; Installation of Node LTS version,
              Vscode, and Git.
            </p>
          </div>
        </article>
      </section>

      <TimelineComponent timelines={shedule} />

      <section className={"container"}>
        <h1 className={"titulo-principal"}>
          Conheça mais sobre a <strong>Submissão de Artigos</strong>
        </h1>
        <h2 className={`titulo-base ${styles.h2}`}>Datas Importantes</h2>
        <ul className={styles.articleList}>
          <li className={`${styles.articleListRisc} ${styles.ulLi}`}>
            Prazo Inicial de submissão de artigos: 30/03/2023;
          </li>
          <li className={`${styles.articleListRisc} ${styles.ulLi}`}>
            Prazo final de submissão de artigos: 06/05/2023;
          </li>
          <li className={`${styles.articleListRisc} ${styles.ulLi}`}>
            Notificação dos autores dos artigos aprovados: 15/05/2023;
          </li>
          <li className={`${styles.articleListRisc} ${styles.ulLi}`}>
            Apresentação dos artigos: 24/05/2023.
          </li>
        </ul>
        <h2 className={`titulo-base ${styles.h2}`}>Tópicos de Interesse</h2>
        <p className={`paragrafo ${styles.p}`}>
          São especialmente esperadas contribuições que abordem o tema principal
          do evento - &ldquo;Segurança em Tecnologia da Informação e Sistemas
          Inteligentes&ldquo;, bem como os grandes temas de desafios de pesquisa
          em Computação e TIC definidos pela comunidade de pesquisa nessas
          áreas.
        </p>
        <ul className={styles.articleList}>
          <li className={styles.ulLi}>Segurança de/em TI;</li>
          <li className={styles.ulLi}>
            Sistemas inteligentes (agentes inteligentes, algoritmos genéticos,
            aprendizagem de máquina, mineração de dados, modelos formais,
            ontologias, raciocínio automatizado, redes neurais, representação de
            conhecimento).
          </li>
        </ul>
        <p className={`paragrafo ${styles.p}`}>
          Outros tópicos são também esperados, mas não limitados a:
        </p>
        <ul className={styles.articleList}>
          <li className={styles.ulLi}>
            Arquitetura orientada a serviços (SOA) e serviços Web;
          </li>
          <li className={styles.ulLi}>
            Aspectos humanos e sociais em Computação;
          </li>
          <li className={styles.ulLi}>Business Intelligence & Analytics;</li>
          <li className={styles.ulLi}>
            Computação móvel, ubíqua e Internet das coisa;
          </li>
          <li className={styles.ulLi}>
            Dados abertos e conectados, sistemas abertos;
          </li>
          <li className={styles.ulLi}>Educação de/em Computação;</li>
          <li className={styles.ulLi}>
            Ecossistemas de Software, Sistemas de Sistemas e de SI;
          </li>
          <li className={styles.ulLi}>
            Gestão de conhecimento e aprendizagem organizacional
          </li>
          <li className={styles.ulLi}>Gestão de pessoas;</li>
          <li className={styles.ulLi}>
            Gestão de processos (metodologias de gestão, repositórios de
            processos, modelagem de processos, social BPM, processos intensivos
            em conhecimento, adaptação de processos, processos sensíveis a
            contexto);
          </li>
          <li className={styles.ulLi}>Governança empresarial e de TI;</li>
          <li className={styles.ulLi}>Inovação com/em Computação;</li>
          <li className={styles.ulLi}>
            Integração de informações e de aplicações;
          </li>
          <li className={styles.ulLi}>
            Interação Humano-Computador em Computação;
          </li>
          <li className={styles.ulLi}>
            Metodologias e abordagens para engenharia de SI;
          </li>
          <li className={styles.ulLi}>
            Mídias sociais em negócios e sociedade;
          </li>
          <li className={styles.ulLi}>
            Modelagem e paradigmas de desenvolvimento de SI (dados,
            sistemas/aplicações, agentes, aspectos, componentes, métodos ágeis
            etc.);
          </li>
          <li className={styles.ulLi}>
            Pesquisa operacional e modelos de decisão em negócios;
          </li>
          <li className={styles.ulLi}>
            Planejamento estratégico de sistemas e TI;
          </li>
          <li className={styles.ulLi}>
            Preservação de informação e memória digital;
          </li>
          <li className={styles.ulLi}>Qualidade de Software;</li>
          <li className={styles.ulLi}>
            Representação de informações de negócio, gerência de dados e
            metadados nas organizações, ontologias;
          </li>
          <li className={styles.ulLi}>
            SI/TIC para governo (transparência, dados abertos,
            interoperabilidade, ecossistemas governamentais);
          </li>
          <li className={styles.ulLi}>Sistemas de apoio à decisão.</li>
        </ul>
        <h2 className={`titulo-base ${styles.h2}`}>
          Instruções para Submissão
        </h2>
        <p className={`paragrafo ${styles.p}`}>
          Os artigos podem ser submetidos para o V SERCOMP somente nas
          categorias “relatos de caso” (case reports), sobre projetos em
          desenvolvimento, e &ldquo;artigo completo&ldquo; (full paper) sobre
          trabalhos de pesquisas já concluídas, com ideias e resultados
          inovadores, e seguindo metodologia científica adequada.
        </p>
        <p className={`paragrafo ${styles.p}`}>
          Os relatos de caso devem ter entre 3 e 5 páginas (incluindo figuras,
          tabelas, diagramas, referências em anexos). O artigo completo deve ter
          entre 7 e 10 páginas (incluindo as figuras, tabelas, diagramas,
          referências e anexos).
        </p>
        <a
          className={styles.articleLink}
          href="https://docs.google.com/document/d/1q7K60-xW9_DvetN8lPXrlaVqBtNlYeyWgBwZ4mnMCJo/edit?usp=sharing"
          target="_blank"
        >
          Modelo de relato de caso e artigo.
        </a>
        <p className={`paragrafo ${styles.p}`}>
          Alguns aspectos adicionais devem ser observados:
        </p>
        <ul className={styles.articleList}>
          <li className={styles.ulLi}>
            Sugere-se que os artigos descrevem claramente a metodologia
            científica empregada e uma análise dos resultados, ressaltando as
            contribuições de pesquisa e inovação em Computação e para a área de
            aplicação, posicionando-a em relação a outros trabalhos da área;
          </li>
          <li className={styles.ulLi}>
            Todos os artigos podem ser submetidos em Português ou Inglês, em
            formato PDF e seguindo o modelo para publicação de artigos da SBC.
            As submissões devem ser feitas por meio do formulário
          </li>
          <li className={styles.ulLi}>
            Submissões em inglês são recomendadas. Os artigos escritos em
            Português devem conter o abstract;
          </li>
          <li className={styles.ulLi}>
            Os trabalhos submetidos não devem ter sido publicados e nem estarem
            em processo de avaliação ou edição para publicação em outro lugar;
          </li>
          <li className={styles.ulLi}>
            Na versão de submissão do artigo, o cabeçalho do artigo não deverá
            haver nenhum tipo de identificação dos autores. Além de eliminar a
            identificação dos autores do cabeçalho do artigo, toda e qualquer
            referência que identifique a proveniência do artigo deve ser
            removida da versão de submissão, como nome de projetos, de
            instituições, de ferramentas e citações de artigos que identifiquem
            os autores. Artigos que possuírem identificação nesta etapa serão
            rejeitados. Caso o artigo seja aceito, os autores deverão incluir na
            versão final seus dados (nomes, filiações e e-mails, bem como demais
            informações necessárias ao artigo, a exemplo de citações a outros
            trabalhos dos autores);
          </li>
          <li className={styles.ulLi}>
            A seleção de trabalhos será realizada a partir da revisão por
            membros do Comitê de Programa do V SERCOMP. O processo de revisão
            será conduzido de forma duplamente anônima (double-blind review)
            por, pelo menos, dois revisores;
          </li>
          <li className={styles.ulLi}>
            Os seguintes critérios serão considerados na avaliação: relevância
            ao escopo, qualidade técnica, clareza e pertinência.
          </li>
        </ul>
        <h2 className={`titulo-base ${styles.h2}`}>Publicação</h2>
        <p className={`paragrafo ${styles.p}`}>
          Os artigos aceitos serão publicados nos anais do evento, condicionados
          à inscrição, de, pelo menos, um dos autores no evento, bem como à
          apresentação do trabalho no evento.
        </p>
        <h2 className={`titulo-base ${styles.h2}`}>Apresentação</h2>
        <p className={`paragrafo ${styles.p}`}>
          Cada artigo aceito deverá ter pelo menos um autor inscrito para
          apresentá-lo em sessão técnica, tendo 60 minutos para
          apresentação/discussão por meio de painel digital/poster.
        </p>
        <Comissao
          comissaoData={comissaoArtigosData}
          title={"Comitê de Programa"}
          description={
            "O Comitê de Programa é formado pelos seguintes professores do curso de Ciência da Computação da Universidade Estadual da Paraíba, Campus VII."
          }
        />

        <div className={styles.sectionButtons}>
          <a
            href="https://www.canva.com/design/DAFhLbfm-5c/GAtVL-XUzMgLc-WuIHSxEQ/view?utm_content=DAFhLbfm-5c&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            className="btn btn-primary"
            target="_blank"
          >
            Visualizar modelo de banner{" "}
          </a>
        </div>
      </section>
    </>
  );
}

export default Edition2023;
