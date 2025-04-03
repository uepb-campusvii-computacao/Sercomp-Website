import logo from "../../../assets/images/logo_header_home.webp";
import OrganizationPeople from "../../../components/Organization/OrganizationPeople";
import styles from "./2024.module.css";
import Palestrante from "../../../components/Palestrante/Palestrante";
import { ToggleExpand } from './toggleExpand';

import alysonJonasMorato from "../../../assets/images/participacoes/2024/Alyson-Jonas-Alves-Morato.webp";
import caioHenriqueSousa from "../../../assets/images/participacoes/2024/Caio-Henrique-Lopes-Sousa.webp";
import danielMarquesGuimaraes from "../../../assets/images/participacoes/2024/Daniel-Marques-Vasconcelos-Guimaraes.webp";
import dayzaMeiryBarretoSilva from "../../../assets/images/participacoes/2024/Dayza Meiry Barreto Silva.webp";
import eduardoPaulinoDantas from "../../../assets/images/participacoes/2024/eduardo.webp";
import ellenSantosRamalho from "../../../assets/images/participacoes/2024/Ellen Santos Ramalho.webp";
import emillySantosRamalho from "../../../assets/images/participacoes/2024/Emilly Santos Ramalho.webp";
import erosFranklinSoaresFelix from "../../../assets/images/participacoes/2024/Eros Franklin Soares Felix.webp";
import esdrasSamuelFerreira from "../../../assets/images/participacoes/2024/Esdras Samuel de Araújo Ferreira.webp";
import gabrielLiraNobrega from "../../../assets/images/participacoes/2024/Gabriel Lira da Nóbrega.webp";
import giordaniAlvesFormiga from "../../../assets/images/participacoes/2024/Giordanni Alves Formiga.webp";
import giovannaTrigueiroAlmeida from "../../../assets/images/participacoes/2024/Giovanna-Trigueiro-de-Almeida-Araújo.webp";
import halanCaioNascimento from "../../../assets/images/participacoes/2024/Halan-Caio-Nascimento.webp";
import italloMendesSilva from "../../../assets/images/participacoes/2024/Itallo Mendes da Silva.webp";
import JoseAldoSilvadaCosta from "../../../assets/images/participacoes/2024/José-Aldo-Silva-da-Costa.webp";
import joaoLucasSousaMartins from "../../../assets/images/participacoes/2024/João Lucas de Sousa Martins.webp";
import jucelioSoaresSantos from "../../../assets/images/participacoes/2024/Jucelio Soares dos Santos.webp";
import kallebDiasMarques from "../../../assets/images/participacoes/2024/Kalleb-Dias-Rodrigues-Marques.webp";
import klaudioHenriqueMascarenhasMedeiros from "../../../assets/images/participacoes/2024/Klaudio-Henrique-Mascarenhas-Medeiros.webp";
import lauraRafaellaFeitosaAlves from "../../../assets/images/participacoes/2024/Laura Rafaella Feitosa Alves de Oliveira.webp";
import luannyKellyLeitao from "../../../assets/images/participacoes/2024/Luanny Kelly de Almeida Leitao.webp";
import lucianoClaudioSilvaSegundo from "../../../assets/images/participacoes/2024/Luciano Claudio Alves da Silva Segundo.webp";
import pedroFerreiraLimaNeto from "../../../assets/images/participacoes/2024/Pedro Ferreira de Lima Neto.webp";
import rebecaBarbosaLourenco from "../../../assets/images/participacoes/2024/Rebeca Barbosa Lourenço.webp";
import rodrigoAlvesCosta from "../../../assets/images/participacoes/2024/Rodrigo Alves Costa.webp";
import rosangelaAraújoMedeiros from "../../../assets/images/participacoes/2024/Rosângela de Araújo Medeiros.webp";
import thiagoAlvesLaurentino from "../../../assets/images/participacoes/2024/Thiago Alves Laurentino.webp";
import victorMenesesPinho from "../../../assets/images/participacoes/2024/Victor Meneses Pinho.webp";
import wellyngtonDaNobregaTargino from "../../../assets/images/participacoes/2024/Wellyngton-da-Nobrega-Targino.webp";
import yuriSantosMonteiro from "../../../assets/images/participacoes/2024/Yuri dos Santos Monteiro.webp";




