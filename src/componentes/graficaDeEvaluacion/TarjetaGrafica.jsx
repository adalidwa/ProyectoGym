import React from "react"
import "./TarjetaGrafica.css"
import Grafica from "./Grafica";
import ejerPortada from "../../assets/imagens/ejerPortada.png"
import BarraNavegacion from "../BarraNavegacionAll/BarraNavegacion";
import useStore from '../../assets/store/useStore';

function TarjetaGrafica (){
    const id = useStore((state) => state.id);
    return(
        <>
        <div className="contenedorCard">
            <BarraNavegacion id={id}/>
            <img className="portada"src={ejerPortada} alt="" />
            <Grafica/>
        </div>
        </>
    )
}

export default TarjetaGrafica;