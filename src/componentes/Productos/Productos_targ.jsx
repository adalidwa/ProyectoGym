import React from 'react'
import"./Productos_targ.css"
import { NavLink } from 'react-router-dom'

function Productos_targ(props) {
  const producto=props.producto

  return (
    <NavLink to={`/Producto?id=${producto.id}`}>
      
      <div className="contenedor_targ"> 

      <img className="imagenes" src={producto.img}></img>
      <div className="ima_title">{producto.NameProduct}</div>
    
      </div>
    </NavLink>
  )
}

export default Productos_targ