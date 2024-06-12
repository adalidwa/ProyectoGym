import React from 'react';
import './PerfilEntrenador.css';

function PerfilEntrenador() {
  return (
    <div className="PerfilEntrenador">
      <section className="entrendor">
        <img src="entrenador.jpg" alt="Entrenador" className="entrenador-img" />
        <div className="entrenador-info">
          <h2>Camila Rebollo</h2>
          <p>🕓4:00PM</p>
          <p>🕓6:00PM</p>
        </div>
      </section>
    </div>
  );
}

export default PerfilEntrenador;

