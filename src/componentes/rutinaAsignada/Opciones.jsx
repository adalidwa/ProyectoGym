import React from "react"
import "./Opciones.css"
import flecha from "../../assets/iconos/flecha.png"

function Opciones({onClick , isOpen}){
    return (
        <div className="contenedorRutina" onClick={onClick} style={{ cursor: 'pointer' }}>
            <img src= {flecha} alt="" className={isOpen ? "rotate-down" : "rotate-up"} />
            <h1 >Rutina asignada</h1>
        </div>

    )
}
export default Opciones;
