import React from 'react'
import "./Productos.css"
import Productos_targ from './Productos_targ.jsx'
function Productos() {
  return (
    <div className="contenedor_productos">
    <p className="subtitulo">PROTEINAS EN POLVO</p>
    <div className="orgprod">    
    <Productos_targ/>
    <Productos_targ/>
    <Productos_targ/>
    <Productos_targ/>
    </div>
    </div>
  )
}

export default Productos