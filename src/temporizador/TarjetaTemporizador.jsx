import React from "react"
import "./TarjetaTemporizador.css"
import Encabezado from "./Encabezado";
import Timer from "./Timer";
import Button from "./Button";
import Barranav from "../encabezado/Barranav";
function TarjetaTemporizador(){
    return(
        <>
            <div className="ContenedorTempo">
                <Barranav/>
                <div className="contenido">
                <Encabezado/>
                <Timer/>
                <Button/>
                </div>
                
            </div>
        </>

    )
}
export default TarjetaTemporizador;