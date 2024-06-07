import React from "react"
import "./Opciones.css"
import flecha from "../../assets/iconos/flecha.png"

function Opciones(){
    return (
        <div className="contenedorRutina">
            <img src= {flecha} alt="" />
            <h1>Rutina asignada</h1>
        </div>

    )
}
export default Opciones;
