import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './components/Head'
import PerfilCliente from './components/PerfilCliente'
import BotonesCliente from './components/BotonesCliente'
import Novedades from './components/Novedades'
import RecomendacionDieta from './components/RecomendacionDieta'
import PantallaCliente from './components/PantallaCliente'
import PantallaNutricionista from './components/PantallaNutricionista'
function App() {

  return (
    <>
      <h2 className='titulo'>Head</h2>
      <Head/>
      <h2 className='titulo'>Perfil Cliente</h2>
      <PerfilCliente/>
      <h2 className='titulo'>Botones Cliente</h2>
      <BotonesCliente/>
      <h2 className='titulo'>Novedades</h2>
      <Novedades/>
      <h2 className='titulo'>RecomendacionDieta</h2>
      <RecomendacionDieta/>
      <h2 className='titulo'>PantallaCliente</h2>
      <PantallaCliente/>
      <h2 className='titulo'>PantallaNutricionista</h2>
      <PantallaNutricionista/>
    </>
  )
}

export default App
