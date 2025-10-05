import React from 'react';
import Navbar from './Components/Navbar/Navbarcomponent';
import Footer from './Components/Footer/Footer';
import SubFooter from './Components/Footer/Subfooter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Desprenoi from './Pages/Desprenoi';
import Echipa from './Pages/Echipa';
import Abonamente from './Pages/Abonamente';
import Contact from './Pages/Contact';
import Servicii from './Pages/Servicii';
import Urgente from './Pages/Urgente';
import Programari from './Pages/Programari';
import Consultare from './Pages/Consultare';
import Ecografiere from './Pages/Ecografiere';
import Microcipare from './Pages/Microcipare';
import Vaccinare from './Pages/Vaccinare';


import './App.css';
import './videos/Video.css';
import TermeniSiConditii from './Pages/TermeniSiConditii';
import PoliticaConfidentialitate from './Pages/PoliticaConfidentialitate';
import PoliticaClienti from './Pages/PoliticaClienti';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/desprenoi" element={<Desprenoi />} />
          <Route path="/echipa" element={<Echipa />} />
          <Route path="/abonamente" element={<Abonamente />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/servicii" element={<Servicii />} />
          <Route path="/urgente" element={<Urgente />} />
          <Route path="/programari" element={<Programari />} />
          <Route path="/consultatii" element={<Consultare />} />
          <Route path="/vaccinare" element={<Vaccinare />} />
          <Route path="/ecografiere" element={<Ecografiere />} />
          <Route path="/microcipare" element={<Microcipare />} />
          <Route path="/termeni-conditii" element={<TermeniSiConditii />} />
          <Route path="/politica-confidentialitate" element={<PoliticaConfidentialitate />} />
          <Route path="/politica-clienti" element={<PoliticaClienti />} />
        </Routes>
        <div className="footerr">
          <SubFooter />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
