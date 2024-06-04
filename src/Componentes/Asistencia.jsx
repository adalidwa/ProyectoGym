import React from 'react'
import CalendarioDeAsistencias from './CalendarioDeAsistencias';
import DiasDeRacha from './DiasDeRacha.jsx';
import InformacionAsistencia from './InformacionAsistencia.jsx';
import './Asistencia.css';
const Asistencia = () => {
  return (
    <div className='Asistencia'>
        <DiasDeRacha/>
        <CalendarioDeAsistencias/>
        <InformacionAsistencia/>
    </div>
  )
}

export default Asistencia