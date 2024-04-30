import { useState } from 'react';
import ActivitySlider from '../../components/ActivitySlider/ActivitySlider';
import { ConfirmedActivitiesData } from '../../data/ConfirmedActivitiesData.jsx';
import styles from './ConfirmedActivities.module.css';

export default function ConfirmedActivities() {
  const [activeCategory, setActiveCategory] = useState('Workshop');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const getActivitiesForCategory = (category) => {
    switch (category) {
      case 'Workshop':
        return ConfirmedActivitiesData.Workshop;
      case 'Oficina':
        return ConfirmedActivitiesData.Oficina;
      case 'Minicurso':
        return ConfirmedActivitiesData.Minicurso;
      default:
        return [];
    }
  };

  return (
    <>
      <h1 className={"titulo-principal"} style={{paddingTop: '2rem'}}>
        Atividades Confirmadas
      </h1>
      <section className={styles.confirmedActivitiesContainer}>      
        <div className={styles.buttonGroup}>
          <button
            onClick={() => handleCategoryChange('Workshop')}
            className={`${styles.categoryButton} ${
              activeCategory === 'Workshop' ? styles.active : ''
            }`}
          >
            Workshops
          </button>
          <button
            onClick={() => handleCategoryChange('Oficina')}
            className={`${styles.categoryButton} ${
              activeCategory === 'Oficina' ? styles.active : ''
            }`}
          >
            Oficinas
          </button>
          <button
            onClick={() => handleCategoryChange('Minicurso')}
            className={`${styles.categoryButton} ${
              activeCategory === 'Minicurso' ? styles.active : ''
            }`}
          >
            Minicursos
          </button>
        </div>

        <ActivitySlider key={activeCategory} activities={getActivitiesForCategory(activeCategory)} />
      </section>
    </>
  );
}
