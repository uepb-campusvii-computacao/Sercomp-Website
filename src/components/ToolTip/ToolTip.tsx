import { useState, ReactNode } from "react";
import styles from "./ToolTip.module.css";

interface ToolTipProps {
  text: string;
  children: ReactNode;
}

function ToolTip({ children, text }: ToolTipProps): JSX.Element {
  const [visible, setVisible] = useState(false);

  const showTooltip = (): void => setVisible(true);
  const hideTooltip = (): void => setVisible(false);

  return (
    <div
      className={styles.tooltipContainer}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onTouchStart={showTooltip}
      onTouchEnd={hideTooltip}
    >
      {children}
      {visible && <div className={styles.tooltip}>{text}</div>}
    </div>
  );
}

export default ToolTip;
