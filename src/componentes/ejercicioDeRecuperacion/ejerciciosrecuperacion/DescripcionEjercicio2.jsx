import React from "react"
import "./DescripcionEjercicio2.css"
import ejerWoman from "../../../assets/imagenes/ejerWoman.png"

function DescripcionEjercicio2 ({ nombre, imagen }){
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

export default DescripcionEjercicio2;