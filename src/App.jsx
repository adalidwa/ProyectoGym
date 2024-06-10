import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './componentes/Cabecera/Cabecera'
import PantallaCliente from './componentes/PantallaInicioCliente/PantallaCliente'
import TimelineNovedades from './componentes/TimelineNovedades/TimelineNovedades'
import PantallaNutricionista from './componentes/PantallaInicioNutricionista/PantallaNutricionista'
import NotificacionFinMembresia from './componentes/NotificacionFinMembresia/NotificacionFinMembresia'

function App() {
  
  return (
    <div>
      <PantallaCliente/>
      <NotificacionFinMembresia/>
      <TimelineNovedades/>
    </div>
  );
}

export default App
