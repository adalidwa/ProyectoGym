import React from 'react'
import "./Registro.css"
import RegistroSuperior from './RegistroSuperior'
import RegistroMid from './RegistroMid'
import SubInferiorInicioSecion from '../inicio_de_secion/SubInferiorInicioSecion'
function Registro() {
  return (
    <div className="contenedor_registro">    
    <RegistroSuperior/>
    <RegistroMid/>
    <SubInferiorInicioSecion text="REGISTRATE"/>
    </div>
  )
}

export default Registro