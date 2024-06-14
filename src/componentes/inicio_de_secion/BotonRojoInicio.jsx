import React from 'react'
import "./BotonRojoInicio.css"

function BotonRojoInicio(props) {
    
  return (
    <button  onClick={props.click}className="boton_SubInferiorInicioSecion" >{props.text} </button>
  )
}

export default BotonRojoInicio