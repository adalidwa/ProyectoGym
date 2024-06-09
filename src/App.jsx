import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './componentes/Cabecera/Cabecera'
import PerfilCliente from './componentes/PerfilCliente'
import BotonesCliente from './componentes/BotonesCliente'
import Novedades from './componentes/TimelineNovedades/Novedades'
import RecomendacionDieta from './componentes/RecomendacionDieta/RecomendacionDieta'
import PantallaCliente from './componentes/PantallaCliente'
import PantallaNutricionista from './componentes/PantallaNutricionista'
import PantallaEntrenador from './componentes/PantallaEntrenador'
import TimelineNovedades from './componentes/TimelineNovedades/TimelineNovedades'

function App() {
  
  return (
    <div>
      <PantallaCliente/>
      <TimelineNovedades/>
    </div>
  );
}

export default App
