import logo from '../../assets/images/logo_header_home.webp';
import Countdown from '../../components/Countdown/Countdown';
import Organization from '../../components/Organization/Organization';
import orgMembersData from '../../data/orgData2024.js';

function Home() {
  
  return (
    <>
      <main>
        <div className="container main-container">
          <div className="main-left">
            <h1>VI SERCOMP</h1>
            <h3>Congresso Sertanejo de Computação</h3>
            <h5>21 a 24 de maio de 2024</h5>
            <p>Ciência de Dados na Web 3.0: <br></br> Desvendando o Futuro da Informação Digital</p>
          </div>

          <div className="main-right">
            <div className="main-right-image">
              <img loading="lazy" src={logo} alt="Logo" />
            </div>
          </div>

        </div>
      </main>

      <Countdown />

      {/*<Partners />*/}
      
      {/*<FAQ />*/}

      <Organization title={"ORGANIZAÇÃO DO VI SERCOMP"}  members={orgMembersData}/>
    </>
  );
}

export default Home;