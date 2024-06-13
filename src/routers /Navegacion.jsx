import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import EstiloEquipo from '../componentes/equipo/EstiloEquipo'
import EstiloZona from '../componentes/Zona/Estilozona'
import Estiloinstrucciones from '../componentes/instrucciones/Estiloinstrucciones'
import TarjetaEstiramiento from '../componentes/ejercicioDeEstiramiento/TarjetaEstiramiento'
import PuenteGluteo from '../componentes/PuenteGluteo/EstiloPuente.jsx'


const Navegacion = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path = '/instruccion' element = {<Estiloinstrucciones/>}/>
        <Route path = '/zona' element = {<EstiloZona/>}/>
        <Route path='/equipo'element={<EstiloEquipo/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Navegacion