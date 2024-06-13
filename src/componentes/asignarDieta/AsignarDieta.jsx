import React from 'react'
import './AsignarDieta.css';
import BuscadorUsuarioAsignarDieta from './BuscadorUsuarioAsignarDieta';
import DietaUsuarioAsignar from './DietaUsuarioAsignar';
import EnvioUsurarioDieta from './EnvioUsurarioAsignarDieta';
import BotonAsignarDieta from './BotonAsignarDieta';
const AsignarDieta = () => {
  return (
    <div className='CuadrosAsig' >
        <BuscadorUsuarioAsignarDieta/>
        <DietaUsuarioAsignar/>
        <EnvioUsurarioDieta/>
        <BotonAsignarDieta/>
    </div>
  )
}

export default AsignarDieta