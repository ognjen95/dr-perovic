import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import OralnaHirugijia from './pages/OralnaHirurgija';
import Header from './components/Header';
import Footer from './components/Footer';
import IzbeljivanjeZuba from './pages/IzbeljivanjeZuba';
import StomatoloskaProtetika from './pages/StomatoloskaProtetika';
import OralnaHigjena from './pages/OralnaHigjena';
import DecijaStomatologija from './pages/DecijaStomatologija';
import Endodoncija from './pages/Endodoncija';
import ScrollToTop from './functions/ScrollToTop';
import ContactPage from './pages/ContactPage';
import Usluge from './pages/Usluge';
import OnamaPage from './pages/OnamaPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Route path="/" exact component={LandingPage} />
        <Route path="/kontakt" component={ContactPage} />
        <Route path="/usluge" component={Usluge} />
        <Route path="/o-nama" component={OnamaPage} />
        <Route path="/oblasti/oralna-hirurgija" component={OralnaHirugijia} />
        <Route path="/oblasti/izbeljivanje-zuba" component={IzbeljivanjeZuba} />
        <Route path="/oblasti/oralna-higjena" component={OralnaHigjena} />
        <Route
          path="/oblasti/decija-stomatologija"
          component={DecijaStomatologija}
        />
        <Route
          path="/oblasti/bolesti-zuba-i-endodoncija"
          component={Endodoncija}
        />
        <Route
          path="/oblasti/stomatoloska-protetika"
          component={StomatoloskaProtetika}
        />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
