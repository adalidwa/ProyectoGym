import React from "react"
import "./Opciones2.css"
import flecha from "../../assets/iconos/flecha.png"

function Opciones2({onClick , isOpen}){
    return (
        <div className="contenedorRecuperacion" onClick={onClick} style={{ cursor: 'pointer' }}>
            <img src= {flecha} alt="" className={isOpen ? "rotate-down" : "rotate-up"} />
            <h1 >Ejercicios de Recuperacion</h1>
        </div>

    )
}
export default Opciones2;