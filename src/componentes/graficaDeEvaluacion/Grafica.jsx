import React from "react"
import "./Grafica.css"
import LinesChart from "./LinesChart";

function Grafica (){
    return(
        <div className="contenedorM">
            <h1>EVALUACIONES FÍSICAS</h1>
            <div className="contenedorGrafica">
                <div className="contenedorGrafica" style={{width:"362px", height:"244px"}}>
                    <LinesChart />
                </div>
            </div>
        </div>
    )
}

export default Grafica;