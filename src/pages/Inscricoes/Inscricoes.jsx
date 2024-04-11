import styles from './Inscricoes.module.css';

import Partners from '../../components/Partners/Partners'

import ResponsaveisInscricao from '../../components/ResponsaveisInscricao/ResponsaveisInscricao'
import { Mensagem } from '../../components/Mensagem/Mensagem';

const Inscricoes = () => {
    return (
        <Mensagem texto={"Inscrições em breve..."}/>
    );
    // return (
    //     <>
    //     <section className="container">
    //         <h1 className={styles.tituloPrincipal}>Instruções para a <strong>Inscrição</strong></h1>
    //         <p className={`${styles.paragrafo}`}>Ao se inscrever, o participante deverá fornecer seu nome completo e endereço de e-mail, além de escolher até duas atividades simultâneas, como um minicurso e uma oficina. Todas as outras atividades oferecidas, como palestras, mesa-redonda, apresentação de artigos, feira tecnológica, hackday e noite nerd, estão incluídas no valor da inscrição, a saber:</p>

    //         <p className={styles.destaqueText}>R$ 30,00</p>

    //         <div className={styles.pagButton}>
    //             <a href="/privacy" className="btn btn-primary" target="_blank">
    //                 Políticas do Evento
    //             </a>
    //         </div>

    //         <p className={`${styles.paragrafo}`}>Para garantir a sua participação no V SERCOMP, siga os seguintes passos:</p>

    //         <h2 className={`${styles.tituloBase}`}>Passo 1: Fale com um representante e garanta sua inscrição</h2>

    //         <p className={`${styles.paragrafo}`}>As inscrições serão efetuadas de forma online através do aplicativo WhatsApp, seguindo os horários de atendimento dos nossos representantes.</p>

    //         <ResponsaveisInscricao />            

    //         <p className={`${styles.paragrafo}`}>Informe no ato da inscrição seu nome completo e email.</p>

    //         <h2 className={`${styles.tituloBase}`}>Passo 2: Escolha das atividades Simultâneas</h2>

    //         <p className={`${styles.paragrafo}`}>Leia atentamente os pré-requisitos dos minicursos e oficinas disponíveis no site. E escolha até duas atividades simultâneas: um minicurso e uma oficina.</p>

    //         <p className={`${styles.paragrafo}`}>É altamente recomendável ler os pré-requisitos de cada atividade, que estão disponíveis em <a className={styles.pagLink} href="http://sercomppb.com.br/atividades.html" target="_blank">http://sercomppb.com.br/atividades.html</a>.</p>

    //         <p className={`${styles.paragrafo}`}>Para os minicursos e oficinas, serão exigidas algumas habilidades prévias, além de ser necessário trazer o próprio dispositivo com algumas ferramentas já instaladas. É possível que, no momento da inscrição, o minicurso ou oficina desejado não esteja mais disponível devido às limitações de vagas.</p>

    //         <h2 className={`${styles.tituloBase}`}>Passo 3: Forma de Pagamento e Confirmação da Inscrição</h2>

    //         <p className={`${styles.paragrafo}`}>Realize o pagamento da taxa de inscrição por meio de transferência via Pix. O V SERCOMP aceitará apenas pagamento por meio de pix, utilizando a seguinte chave: </p>

    //         <p className={`${styles.paragrafo} ${styles.centerText} ${styles.destaqueText}`}>vanderleiapereira2002@gmail.com</p>

    //         <p className={`${styles.paragrafo}`}>É importante lembrar que a inscrição só será confirmada após o pagamento e o envio do comprovante para o número de WhatsApp do representante responsável pela inscrição.</p>

    //         <p className={`${styles.paragrafo}`}>Certifique-se de realizar o pagamento dentro do prazo estipulado para evitar problemas e garantir sua participação no evento. Caso tenha qualquer dúvida em relação ao pagamento, não hesite em entrar em contato com nossa equipe.</p>

    //     </section>
    //     <Partners />
    //     </>
    // );
};

export default Inscricoes;