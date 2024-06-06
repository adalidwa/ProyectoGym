import React from 'react'
import Racha from '../img/Racha.png';
import './DiasDeRacha.css';

const DiasDeRacha = () => {
  return (
    <div className='DiasRacha'>
        <div className='DiasRachaTexto'>
            <p>2 </p>
            <p>Dias de racha</p>
        </div>
        <div className='DiasRachaImg'>
            <img src={Racha} alt="" />
        </div>
    </div>
  )
}

export default DiasDeRacha