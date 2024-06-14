import React from 'react'
import './BotonRutinaAsignada.css';
import { NavLink } from 'react-router-dom';


const BotonRutinaAsignada = () => {
  return (
    <div className='botonabajo'>
      <NavLink to="/temporisador">
        <button>Iniciar</button>
      </NavLink>
    </div>
  )
}

export default BotonRutinaAsignada