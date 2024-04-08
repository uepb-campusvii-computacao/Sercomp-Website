import styles from './Footer.module.css';

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.footer1}>
                    <a href="/" className={styles.footerLogo}>
                        <h4>SERCOMP</h4>
                    </a>
                    <p>Ciência de Dados na Web 3.0: Desvendando o Futuro da Informação Digital</p>
                </div>
                <div className={styles.footer2}>
                    <h4>Permalinks</h4>
                    <ul className={styles.permalinks}>
                        <li><a href="/">Incio</a></li>
                        <li><a href="timeline">Programação</a></li>
                        <li><a href="about">Sobre</a></li>
                        <li><a href="contact">Contato</a></li>
                    </ul>
                </div>
                <div className={styles.footer3}>
                    <h4>Privacidade</h4>
                    <ul className={styles.privacy}>
                        <li><a href="privacy.html">Políticas Gerais</a></li>
                    </ul>
                </div>
                <div className={styles.footer4}>
                    <h4>Contato</h4>
                    <div>
                        <p>Qualquer duvida que tiver sobre palestras, minicursos, oficinas, cadastro e tudo mais, entre em contato com a nossa equipe e tire suas duvidas!</p>
                        <p className={`uil uil-phone ${styles.contactInfo}`}>+55 (83) 99404-0841</p>
                        <p className={`uil uil-at ${styles.contactInfo}`}>cacccampusvii@gmail.com</p>
                    </div>
                    <ul className={styles.footerSocials}>
                        <li><a href="https://instagram.com/SERCOMPpb?igshid=YmMyMTA2M2Y=" target="_blank"><i className={`uil uil-instagram-alt ${styles.socialIcon}`} /></a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerCopyright}>
                <small>Todos os direitos reservados © SERCOMP</small>
            </div>
        </footer>
    );
}