import React from 'react'
import "./InformacionUsuario.css"
import imagen1 from "../../assets/imagens/imagen1.png"
function InformacionUsuario(props) {
const users=props.users
    
  return (
    <div className="contenedor_InformacionUsuario">
        <img className="imagen_usuario"src={users.avatar}/>
        <p className="firstname">{users.firstname}</p>
    </div>
  )
}

export default InformacionUsuario