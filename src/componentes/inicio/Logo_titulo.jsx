import React from 'react'
import "./Logo_titulo.css"
import logo from '../../assets/imagens/Mas.png'
function Logo_titulo() {
  return (
  <div className="contenedor_log">
    <img className="logo_img"src={logo} alt="" />
    <div className="contenedor_titulo">    
      <p className="titulo_inicio">
        CENTIMAX
        FIX
      </p>
    </div>
  </div>
  )
}

export default Logo_titulo