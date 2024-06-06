import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mensaje from './mensajeMotivación/Mensaje'
import Card from './graficaDeEvaluacion/Card'
import TarjetaRutina from './rutinaAsignada/TarjetaRutina'
import TarjetaTemporizador from './temporizador/TarjetaTemporizador'


function App() {

  return (
    <>
      
      {/* <Mensaje/> */}
      {/* <Card/>  */}
      {/* <TarjetaRutina/>  */}
      <TarjetaTemporizador/>
    </>
  )
}

export default App
