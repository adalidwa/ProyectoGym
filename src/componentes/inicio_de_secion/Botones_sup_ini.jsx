import React from 'react'
import "./Botones_sup_ini.css"
import { NavLink } from 'react-router-dom'
function Botones_sup_ini() {
  return (
    <div className="contenedor_bot_sup_ini">
        <button className="boton_sup_ini_a">Inicio de secion</button>
        <NavLink to="/Registro">
        <button className="boton_sup_ini">Registro</button>
        </NavLink>

    </div>
  )
}

export default Botones_sup_ini