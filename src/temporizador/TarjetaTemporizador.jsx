import React from "react"
import "./TarjetaTemporizador.css"
import Encabezado from "./Encabezado";
import Timer from "./Timer";
import Button from "./Button";
import Barranav from "../encabezado/Barranav";
import { useState, useEffect } from "react"; 

function TarjetaTemporizador(){
    
    const [isActive, setIsActive] = useState(false);

    const startTimer = () => {
        setIsActive(true);
    };
    return(
        <>
            <div className="ContenedorTempo">
                <Barranav/>
                <div className="contenido">
                <Encabezado/>
                <Timer isActive={isActive} />
                <Button startTimer={startTimer} />
                </div>
                
            </div>
        </>

    )
}
export default TarjetaTemporizador;