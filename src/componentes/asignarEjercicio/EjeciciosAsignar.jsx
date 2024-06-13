import React from 'react'
import Titulo from './Titulo.jsx';
import EscogerEjercicio from './EscogerEjercicios.jsx'
import BotonAsignarEjercicio from './BotonAsignarEjercicio.jsx';
const EjeciciosAsignar = () => {
  return (
    <div>
        <Titulo/>
        <EscogerEjercicio/>
        <BotonAsignarEjercicio/>
    </div>
  )
}

export default EjeciciosAsignar