import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Partners from './pages/Partners/Partners';
import About from './pages/About/About'
import Articles from './pages/Articles/Articles';
import Hackday from './pages/Hackday/Hackday';
import Timeline from './pages/Timeline/Timeline';
import Privacy from './pages/Privacy/Privacy';
import Inscricoes from './pages/Inscricoes/Inscricoes';
import Atividades from './pages/Atividades/Atividades';
import Error404 from './pages/Error404/Error404'

function App() {
  return (
    <Router>
      <Layout >
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/parceiros" element={<Partners/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/articles" element={<Articles/>}/>
          <Route exact path="/hackday" element={<Hackday/>}/>
          <Route exact path="/timeline" element={<Timeline/>}/>
          <Route exact path="/privacy" element={<Privacy/>}/>
          <Route exact path="/inscricao" element={<Inscricoes/>}/>
          <Route exact path="/atividades" element={<Atividades />}/>
          <Route path='*' element={<Error404 />}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
