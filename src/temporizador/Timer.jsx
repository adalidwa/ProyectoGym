import { useState, useEffect } from "react";
import React from "react"
import "./Timer.css"
import Return from "../assets/Return.png"

function Timer( { isActive }){
    // Estado para manejar el tiempo restante en segundos (15 minutos = 900 segundos)
    const [timeLeft, setTimeLeft] = useState(900);

    useEffect(() => {
        let intervalId;

        if (isActive && timeLeft > 0) {
            intervalId = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [isActive, timeLeft]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="contenedor">
            <div className="redondoMayor">
                <p>{formatTime(timeLeft)}</p>
            </div>
            <div className="redondoMenor">
                <img src={Return} alt="" />

            </div>
        </div>

    )
}
export default Timer;