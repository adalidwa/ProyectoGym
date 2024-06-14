import React from "react"
import "./TarjetaTemporizador.css"
import Timer from "./Timer";
import Button from "./Button";
import BarraNavegacion from "../BarraNavegacionAll/BarraNavegacion";
import useStore from '../../assets/store/useStore.js';
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
    const id = useStore((state) => state.id);
    return(
        <>
        <div className="contenedor_usuario">
        <BarraNavegacion  id={id}/>
            <div className="ContenedorTempo">
                
                <div className="contenidoTimer">
                    
                    <Timer isActive={isActive} onFinish={handleFinish} />
                    <Button isActive={isActive} isFinished={isFinished} toggleTimer={toggleTimer} />
                </div>
                
            </div>

        </div>
        </>

    )
}
export default TarjetaTemporizador;