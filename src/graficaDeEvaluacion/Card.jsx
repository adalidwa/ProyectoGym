import React from "react"
import "./Card.css"
import Grafica from "./Grafica";
import ejerPortada from "../assets/ejerPortada.png"

function Card (){
    return(
        <>
        <div className="contenedorCard">
            <img src={ejerPortada} alt="" />
            <Grafica/>
        </div>
        </>
    )
}

export default Card;