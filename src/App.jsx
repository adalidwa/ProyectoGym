import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './componentes/Cabecera/Cabecera'
import PantallaCliente from './componentes/PantallaInicioCliente/PantallaCliente'
import TimelineNovedades from './componentes/TimelineNovedades/TimelineNovedades'
import PantallaEntrenador from './componentes/PantallaInicioEntrenador/PantallaEntrenador'

function App() {
  
  return (
    <div>
      <PantallaEntrenador/>
    </div>
  );
}

export default App
