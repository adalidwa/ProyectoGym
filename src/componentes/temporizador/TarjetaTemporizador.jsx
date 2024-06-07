import React from "react"
import "./TarjetaTemporizador.css"
import Encabezado from "./Encabezado";
import Timer from "./Timer";
import Button from "./Button";
import Barranav from "../encabezado/Barranav";
import { useState, useEffect } from "react"; 

function TarjetaTemporizador(){
    
    const [isActive, setIsActive] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    const toggleTimer = () => {
        if (isFinished) {
            setIsFinished(false);
            setIsActive(false);
        } else {
            setIsActive(prevIsActive => !prevIsActive);
        }
    };
    const handleFinish = () => {
        setIsActive(false);
        setIsFinished(true);
    };
    return(
        <>
            <div className="ContenedorTempo">
                <Barranav/>
                <div className="contenidoTimer">
                    <Encabezado/>
                    <Timer isActive={isActive} onFinish={handleFinish} />
                    <Button isActive={isActive} isFinished={isFinished} toggleTimer={toggleTimer} />
                </div>
                
            </div>
        </>

    )
}
export default TarjetaTemporizador;