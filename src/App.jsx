import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './componentes/Head'
import PerfilCliente from './componentes/PerfilCliente'
import BotonesCliente from './componentes/BotonesCliente'
import Novedades from './componentes/Novedades'
import RecomendacionDieta from './componentes/RecomendacionDieta/RecomendacionDieta'
import PantallaCliente from './componentes/PantallaCliente'
import PantallaNutricionista from './componentes/PantallaNutricionista'
import PantallaEntrenador from './componentes/PantallaEntrenador'
function App() {

  return (
    <>
      {/* <h2 className='titulo'>Head</h2>
      <Head/> */}
      {/* <h2 className='titulo'>Perfil Cliente</h2>
      <PerfilCliente/>
      <h2 className='titulo'>Botones Cliente</h2>
      <BotonesCliente/> */}
      <h2 className='titulo'>Novedades</h2>
      <Novedades/>
      <h2 className='titulo'>RecomendacionDieta</h2>
      <RecomendacionDieta/>
      <h2 className='titulo'>PantallaCliente</h2>
      <PantallaCliente/>
      <h2 className='titulo'>PantallaNutricionista</h2>
      <PantallaNutricionista/>
      <h2 className='titulo'>PantallaEntrenador</h2>
      <PantallaEntrenador/>
    </>
  )
}

export default App
