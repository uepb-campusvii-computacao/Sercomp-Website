import ActivitySlider from "../../components/ActivitySlider/ActivitySlider";
import { ConfirmedActivitiesData } from "../../data/ConfirmedActivitiesData.jsx";
import styles from "./ConfirmedActivities.module.css"

export default function ConfirmedActivities() {  
  return (
    <section className={styles.confirmedActivitiesContainer}>
      <h1 className="titulo-base">Workshop</h1>
      <ActivitySlider activities={ConfirmedActivitiesData.Workshop}/>
      <h1 className="titulo-base">Oficina</h1>
      <ActivitySlider activities={ConfirmedActivitiesData.Oficina}/>
      <h1 className="titulo-base">Minicurso</h1>
      <ActivitySlider activities={ConfirmedActivitiesData.Minicurso}/>
      
    </section>
  );
}
