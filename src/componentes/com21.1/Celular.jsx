import React from 'react'
import Barranav from './Barranav.jsx'
import Botones from './Botones.jsx'
import Productos from './Productos.jsx'
import "./Celular.css"
function Celular() {
  return (
  <div className="contenedorpri">
    <Barranav/>
    <Botones/>
    <Productos/>
    <Productos/>
    <Productos/>
  </div>
  )
}

export default Celular