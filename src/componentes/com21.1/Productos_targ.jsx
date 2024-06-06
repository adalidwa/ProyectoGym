import React from 'react'
import"./Productos_targ.css"
import imagen1 from "../../assets/imagens/imagen1.png"
import icon_est_d from "../../assets/imagens/Group.png"
import MyComponent from '../../componentes/comi/MyComponent.jsx'
function Productos_targ() {

  return (
  <div className="contenedor_targ"> 
  <img className="imagenes" src={imagen1}></img>
  <div className="ima_title">Optimun Nutricion</div>
  <div className="ima_title">(ON)</div>
  <div className="icons">
  <MyComponent/>
  </div>
  </div>
  )
}

export default Productos_targ