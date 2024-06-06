import React from 'react'
import './InformacionAsistencia.css'

const InformacionAsistencia = () => {
  return (
    <div className='InforAsistencia'>
        <div className='InforAsistenciaTexto'>
            <p>Los dias que asistio=</p>
            <p>Maximo de Rachas=</p>
        </div>
        <div className='InforAsistenciaFiguras'>
            <div className='Circulo'></div>
            <p>4</p>
        </div>
    </div>
  )
}

export default InformacionAsistencia