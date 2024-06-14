import React from 'react'
import './AsignarEntre.css';
import BuscadorUsuarioAsignarDieta from './BuscadorUsuarioAsignarDieta';
import DietaUsuarioAsignar from './EntreUsuarioAsignar';
import EnvioUsurarioDieta from './EnvioUsurarioAsignarDieta';
import BotonAsignarDieta from './BotonAsignarDieta';
import { NavLink } from 'react-router-dom';
const AsignarEntre = () => {
  return (
    <div className="contenedor_usuario">
      <div className='CuadrosAsig' >
          <BuscadorUsuarioAsignarDieta/>
          <NavLink to="/EjercicioAsignar" className="navlink-no-under">
          <DietaUsuarioAsignar/>
          </NavLink>
          <EnvioUsurarioDieta/>
          <BotonAsignarDieta/>
      </div>
    </div>
  )
}

export default AsignarEntre