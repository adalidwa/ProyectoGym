import React from 'react'
import InputContraseña from '../inicio_de_secion/InputContraseña'
function RegistroMid() {
  return (
    <div className="contenedor_inferior_ini_ses">
      <div className="subcontenedor_inf_ini_ses">        
        <input type="text" className="correo_contra" placeholder="Correo electronico"></input>
        <InputContraseña text="contraseña"/>
        <InputContraseña text="Confirma tu contraseña"/>
      </div>
    </div>
  )
}

export default RegistroMid