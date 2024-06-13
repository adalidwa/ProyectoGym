import React from 'react'
import Fecha from '../img/Flecha.png';
import './BuscadorUsuario.css'

const BuscadorUsuario = () => {
  return (
    <div className='BuscadorUsu'>
        
            <img src={Fecha} alt="" />
            <input type="text" placeholder="Buscar..." name="query" class="search-input"/>

    </div>
  )
}

export default BuscadorUsuario