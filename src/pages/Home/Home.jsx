import logo from '../../assets/images/logo_header_homevii.png';
import Countdown from '../../components/Countdown/Countdown';
import Organization from '../../components/Organization/Organization';
import orgMembersData from '../../data/orgData2024.js';
import styles from './home.module.css';

function Home() {
  
  return (
    <>
      <main>
        <div className="container main-container">
          <div className="main-left">
            <h1>VII SERCOMP</h1>
            <h3>Congresso Sertanejo de Computação</h3>
            <h5>19 a 21 de maio de 2025</h5>
            <p> Do  Código  à  Liderança: <br></br>  A  Importância  do  Equilíbrio  entre  Soft  e  Hard 
            Skills </p>

            <a href="https://eventflow.com.br/sign-in" target="_blank" rel="noopener noreferrer">
              <button className={styles.mainButton}>Inscreva-se</button>
            </a>

          </div>

          <div className="main-right">
            <div className="main-right-image">
              <img loading="lazy" src={logo} alt="Logo" />
            </div>
          </div>

        </div>
      </main>

      <Countdown eventStart="May 19, 2025 17:30:00" eventEnd="May 21, 2025 21:30:00"/>

      <Organization title={"ORGANIZAÇÃO DO VI SERCOMP"}  members={orgMembersData}/>
    </>
  );
}

export default Home;

