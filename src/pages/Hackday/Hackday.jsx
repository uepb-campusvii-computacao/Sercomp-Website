import Comissao from '../../components/Comissao/Comissao';
import { comissaoHackdayData } from '../../data/ComissoesData.js'

import styles from './Hackday.module.css'

export default function Articles() {
    return (
        <section className="container">
            <h1 className="titulo-principal">Conheça mais sobre o <strong>HackDay</strong></h1>
            <h2 className={`titulo-base ${styles.h2}`}>O que é?</h2>
            <p className={`paragrafo ${styles.p}`}>O Hackday SERCOMP trata-se de uma maratona de criação e programação, onde equipes de até 5
                participantes competem entre
                si para desenvolverem, em curto período, uma solução inovadora, conforme o desafio proposto pela coordenação
                do evento.</p>
            <p className={`paragrafo ${styles.p}`}>A proposta do Hackday SERCOMP – É desafiar diferentes profissionais, universitários e
                desenvolvedores a se unirem e somarem
                esforços e competências para criarem um aplicativo voltado para solucionar problemas relacionados à
                segurança da informação e
                sistemas inteligentes.
            </p>

            <h2 className={`titulo-base ${styles.h2}`}>Quando acontecerá?</h2>
            <p className={`paragrafo ${styles.p}`}>O hackday acontecerá dentro da programação do V Congresso Sertanejo de Computação no dia 24
                de Maio de 2023 sediado na Universidade Estadual da Paraíba (UEPB) campus VII, Patos - PB. Nesta edição,
                receberemos até 10 equipes, de, no mínimo, 2 e, no máximo, 5 pessoas, que disputarão um Hackday com a
                proposta de desenvolvimento de aplicações com ênfase em solucionar problemas relacionados à segurança da
                informação e sistemas inteligentes.
            </p>
            <h2 className={`titulo-base ${styles.h2}`}>Sobre as Inscrições:</h2>
            <p className={`paragrafo ${styles.p}`}>As inscrições estão condicionadas a estudantes interessados em desenvolver soluções
                inovadoras para o tema proposto.
                As inscrições das equipes serão realizadas entre os dias 03 de Abril de 2023 até às 23h59 do dia 24 de Abril
                de 2023, por
                meio deste formulário.
            </p>
            <h2 className={`titulo-base ${styles.h2}`}>Etapas do HackDay</h2>
            <p className={`paragrafo ${styles.p}`}>O hackday terão as seguintes etapas:</p>
            <ul className={styles.hackList}>
                <li className={`${styles.hackListRisc} ${styles.ulLi}`}>Etapa 1 - Inscrições das Equipes entre os dias 05/04 a 25/04;</li>
                <li className={`${styles.hackListRisc} ${styles.ulLi}`}>Etapa 2 - Divulgação dos Temas do Hackday no dia 26/04;</li>
                <li className={`${styles.hackListRisc} ${styles.ulLi}`}>Etapa 3 - Sorteio do Tema do Hackday no dia 23/05 às 21:00;</li>
                <li className={`${styles.hackListRisc} ${styles.ulLi}`}>Etapa 4 - Definição da ideia e entrega da documentação no dia 24/05 até as 13:00. No turno da manhã será
                    definida a proposta da equipe e realizada a documentação que será feita baseada no <a className={styles.hackLink}
                        href="https://docs.google.com/document/d/1V81VVX7RhPHcZ0OQaqrKoDmptipTJwJr/edit?usp=share_link&ouid=113116994114643126228&rtpof=true&sd=true"
                        target="_blank">template</a> disponibilizado;</li>
                <li className={`${styles.hackListRisc} ${styles.ulLi}`}>Etapa 5 - Desenvolvimento da aplicação pela equipe no dia 24/05 até às 16:00. Para esta etapa é
                    necessário que seja entregue no mínimo um protótipo da aplicação;</li>
                <li className={`${styles.hackListRisc} ${styles.ulLi}`}>Etapa 6 - Apresentação da comissão avaliadora no dia 24/05 às 16:00;</li>
                <li className={`${styles.hackListRisc} ${styles.ulLi}`}>Etapa 8 - Apresentação das 10 (dez) melhores ideias por um dos integrantes da equipe que acontecerá no
                    dia 24/05 às 16:00;</li>
                <li className={`${styles.hackListRisc} ${styles.ulLi}`}>Etapa 9 - Premiação do hackday no dia 24/05 às 19:10.</li>
            </ul>
            <h2 className={`titulo-base ${styles.h2}`}>Objetivos</h2>
            <p className={`paragrafo ${styles.p}`}>O objetivo deste hackday é oferecer um ambiente que estimule a troca de conhecimentos, o
                trabalho em equipe, por meio da colaboração e integração, resultando no desenvolvimento de uma aplicação
                para solucionar problemas relacionados à segurança da informação e sistemas inteligentes.
            </p>
            <h2 className={`titulo-base ${styles.h2}`}>Equipes</h2>
            <ul className={styles.hackList}>
                <li className={styles.ulLi}>Cada equipe deverá ser composta por, no mínimo, 2 e, no máximo, 5 pessoas, designadas no ato da
                    inscrição;
                </li>
                <li className={styles.ulLi}>Os participantes inscritos nas equipes deverão ter disponibilidade para participar integralmente de todo
                    o ciclo do hackday.
                </li>
            </ul>
            <h2 className={`titulo-base ${styles.h2}`}>Inscrições</h2>
            <ul className={styles.hackList}>
                <li className={styles.ulLi}>As inscrições serão realizadas por meio de um formulário até o dia 28 de abril.</li>
                <li className={styles.ulLi}>As equipes inscritas devem eleger um representante para apresentar seus
                    dados e disponibilizar um e-mail e um telefone para contato direto.
                </li>
            </ul>
            <h2 className={`titulo-base ${styles.h2}`}>Resultado Esperado</h2>
            <p className={`paragrafo ${styles.p}`}>Espera-se, ao final da maratona, que as equipes apresentem aplicações para solucionar o
                problema proposto.
            </p>
            <h2 className={`titulo-base ${styles.h2}`}>Avaliação</h2>
            <p className={`paragrafo ${styles.p}`}>A avaliação será ao final do hackday através de uma comissão avaliadora, sendo premiada a
                melhor ideia. A comissão avaliadora só será divulgada horas antes.
            </p>
            <h2 className={`titulo-base ${styles.h2}`}>Direitos de Propriedade Intelectual</h2>
            <p className={`paragrafo ${styles.p}`}>Os participantes da maratona, incluindo os finalistas e vencedores, no ato da inscrição,
                assumem total e exclusiva responsabilidade pela aplicação que será apresentado ao final do evento, por sua
                titularidade e originalidade, incluindo, sem limitação, responsabilidade por eventuais violações à
                intimidade, privacidade, honra e imagem de qualquer pessoa, a deveres de segredo, à propriedade industrial,
                direito autoral e/ou a respeito de todas e quaisquer eventuais reivindicações de terceiros que se sintam
                prejudicados, eximindo a organizadora de qualquer responsabilidade relativa a tais fatos, aspectos, direitos
                e/ou situações.</p>
            <p className={`paragrafo ${styles.p}`}>A organizadora declara ciência expressa que, os direitos de autor sobre os aplicativos
                apresentados ao final da maratona pertencem e permanecerão pertencentes integralmente aos seus respectivos
                proprietários.</p>
            <h2 className={`titulo-base ${styles.h2}`}>Cessão de Direito de Imagem, Voz e Nome</h2>
            <p className={`paragrafo ${styles.p}`}>Os participantes, no ato da inscrição deste Hackday e uma vez sendo finalistas e/ou
                premiados, autorizam a utilização, de modo gratuito, definitivo e irrevogável, de seu nome e imagem, e
                ainda, do nome, imagem e características do aplicativo apresentado, no todo ou em parte, em qualquer
                meio/veículo escolhido pela organizadora, especialmente virtual, a qualquer tempo e por período
                indeterminado, sem restrição de quantidade, qualidade e frequência, mesmo que para fins publicitários, sem
                que isso lhe implique qualquer tipo de ônus e/ou contrapartida devida pela comissão organizadora.
            </p>
            <h2 className={`titulo-base ${styles.h2}`}>DesclassNameificação</h2>
            <p className={`paragrafo ${styles.p}`}>Será desclassNameificada a equipe que:</p>
            <ul className={styles.hackList}>
                <li className={styles.ulLi}>Ferir os princípios de fair play;</li>
                <li className={styles.ulLi}>Causar tumulto ou confusão durante o evento;</li>
                <li className={styles.ulLi}>Pedir apoio para qualquer pessoa fora do evento;</li>
                <li className={styles.ulLi}>Copiar soluções já existentes;</li>
                <li className={styles.ulLi}>Se ausentar durante a etapa presencial da competição (a equipe deverá manter sempre ao menos um
                    representante no local do evento).</li>
            </ul>
            <h2 className={`titulo-base ${styles.h2}`}>Disposições Gerais</h2>
            <p className={`paragrafo ${styles.p}`}>O presente Regulamento e este Hackday poderão ser alterados, suspensos ou cancelados a
                qualquer tempo,
                comprometendo-se a comissão organizadora, desde já, a comunicar o novo Regulamento ou às novas condições do
                Hackday ou,
                ainda, o seu cancelamento definitivo, se for o caso, sem que exista direito a qualquer indenização em favor
                dos participantes.
                A organizadora não se responsabilizará por participações que não sejam computadas por problemas técnicos que
                ocorram na transmissão dos dados.
                A responsabilidade da comissão organizadora em relação ao prêmio termina no momento em que forem entregues
                aos ganhadores. </p>
            <p className={`paragrafo ${styles.p}`}> A comissão organizadora não será responsável por problemas, falhas ou mau funcionamento
                técnico de qualquer tipo, em redes
                de computadores, servidores ou provedores, equipamentos de computadores, hardware ou software, nem por erro,
                interrupção,
                defeito, atraso ou falha em operações ou transmissões para o correto processamento de inscrições, incluindo,
                mas não se
                limitando, a transmissão imprecisa das inscrições ou de eventuais falhas em recebê-las, em razão de
                problemas técnicos,
                congestionamento na internet ou no site ligado à maratona, vírus, queda de energia, falha de programação
                (bugs) ou violação
                por terceiros (hackers). </p>
            <p className={`paragrafo ${styles.p}`}> Eventuais tentativas por parte dos participantes de violar, de forma deliberada, alguns
                dos sites da organizadora ou
                do evento ou, ainda, de prejudicar o funcionamento legítimo da maratona, poderá constituir uma afronta às
                leis penais e civis,
                podendo acarretar a devida responsabilização por danos e prejuízos que vier a causar.</p>
            <p className={`paragrafo ${styles.p}`}> mesma forma, a organizadora não se responsabiliza pela ocorrência de casos fortuitos ou de
                força maior que possam impedir a
                participação do interessado neste Hackday e/ou Evento. </p>
            <p className={`paragrafo ${styles.p}`}>Eventuais despesas necessárias ao desenvolvimento e execução do aplicativo, assim como, a
                inscrição deste no Hackday e sua participação no evento, mas não se limitando a estes, são de
                responsabilidade exclusiva do participante individualmente ou em equipe, ficando, a organizadora, eximida de
                qualquer dever, responsabilidade e/ou ônus.</p>
            <p className={`paragrafo ${styles.p}`}> A inscrição neste Hackday implica na aceitação imediata, integral e automática de todas as
                cláusulas e condições
                previstas neste Regulamento, assim como, nas previstas no Regulamento Geral do Evento. Todas as funções,
                aplicações
                e/ou tecnologias desenvolvidas devem ser originais.</p>
            <p className={`paragrafo ${styles.p}`}>As soluções apresentadas ao final da Hackday deverão ter sido desenvolvidas durante o
                período da maratona
                (24 de Maio de 2023) e não devem ser cópias, em parte ou total, de outras soluções existentes no mercado.
            </p>
            <p className={`paragrafo ${styles.p}`}> Cada participante deverá trazer seus próprios equipamentos (laptop, tablet e outros) para
                desenvolver as soluções para a
                competição, sendo que será fornecida rede wi-fi e energia no dia do evento pela organização. Os
                participantes deverão usar o
                crachá fornecido no ato do credenciamento durante todo o período e em todos os espaços em que será realizada
                a maratona.</p>
            <p className={`paragrafo ${styles.p}`}> A comissão organizadora reserva-se o direito de decidir em sem consultar os participantes
                acerca de qualquer situação ou fato não previsto neste edital, e reserva-se o direito de acrescentar,
                diminuir ou remanejar o número de vagas para o hackathon conforme demanda.
            </p>
            <h2 className={`titulo-base ${styles.h2}`}>Orientação aos Participantes</h2>
            <p className={`paragrafo ${styles.p}`}>As despesas dos participantes referentes a transporte, material de consumo e quaisquer
                outras necessárias para a participação deste evento serão de responsabilidade dos próprios participantes. As
                soluções propostas pelas equipes deverão estar prontas até às 18:00 horas do dia 24 de Maio de 2023.
            </p>
            <p className={`paragrafo ${styles.p}`}>A avaliação dos aplicativos será realizada às 19:00 horas.
            </p>

            <h2 className={`titulo-base ${styles.h2}`}>Critérios de Avalição</h2>
            <p className={`paragrafo ${styles.p}`}>Serão definidas 10 (dez) equipes finalistas, que serão anunciadas no dia 24 (quarta-feira),
                a partir das 18h00min. Em seguida, apenas 1 (um) representante de cada equipe finalista apresentará aos
                integrantes da banca julgadora, no modelo de “elevator pitch” (uma apresentação sucinta, cativante, geral e
                rápida) da solução criada durante o hackday, em até 10 (dez) minutos. A ordem das apresentações das equipes
                será definida através de sorteio.
            </p>
            <p className={`paragrafo ${styles.p}`}>Serão consideradas vencedoras a equipe avaliada com a melhor pontuação, tendo por base os
                critérios:</p>

            <ul className={styles.hackList}>
                <li className={styles.ulLi}>CRIATIVIDADE E INOVAÇÃO: Serão avaliadas a originalidade e as alternativas para executar tarefas de uma
                    maneira nova ou diferente das já existentes no mercado. (Peso: 25%)</li>
                <li className={styles.ulLi}>QUALIDADE TÉCNICA: Será avaliado o quanto o projeto atende a parâmetros de usabilidade, acessibilidade,
                    facilidade de compartilhamento, alteração e execução. Envolvendo uma descrição arquitetural e as
                    tecnologias empregadas, culminando na apresentação de um protótipo (Peso: 25%)</li>
                <li className={styles.ulLi}>VIABILIDADE: Serão avaliados os recursos necessários para a aplicação da solução tecnológica
                    desenvolvida. (Peso: 25%)</li>
                <li className={styles.ulLi}>APLICABILIDADE: Será avaliada a real aplicação da solução ao problema, ou a relevância da solução aos
                    pontos sorteados (Peso: 25%)</li>
            </ul>
            <p className={`paragrafo ${styles.p}`}>Pontos extra (segundo a ISO / IEC 25000: 2014 - Systems and Software Quality Requirements
                and Evaluation - SQuaRE)</p>
            <ul className={styles.hackList}>
                <li className={styles.ulLi}>Adequação Funcional - Essa característica representa o grau em que um produto ou sistema fornece funções
                    que atendem às necessidades declaradas e implícitas quando usadas sob condições especificadas;</li>
                <li className={styles.ulLi}>Eficiência de Desempenho - Essa característica representa o desempenho em relação à quantidade de
                    recursos usados nas condições declaradas;</li>
                <li className={styles.ulLi}>Compatibilidade - Grau para o qual um produto, sistema ou componente pode trocar informações com outros
                    produtos, sistemas ou componentes, e / ou executar suas funções necessárias, enquanto compartilha o
                    mesmo ambiente de hardware ou software;</li>
                <li className={styles.ulLi}>Usabilidade - Grau em que um produto ou sistema pode ser usado por usuários específicos para atingir
                    metas especificadas com eficácia, eficiência e satisfação em um contexto específico de uso;</li>
                <li className={styles.ulLi}>Confiabilidade - Grau para o qual um sistema, produto ou componente executa funções especificadas sob
                    condições especificadas por um período de tempo especificado;</li>
                <li className={styles.ulLi}>Segurança - Grau para o qual um produto ou sistema protege informações e dados para que pessoas ou
                    outros produtos ou sistemas tenham o grau de acesso a dados adequado aos seus tipos e níveis de
                    autorização;</li>
                <li className={styles.ulLi}>Manutenção/Manutenibilidade - Essa característica representa o grau de eficácia e eficiência com o qual
                    um produto ou sistema pode ser modificado para melhorá-lo, corrigi-lo ou adaptá-lo a mudanças no
                    ambiente e nos requisitos;</li>
                <li className={styles.ulLi}>Portabilidade - Grau de eficácia e eficiência com o qual um sistema, produto ou componente pode ser
                    transferido de um hardware, software ou outro ambiente operacional ou de uso para outro.</li>
            </ul>
            <section className={`container ${styles.videosHackday}`}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/FRJ-O0Ydpsk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </section>
            <h2 className={`titulo-base ${styles.h2}`}>Temas do HackDay</h2>
            <p className={`paragrafo ${styles.p}`}>Os temas do Hackday “Segurança em Tecnologia da Informação e Sistemas Inteligentes” serão:
            </p>
            <ul className={styles.hackList}>
                <li className={styles.ulLi}><strong>Detecção de ataques cibernéticos em tempo real:</strong> Desenvolva um sistema inteligente que
                    possa identificar e detectar diferentes tipos de ataques cibernéticos, como malware, phishing, ataques
                    de força bruta, etc. Isso pode envolver o uso de algoritmos de aprendizado de máquina, técnicas de
                    análise de dados e inteligência artificial para identificar padrões e comportamentos suspeitos nos dados
                    de tráfego de rede, logs de servidor, entre outros;
                </li>
                <li className={styles.ulLi}><strong>Proteção de dados sensíveis em ambientes de nuvem:</strong> Crie soluções inovadoras para
                    garantir a privacidade e segurança de dados sensíveis armazenados em ambientes de computação em nuvem,
                    incluindo técnicas de criptografia, monitoramento de acesso e autenticação multi-fator.
                </li>
                <li className={styles.ulLi}><strong>Defesa contra deepfakes e manipulação de imagens:</strong> Desenvolva soluções para identificar
                    e combater a disseminação de deepfakes e manipulação de imagens nas redes sociais e em outras
                    plataformas, utilizando técnicas de processamento de imagem, análise de padrões e detecção de anomalias.
                </li>
                <li className={styles.ulLi}><strong>Automação e orquestração de segurança:</strong> Crie sistemas inteligentes capazes de
                    automatizar e orquestrar processos de segurança, como identificação de vulnerabilidades, gestão de
                    patches e resposta a incidentes, visando aumentar a eficiência e a velocidade na detecção e correção de
                    ameaças.
                </li>
                <li className={styles.ulLi}><strong>Privacidade e ética na inteligência artificial:</strong> Desenvolva soluções que garantam a
                    privacidade dos dados e a ética no uso de técnicas de inteligência artificial, como explicabilidade de
                    modelos, identificação de preconceitos e discriminações, e proteção contra vazamento de informações
                    sensíveis.
                </li>
                <li className={styles.ulLi}><strong>Proteção contra ataques em dispositivos da Internet das Coisas (IoT):</strong> Crie soluções
                    para proteger dispositivos da IoT contra ataques cibernéticos, incluindo técnicas de autenticação,
                    criptografia de comunicações, e detecção de anomalias no comportamento dos dispositivos.
                </li>
                <li className={styles.ulLi}><strong>Segurança em redes sem fio:</strong> Desenvolva soluções para garantir a segurança em redes sem
                    fio, como Wi-Fi e redes móveis, incluindo técnicas de detecção de intrusões, proteção contra
                    interceptação de comunicações e autenticação segura de dispositivos.
                </li>
            </ul>
            <p className={`paragrafo ${styles.p}`}>Esses são os temas para Hackday “Segurança em Tecnologia da Informação e Sistemas
                Inteligentes”. Os participantes podem trabalhar em equipes para desenvolver soluções criativas e inovadoras
                nessas áreas, aplicando técnicas de programação, análise de dados, aprendizado de máquina e outras
                tecnologias relevantes para criar soluções práticas e eficazes para desafios de segurança na tecnologia da
                informação.
            </p>
            
            <section className={`container ${styles.videosHackday}`}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/cn_rw7QOuu0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </section>
            
            <Comissao comissaoData={comissaoHackdayData} title={"COMISSÃO DE AVALIAÇÃO"} description={"A comissão de avaliação será composta pelos seguintes professores:"}/>
        </section>
    );
}