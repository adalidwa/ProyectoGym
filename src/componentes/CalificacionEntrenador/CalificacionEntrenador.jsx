import React from 'react'
import PerfilEntrenador from "./PerfilEntrenador.jsx";
import PuntuacionEntrenador from "./PuntuacionEntrenador.jsx"

import"./CalificacionEntrenador.css"


const CalificacionEntrenador = () => {
  return (
    <div className="calificacion">
        
        <PerfilEntrenador/>
        <PuntuacionEntrenador/>
        
    </div>
  )
}

export default CalificacionEntrenador;