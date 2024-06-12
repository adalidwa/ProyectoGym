import React from 'react'
import DatosClienteFecha from "./DatosClienteFecha.jsx"
import DatosPesoAltura from "./DatosPesoAltura.jsx"
import DatosCondicionObs from "./DatosCondicionObs.jsx"
import EvaluacionFisica from "./EvaluacionFisica.jsx"
import"./EvaluacionEntrenador.css"


const EvaluacionEntrenador = () => {
  return (
    <div className="evaluacion">
        
      {/* <DatosClienteFecha/> */}
      {/* <DatosPesoAltura/> */}
      {/* <DatosCondicionObs/> */}
      <EvaluacionFisica/>
    </div>
  )
}

export default EvaluacionEntrenador;