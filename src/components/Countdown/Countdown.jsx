import { useEffect, useRef, useState } from 'react';
import Confetti from 'react-confetti';
import styles from './Countdown.module.css';

export default function Countdown() {
  const [countdownValues, setCountdownValues] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  const [eventStatus, setEventStatus] = useState('before');
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const confettiRef = useRef(null);

  const finalDate = new Date("May 20, 2024 00:00:00").getTime();
  const eventEndDate = new Date("May 24, 2024 23:59:59").getTime();

  useEffect(() => {
    const countdown = () => {
      const nowDate = new Date().getTime();

      if (nowDate >= finalDate && nowDate <= eventEndDate) {
        setEventStatus('during');
      } else if (nowDate > eventEndDate) {
        setEventStatus('after');
      } else {
        setEventStatus('before');
        const difference = finalDate - nowDate;

        const seconds = 1000;
        const minutes = seconds * 60;
        const hours = minutes * 60;
        const days = hours * 24;

        const timeDays = Math.floor(difference / days);
        const timeHours = Math.floor((difference % days) / hours);
        const timeMinutes = Math.floor((difference % hours) / minutes);
        const timeSeconds = Math.floor((difference % minutes) / seconds);

        updateCountdownValues({ 
          days: formatValue(timeDays), 
          hours: formatValue(timeHours), 
          minutes: formatValue(timeMinutes), 
          seconds: formatValue(timeSeconds) 
        });
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
  }, [eventEndDate, finalDate]);

  useEffect(() => {
    const updateDimensions = () => {
      if (confettiRef.current) {
        setDimensions({
          width: confettiRef.current.offsetWidth,
          height: confettiRef.current.offsetHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [eventStatus]);

  return (
    <div className={styles['container-timer']}>
      {eventStatus === 'before' && <h1>Contagem Regressiva até o VI SERCOMP</h1>}
      <div className={styles.confettiWrapper} ref={confettiRef}>
      {eventStatus === 'during' && <Confetti gravity={0.01} initialVelocityX={2} initialVelocityY={2} width={dimensions.width} height={dimensions.height} numberOfPieces={50}/>}
        {eventStatus === 'before' && (
          <div className={styles.countdown}>
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
        )}
        {eventStatus === 'during' && (
          <div className={styles.countdown}>
            <p>O evento começou! 🎉</p>
          </div>
        )}
        {eventStatus === 'after' && (
          <div className={styles.countdown}>
            <p>Ano que vem tem mais! 🫡</p>
          </div>
        )}
      </div>
    </div>
  );
}