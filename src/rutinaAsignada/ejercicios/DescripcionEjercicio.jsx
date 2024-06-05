import React from "react"
import "./DescripcionEjercicio.css"
import ejerWoman from "../../assets/ejerWoman.png"

function DescripcionEjercicio (){
    return(
        <div className="ContenedorM">
            <div className="contenedorImagen">
                <img src={ejerWoman} alt="" />
            </div>
            <div className="contenedorTitulo">
                <h1>
                    Barbell Rows
                </h1>
            </div>
        </div>

    )
}

export default DescripcionEjercicio;