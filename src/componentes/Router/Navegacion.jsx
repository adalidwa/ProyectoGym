import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entrenadores from '../Entrenador/Entrenadores';
import PerfilEntrenador from '../PerfilEntrenador/PerfilEntrenador';

const Navegacion = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entrenadores />} />
        <Route path="/entrenador/:id" element={<PerfilEntrenador />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Navegacion