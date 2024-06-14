import React from 'react'
import "./Inicio.css"
import Logo_titulo from './Logo_titulo'
import Boton_titulo from './Boton_titulo'
function Inicio() {
  return (
    <div className="delimitador">
      <div className="targeta_ini">      
        <Logo_titulo />
        <Boton_titulo />
      </div>
    </div>
  )
}

export default Inicio