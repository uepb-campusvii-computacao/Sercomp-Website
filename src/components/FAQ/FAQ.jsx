import Question from '../Question/Question'

import styles from './FAQ.module.css'

export default function FAQ() {
    return (
        <section className={styles.faqs}>
            <h2>DÚVIDAS FREQUENTES</h2>
            <div className={`container ${styles.faqs_container}`}>

                <Question
                    question={"Onde será o evento?"}
                    answer={
                        <p>
                            O evento será realizado na UEPB Campus VII em Patos-PB, nos dias 22 a 24 de Maio de 2023.
                        </p>
                    }
                />
                <Question
                    question="O evento será o dia todo?"
                    answer={
                        <p>
                            Sim, o evento será o dia todo, com programações pela manhã, tarde e noite. Para os alunos
                            participantes do evento,
                            não terá aulas durante esse periodo, apenas o evento. Mas para aqueles que não participarem fica
                            a cargo de seus professores
                            passar atividades ou não.
                        </p>
                    }
                />
                <Question
                    question="Posso participar de todos os minicursos e oficinas?"
                    answer={
                        <p>
                            Ainda em definição
                        </p>
                    }
                />
                <Question
                    question="Por onde faço a inscrição, quanto custa e como pagar?"
                    answer={
                        <p>
                            As inscrições poderam ser feitas via internet pelo link disponível no topo da pagina, ou
                            presencialmente na universidade,
                            nos periodos da manhã ou noite. Poderá ser pago via pix, cartão ou
                            dinheiro.
                            Nos cadastros online, a equipe do evento mandará um email contendo o pix para o pagamento.
                        </p>
                    }
                />
                <Question
                    question="Terá certificado?"
                    answer={
                        <p>
                            Sim, o evento terá um certificado de no máximo 25 horas, o qual será enviado via e-mail após a finalização do evento.
                        </p>
                    }
                />
                <Question
                    question="E se eu desistir e não quiser mais participar?"
                    answer={
                        <>
                            <p>Após confirmação de pagamento o participante tem até 48 horas para pedir o reembolso.</p>
                            <p><strong>Confira as condições de reembolso em Políticas Gerais no fim da pagina.</strong></p>
                        </>
                    }
                />
            </div>
        </section>
    );
}