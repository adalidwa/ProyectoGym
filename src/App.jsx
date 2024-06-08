import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mensaje from './componentes/mensajeMotivación/Mensaje'
import TarjetaGrafica from './componentes/graficaDeEvaluacion/TarjetaGrafica'
import TarjetaRutina from './componentes/rutinaAsignada/TarjetaRutina'
import TarjetaTemporizador from './componentes/temporizador/TarjetaTemporizador'


function App() {

  return (
    <>
      {/* <Mensaje/> */}
      {/* <TarjetaGrafica/>   */}
      {/* <TarjetaRutina/> */}
      <TarjetaTemporizador/>
    </>
  )
}

export default App
