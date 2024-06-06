import React from 'react'
import Inicio from '../inicio/Inicio.jsx'
import Inicio_de_secion from '../inicio_de_secion/Inicio_de_secion'
import Registro from '../registro/Registro.jsx'
import { HashRouter, Route, Router, Routes } from 'react-router-dom'
function Navigation() {
  return (
    <HashRouter >
        <Routes >
            <Route path="/" element={<Inicio/>} />
            <Route path="/Inicio_de_secion" element={<Inicio_de_secion/>} />
            <Route path="/Registro" element={<Registro/>} />
            <Route path="/*" element= {<p>Error 404 Recurso no encontrado</p>} />
        </Routes>
    </HashRouter>
  )
}

export default Navigation