import Partners from '../../components/Partners/Partners';
import Countdown from '../../components/Countdown/Countdown'
import logo from '../../assets/images/logo.png'
import FAQ from '../../components/FAQ/FAQ';
import Organization from '../../components/Organization/Organization';

function Home() {
  
  return (
    <>
      <header>
        <div className="container header-container">
          <div className="header-left">
            <h2>V SERCOMP</h2>
            <h3>Congresso sertanejo de computação</h3>
            <h5>22 a 24 de maio de 2023</h5>
            <p>Segurança em Tecnologia da Informação e Sistemas Inteligentes</p>
          </div>

          <div className="header-right">
            <div className="header-right-image">
              <img src={logo} alt="estudantes" />
            </div>
          </div>

        </div>
      </header>

      <Partners />

      <Countdown />

      <FAQ />

      <Organization />
    </>
  );
}

export default Home;
