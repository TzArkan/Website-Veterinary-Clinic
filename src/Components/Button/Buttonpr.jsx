import React from 'react'
import { Link } from 'react-router-dom'
import "./Button.css"

function Buttonpr(){
    return (
            <Link to="programari">
                <button className="btnpr">Programari</button>
            </Link>
            
        );

}

export default Buttonpr