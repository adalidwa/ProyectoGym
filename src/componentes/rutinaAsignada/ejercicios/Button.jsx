import React from "react"
import "./Button.css"
import { NavLink } from "react-router-dom";

function Button(){
    return(
        
        <div className="contenedorBoton">
            <NavLink to="/Informacionderutinas">
            <button className="botones">Completado</button>

            </NavLink>
        </div>

    )
}

export default Button;