import React from 'react'
import './AsignarRutina.css';
import FechaUsuario from './FechaUsuarioAsignar';
import BuscadorUsuarioAsignar from './BuscadorUsuarioAsignar';
import EjerciciosUsuario from './EjerciciosUsuarioAsignar';
import EnvioUsurario from './EnvioUsurarioAsignar';
import BotonAsignar from './BotonAsignar';
const DietaAsignada = () => {
  return (
    <div className='CuadrosAsig' >
        <BuscadorUsuarioAsignar/>
        <FechaUsuario/>
        <EjerciciosUsuario/>
        <EnvioUsurario/>
        <BotonAsignar/>
    </div>
  )
}

export default DietaAsignada