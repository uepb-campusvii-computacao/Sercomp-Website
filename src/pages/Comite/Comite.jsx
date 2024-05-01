import { monitoresData } from "../../data/MonitoresData";
import styles from './Comite.module.css';

function Comite() {
    return (
        <section className="container">
            <h1 className="titulo-principal">Conheça o comitê do <strong>SERCOMP</strong></h1>

            <p className="paragrafo">O Comitê de Programa é formado pelos seguintes professores do curso de Ciência da
                Computação da Universidade Estadual da Paraíba, Campus VII.</p>
            <div className="swiper-wrapper">
                {monitoresData.map((monitor) => (
                    <article className="org swiper-slide" key={monitor.nome}>
                        <div className={styles.avatar}>
                            <img src={monitor.foto} alt={monitor.nome} />
                        </div>
                        <div className="org-info">
                            <h5>{monitor.nome}</h5>
                            <h7>{monitor.area}</h7>
                        </div>
                    </article>
                )
                )}

            </div>

        </section>
    );
}

export default Comite;
