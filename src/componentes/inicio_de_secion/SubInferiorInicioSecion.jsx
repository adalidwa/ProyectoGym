import React from 'react'
import "./SubInferiorInicioSecion.css"
function SubInferiorInicioSecion(props) {
  return (
    <div className="contenedor_SubInferiorInicioSecion">
        <button className="boton_SubInferiorInicioSecion">{props.text} </button>
    </div>
  )
}

export default SubInferiorInicioSecion