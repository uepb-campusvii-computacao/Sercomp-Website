import { FaSpinner } from 'react-icons/fa';
import styles from './LoadingScreen.module.css';

const LoadingScreen = () => {
  return (
    <div className={styles.screenLoadingContainer}>
      <div className={styles.screenLoadingSpinner}>
          <FaSpinner className={styles.screenLoadingSpinnerIcon} />
      </div>
    </div>
  );
};

export default LoadingScreen;