import React from 'react'
import "./EnvioUsuarioAsignarDieta.css"
import Triangulo from "../../assets/imagens/Triangulo.png";

const EnvioUsurarioAsignarDieta = () => {
  return (
    <div className='envioUserAsigdi'>
        <input type="text" placeholder="_________________________________________"/> 
        <img src={Triangulo} alt="" />
    </div>
  )
}

export default EnvioUsurarioAsignarDieta