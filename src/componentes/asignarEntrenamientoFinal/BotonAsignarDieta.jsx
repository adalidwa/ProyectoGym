
import React, { useState } from 'react';
import './BotonAsignarDieta.css';

const BotonAsignarDieta = () => {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const handleClick = () => {
    setMostrarMensaje(true);
    setTimeout(() => {
      setMostrarMensaje(false);
    }, 3000); // Ocultar el mensaje después de 3 segundos
  };

  return (
    <div className='botonAsignardi'>
      <button onClick={handleClick}>ASIGNAR DIETA</button>
      {mostrarMensaje && <div className='mensajeDesplegable'>tarea completada</div>}
    </div>
  );
};

export default BotonAsignarDieta;
