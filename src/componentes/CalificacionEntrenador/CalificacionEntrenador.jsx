import React from 'react'
import PerfilEntrenador from "./PerfilEntrenador.jsx";
import PuntuacionEntrenador from "./PuntuacionEntrenador.jsx"
import useStore from '../../assets/store/useStore';
import BarraNavegacion from '../BarraNavegacionAll/BarraNavegacion.jsx';
import"./CalificacionEntrenador.css"


const CalificacionEntrenador = () => {
  const id = useStore((state) => state.id);
  return (
    <div className="contenedor_usuario">
      <BarraNavegacion id={id}/>
      <div className="calificacion">
          
          <PerfilEntrenador/>
          <PuntuacionEntrenador/>
          
      </div>

    </div>
  )
}

export default CalificacionEntrenador;