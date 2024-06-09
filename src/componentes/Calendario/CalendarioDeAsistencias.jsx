/* import React from 'react' */
import "./CalendarioDeAsistencias.css";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './CalendarioDeAsistencias.css';

const CalendarioDeAsistencias = () => {
    const [date, setDate] = useState(new Date());
    return (
      <div className="Calendario">
        <p>Calendario De Asistencia</p>
        <Calendar onChange={setDate} value={date} />
      </div>
    );
}

export default CalendarioDeAsistencias