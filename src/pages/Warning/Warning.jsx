import PropTypes from 'prop-types'
import styles from './Warning.module.css'

const Warning = ({ title, body, append }) => {
  return (
    <div className={styles.mainContainer}>
        <h1 className="mainTitle">
          <strong>{title}</strong>
        </h1>
        <div className={styles.body}>
            {body}
        </div>
        {append && append}
    </div>
  )
}

Warning.propTypes = {
    title: PropTypes.string.isRequired,
    append: PropTypes.node,
    body: PropTypes.node.isRequired
}

export default Warning
