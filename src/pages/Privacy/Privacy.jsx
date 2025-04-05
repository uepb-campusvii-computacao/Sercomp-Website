import styles from './Privacy.module.css';

const Privacy = () => {
    return (
    <section className={"container"}>
        <h1 className={styles.mainTitle}>Conheça as <strong>Políticas</strong> do evento</h1>
        <h2 className={`${styles.baseTitle} ${styles.h2}`}>Última Atualização: 13 de abril de 2023</h2>
        <p className={`${styles.paragraph} ${styles.p}`}>Bem vindo, agradecemos o interesse em participar do Congresso Sertanejo de Computação (SERCOMP).</p>
        <p className={`${styles.paragraph} ${styles.p}`}>Ao realizar sua inscrição no SERCOMP e efetuar o seu pagamento você está aceitando os seguintes termos e políticas do evento. Caso tenha dúvidas ou precise tratar de qualquer assunto relacionado a esta política, entre em contato conosco através do e-mail cacccampusvii@gmail.com.</p>
        <h2 className={`${styles.baseTitle} ${styles.h2}`}>Informações que coletamos</h2>
        <p className={`${styles.paragraph} ${styles.p}`}>Nós coletamos todas as informações fornecidas por você durante as inscrições realizadas nos formulários disponibilizados por nós, a saber: formulário de inscrição, submissões de equipes para HackDay, submissão de minicursos/oficinas, submissão de artigos científicos, entre outros.</p>
        <h2 className={`${styles.baseTitle} ${styles.h2}`}>Como utilizamos suas informações</h2>
        <p className={`${styles.paragraph} ${styles.p}`}>Prezamos pela sua privacidade, por isso todos os dados e informações que tratamos são confidenciais, e somente as usaremos para os fins aqui descritos e autorizados por você. Desta forma seus dados serão utilizados para:</p>
        <ul className={styles.policyList}>
          <li className={styles.ulLi}>Validar sua inscrição no evento;</li>
          <li className={styles.ulLi}>Nos comunicar com você para envio de informações e publicidade promocional de parceiros do nosso evento;</li>
          <li className={styles.ulLi}>Para qualquer fim que você autorizar no momento da coleta de dados;</li>
          <li className={styles.ulLi}>Cumprir obrigações legais.</li>
        </ul>
        <h2 className={`${styles.baseTitle} ${styles.h2}`}>Para exclusão dos dados</h2>
        <p className={`${styles.paragraph} ${styles.p}`}>Todos os dados coletados serão excluídos de nossos servidores quando você assim requisitar, por procedimento gratuito e facilitado, ou quando estes não forem mais necessários ou relevantes para lhe oferecermos os nossos serviços, salvo se houver qualquer outra razão para a sua manutenção, como eventual obrigação legal de retenção de dados.</p>
        <h2 className={`${styles.baseTitle} ${styles.h2}`}>Políticas de reembolso</h2>
        <p className={`${styles.paragraph} ${styles.p}`}>Caso você se inscreva-se no evento, você tem até 48 horas, a partir do momento em que o pagamento foi efetuado, para se pronunciar sobre eventual desistência na participação, você pode utilizar o e-mail cacccampusvii@gmail.com para isso, sendo resguardado do direito a reembolso nesse período de tempo definido. Caso a desistência seja manifestada após as 48 horas, não haverá reembolso.</p>
        <h2 className={`${styles.baseTitle} ${styles.h2}`}>Direito de imagem, voz e nome</h2>
        <p className={`${styles.paragraph} ${styles.p}`}>Os participantes, no ato da inscrição neste evento autorizam a utilização, de modo gratuito, definitivo e irrevogável, de seu nome e imagem, no todo ou em parte, em qualquer meio/veículo escolhido pela organizadora, especialmente virtual, a qualquer tempo e por período indeterminado, sem restrição de quantidade, qualidade e frequência, mesmo que para fins publicitários, sem que isso lhe implique qualquer tipo de ônus e/ou contrapartida devida pela comissão organizadora.</p>
        <h2 className={`${styles.baseTitle} ${styles.h2}`}>Atualizações das Políticas do Evento</h2>
        <p className={`${styles.paragraph} ${styles.p}`}>O SERCOMP se reserva no direito de alterar essa Política quantas vezes forem necessárias, visando fornecer a você mais segurança, conveniência, e melhorar cada vez mais a sua experiência. É por isso que é muito importante acessar nossa Política periodicamente. Para facilitar, indicamos no início do documento a data da última atualização.</p>
      </section>
    );
};

export default Privacy;