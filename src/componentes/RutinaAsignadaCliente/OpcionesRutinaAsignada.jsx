import React, { useState } from 'react';
import './OpcionesRutinaAsignada.css'
import Hombros from '../img/HombrosMusculos.png'

const OpcionesRutinaAsignada = (props) => {
    const users =props.users
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
            {users.Descripcion}
            </p>
          </>
        )}
        {content === 'zona' && (
            <div className='Rutinaimgtext'>
                <div className='RuImgs'>
                    <img src={users.imgzonatrabajada1} alt="" />
                    <img src={users.imgzonatrabajada2}/>
                    <img src={users.imgzonatrabajada3} alt="" />
                </div> 
                <div className='Rutext'>
                    <p>{users.Imgzonatrabajada1text}</p>
                    <p>{users.Imgzonatrabajada1text2}</p>
                    <p>{users.Imgzonatrabajada1text3}</p>
                    
                </div> 
            </div>
        )}
      </div>
      
    </div>
  );
};

export default OpcionesRutinaAsignada;
