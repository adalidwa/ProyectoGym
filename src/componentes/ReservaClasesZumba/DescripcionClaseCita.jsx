import React from 'react';
import './DescripcionClaseCita.css';

const Cita = () => {
  return (
    <div className="cita">
      <h2>Sábado - ZUMBA</h2>
      <div className="hora">
        <span>🕔11:25 - 🕔14:15 </span>
        
      </div>
      <div className="ubicacion">
        <p>➡️Sala 4</p>
        <p>🏭Edificio División A</p>
        <p>4 espacios libres</p>
      </div>
      <div className="instructora">
        <img src="instructor.jpg" alt="entrenador" />
        <p>🏃‍♀️Instructor:</p>
        <p>Mijael Alba Montenegro</p>
      </div>
      <button className="btn-enviar">RESERVAR✅</button>
    </div>
    
  );
};


export default Cita;
