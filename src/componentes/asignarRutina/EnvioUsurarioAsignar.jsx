import React from 'react'
import "./EnvioUsuarioAsignar.css"
import Triangulo from "../img/Triangulo.png";

const EnvioUsurario = () => {
  return (
    <div className='envioUserAsig'>
        <input type="text" placeholder="_________________________________________"/> 
        <img src={Triangulo} alt="" />
    </div>
  )
}

export default EnvioUsurario