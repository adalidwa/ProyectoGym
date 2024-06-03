import React from 'react'
import FotoEt from "../assets/FotoEt.png"
import './HorariosEntrenador.css'


const HorarioEntrenador = () => {
  return (
    <div className='Horario'>
        <div className='Imagen'>
            <img src={FotoEt} alt="" />
        </div>
        <div className='DatosHorario' >
            <h1>Camila Rebollo</h1>
            <p>4:00 PM - 6:00 PM</p>
            <p>LU, MI, JU, SA</p>
        </div>
    </div>
  )
}

export default HorarioEntrenador