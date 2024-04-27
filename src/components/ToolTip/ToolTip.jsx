import PropTypes from "prop-types";
import { useState } from "react";
import styles from './ToolTip.module.css'; // Arquivo CSS para estilos do tooltip

function ToolTip({ children, text }) {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div
      className={styles.tooltipContainer}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onTouchStart={showTooltip}
      onTouchEnd={hideTooltip}
    >
      {children}
      {visible && (
        <div className={styles.tooltip}>
          {text}
        </div>
      )}
    </div>
  );
}

ToolTip.propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

export default ToolTip;
