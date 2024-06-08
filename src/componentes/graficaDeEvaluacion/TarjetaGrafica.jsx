import React from "react"
import "./TarjetaGrafica.css"
import Grafica from "./Grafica";
import ejerPortada from "../../assets/imagenes/ejerPortada.png"
import Barranav from "../encabezado/Barranav";

function Card (){
    return(
        <>
        <div className="contenedorCard">
            <Barranav/>
            <img className="portada"src={ejerPortada} alt="" />
            <Grafica/>
        </div>
        </>
    )
}

export default Card;