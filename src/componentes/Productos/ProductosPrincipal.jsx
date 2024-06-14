import React, { useEffect, useState } from 'react'
import Botones from './Botones.jsx'
import Productos from './Productos.jsx'
import "./ProductosPrincipal.css"

import useStore from '../../assets/store/useStore.js';
import BarraNavegacion from '../BarraNavegacionAll/BarraNavegacion.jsx'
import { useSearchParams } from 'react-router-dom';

function ProductosPrincipal() {
  
  const id = useStore((state) => state.id);
  
  return (
  <div className="contenedor_usuario">
  <BarraNavegacion id={id}/>
    <div className="contenedorpri">
      <Botones/>

      <Productos/>
    </div>

  </div>
  )
}

export default ProductosPrincipal