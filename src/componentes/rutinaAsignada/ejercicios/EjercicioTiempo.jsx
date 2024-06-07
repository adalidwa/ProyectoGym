import React from "react"
import "./EjercicioTiempo.css"
import Tiempo from "../../../assets/iconos/Reloj.png"
import Calorias from "../../../assets/iconos/Calorias.png"

function EjercicioTiempo (){
    return(
        <div className="contenedorDetalles">
            <div className="contenedorTiempo">
                <img src={Tiempo} alt="" />
                <p>10 Minutos</p>
            </div>
            <div className="contenedorCalorias">
                <img src={Calorias} alt="" />
                <p>3 Rep.</p>
            </div>
        </div>
    )
}
export default EjercicioTiempo;