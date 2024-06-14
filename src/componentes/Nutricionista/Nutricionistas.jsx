  import React, { useEffect, useState } from 'react'
  import HorariosNutricionista from './HorariosNutricionista';
  import './Nutricionistas.css';
  import BarraNavegacion from '../BarraNavegacionAll/BarraNavegacion';
  import { useSearchParams } from 'react-router-dom';
  import useStore from '../../assets/store/useStore';
  const Nutricionistas = () => {
    const id = useStore((state) => state.id);
    

    return (
      <div className="contenedor_usuario">
        <BarraNavegacion id={id}/>
        <div className="cuadro">
          
          <div className='entrenador'>
              <HorariosNutricionista  />
          </div>
        </div>

      </div>
    )
  }

  export default Nutricionistas