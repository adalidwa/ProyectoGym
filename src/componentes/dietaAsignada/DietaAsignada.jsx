import React from 'react'
import './DietaAsignada.css';
import FechaUsuario from './FechaUsuario';
import BuscadorUsuario from './BuscadorUsuario';
import SumaCalorias from './SumaCalorias';
import EjerciciosUsuario from './EjerciciosUsuario';
import GraficaUsuario from './GraficaUsuario';
import EnvioUsurario from './EnvioUsurario';
const DietaAsignada = () => {
  return (
    <div className='Cuadro' >
        <BuscadorUsuario/>
        <FechaUsuario/>
        <SumaCalorias/>
        <EjerciciosUsuario/>
        <GraficaUsuario/>
        <EnvioUsurario/>
    </div>
  )
}

export default DietaAsignada