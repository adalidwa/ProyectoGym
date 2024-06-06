import React from 'react'
import Entrenadores from './Componentes/Entrenador/Entrenadores.jsx';
import PerfilEntrenador from './Componentes/PerfilEntrenador/PerfilEntrenador.jsx';
import BarraDeNavegacion from './Componentes/BarraDeNavegacion/BarraDeNavegacion.jsx'
import Asistencia from './Componentes/Calendario/Asistencia.jsx';
import FondoImagen from './Componentes/img/ImagenFondo.png';
import './App.css'
const App = () => {
  return (
    <div className='Cuadro'>
      {/* <Entrenadores/> */}
      {/* <PerfilEntrenador/> */}
      {/* <BarraDeNavegacion/> */}
      <Asistencia/>
    </div>
    
  )
}

export default App