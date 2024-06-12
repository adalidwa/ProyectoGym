import React from 'react';
import './DescripcionClaseCita.css';

const Cita = () => {
  return (
    <div className="cita">
      <h2>Jueves - CIRCUITOS</h2>
      <div className="hora">
        <span>🕔15:25 - 🕔16:15 </span>
        
      </div>
      <div className="ubicacion">
        <p>➡️Sala 3</p>
        <p>🏭Edificio División B</p>
        <p>4 espacios libres</p>
      </div>
      <div className="instructora">
      <img src="inscircuitos.jpg" alt="entrenador" />
        <p>🏃‍♀️Instructor:</p>
        <p>Mario Hugo Herrera Venavidez</p>
      </div>
      <button className="btn-enviar">RESERVAR✅</button>
    </div>

    
    
  );
};


export default Cita;
