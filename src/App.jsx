import React from 'react'
import HorarioEntrenador from './Componentes/HorariosEntrenador.jsx'
import PerfilEntrenador from './Componentes/PerfilEntrenador.jsx'
import './App.css'

const App = () => {
  return (
    <div className='Cuadro'>
      <HorarioEntrenador/>
      <PerfilEntrenador/>
    </div>
    
  )
}

export default App