import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mensaje from './componentes/mensajeMotivación/Mensaje'
import Card from './componentes/graficaDeEvaluacion/Card'
import TarjetaRutina from './componentes/rutinaAsignada/TarjetaRutina'
import TarjetaTemporizador from './componentes/temporizador/TarjetaTemporizador'


function App() {

  return (
    <>
      
      {/* <Mensaje/> */}
      {/* <Card/>  */}
       <TarjetaRutina/>
      {/* <TarjetaTemporizador/> */}
    </>
  )
}

export default App
