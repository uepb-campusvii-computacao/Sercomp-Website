import styles from "./Message.module.css"
import PropTypes from 'prop-types';

export function Message({text}){
    return (
        <div className={styles.messageContainer}>
            <h1>{text}</h1>
        </div>
    );
}

Message.propTypes = {
    texto: PropTypes.string.isRequired
}