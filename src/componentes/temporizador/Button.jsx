import React from "react"
import "./Button.css"

function Button({ isActive, isFinished, toggleTimer  }){
    const getButtonText = () => {
        if (isFinished) {
            return "Terminado";
        } else if (isActive) {
            return "Pausar";
        } else {
            return "Iniciar";
        }
    };
    return (
        <div className="ContenedorB">
            <button className="IniciarTime" onClick={toggleTimer}  disabled={isFinished}>
            {getButtonText()}
            </button>
        </div>
    )
}

export default Button;