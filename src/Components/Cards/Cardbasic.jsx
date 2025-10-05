import React from "react";
import { Link } from "react-router-dom";
import "./Cardbasic.css";

function Cardbasic({ image, title, text, link }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
        <div className="card-content">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      <Link to={link} className="card-btn">
        Mai multe
      </Link>
    </div>
  );
}

export default Cardbasic;