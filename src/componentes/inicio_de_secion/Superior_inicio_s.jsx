import React from 'react'
import "./Superior_inicio_s.css"
import Botones_sup_ini from './Botones_sup_ini'
function Superior_inicio_s(props) {
  return (
    <div className="cont_sup_ini">
        <Botones_sup_ini/>
        <p className="bienvenido_sup_ini">{props.texto}</p>
    </div>
  )
}

export default Superior_inicio_s