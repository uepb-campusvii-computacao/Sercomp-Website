import PropTypes from 'prop-types'
import styles from './Aviso.module.css'

const Aviso = ({ title, body, append }) => {
  return (
    <div className={styles.mainContainer}>
        <h1 className="titulo-principal">
          <strong>{title}</strong>
        </h1>
        <div className={styles.body}>
            {body}
        </div>
        {append && append}
    </div>
  )
}

Aviso.propTypes = {
    title: PropTypes.string.isRequired,
    append: PropTypes.node,
    body: PropTypes.node.isRequired
}

export default Aviso
