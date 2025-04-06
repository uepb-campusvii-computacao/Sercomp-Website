import { useState } from 'react';
import styles from './toggleExpand.module.css';

export const ToggleExpand = ({ children, defaultExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  
  return (
    <div className={styles.expandContainer}>
      <div className={`${styles.expandContent} ${isExpanded ? styles.expanded : ''}`}>
        {children}
      </div>
      <button 
        className={styles.toggleButton}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Ler menos ▲' : 'Ler mais ▼'}
      </button>
    </div>
  );
};