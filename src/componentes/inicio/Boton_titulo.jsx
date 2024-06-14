import React from 'react'
import "./Boton_titulo.css"
import { NavLink } from 'react-router-dom'
function Boton_titulo() {
  return (
  <div className="contenedor_boton_titulo">  
  <NavLink to="/Registro">   
  <button className="boton_inicio">Regsitro</button>
  </NavLink>
  <NavLink to="/Inicio_de_secion">  
  <button className="boton_inicio">Inicio de secion</button>
  </NavLink>
  
  </div>
  )
}

export default Boton_titulo