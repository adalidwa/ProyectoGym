import React from 'react'
import TituloDieta from './TituloDieta.jsx';
import EscogerAlimentos from './EscogerAlimentos.jsx'
import BotonAsignarAlimentos from './BotonAsignarAlimentos.jsx';
const AlimentosAsignar = () => {
  return (
    <div>
        <TituloDieta/>
        <EscogerAlimentos/>
        <BotonAsignarAlimentos/>
    </div>
  )
}

export default AlimentosAsignar