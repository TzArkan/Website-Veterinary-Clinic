import React, { useState } from "react";
import { serviciiDropdown } from "./Navitems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown({ open }) {
  return (
    <>
      <ul className={open ? "servicii-submeniu show" : "servicii-submeniu"}>
        {serviciiDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link className="submeniu-item" to={item.path}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
