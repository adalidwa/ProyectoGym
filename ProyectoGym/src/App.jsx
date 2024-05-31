import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './components/Head'
import PerfilCliente from './components/PerfilCliente'
import BotonesCliente from './components/BotonesCliente'
import Novedades from './components/Novedades'
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
    </>
  )
}

export default App