import cleisson from "../../../assets/images/participacoes/2023/cleisson.png";
import karliane from "../../../assets/images/participacoes/2023/karliane.png";
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
import orgMembersData from '../../../data/orgData2024.js';
import { mesaData } from './mesaData.js'
import MesaRedonda from "../../../components/MesaRedonda/MesaRedonda.jsx";

function Edition2024() {
  return (
    <>
      <main>
        <div className="container main-container">
          <div className="main-left">
            <h1>VI SERCOMP - Edição 2024</h1>
            <h3>Congresso Sertanejo de Computação</h3>
            <h5>20 a 24 de maio de 2024</h5>
            <p>Ciência de Dados na Web 3.0: Desvendando o Futuro da Informação Digital</p>
          </div>

          <div className="main-right">
            <div className="main-right-image">
              <img loading="lazy" src={logo} alt="estudantes" />
            </div>
          </div>
        </div>
      </main>
      <OrganizationPeople title={"ORGANIZAÇÃO DO VI SERCOMP"} members={orgMembersData}/>
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
        {/* Minicurso 1 */}
        <article className={`${styles.cronMember} ${styles.leftAligned}`}>
          <div className={styles.cronDetails}>
            <div className={styles.cronMemberImage}>
              <div className={styles.ministrantesContainer}>
                <div className={styles.ministrante}>
                  <img src={eduardoPaulinoDantas} alt="Eduardo" />
                  <p>Eduardo Dantas</p>
                </div>
                <div className={styles.ministrante}>
                  <img src={halanCaioNascimento} alt="Halan" />
                  <p>Halan Nascimento</p>
                </div>
                <div className={styles.ministrante}>
                  <img src={caioHenriqueSousa} alt="Caio" />
                  <p>Caio Sousa</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.cronMemberInfo}>
            <h4>Git e Github: Do básico ao avançado</h4>
            
            <p><strong>Objetivo:</strong> O minicurso tem como objetivo introduzir os participantes às ferramentas Git e GitHub.</p>
            
            <ToggleExpand>
              <>
                <p><strong>Justificativa:</strong> Este minicurso faz-se necessário devido ao fato de que as ferramentas que serão ensinadas ao longo do minicurso estão fortemente presentes na vida de qualquer desenvolvedor, portanto torna-se relevante que, através deste minicurso, os interessados possam ser introduzidos aos conceitos iniciais e avançados de Git e GitHub.</p>
                <p><strong>Pré-requisitos:</strong> Não são necessários conhecimentos prévios.</p>
              </>
            </ToggleExpand>
          </div>
        </article>

        {/* Minicurso 2 */}
        <article className={`${styles.cronMember} ${styles.rightAligned}`}>
          <div className={styles.cronDetails}>
            <div className={styles.cronMemberImage}>
              <div className={styles.ministrantesContainer}>
                <div className={styles.ministrante}>
                  <img src={rebecaBarbosaLourenco} alt="Rebeca" />
                  <p>Rebeca Lourenço</p>
                </div>
                <div className={styles.ministrante}>
                  <img src={gabrielLiraNobrega} alt="Gabriel" />
                  <p>Gabriel Nóbrega</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.cronMemberInfo}>
            <h4>Programação C# para iniciantes</h4>
            
            <p><strong>Objetivo:</strong> Introduzir a linguagem C# na Universidade.</p>
            
            <ToggleExpand>
              <>
                <p><strong>Justificativa:</strong> Introduzir a linguagem C# na faculdade é uma iniciativa importante, pois amplia as opções de carreira para os alunos e preenche uma lacuna muitas vezes negligenciada. Como uma linguagem robusta e amplamente utilizada, o conhecimento em C# pode proporcionar aos estudantes oportunidades em uma variedade de setores, incluindo desenvolvimento de software, jogos, aplicativos web e móveis.</p>
                <p><strong>Recursos:</strong> Notebook com VSCode instalado e instalação de extensões adequadas (como a extensão C#).</p>
              </>
            </ToggleExpand>
          </div>
        </article>

        {/* Minicurso 3 */}
        <article className={`${styles.cronMember} ${styles.leftAligned}`}>
          <div className={styles.cronDetails}>
            <div className={styles.cronMemberImage}>
              <div className={styles.ministrantesContainer}>
                <div className={styles.ministrante}>
                  <img src={klaudioHenriqueMascarenhasMedeiros} alt="Klaudio" />
                  <p>Klaudio Medeiros</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.cronMemberInfo}>
            <h4>PWA: Criando Jogos 2D com Construct 2</h4>
            
            <p><strong>Objetivo:</strong> Minicurso projetado para introduzir os participantes ao desenvolvimento de jogos 2D usando a plataforma Construct 2. Este curso é ideal para entusiastas de jogos que desejam aprender a criar seus próprios jogos sem a necessidade de codificação complexa.</p>
            
            <ToggleExpand>
              <p><strong>Pré-requisitos:</strong> Criatividade e disposição para experimentar e explorar novas ideias.</p>
            </ToggleExpand>
          </div>
        </article>

        {/* Minicurso 4 */}
        <article className={`${styles.cronMember} ${styles.rightAligned}`}>
          <div className={styles.cronDetails}>
            <div className={styles.cronMemberImage}>
              <div className={styles.ministrantesContainer}>
                <div className={styles.ministrante}>
                  <img src={victorMenesesPinho} alt="Victor" />
                  <p>Victor Pinho</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.cronMemberInfo}>
            <h4>Explorando o Potencial do Spring Boot para Integração com IA: Conceitos Básicos e Aplicações Práticas</h4>
            
            <p><strong>Objetivo:</strong> Ensinar criar uma aplicação no framework SpringBoot que utiliza Inteligencia Artificial.</p>
            
            <ToggleExpand>
              <>
                <p>É uma novidade na área e se encaixa no tema do evento.</p>
                <p><strong>Pré-requisitos:</strong> Linguagem de programação Java, conhecimento básico de Spring.</p>
              </>
            </ToggleExpand>
          </div>
        </article>

        {/* Minicurso 5 */}
        <article className={`${styles.cronMember} ${styles.leftAligned}`}>
          <div className={styles.cronDetails}>
            <div className={styles.cronMemberImage}>
              <div className={styles.ministrantesContainer}>
                <div className={styles.ministrante}>
                  <img src={danielMarquesGuimaraes} alt="Daniel" />
                  <p>Daniel Guimaraes</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.cronMemberInfo}>
            <h4>Introdução à Visualização de Dados com Vega-lite</h4>
            
            <p><strong>Objetivo:</strong> Minicurso projetado para fornecer aos participantes uma introdução prática e acessível à visualização de dados usando a biblioteca Vega-lite. Este curso é ideal para iniciantes e profissionais que desejam aprender a criar visualizações de dados informativas e envolventes de forma eficaz.</p>
            
            <ToggleExpand>
              <p><strong>Pré-requisitos:</strong> Conhecimento básico de programação, familiaridade com linguagens de marcação como JSON e YAML, noções básicas de estatística e análise de dados.</p>
            </ToggleExpand>
          </div>
        </article>

        {/* Minicurso 6 */}
        <article className={`${styles.cronMember} ${styles.rightAligned}`}>
          <div className={styles.cronDetails}>
            <div className={styles.cronMemberImage}>
              <div className={styles.ministrantesContainer}>
                <div className={styles.ministrante}>
                  <img src={giordaniAlvesFormiga} alt="Giordanni" />
                  <p>Giordanni Formiga</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.cronMemberInfo}>
            <h4>Tratamento de Exceções em Aplicações Java</h4>
            
            <p><strong>Objetivo:</strong> Minicurso focado em fornecer aos participantes uma compreensão abrangente e prática do tratamento de exceções em aplicações Java. Este curso é projetado para desenvolvedores Java de todos os níveis de habilidade que desejam aprimorar suas habilidades no tratamento de erros e exceções em seus aplicativos.</p>
            
            <ToggleExpand>
              <p><strong>Pré-requisitos:</strong> Conhecimento básico de programação em Java, experiência com desenvolvimento de aplicativos Java, compreensão básica de exceções e acesso a um ambiente de desenvolvimento Java.</p>
            </ToggleExpand>
          </div>
        </article>

        {/* Minicurso 7 */}
        <article className={`${styles.cronMember} ${styles.leftAligned}`}>
          <div className={styles.cronDetails}>
            <div className={styles.cronMemberImage}>
              <div className={styles.ministrantesContainer}>
                <div className={styles.ministrante}>
                  <img src={yuriSantosMonteiro} alt="Yuri" />
                  <p>Yuri Monteiro</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.cronMemberInfo}>
            <h4>Introdução à Programação Web: Guia Básico em HTML, CSS e JavaScript</h4>
            
            <p><strong>Objetivo:</strong> Proporcionar aos alunos uma compreensão fundamental e prática dos conceitos básicos de desenvolvimento web, abrangendo HTML, CSS e JavaScript, preparando-os para construir suas próprias aplicações web simples.</p>
            
            <ToggleExpand>
              <>
                <p><strong>Justificativa:</strong> Devido à alta demanda por programadores web no mercado atual, é crucial adquirir habilidades nessa área. No entanto, algumas universidades oferecem aulas de programação web apenas nos períodos finais do curso. Nesse contexto, cursos complementares se tornam uma estratégia valiosa para antecipar e fortalecer as habilidades necessárias para atender às demandas do mercado de trabalho.</p>
                <p><strong>Pré-requisitos:</strong> Sem pré-requisitos.</p>
              </>
            </ToggleExpand>
          </div>
        </article>

        {/* Minicurso 8 */}
        <article className={`${styles.cronMember} ${styles.rightAligned}`}>
          <div className={styles.cronDetails}>
            <div className={styles.cronMemberImage}>
              <div className={styles.ministrantesContainer}>
                <div className={styles.ministrante}>
                  <img src={giovannaTrigueiroAlmeida} alt="Giovanna" />
                  <p>Giovanna Araújo</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.cronMemberInfo}>
            <h4>Desenvolvimento de Contratos Inteligentes com Solidity</h4>
            
            <p><strong>Descrição:</strong> Explore os fundamentos e a prática da implementação de contratos inteligentes utilizando a linguagem Solidity. Este minicurso oferece uma introdução abrangente ao desenvolvimento de contratos inteligentes, abordando desde conceitos básicos até exemplos práticos de implementação.</p>
            
            <ToggleExpand>
              <>
                <p><strong>Objetivo:</strong> Proporcionar aos alunos uma compreensão fundamental e prática dos conceitos básicos de desenvolvimento web, abrangendo HTML, CSS e JavaScript, preparando-os para construir suas próprias aplicações web simples.</p>
                <p><strong>Justificativa:</strong> Devido à alta demanda por programadores web no mercado atual, é crucial adquirir habilidades nessa área. No entanto, algumas universidades oferecem aulas de programação web apenas nos períodos finais do curso. Nesse contexto, cursos complementares se tornam uma estratégia valiosa para antecipar e fortalecer as habilidades necessárias para atender às demandas do mercado de trabalho.</p>
                <p><strong>Pré-requisitos:</strong> Conhecimentos básicos de programação e familiaridade com conceitos de blockchain. Alguma experiência com linguagens de programação semelhantes, como JavaScript ou C++.</p>
              </>
            </ToggleExpand>
          </div>
        </article>
      </section>

      <section className={`container ${styles.cronContainer}`}>
        <h2 className={styles.tituloBase}>Oficinas</h2>

        {/* Oficina 1 */}
        <article className={`${styles.cronMember} ${styles.leftAligned}`}>
          <div className={styles.cronDetails}>
            <div className={styles.cronMemberImage}>
              <div className={styles.ministrantesContainer}>
                <div className={styles.ministrante}>
                  <img src={rebecaBarbosaLourenco} alt="Rebeca" />
                  <p>Rebeca Lourenço</p>
                </div>
                <div className={styles.ministrante}>
                  <img src={emillySantosRamalho} alt="Emilly" />
                  <p>Emilly Ramalho</p>
                </div>
                <div className={styles.ministrante}>
                  <img src={ellenSantosRamalho} alt="Ellen" />
                  <p>Ellen Ramalho</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.cronMemberInfo}>
            <h4>LinkedIn na Prática: Estratégias e Oportunidades para Impulsionar sua Carreira</h4>
            
            <p><strong>Objetivo:</strong> Mostrar aos participantes a oportunidade de alavancar suas carreiras por meio do LinkedIn, fornecendo estratégias eficazes para aumentar sua visibilidade, expandir sua rede e explorar oportunidades profissionais na plataforma.</p>
            
            <ToggleExpand>
              <>
                <p><strong>Justificativa:</strong> O LinkedIn se tornou um ponto central no mundo profissional, funcionando como um verdadeiro cartão de visitas virtual. Ter um perfil otimizado e uma rede sólida de contatos pode fazer toda a diferença na busca por novas oportunidades de emprego, colaborações profissionais e até mesmo no desenvolvimento de uma marca pessoal forte e reconhecida.</p>
                <p><strong>Pré-requisitos:</strong> Não tem nenhum pré-requisito.</p>
              </>
            </ToggleExpand>
          </div>
        </article>

        {/* Oficina 2 */}
        <article className={`${styles.cronMember} ${styles.rightAligned}`}>
          <div className={styles.cronDetails}>
            <div className={styles.cronMemberImage}>
              <div className={styles.ministrantesContainer}>
                <div className={styles.ministrante}>
                  <img src={victorMenesesPinho} alt="Victor" />
                  <p>Victor Pinho</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.cronMemberInfo}>
            <h4>Explorando o Spring Boot: Criando uma API Java para Operações CRUD</h4>
            
            <p><strong>Objetivo:</strong> Introduzir o aluno a um universo mais profundo em Java e backend.</p>
            
            <ToggleExpand>
              <>
                <p><strong>Justificativa:</strong> Tecnologia usada cada vez mais no mercado de trabalho, muitos recursos a serem utilizados.</p>
                <p><strong>Pré-requisitos:</strong> É interessante um prévio conhecimento na linguagem Java.</p>
              </>
            </ToggleExpand>
          </div>
        </article>

        {/* Oficina 3 */}
        <article className={`${styles.cronMember} ${styles.leftAligned}`}>
          <div className={styles.cronDetails}>
            <div className={styles.cronMemberImage}>
              <div className={styles.ministrantesContainer}>
                <div className={styles.ministrante}>
                  <img src={wellyngtonDaNobregaTargino} alt="Wellyngton" />
                  <p>Wellyngton Targino</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.cronMemberInfo}>
            <h4>Plotagem de Gráficos com Pandas e Matplotlib a partir de Arquivos CSV</h4>
            
            <p><strong>Objetivo:</strong> Ensinar aos alunos conceitos de tratamento de dados e plotagem de gráficos.</p>
            
            <ToggleExpand>
              <>
                <p><strong>Justificativa:</strong> Visto a temática, essas bibliotecas tem uma base inicial para a área de dados.</p>
                <p><strong>Pré-Requisito:</strong> Conhecimento de python.</p>
              </>
            </ToggleExpand>
          </div>
        </article>

        {/* Oficina 4 */}
        <article className={`${styles.cronMember} ${styles.rightAligned}`}>
          <div className={styles.cronDetails}>
            <div className={styles.cronMemberImage}>
              <div className={styles.ministrantesContainer}>
                <div className={styles.ministrante}>
                  <img src={rosangelaAraújoMedeiros} alt="Rosângela" />
                  <p>Rosângela Medeiros</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.cronMemberInfo}>
            <h4>Estratégias para Elaboração de TCC com Aplicação de Inteligência Artificial</h4>
            
            <p><strong>Descrição:</strong> Nesta oficina, os participantes serão guiados através das principais etapas do processo de elaboração de um Trabalho de Conclusão de Curso (TCC) com foco na aplicação de técnicas de Inteligência Artificial (IA).</p>
            
            <ToggleExpand>
              <p><strong>Pré-Requisito:</strong> Ter conhecimento básico de metodologia científica.</p>
            </ToggleExpand>
          </div>
        </article>

        {/* Oficina 5 */}
        <article className={`${styles.cronMember} ${styles.leftAligned}`}>
          <div className={styles.cronDetails}>
            <div className={styles.cronMemberImage}>
              <div className={styles.ministrantesContainer}>
                <div className={styles.ministrante}>
                  <img src={lauraRafaellaFeitosaAlves} alt="Laura" />
                  <p>Laura Oliveira</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.cronMemberInfo}>
            <h4>Princípios Essenciais de Design UI/UX no Figma</h4>
            
            <p><strong>Descrição:</strong> Nesta oficina, os participantes serão introduzidos aos princípios essenciais de Design de Interface do Usuário (UI) e Experiência do Usuário (UX), utilizando a ferramenta Figma.</p>
            
            <ToggleExpand>
              <>
                <p>Através de exemplos práticos e exercícios guiados, os participantes aprenderão a criar designs de interface atraentes e funcionais, levando em consideração aspectos como usabilidade, acessibilidade e estética.</p>
                <p><strong>Pré-Requisito:</strong> Conhecimento básico de design gráfico e/ou interesse em aprender sobre design de interfaces.</p>
              </>
            </ToggleExpand>
          </div>
        </article>

        {/* Oficina 6 */}
        <article className={`${styles.cronMember} ${styles.rightAligned}`}>
          <div className={styles.cronDetails}>
            <div className={styles.cronMemberImage}>
              <div className={styles.ministrantesContainer}>
                <div className={styles.ministrante}>
                  <img src={lucianoClaudioSilvaSegundo} alt="Luciano" />
                  <p>Luciano Segundo</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.cronMemberInfo}>
            <h4>Utilizando Collections em Java para Resolução de Problemas de Manipulação de Dados</h4>
            
            <p><strong>Descrição:</strong> Os participantes aprenderão a utilizar as estruturas de dados da biblioteca Collections em Java para resolver problemas de manipulação de dados de forma eficiente e elegante.</p>
            
            <ToggleExpand>
              <>
                <p>Através de exemplos práticos e exercícios, os participantes irão explorar diferentes tipos de coleções, como Listas, Conjuntos e Mapas, e aprenderão a aplicar operações comuns, como adição, remoção, busca e ordenação de elementos.</p>
                <p><strong>Pré-Requisito:</strong> Conhecimento básico de programação em Java.</p>
              </>
            </ToggleExpand>
          </div>
        </article>

        {/* Oficina 7 */}
        <article className={`${styles.cronMember} ${styles.leftAligned}`}>
          <div className={styles.cronDetails}>
            <div className={styles.cronMemberImage}>
              <div className={styles.ministrantesContainer}>
                <div className={styles.ministrante}>
                  <img src={erosFranklinSoaresFelix} alt="Eros" />
                  <p>Eros Felix</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.cronMemberInfo}>
            <h4>Front-end: Criando Experiências Web Atraentes e Funcionais</h4>
            
            <p><strong>Descrição:</strong> Os participantes serão introduzidos aos princípios e práticas fundamentais do desenvolvimento front-end para criação de experiências web atrativas e funcionais.</p>
            
            <ToggleExpand>
              <>
                <p>Através de uma abordagem prática e orientada a projetos, os participantes irão explorar conceitos de HTML, CSS e JavaScript.</p>
                <p><strong>Pré-Requisito:</strong> Conhecimento básico de HTML, CSS e JavaScript.</p>
              </>
            </ToggleExpand>
          </div>
        </article>

        {/* Oficina 8 */}
        <article className={`${styles.cronMember} ${styles.rightAligned}`}>
          <div className={styles.cronDetails}>
            <div className={styles.cronMemberImage}>
              <div className={styles.ministrantesContainer}>
                <div className={styles.ministrante}>
                  <img src={thiagoAlvesLaurentino} alt="Thiago" />
                  <p>Thiago Laurentino</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.cronMemberInfo}>
            <h4>Desenvolvimento Multiplataforma com C# utilizando .NET Core</h4>
            
            <p><strong>Descrição:</strong> Os participantes aprenderão a desenvolver aplicativos que podem ser executados em diversos sistemas operacionais, incluindo Windows, Linux e macOS, utilizando as ferramentas e recursos fornecidos pelo .NET Core.</p>
            
            <ToggleExpand>
              <p><strong>Pré-Requisito:</strong> Conhecimento básico de programação em C#.</p>
            </ToggleExpand>
          </div>
        </article>
      </section>

      <section className={`container ${styles.cronContainer}`}>
        <h2 className={styles.tituloBase}>Workshops</h2>

        <article className={`${styles.cronMember} ${styles.leftAligned}`}>
          <div className={styles.cronDetails}>
            <div className={styles.cronMemberImage}>
              <div className={styles.ministrantesContainer}>
                <div className={styles.ministrante}>
                  <img src={dayzaMeiryBarretoSilva} alt="Dayza" />
                  <p>Dayza Silva</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.cronMemberInfo}>
            <h4>Code em Libras: Aprendendo Computação com Sinais</h4>
            
            <p><strong>Descrição:</strong> Visa oferecer uma experiência de aprendizado respaldado na inclusão e acessibilidade para os interessados, agregando conhecimentos. Ele tem como objetivo introduzir os participantes aos conceitos básicos da Língua Brasileira de Sinais (Libras) e sinais da área de Computação.</p>
            
            <ToggleExpand>
              <>
                <p><strong>Objetivo:</strong> Introduzir os participantes aos conceitos básicos da Língua Brasileira de Sinais (Libras) aplicados à computação.</p>
                <p><strong>Pré-requisitos:</strong> Nenhum conhecimento prévio é necessário.</p>
              </>
            </ToggleExpand>
          </div>
        </article>

        <article className={`${styles.cronMember} ${styles.leftAligned}`}>
          <div className={styles.cronDetails}>
            <div className={styles.cronMemberImage}>
              <div className={styles.ministrantesContainer}>
                <div className={styles.ministrante}>
                  <img src={rodrigoAlvesCosta} alt="Rodrigo" />
                  <p>Rodrigo Costa</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.cronMemberInfo}>
            <h4>Docker 101: nunca mais instale nenhum app</h4>
            
            <p><strong>Descrição:</strong> Esta é a oportunidade perfeita para aprender como o Docker pode revolucionar a maneira como você lida com aplicativos e ambientes de software.</p>
            
            <ToggleExpand>
              <>
                <p><strong>Objetivo:</strong> Introduzir os participantes às ferramentas de containerização com Docker.</p>
                <p><strong>Pré-requisitos:</strong> Conhecimento básico de desenvolvimento de software e familiaridade com conceitos de virtualização e contêineres, mas não é estritamente necessário.</p>
              </>
            </ToggleExpand>
          </div>
        </article>

        <article className={`${styles.cronMember} ${styles.leftAligned}`}>
          <div className={styles.cronDetails}>
            <div className={styles.cronMemberImage}>
              <div className={styles.ministrantesContainer}>
                <div className={styles.ministrante}>
                  <img src={esdrasSamuelFerreira} alt="Esdras" />
                  <p>Esdras Ferreira</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.cronMemberInfo}>
            <h4>Explorando o testRigor: Um Guia Prático</h4>
            
            <p><strong>Descrição:</strong> Workshop projetado para oferecer aos participantes uma introdução detalhada e prática ao testRigor, uma ferramenta de automação de testes de software.</p>
            
            <ToggleExpand>
              <>
                <p><strong>Objetivo:</strong> Capacitar os participantes a utilizar o testRigor para automação de testes de software.</p>
                <p><strong>Pré-requisitos:</strong> Conhecimento básico de testes de software e familiaridade com conceitos de automação de testes.</p>
              </>
            </ToggleExpand>
          </div>
        </article>

        <article className={`${styles.cronMember} ${styles.leftAligned}`}>
          <div className={styles.cronDetails}>
            <div className={styles.cronMemberImage}>
              <div className={styles.ministrantesContainer}>
                <div className={styles.ministrante}>
                  <img src={joaoLucasSousaMartins} alt="João" />
                  <p>João Martins</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.cronMemberInfo}>
            <h4>Django em Foco: Tecnologias, Arquitetura e Projeto Prático</h4>
            
            <p><strong>Descrição:</strong> Workshop focado em fornecer aos participantes uma compreensão abrangente e prática do framework Django para desenvolvimento web em Python.</p>
            
            <ToggleExpand>
              <>
                <p><strong>Objetivo:</strong> Ensinar os fundamentos do Django para desenvolvimento web.</p>
                <p><strong>Pré-requisitos:</strong> Conhecimento básico de Python, familiaridade com desenvolvimento web.</p>
              </>
            </ToggleExpand>
          </div>
        </article>

        <article className={`${styles.cronMember} ${styles.leftAligned}`}>
          <div className={styles.cronDetails}>
            <div className={styles.cronMemberImage}>
              <div className={styles.ministrantesContainer}>
                <div className={styles.ministrante}>
                  <img src={kallebDiasMarques} alt="Kalleb" />
                  <p>Kalleb Marques</p>
                </div>
                <div className={styles.ministrante}>
                  <img src={alysonJonasMorato} alt="Alyson" />
                  <p>Alyson Morato</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.cronMemberInfo}>
            <h4>Explorando os Princípios da Animação 2D com Paint Tool SAI</h4>
            
            <p><strong>Descrição:</strong> O Workshop oferece uma introdução envolvente aos fundamentos da animação 2D utilizando uma das ferramentas mais populares do mercado, o Paint Tool SAI.</p>
            
            <ToggleExpand>
              <>
                <p><strong>Objetivo:</strong> Ensinar os princípios básicos da animação 2D utilizando o Paint Tool SAI.</p>
                <p><strong>Pré-requisitos:</strong> Conhecimento básico de desenho digital, computador com Paint Tool SAI instalado, interesse em animação 2D e motivação para praticar.</p>
              </>
            </ToggleExpand>
          </div>
        </article>

        <article className={`${styles.cronMember} ${styles.leftAligned}`}>
          <div className={styles.cronDetails}>
            <div className={styles.cronMemberImage}>
              <div className={styles.ministrantesContainer}>
                <div className={styles.ministrante}>
                  <img src={luannyKellyLeitao} alt="Luanny" />
                  <p>Luanny Leitao</p>
                </div>
                <div className={styles.ministrante}>
                  <img src={italloMendesSilva} alt="Itallo" />
                  <p>Itallo Silva</p>
                </div>
                <div className={styles.ministrante}>
                  <img src={pedroFerreiraLimaNeto} alt="Pedro" />
                  <p>Pedro Neto</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.cronMemberInfo}>
            <h4>Desenvolvimento de Competências para Competições de Robótica com Java</h4>
            
            <p><strong>Descrição:</strong> Workshop projetado para proporcionar aos participantes as habilidades necessárias para se destacar em competições de robótica utilizando a linguagem de programação Java.</p>
            
            <ToggleExpand>
              <>
                <p><strong>Objetivo:</strong> Preparar os participantes para competições de robótica usando Java.</p>
                <p><strong>Pré-requisitos:</strong> Conhecimento básico de programação, familiaridade com a linguagem Java, interesse em robótica e disposição para aprender.</p>
              </>
            </ToggleExpand>
          </div>
        </article>

        <article className={`${styles.cronMember} ${styles.leftAligned}`}>
          <div className={styles.cronDetails}>
            <div className={styles.cronMemberImage}>
              <div className={styles.ministrantesContainer}>
                <div className={styles.ministrante}>
                  <img src={jucelioSoaresSantos} alt="Jucelio" />
                  <p>Jucelio Santos</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.cronMemberInfo}>
            <h4>Revolucione sua Empresa com o Power BI: Transformando Dados em Decisões Estratégicas</h4>
            
            <p><strong>Descrição:</strong> Descubra como transformar dados em decisões estratégicas com o Power BI!</p>
            
            <ToggleExpand>
              <>
                <p><strong>Objetivo:</strong> Ensinar os participantes a utilizar o Power BI para análise de dados empresariais.</p>
                <p><strong>Pré-requisitos:</strong> Conhecimento básico de análise de dados.</p>
              </>
            </ToggleExpand>
          </div>
        </article>

        <article className={`${styles.cronMember} ${styles.leftAligned}`}>
          <div className={styles.cronDetails}>
            <div className={styles.cronMemberImage}>
              <div className={styles.ministrantesContainer}>
                <div className={styles.ministrante}>
                  <img src={JoseAldoSilvadaCosta} alt="José" />
                  <p>José Costa</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.cronMemberInfo}>
            <h4>Do Esboço ao Figma: Criando Protótipos de Interface de Baixo e Alto Nível</h4>
            
            <p><strong>Descrição:</strong> Desde o esboço inicial até a prototipagem avançada no Figma, exploraremos métodos de concepção, técnicas de design e ferramentas modernas para criar experiências de usuário excepcionais.</p>
            
            <ToggleExpand>
              <>
                <p><strong>Objetivo:</strong> Ensinar o processo de criação de protótipos de interface do esboço ao Figma.</p>
                <p><strong>Pré-requisitos:</strong> Conhecimento básico de design de interfaces é recomendado, mas não obrigatório.</p>
              </>
            </ToggleExpand>
          </div>
        </article>
      </section>

      <TimelineComponent timelines={shedule} />

       <section className={"container"}>
        {/* <h1 className={"titulo-principal"}>
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
        </p> */}
        <Comissao
          comissaoData={comissaoArtigosData}
          title={"Comitê de Programa"}
          description={
            "O Comitê de Programa é formado pelos seguintes professores do curso de Ciência da Computação da Universidade Estadual da Paraíba, Campus VII."
          }
        />

        {/* <div className={styles.sectionButtons}>
          <a
            href="https://www.canva.com/design/DAFhLbfm-5c/GAtVL-XUzMgLc-WuIHSxEQ/view?utm_content=DAFhLbfm-5c&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            className="btn btn-primary"
            target="_blank"
          >
            Visualizar modelo de banner{" "}
          </a>
        </div> */}
      </section>
    </>
  );
}

export default Edition2024;
