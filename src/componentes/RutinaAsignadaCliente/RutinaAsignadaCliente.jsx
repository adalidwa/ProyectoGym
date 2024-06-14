import React from 'react'
import ImagenRutinaAsignada from './ImagenRutinaAsignada'
import OpcionesRutinaAsignada from './OpcionesRutinaAsignada'
import BotonRutinaAsignada from './BotonRutinaAsignada'
import BarraNavegacion from '../BarraNavegacionAll/BarraNavegacion'
import useStore from '../../assets/store/useStore.js';
const RutinaAsignadaCliente = () => {
  const id = useStore((state) => state.id);
  return (
    <div className="contenedor_usuario">
      <BarraNavegacion  id={id}/>
    <div className='Todo'>
        <ImagenRutinaAsignada/>
        <OpcionesRutinaAsignada/>
        <BotonRutinaAsignada/>
    </div>

    </div>
  )
}

export default RutinaAsignadaCliente