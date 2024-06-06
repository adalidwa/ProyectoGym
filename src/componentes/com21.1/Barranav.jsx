import React from 'react'
import "./Barranav.css"
import barras from '../../assets/icons/3barritas.png'
function Barranav() {
  return (
    <div className="contenedor">
      <h1 className="titulo">GYM CENTIMAXFIX</h1>
      <img className="barritas " src={barras} alt="" />
    </div>
  )
}

export default Barranav