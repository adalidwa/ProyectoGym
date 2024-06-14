  import React, { useEffect, useState } from 'react'
  import HorarioEntrenador from './HorariosEntrenador';
  import './Entrenadores.css';
  import BarraNavegacion from '../BarraNavegacionAll/BarraNavegacion';
  import { useSearchParams } from 'react-router-dom';
  import useStore from '../../assets/store/useStore';
  const Entrenadores = () => {
    const id = useStore((state) => state.id);
    const state = useStore.getState();

    return (
      <div className="contenedor_usuario">
        <BarraNavegacion id={id}/>
        <div className="cuadro">
          
          <div className='entrenador'>
              <HorarioEntrenador  />
          </div>
        </div>

      </div>
    )
  }

  export default Entrenadores