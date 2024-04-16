import ActivitySlider from "../../components/ActivitySlider/ActivitySlider";
import { ConfirmedActivitiesData } from "../../data/ConfirmedActivitiesData";
import styles from "./ConfirmedActivities.module.css"

export default function ConfirmedActivities() {
  const data1 = ConfirmedActivitiesData;
  const data2 = ConfirmedActivitiesData;

  return (
    <section className={styles.confirmedActivitiesContainer}>
      <h1 className="titulo-base">Workshop</h1>
      <ActivitySlider activities={data1}/>
      <h1 className="titulo-base">Palestras</h1>
      <ActivitySlider activities={data2}/>
    </section>
  );
}
