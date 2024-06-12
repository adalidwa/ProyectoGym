import React from 'react';
import './ClasesCircuitos.css';

const Circuitos = () => {
  return (
    <div className="circuitos">
       <div className="espacio-libre">
        <img src="circuitos.jpg" alt="Circuitos" />
        <h2>Circuitos 💪🏽</h2>
        <p>🗓️ Martes - Jueves </p>
          <h3>🔴Espacio Libre 1</h3>
          <p>¿Te gustan los Retos?</p>
          <p>En la clase de circuitos podrás desafiarte a ti mismo con los entrenamientos que tenemos para vos
            !TE ATREVES A ENTRAR A ESTE GRAN RETO¡
          </p>
          <button className="btn-ver">Ver👀</button>
        </div>

        <div className="espacio-libre">
        <img src="./yoga.jpg" alt="Yoga" />
        <h2>Yoga🧘🏽‍♂️🧘🏽‍♀️</h2>
        <p>🗓️ Lunes - Miercoles </p>
          <h3>🔴Espacio Libre 3</h3>
          <p>¿Sientes que tu cuerpo y mente necesitan un cambio?
          </p>
          <p>El yoga te ofrece una experiencia única que te ayudará a alcanzar un estado de bienestar integral.</p>
          <button className="btn-ver">Ver👀</button>
        </div>

        <div className="espacio-libre">
        <img src="./zumba.jpg" alt="Zumba" />
        <h2>Zumba💃🏽🕺🏽👟</h2>
        <p>🗓️ Fin de Semanas </p>
          <h3>🔴Hasta Agotar espacios</h3>
          <p>¿Buscas una forma divertida de ponerte en forma? 
          </p>
          <p>¡Zumba es para ti! Baila al ritmo de contagiosos latinos, 
            quema calorías, tonifica tu cuerpo y libera estrés. ¡Ven a probar una clase gratis y únete a la fiesta!</p>
          <button className="btn-ver">Ver👀</button>
        </div>
        

    </div>
  );
};

export default Circuitos;
