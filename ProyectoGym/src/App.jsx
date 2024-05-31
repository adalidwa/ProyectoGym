import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './components/Head'
import PerfilCliente from './components/PerfilCliente'

function App() {

  return (
    <>
      <h2 className='titulo'>Head</h2>
      <Head/>
      <h2 className='titulo'>PerfilCliente</h2>
      <PerfilCliente/>
    </>
  )
}

export default App
