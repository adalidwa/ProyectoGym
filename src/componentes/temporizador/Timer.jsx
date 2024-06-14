import { useState, useEffect } from "react";
import React from "react"
import "./Timer.css"
import Return from "../../assets/imagens/Return.png"

function Timer( { isActive, onFinish }){
    
    const [timeLeft, setTimeLeft] = useState(360);

    useEffect(() => {
        let intervalId;

        if (isActive && timeLeft > 0) {
            intervalId = setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime <= 1) {
                        clearInterval(intervalId);
                        onFinish();
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [isActive, timeLeft, onFinish]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };


    return (
        <div className="contenedor1">
            <div className="redondoMayor">
                <p>{formatTime(timeLeft)}</p>
            </div>
            {/* <div className="redondoMenor">
                <img className="return"src={Return} alt="" />
            </div> */}
        </div>

    )
}
export default Timer;