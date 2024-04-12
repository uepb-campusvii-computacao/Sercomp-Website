//import partnersData from '../../data/PartnersData.js';
//import styles from './Partners.module.css';
import { Mensagem } from '../../components/Mensagem/Mensagem.jsx';

function Partners() {
    return (<Mensagem texto={"Mais informações em breve..."}/>)

    // return ( 
    //     <section className="container">
    //         <h1 className="titulo-principal">Conheça as instituições que apoiam o <strong>SERCOMP</strong></h1>

    //         <div className={`container ${styles.patrocinadores}`}>
    //             <div className={styles.patrocinadoresContainer}>
    //                 {partnersData.map((partner, index) => (
    //                     partner.alt !== "UEPB" ? 
    //                         <article className={styles.patrocinadoresMember} key={index}>
    //                             <div className={styles.patrocinadoresMemberImage}>
    //                                 <a href={partner.href} target="_blank">
    //                                     <img src={partner.image} alt={partner.alt} />
    //                                 </a>
    //                             </div>
    //                         </article>
    //                     :
    //                         null
    //                 ))}
    //             </div>
    //         </div>
    //         </section>
    // );
}

export default Partners;
