import React from 'react'
import "./RegistroBotonSuperior.css"
import { NavLink } from 'react-router-dom'
function RegistroBotonSuperior() {
  return (
    <div className="contenedor_RegistroBotonSuperior">
        <NavLink to="/Inicio_de_secion">
        <button className="boton_sup_ini">Inicio de secion</button>
        </NavLink>
        <button className="boton_sup_ini_a">Registro</button>
    </div>
  )
}

export default RegistroBotonSuperior