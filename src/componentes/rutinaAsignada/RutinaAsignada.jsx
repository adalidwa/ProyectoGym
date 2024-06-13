import React from 'react'
import './RutinaAsignada.css';
import FechaUsuario from './FechaUsuario';
import BuscadorUsuario from './BuscadorUsuario';
import SumaCalorias from './SumaCalorias';
import EjerciciosUsuario from './EjerciciosUsuario';
import GraficaUsuario from './GraficaUsuario';
const DietaAsignada = () => {
  return (
    <div className='Cuadros' >
        <BuscadorUsuario/>
        <FechaUsuario/>
        <SumaCalorias/>
        <EjerciciosUsuario/>
        <GraficaUsuario/>
    </div>
  )
}

export default DietaAsignada