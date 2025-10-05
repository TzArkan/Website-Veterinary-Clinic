import React from 'react'
import { Link } from 'react-router-dom'
import "./Button.css"

function Buttonur(){
    return (
            <Link to="urgente">
                <button className="btnur">Urgente</button>
            </Link>
            
        );

}

export default Buttonur