import styles from "./Mensagem.module.css"
import PropTypes from 'prop-types';

export function Mensagem({texto}){
    return (
        <div className={styles.mesagemContainer}>
            <h1>{texto}</h1>
        </div>
    );
}

Mensagem.propTypes = {
    texto: PropTypes.string.isRequired
}