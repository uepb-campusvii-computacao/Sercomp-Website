import { useState } from "react";
import styles from './ToolTip.module.css'; // Arquivo CSS para estilos do tooltip
import PropTypes from "prop-types";

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
