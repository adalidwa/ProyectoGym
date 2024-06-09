import React from "react"
import "./EjercicioTiempo2.css"
import Tiempo from "../../../assets/iconos/Reloj.png"
import Calorias from "../../../assets/iconos/Calorias.png"

function EjercicioTiempo2 ({ tiempo, repeticiones }){
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
export default EjercicioTiempo2;