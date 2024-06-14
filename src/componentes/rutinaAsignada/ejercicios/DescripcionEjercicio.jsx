import React from "react"
import "./DescripcionEjercicio.css"


function DescripcionEjercicio ({ nombre, imagen }){
    return(
        <div className="ContenedorM">
            <div className="contenedorImagen">
                <img src={imagen}alt="" />
            </div>
            <div className="contenedorTitulo">
                <h1>
                {nombre}
                </h1>
            </div>
        </div>

    )
}

export default DescripcionEjercicio;