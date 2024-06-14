import React from 'react'
import './AsignarDieta.css';
import BuscadorUsuarioAsignarDieta from './BuscadorUsuarioAsignarDieta';
import DietaUsuarioAsignar from './DietaUsuarioAsignar';
import EnvioUsurarioDieta from './EnvioUsurarioAsignarDieta';
import BotonAsignarDieta from './BotonAsignarDieta';
import { NavLink } from 'react-router-dom';
const AsignarDieta = () => {
  return (
    <div className="contenedor_usuario">
      <div className='CuadrosAsig' >
          <BuscadorUsuarioAsignarDieta/>
          <NavLink to="/Asiganrdieta" className="navlink-no-under">
          <DietaUsuarioAsignar/>
          </NavLink>
          <EnvioUsurarioDieta/>
          <BotonAsignarDieta/>
      </div>
    </div>
  )
}

export default AsignarDieta