import React from 'react'
import "./EnvioUsuario.css"
import Triangulo from "../img/Triangulo.png";

const EnvioUsurario = () => {
  return (
    <div className='envioUser'>
        <input type="text" placeholder="_________________________________________"/> 
        <img src={Triangulo} alt="" />
    </div>
  )
}

export default EnvioUsurario