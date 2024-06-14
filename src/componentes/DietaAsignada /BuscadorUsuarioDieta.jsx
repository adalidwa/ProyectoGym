import React from 'react'
import Fecha from '../../assets/imagens/Flecha.png';
import './BuscadorUsuarioDieta.css'

const BuscadorUsuarioDieta = () => {
  return (
    <div className='BuscadorUsudi'>
        
            <img src={Fecha} alt="" />
            <input type="text" placeholder="Buscar..." name="query" class="search-input"/>

    </div>
  )
}

export default BuscadorUsuarioDieta