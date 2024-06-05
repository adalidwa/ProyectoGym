import React from 'react'
import "./Barranav.css"
import barras from '../assets/3barritas.png'
function Barranav() {
  return (
    <div className="contenedorPrincipal">
      <h1 className="titulo">GYM CENTIMAXFIX</h1>
      <img className="barritas " src={barras} alt="" />
    </div>
  )
}

export default Barranav