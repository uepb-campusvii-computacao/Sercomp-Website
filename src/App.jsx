import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import DateConditional from "./components/DateConditional/DateConditional";
import Layout from "./components/Layout/Layout";
import { Mensagem } from "./components/Mensagem/Mensagem";
import About from "./pages/About/About";
import Articles from "./pages/Articles/Articles";
import Chamadas from "./pages/Chamadas/Chamadas";
import ConfirmedActivities from "./pages/ConfirmedActivities/ConfirmedActivities";
import Contact from "./pages/Contact/Contact";
import Error404 from "./pages/Error404/Error404";
import Hackthon from "./pages/Hackthon/Hackthon";
import Home from "./pages/Home/Home";
import Ideathon from "./pages/Ideathon/Ideathon";
import Inscricoes from "./pages/Inscricoes/Inscricoes";
import Pagamento from "./pages/Pagamento/Pagamento";
import Partners from "./pages/Partners/Partners";
import Edition2023 from "./pages/PreviousEditions/2023";
import Privacy from "./pages/Privacy/Privacy";
import ProgrammingMarathon from "./pages/Programming Marathon/ProgrammingMarathon";
import TechnologyFair from "./pages/TechnologyFair/TechnologyFair";
import Timeline from "./pages/Timeline/Timeline";
import Comite from "./pages/Comite/Comite";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/parceiros" element={<Partners />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/articles" element={<Articles />} />
          <Route exact path="/hackathon" element={<Hackthon />} />
          <Route exact path="/timeline" element={<Timeline />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/inscricao" element={
            <DateConditional
              until="2024/05/20"
              renderIfTrue={<Inscricoes />}
              renderIfFalse={<Mensagem texto="Inscrições encerradas!" />}
            />
          } />
          <Route exact path="/pagamento/user/:user_id/lote/:lote_id" element={<Pagamento />} />
          <Route exact path="/chamadas" element={<Chamadas />} />
          <Route exact path="/comite" element={<Comite />} />
          <Route exact path="/ideathon" element={<Ideathon />} />
          <Route exact path="/technology-fair" element={<TechnologyFair />} />
          <Route exact path="/confirmed-activities" element={<ConfirmedActivities />} />
          <Route exact path="/programming-marathon" element={<ProgrammingMarathon />} />
          <Route exact path="/2023" element={<Edition2023 />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
