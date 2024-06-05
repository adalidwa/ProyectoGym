import React from "react"
import "./TarjetaRutina.css"
import MiniTarjeta from "./ejercicios/MiniTarjeta";

import Barranav from "../encabezado/Barranav";
import Opciones from "./Opciones";
function TarjetaRutina(){
    return(
        <>
        <div className="contenedorT">
            <Barranav/>
            <Opciones/>
            <div className="contenedorMinitarjeta">
                <MiniTarjeta/>
                <MiniTarjeta/>
                <MiniTarjeta/>
                <MiniTarjeta/>
            </div>
            <Opciones/>
            <Opciones/>
        </div>
        </>

    )
}

export default TarjetaRutina;