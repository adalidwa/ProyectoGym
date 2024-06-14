import React from 'react'
import Estiramiento from "../img/EjerciciosEstiramiento.png"
import './ImagenEjercicio.css'

const ImagenEjercicio = () => {
  return (
    <div className='EstiramientoImg'>
        <img src={Estiramiento} alt="" />
        <p>GATO VACA</p>
    </div>
  )
}

export default ImagenEjercicio