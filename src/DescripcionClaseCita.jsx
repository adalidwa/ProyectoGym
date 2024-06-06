import React from 'react';
import './DescripcionClaseCita.css';

const Cita = () => {
  return (
    <div className="cita">
      <h2>Martes</h2>
      <div className="hora">
        <span>🕔15:25 - 🕔16:15 </span>
        
      </div>
      <div className="ubicacion">
        <p>➡️Sala 3</p>
        <p>🏭Edificio 2b</p>
      </div>
      <div className="instructora">
        <img src="entrenador.jpg" alt="entrenador" />
        <p>🏃‍♀️Instructora:</p>
        <p>Beatriz Serrano Rodriguez</p>
      </div>
      <button className="btn-enviar">RESERVAR✅</button>
    </div>
  );
};

export default Cita;
