import { useEffect, useState } from 'react';

import styles from './Countdown.module.css';

export default function Countdown() {

  const [countdownValues, setCountdownValues] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const countdown = () => {
      const finalDate = new Date("May 21, 2024 00:00:00").getTime();
      const nowDate = new Date().getTime();

      if (!(finalDate <= nowDate)) {
        const difference = finalDate - nowDate;

        const seconds = 1000;
        const minutes = seconds * 60;
        const hours = minutes * 60;
        const days = hours * 24;

        const timeDays = Math.floor(difference / days);
        const timeHours = Math.floor((difference % days) / hours);
        const timeMinutes = Math.floor((difference % hours) / minutes);
        const timeSeconds = Math.floor((difference % minutes) / seconds);

        updateCountdownValues({ days: formatValue(timeDays), hours: formatValue(timeHours), minutes: formatValue(timeMinutes), seconds: formatValue(timeSeconds) });
      }
    };

    const formatValue = (value) => {
      return value < 10 ? '0' + value : value.toString();
    };

    const updateCountdownValues = (values) => {
      setCountdownValues(values);
    };

    countdown();

    const intervalId = setInterval(countdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
      <div className={styles['container-timer']}> {/* Utiliza a classe do CSS Module */}
        <h1>Contagem Regressiva até o VI SERCOMP</h1>

        <div className={styles.countdown}> {/* Utiliza a classe do CSS Module */}

          <div>
            <p id="days">{countdownValues.days}</p>
            <h3>Dias</h3>

          </div>

          <div>
            <p id="hours">{countdownValues.hours}</p>
            <h3>Horas</h3>

          </div>

          <div>
            <p id="minutes">{countdownValues.minutes}</p>
            <h3>Minutos</h3>
          </div>

          <div>
            <p id="seconds">{countdownValues.seconds}</p>
            <h3>Segundos</h3>
          </div>
        </div>
      </div>
  );
}
