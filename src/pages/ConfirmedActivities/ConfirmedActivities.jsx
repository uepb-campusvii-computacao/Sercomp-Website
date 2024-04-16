import ActivitySlider from "../../components/ActivitySlider/ActivitySlider";
import { ConfirmedActivitiesData } from "../../data/ConfirmedActivitiesData";
import styles from "./ConfirmedActivities.module.css"

export default function ConfirmedActivities() {
  const data1 = ConfirmedActivitiesData;
  const data2 = ConfirmedActivitiesData;

  return (
    <section className={styles.confirmedActivitiesContainer}>
      <h1>Workshop</h1>
      <ActivitySlider activities={data1}/>
      <h1>Palestras</h1>
      <ActivitySlider activities={data2}/>
    </section>
  );
}
