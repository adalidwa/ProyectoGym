import React from 'react'
import BuscadorUsuarioAsignarDieta from './BuscadorUsuarioAsignarDieta';
import DietaUsuarioAsignarLleno from './DietaUsuarioAsignarLleno';
import EnvioUsurarioDieta from './EnvioUsurarioAsignarDieta';
import BotonAsignarDieta from './BotonAsignarDieta';
import useStore from '../../assets/store/useStore'
import { NavLink } from 'react-router-dom';
function DietaAsignada() {
    const id = useStore((state) => state.id);
  return (
    <div className="contenedor_usuario">
    <div className='CuadrosAsig' >
        <BuscadorUsuarioAsignarDieta/>
        <DietaUsuarioAsignarLleno/>

        <EnvioUsurarioDieta/>
        <NavLink to={`/InicioDeSesionNutricionista?id=${id}`}>

        <BotonAsignarDieta/>
        </NavLink>
    </div>
  </div>
  )
}

export default DietaAsignada