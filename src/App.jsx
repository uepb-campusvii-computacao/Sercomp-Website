import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Partners from "./pages/Partners/Partners";
import About from "./pages/About/About";
import Articles from "./pages/Articles/Articles";
import Hackthon from "./pages/Hackthon/Hackthon";
import Timeline from "./pages/Timeline/Timeline";
import Privacy from "./pages/Privacy/Privacy";
import Inscricoes from "./pages/Inscricoes/Inscricoes";
import Activities from "./pages/Activities/Activities";
import Error404 from "./pages/Error404/Error404";
import Edition2023 from "./pages/PreviousEditions/2023";
import Ideathon from "./pages/Ideathon/Ideathon";
import TechnologyFair from "./pages/TechnologyFair/TechnologyFair";
import ProgrammingMarathon from "./pages/Programming Marathon/ProgrammingMarathon";

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
          <Route exact path="/inscricao" element={<Inscricoes />} />
          <Route exact path="/chamadas" element={<Activities />} />
          <Route exact path="/ideathon" element={<Ideathon />} />
          <Route exact path="/technology-fair" element={<TechnologyFair />} />
          <Route exact path="/programming-marathon" element={<ProgrammingMarathon />} />
          <Route exact path="/2023" element={<Edition2023 />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
