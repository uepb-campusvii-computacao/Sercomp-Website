import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Question.module.css';

export default function Question({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleQuestion = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <article className={`${styles.faq} ${isOpen ? styles.open : ''}`} onClick={toggleQuestion}>
      <div className={styles['faq-icon']}>
        <i className={`uil ${isOpen ? 'uil-minus' : 'uil-plus'}`}></i>
      </div>
      <div className={styles['question-answer']}>
        <h4>{question}</h4>
        {isOpen && <p>{answer}</p>}
      </div>
    </article>
  );
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.node.isRequired,
};