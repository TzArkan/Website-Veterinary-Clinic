import React from "react";
import { Link } from "react-router-dom";
import { Navitems } from "../Navbar/Navitems"; // adjust path!
import "./SubFooter.css";
import logo from '../../images/dog.png';

function SubFooter() {
  return (
    <div className="sub-footer">
      
      <div className="footer-column">
        <div className="footer-column-spec">
          <div className="pozaVet">
            <img src={logo} alt="Clinica Sandu Logo" className="logo" />
          </div>
          <div className="descriere-clinic"> 
            <p>
              Clinică veterinară modernă în Constanța,<br />dedicată sănătății și bunăstării<br />animalelor de companie.
            </p>
            
          </div>
        </div>
        <button className="locatie">
          <a href="https://maps.app.goo.gl/YhXAVQwxyYxABPdP8" className="locatieLink" target="_blank" rel="noopener noreferrer">
              Bulevardul Tomis, Nr. 100 Constanța, România
          </a>
        </button>
        <div className="social">
          <p>Ne gasiti si pe Social Media:</p>
            <div className="iconite">
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.5l-.4 3h-2.1v7A10 10 0 0 0 22 12z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.6 0 3 1.4 3 3v10c0 1.6-1.4 3-3 3H7c-1.6 0-3-1.4-3-3V7c0-1.6 1.4-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.8-2.9a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"/>
                    </svg>
                  </a>
                  <a href="https://www.tiktok.com/explore" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2h3a5 5 0 0 0 5 5v3c-1.6 0-3.2-.5-4.5-1.5V15a7 7 0 1 1-7-7v3a4 4 0 1 0 4 4V2z"/>
                    </svg>
                  </a>
                  <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h4l-8.5 9.5L22 22h-7l-5-6-5 6H2l8.5-10L2 2h7l4.5 5L18 2z"/>
                    </svg>
                  </a>
          </div>
      </div>
      </div>
      

      <div className="footer-column">
        
        <h2>Program</h2>
        <div className="footer-column-spec">
          <div className="zileCol">
            <p>Luni-Vineri</p>
            <p>Sambata</p>
            <p>Duminica</p>
            <p>Urgente</p>
          </div>
          <div className="oreCol">
            <p>08:00 - 18:00</p>
            <p>09:00 - 14:00</p>
            <p>Inchis</p>
            <p>24/7</p>
          </div>
        </div>
        <button className="telefon">
          <a href="tel:+0241000000" className="telefonLink">+40 241 000 000</a>
        </button>
        <br></br>
        <button className="mail">
          <a href="mailto:contact@clinicasandu.ro" className="mailLink">contact@clinicasandu.ro</a>
        </button>
      </div>

      <div className="footer-column">
        <h2>Legal</h2>
        <ul>
          <li>
            <Link to="termeni-conditii"
                   className="sageata-text">
                      <span className="sageata">➤</span>
                    Termeni si conditii
                </Link>
                <br/>
            <Link to="politica-confidentialitate"
                   className="sageata-text">
                      <span className="sageata">➤</span>
                    Politica de confidentialitate
                </Link>
                <br/>
            <Link to="politica-clienti"
                   className="sageata-text">
                      <span className="sageata">➤</span>
                    Politica clienti
                </Link>
          </li>
        </ul>
      </div>

      <div className="footer-column">
        <h2>Utile</h2>
          <ul>
            
              {Navitems.map((service) => (
              
              
                <li key={service.id}>
                  
                  <Link  to={service.path} 
                    className="sageata-text">
                      <span className="sageata">➤</span>
                    {service.title}
                  </Link>
                </li>
              
              ))}
              
              <li>
                <Link to="programari"
                   className="sageata-text">
                      <span className="sageata">➤</span>
                    Programari
                </Link>
                <br/>
                <Link to="urgente"
                   className="sageata-text">
                      <span className="sageata">➤</span>
                    Urgente
                </Link>
              </li>
              
          </ul>
          
      </div>
    </div>
 
  );
}

export default SubFooter;
