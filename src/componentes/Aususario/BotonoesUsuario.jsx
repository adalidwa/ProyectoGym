import React from 'react'
import "./BotonoesUsuario.css"
function BotonoesUsuario(props) {
  return (
    <button   className="contenedor_BotonoesUsuario" style={{backgroundImage: `url(${props.backgroundImage})`,}} >{props.text}</button>
  )
}

export default BotonoesUsuario