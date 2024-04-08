import Comissao from '../../components/Comissao/Comissao';
import { comissaoArtigosData } from '../../data/ComissoesData.js';
import styles from './Articles.module.css';

export default function Articles() {
    return (
        <section className={"container"}>
            <h1 className={"titulo-principal"}>Conheça mais sobre a <strong>Submissão de Artigos</strong></h1>
            <h2 className={`titulo-base ${styles.h2}`}>Datas Importantes</h2>
            <ul className={styles.articleList}>
                <li className={`${styles.articleListRisc} ${styles.ulLi}`}>Prazo Inicial de submissão de artigos: 30/03/2023;</li>
                <li className={`${styles.articleListRisc} ${styles.ulLi}`}>Prazo final de submissão de artigos: 06/05/2023;</li>
                <li className={`${styles.articleListRisc} ${styles.ulLi}`}>Notificação dos autores dos artigos aprovados: 15/05/2023;</li>
                <li className={`${styles.articleListRisc} ${styles.ulLi}`}>Apresentação dos artigos: 24/05/2023.</li>
            </ul>
            <h2 className={`titulo-base ${styles.h2}`}>Tópicos de Interesse</h2>
            <p className={`paragrafo ${styles.p}`}>
                São especialmente esperadas contribuições que abordem o tema principal do evento - &ldquo;Segurança em Tecnologia
                da Informação e Sistemas Inteligentes&ldquo;, bem como os grandes temas de desafios de pesquisa em Computação e
                TIC definidos pela comunidade de pesquisa nessas áreas.
            </p>
            <ul className={styles.articleList}>
                <li className={styles.ulLi}>Segurança de/em TI;</li>
                <li className={styles.ulLi}>Sistemas inteligentes (agentes inteligentes, algoritmos genéticos, aprendizagem de máquina, mineração de
                    dados, modelos formais, ontologias, raciocínio automatizado, redes neurais, representação de
                    conhecimento).</li>
            </ul>
            <p className={`paragrafo ${styles.p}`}>Outros tópicos são também esperados, mas não limitados a:</p>
            <ul className={styles.articleList}>
                <li className={styles.ulLi}>Arquitetura orientada a serviços (SOA) e serviços Web;</li>
                <li className={styles.ulLi}>Aspectos humanos e sociais em Computação;</li>
                <li className={styles.ulLi}>Business Intelligence & Analytics;</li>
                <li className={styles.ulLi}>Computação móvel, ubíqua e Internet das coisa;</li>
                <li className={styles.ulLi}>Dados abertos e conectados, sistemas abertos;</li>
                <li className={styles.ulLi}>Educação de/em Computação;</li>
                <li className={styles.ulLi}>Ecossistemas de Software, Sistemas de Sistemas e de SI;</li>
                <li className={styles.ulLi}>Gestão de conhecimento e aprendizagem organizacional</li>
                <li className={styles.ulLi}>Gestão de pessoas;</li>
                <li className={styles.ulLi}>Gestão de processos (metodologias de gestão, repositórios de processos, modelagem de processos, social
                    BPM, processos intensivos em conhecimento, adaptação de processos, processos sensíveis a contexto);</li>
                <li className={styles.ulLi}>Governança empresarial e de TI;</li>
                <li className={styles.ulLi}>Inovação com/em Computação;</li>
                <li className={styles.ulLi}>Integração de informações e de aplicações;</li>
                <li className={styles.ulLi}>Interação Humano-Computador em Computação;</li>
                <li className={styles.ulLi}>Metodologias e abordagens para engenharia de SI;</li>
                <li className={styles.ulLi}>Mídias sociais em negócios e sociedade;</li>
                <li className={styles.ulLi}>Modelagem e paradigmas de desenvolvimento de SI (dados, sistemas/aplicações, agentes, aspectos,
                    componentes, métodos ágeis etc.);</li>
                <li className={styles.ulLi}>Pesquisa operacional e modelos de decisão em negócios;</li>
                <li className={styles.ulLi}>Planejamento estratégico de sistemas e TI;</li>
                <li className={styles.ulLi}>Preservação de informação e memória digital;</li>
                <li className={styles.ulLi}>Qualidade de Software;</li>
                <li className={styles.ulLi}>Representação de informações de negócio, gerência de dados e metadados nas organizações, ontologias;
                </li>
                <li className={styles.ulLi}>SI/TIC para governo (transparência, dados abertos, interoperabilidade, ecossistemas governamentais);
                </li>
                <li className={styles.ulLi}>Sistemas de apoio à decisão.</li>
            </ul>
            <h2 className={`titulo-base ${styles.h2}`}>Instruções para Submissão</h2>
            <p className={`paragrafo ${styles.p}`}>Os artigos podem ser submetidos para o V SERCOMP somente nas categorias “relatos de caso”
                (case reports), sobre projetos em desenvolvimento, e &ldquo;artigo completo&ldquo; (full paper) sobre trabalhos de
                pesquisas já concluídas, com ideias e resultados inovadores, e seguindo metodologia científica adequada.</p>
            <p className={`paragrafo ${styles.p}`}>Os relatos de caso devem ter entre 3 e 5 páginas (incluindo figuras, tabelas, diagramas,
                referências em anexos). O artigo completo deve ter entre 7 e 10 páginas (incluindo as figuras, tabelas,
                diagramas, referências e anexos).</p>
            <a className={styles.articleLink}
                href="https://docs.google.com/document/d/1q7K60-xW9_DvetN8lPXrlaVqBtNlYeyWgBwZ4mnMCJo/edit?usp=sharing"
                target="_blank">Modelo de relato de caso e artigo.</a>
            <p className={`paragrafo ${styles.p}`}>Alguns aspectos adicionais devem ser observados:</p>
            <ul className={styles.articleList}>
                <li className={styles.ulLi}>Sugere-se que os artigos descrevem claramente a metodologia científica empregada e uma análise dos
                    resultados, ressaltando as contribuições de pesquisa e inovação em Computação e para a área de
                    aplicação, posicionando-a em relação a outros trabalhos da área;</li>
                <li className={styles.ulLi}>Todos os artigos podem ser submetidos em Português ou Inglês, em formato PDF e seguindo o modelo para
                    publicação de artigos da SBC. As submissões devem ser feitas por meio do formulário</li>
                <li className={styles.ulLi}>Submissões em inglês são recomendadas. Os artigos escritos em Português devem conter o abstract;</li>
                <li className={styles.ulLi}>Os trabalhos submetidos não devem ter sido publicados e nem estarem em processo de avaliação ou edição
                    para publicação em outro lugar;</li>
                <li className={styles.ulLi}>Na versão de submissão do artigo, o cabeçalho do artigo não deverá haver nenhum tipo de identificação
                    dos autores. Além de eliminar a identificação dos autores do cabeçalho do artigo, toda e qualquer
                    referência que identifique a proveniência do artigo deve ser removida da versão de submissão, como nome
                    de projetos, de instituições, de ferramentas e citações de artigos que identifiquem os autores. Artigos
                    que possuírem identificação nesta etapa serão rejeitados. Caso o artigo seja aceito, os autores deverão
                    incluir na versão final seus dados (nomes, filiações e e-mails, bem como demais informações necessárias
                    ao artigo, a exemplo de citações a outros trabalhos dos autores);</li>
                <li className={styles.ulLi}>A seleção de trabalhos será realizada a partir da revisão por membros do Comitê de Programa do V
                    SERCOMP. O processo de revisão será conduzido de forma duplamente anônima (double-blind review) por,
                    pelo menos, dois revisores;</li>
                <li className={styles.ulLi}>Os seguintes critérios serão considerados na avaliação: relevância ao escopo, qualidade técnica, clareza
                    e pertinência.</li>
            </ul>
            <h2 className={`titulo-base ${styles.h2}`}>Publicação</h2>
            <p className={`paragrafo ${styles.p}`}>Os artigos aceitos serão publicados nos anais do evento, condicionados à inscrição, de,
                pelo menos, um dos autores no evento, bem como à apresentação do trabalho no evento.
            </p>
            <h2 className={`titulo-base ${styles.h2}`}>Apresentação</h2>
            <p className={`paragrafo ${styles.p}`}>Cada artigo aceito deverá ter pelo menos um autor inscrito para apresentá-lo em sessão
                técnica, tendo 60 minutos para apresentação/discussão por meio de painel digital/poster.
            </p>
            <Comissao comissaoData={comissaoArtigosData} title={"Comitê de Programa"} description={"O Comitê de Programa é formado pelos seguintes professores do curso de Ciência da Computação da Universidade Estadual da Paraíba, Campus VII."}/>

            <div className={styles.sectionButtons}>
                <a href="https://www.canva.com/design/DAFhLbfm-5c/GAtVL-XUzMgLc-WuIHSxEQ/view?utm_content=DAFhLbfm-5c&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                    className="btn btn-primary" target="_blank">
                    Visualizar modelo de banner </a>
            </div>
            
        </section>
    );
}