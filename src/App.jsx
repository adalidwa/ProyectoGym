import React from 'react'
import HorarioEntrenador from './Componentes/HorariosEntrenador.jsx';
import PerfilEntrenador from './Componentes/PerfilEntrenador.jsx';
import BarraDeNavegacion from './Componentes/BarraDeNavegacion.jsx';
import Asistencia from './Componentes/Asistencia.jsx';
import './App.css'
const App = () => {
  return (
    <div className='Cuadro'>
      <HorarioEntrenador/>
      <PerfilEntrenador/>
      <BarraDeNavegacion/>
      <Asistencia/>
    </div>
    
  )
}

export default App