import React from "react"
import "./DescripcionEjercicio2.css"
import ejerWoman from "../../../assets/imagenes/ejerWoman.png"

function DescripcionEjercicio2 ({ nombre, imagen }){
    return(
        <div className="ContenedorMRecuperaacion">
            <div className="contenedorImagenRecuperacion">
                <img src={imagen}alt="" />
            </div>
            <div className="contenedorTituloRecuperacion">
                <h1>
                {nombre}
                </h1>
            </div>
        </div>

    )
}

export default DescripcionEjercicio2;