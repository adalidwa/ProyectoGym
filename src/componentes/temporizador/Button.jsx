import React from "react"
import "./Button.css"

function Button({ startTimer }){
    return (
        <div className="ContenedorB">
            <button className="IniciarTime" onClick={startTimer}>
                Iniciar
            </button>
        </div>
    )
}

export default Button;