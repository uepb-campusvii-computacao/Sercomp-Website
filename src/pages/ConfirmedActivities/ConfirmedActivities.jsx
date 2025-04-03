import { useState } from 'react';
import ActivitySlider from '../../components/ActivitySlider/ActivitySlider';
import { ConfirmedActivitiesData } from '../../data/ConfirmedActivitiesData.jsx';
import styles from './ConfirmedActivities.module.css';

export default function ConfirmedActivities() {
  const [activeCategory, setActiveCategory] = useState('MinicursoManha');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const getActivitiesForCategory = (category) => {
    switch (category) {
      case 'Workshop':
        return ConfirmedActivitiesData.Workshop;
      case 'Oficina':
        return ConfirmedActivitiesData.Oficina;
      case 'MinicursoManha':
        return ConfirmedActivitiesData.MinicursoManha;
      case 'MinicursoNoite':
        return ConfirmedActivitiesData.MinicursoNoite;
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
          {/* <button
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
          </button> */}
          <button
            onClick={() => handleCategoryChange('MinicursoManha')}
            className={`${styles.categoryButton} ${
              activeCategory === 'MinicursoManha' ? styles.active : ''
            }`}
          >
            Minicursos Manhã
          </button>
          <button
            onClick={() => handleCategoryChange('MinicursoNoite')}
            className={`${styles.categoryButton} ${
              activeCategory === 'MinicursoNoite' ? styles.active : ''
            }`}
          >
            Minicursos Noite
          </button>
        </div>

        <ActivitySlider key={activeCategory} activities={getActivitiesForCategory(activeCategory)} />
      </section>
    </>
  );
}
