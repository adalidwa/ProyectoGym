import React, { useState } from 'react';
import './OpcionesRutinaAsignada.css'
import Hombros from '../../assets/imagens/HombrosMusculos.png'

const OpcionesRutinaAsignada = () => {
    const [content, setContent] = useState('instrucciones');

  const handleClick = (section) => {
    setContent(section);
  };
  return (
    <div className="botonesprincipales">
      <div className="RutinaBotones">
        <button onClick={() => handleClick('instrucciones')}>Instrucciones</button>
        <button onClick={() => handleClick('zona')}>Zona</button>
      </div>
      <hr/>
      <div className="content" id="content">
      {content === 'instrucciones' && (
          <>
            <p>
            Con los pies separados a la anchura de los hombros frente al banco. Empuja el trasero hacia atrás y baja el torso hacia abajo, extendiendo el brazo para descansar la palma de la mano en el banco. Asegúrate de que tus hombros se mantengan por encima de las caderas.
            Coge la mancuerna con la mano de trabajo. Aprieta los glúteos y los abdominales para crear tensión en todo el cuerpo. 
            Tu espalda debe estar plana, con la cabeza en una posición neutral.
            Aprieta los músculos de la parte media de la espalda para subir el codo, remar el peso. Mantén los hombros nivelados y evita girar la parte baja de la espalda.
            Haz una pausa para un ritmo, luego vuelve a bajar el peso.
            </p>
          </>
        )}
        {content === 'zona' && (
            <div className='Rutinaimgtext'>
                <div className='RuImgs'>
                    <img src={Hombros} alt="" />
                </div> 
                <div className='Rutext'>
                    <p>Hombro</p>
                </div>
            </div>
        )}
      </div>
      
    </div>
  );
};

export default OpcionesRutinaAsignada;
