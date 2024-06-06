import React from "react"
import "./Timer.css"
import Return from "../assets/Return.png"

function Timer(){
    return (
        <div className="contenedor">
            <div className="redondoMayor">
                <p>15:00</p>

            </div>
            <div className="redondoMenor">
                <img src={Return} alt="" />

            </div>
        </div>

    )
}
export default Timer;