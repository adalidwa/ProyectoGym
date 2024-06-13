import React from 'react'
import './DietaAsignada.css';
import FechaUsuarioDieta from './FechaUsuarioDieta';
import BuscadorUsuarioDieta from './BuscadorUsuarioDieta';
import SumaCaloriasDieta from './SumaCaloriasDieta';
import Alimentos from './Alimentos';
import GraficaUsuario from './GraficaUsuarioDieta';
const DietaAsignada = () => {
  return (
    <div className='Cuadros' >
        <BuscadorUsuarioDieta/>
        <FechaUsuarioDieta/>
        <SumaCaloriasDieta/>
        <Alimentos/>
        <GraficaUsuario/>
    </div>
  )
}

export default DietaAsignada