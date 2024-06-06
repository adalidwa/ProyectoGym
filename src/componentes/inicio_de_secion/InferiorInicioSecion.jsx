import React, { useState } from 'react'
import "./InferiorInicioSesion.css"
import InputContraseña from './InputContraseña.jsx'

function InferiorInicioSecion() {



  return (
    <div className="contenedor_inferior_ini_ses">
        <div className="subcontenedor_inf_ini_ses">        
        <input type="text" className="correo_contra" placeholder="Correo electronico"></input>
        <InputContraseña text="contraseña"/>
        </div>
    </div>
  )
}

export default InferiorInicioSecion