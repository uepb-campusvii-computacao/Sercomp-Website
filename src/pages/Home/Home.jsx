import Partners from '../../components/Partners/Partners';
import Countdown from '../../components/Countdown/Countdown'
import logo from '../../assets/images/logo.png'
import FAQ from '../../components/FAQ/FAQ';
import Organization from '../../components/Organization/Organization';

function Home() {
  
  return (
    <>
      <main>
        <div className="container main-container">
          <div className="main-left">
            <h1>VI SERCOMP</h1>
            <h3>Congresso Sertanejo de Computação</h3>
            <h5>21 a 24 de maio de 2023</h5>
            <p>Ciência de Dados na Web 3.0: <br></br> Desvendando o Futuro da Informação Digital</p>
          </div>

          <div className="main-right">
            <div className="main-right-image">
              <img src={logo} alt="estudantes" />
            </div>
          </div>

        </div>
      </main>

      <Partners />

      <Countdown />

      <FAQ />

      <Organization />
    </>
  );
}

export default Home;
