import React from 'react'
import './DietaAsignadas.css';
import FechaUsuarioDieta from './FechaUsuarioDieta';
import BuscadorUsuarioDieta from './BuscadorUsuarioDieta';
import SumaCaloriasDieta from './SumaCaloriasDieta';
import Alimentos from './Alimentos';
import GraficaUsuario from './GraficaUsuarioDieta';
import BarraNavegacion from '../BarraNavegacionAll/BarraNavegacion';
import useStore from '../../assets/store/useStore';
const DietaAsignadas = () => {
  const id = useStore((state) => state.id);
  return (
    <div className="contenedor_usuario">
      <BarraNavegacion id={id}/>
      <div className='Cuadros' >
          <BuscadorUsuarioDieta/>
          <FechaUsuarioDieta/>
          <SumaCaloriasDieta/>
          <Alimentos/>
          <GraficaUsuario/>
      </div>
      
    </div>
  )
}

export default DietaAsignadas