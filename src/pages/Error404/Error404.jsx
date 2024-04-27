import styles from './error404.module.css'

function Pagina404() {
  return (
    <section className={`container ${styles.container}`}>
      <h1>404</h1>
      <p className="paragrafo">Página não encontrada.</p>
    </section>
  );
}

export default Pagina404;