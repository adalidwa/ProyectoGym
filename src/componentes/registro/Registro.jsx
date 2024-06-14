import React from 'react'
import "./Registro.css"
import RegistroSuperior from './RegistroSuperior'
import RegistroMid from './RegistroMid'
import BotonRojoInicio from '../inicio_de_secion/BotonRojoInicio'
function Registro() {
  return (
    <div className="contenedor_registro">    
    <RegistroSuperior/>
    <RegistroMid/>
    <div className="contenedor_SubInferiorInicioSecion">
        <BotonRojoInicio text="REGISTRATE"/>
    </div>
    </div>
  )
}

export default Registro