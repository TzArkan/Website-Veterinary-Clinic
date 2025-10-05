import React, { useState, useEffect } from 'react';
import video from '../videos/VeterinaryHomepageVideoSlowMeow.mp4';
import './Home.css';
import {Link} from 'react-router-dom';
import Cardbasic from '../Components/Cards/Cardbasic.jsx';
import despreNoiImg from '../images/despreNoiImg.jpg';
import echipaImg from '../images/echipaImg.jpg';
import abonamenteImg from '../images/abonamenteImg.jpg';
import serviciiImg from '../images/serviciiImg.jpg';
import contactImg from '../images/contactImg.jpg';
import backgroundImg from '../images/backgroundS2.jpg';

function Home() {
  const slides = [
    { title: "Bine ai venit!", 
      text:(
      <>
        Aici, fiecare animal este tratat cu grijă, respect și multă iubire. <br /> 
        Indiferent dacă vii pentru un consult de rutină, analize, vaccinare sau o intervenție mai complexă, ești în locul potrivit. <br /> 
        Echipa noastră de medici veterinari este aici pentru a oferi îngrijire completă, cu profesionalism și dedicare. Dispunem de aparatură modernă, protocoale sigure și un mediu prietenos pentru ca animalul tău să se simtă în siguranță.
      </>)},
    { title: "Compasiune & Profesionalism", text: "Ai o urgență veterinară? Nu amâna — fiecare clipă contează în viața animalului tău! Suntem disponibili NON-STOP pentru a interveni rapid și eficient, indiferent de oră. Medicii nostri sunt mereu pregătiti să ofere îngrijire profesională și empatică, astfel încât tu și companionul tău să treceți cu bine peste orice situație critică. Fie că e zi sau noapte, suntem aici pentru tine. Pentru că sănătatea animalului tău nu așteaptă." },
    { title: "Grija pentru sănătatea animalului tău începe cu o simplă programare!", text: "Fiecare vizită medicala contează. Nu aștepta ca o problemă să devină urgență. Programează-te din timp și oferă-i companionului tău cea mai bună șansă la o viață sănătoasă și fericită." }
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => clearInterval(interval); 
  }, [current]);

  return (
    <div className="main-content">
      <div className="video1">
        <video src={video} autoPlay loop muted />

        <div className="overlay-card">
            <h1>{slides[current].title}</h1>
            <p>{slides[current].text}</p>
            {current === 1 && (
                <button className="overlay-btnurg">
                   <Link to="/urgente" className="overlay-link">Semnaleaza o urgenta!</Link>
                </button>
                
            )}
            {current === 2 && (
                <button className="overlay-btnprog">
                  <Link to="/programari" className="overlay-link">Programeaza o intalnire</Link>
                </button>
            )}

            
            <div className="overlay-bars">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={index === current ? "bar active" : "bar"}
                  onClick={() => setCurrent(index)}
                />
              ))}
            </div>
        </div>
      </div>
      <div className='second-content'>
        <div className='backgroundS2'>
        
      <section className="cards-section">
        <Cardbasic
          image={despreNoiImg}
          title="Despre Noi"
          text="Află mai multe despre clinica noastră și valorile noastre."
          link="/desprenoi"
        />
        <Cardbasic
          image={echipaImg}
          title="Echipa"
          text="Cunoaște echipa noastră de medici veterinari dedicați."
          link="/echipa"
        />

        <Cardbasic
          image={abonamenteImg}
          title="Abonamente"
          text="Cu abonamentele noastre personalizate, beneficiezi de consulturi regulate, vaccinări incluse, analize de rutină, și discounturi exclusive la intervenții și tratamente."
          link="/abonamente"
        />

        <Cardbasic
          image={serviciiImg}
          title="Servicii"
          text="Descoperă gama completă de servicii medicale pentru animale."
          link="/servicii"
        />

        <Cardbasic
          image={contactImg}
          title="Contact"
          text="Afla unde poti gasi clinica noastra veterinara si cum ne poti contacta."
          link="/contact"
        />
      </section>
       </div>
      </div>
    </div>
  );
}

export default Home;