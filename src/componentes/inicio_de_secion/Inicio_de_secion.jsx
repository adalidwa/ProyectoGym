import React from 'react'
import "./Inicio_de_secion.css"
import Superior_inicio_s from './Superior_inicio_s'
import InferiorInicioSecion from './InferiorInicioSecion'
import SubInferiorInicioSecion from './SubInferiorInicioSecion'
function Inicio_de_secion() {
  return (
    <div className="contenedor_inicio_de_secion">    
    <Superior_inicio_s texto="BIENVENIDO"/>
    <InferiorInicioSecion/>
    <SubInferiorInicioSecion text="inicio de secion"/> 
    </div>
  )
}

export default Inicio_de_secion