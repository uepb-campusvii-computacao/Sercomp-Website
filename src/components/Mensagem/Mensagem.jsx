import styles from "./Mensagem.module.css"

export function Mensagem({texto}){
    return (
        <div className={styles.mesagemContainer}>
            <h1>{texto}</h1>
        </div>
    );
}