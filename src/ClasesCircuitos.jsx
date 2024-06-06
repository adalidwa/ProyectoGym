import React from 'react';
import './ClasesCircuitos.css';

const Circuitos = () => {
  return (
    <div className="circuitos">
       <div className="espacio-libre">
        <img src="circuitos.jpg" alt="Circuitos" />
        <h2>Circuitos</h2>
        <p>Martes - Jueves - Domingo</p>
          <h3>Espacio Libre 1</h3>
          <p>En la clase de circuitos podrás desafiarte a vos mismo con los entrenamientos que tenemos para vos
            !TE ATREVES A ENTRAR A ESTE GRAN RETO¡
          </p>
          <button className="btn-ver">Ver</button>
        </div>

    </div>
  );
};

export default Circuitos;
