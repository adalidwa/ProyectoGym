import React from "react"
import "./EjercicioTiempo.css"
import Tiempo from "../../../assets/imagens/Reloj.png"
import Calorias from "../../../assets/imagens/Calorias.png"

function EjercicioTiempo ({ tiempo, repeticiones }){
    return(
        <div className="contenedorDetalles">
            <div className="contenedorTiempo">
                <img src={Tiempo} alt="" />
                <p>{tiempo} Minutos</p>
            </div>
            <div className="contenedorCalorias">
                <img src={Calorias} alt="" />
                <p>{repeticiones} Rep.</p>
            </div>
        </div>
    )
}
export default EjercicioTiempo;