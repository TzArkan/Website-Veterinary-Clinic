import React, { useState, useRef } from 'react'; 
import { Link } from 'react-router-dom';
import logo from '../../images/dog.png';
import './Navbar.css';
import { Navitems } from "./Navitems";
import Buttonur from "../Button/Buttonur";
import Buttonpr from "../Button/Buttonpr";
import Dropdown from './Dropdowncomponent';

function Navbar() {
  const [dropdown, setDropdown] = useState(false); 
  const showDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current); 
    setDropdown(true);
  };
  const timeoutRef = useRef(null); 

  const hideDropdown = () => {
    timeoutRef.current = setTimeout(() => setDropdown(false), 700);
  };
  return (
    <nav className="navbar">
      <Link to='/' className="navbar-logo">
        <img src={logo} alt="Clinica Sandu Logo" className="logo" />
        <span className="logo-text">Clinica Sandu</span>
      </Link>

      <ul className="nav-items">
        {Navitems.map((item) => {
          if (item.title === "Servicii") {
            return (
              <li
                key={item.id}
                className={item.cName}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <Link to={item.path}>{item.title}</Link>
                <div
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                  style={{ position: 'relative' }}
                >
                  <Dropdown open={dropdown} />
                </div>
              </li>
            );
          }

          return (
            <li key={item.id} className={item.cName}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <div className='butoane'>
        <Buttonur />
        <Buttonpr />
      </div>
    </nav>
  );
}

export default Navbar;