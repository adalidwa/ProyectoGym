import React from 'react';
import './TituloTextoPuente.css';
import barradeinstruccion from '../../assets/iconos/Barra.png'; 

function Titulo () {
  return (
    <div>
      <div className="titlepuente">PUENTE DE GLÚTEO</div>
      <div className="subtitlepuente">Instrucciones</div>
      <img  className="imagenpuente"src={barradeinstruccion} alt="" />
      <div className="textpuente">
      Túmbate boca arriba con la espalda pegada al suelo y flexiona las rodillas formando un ángulo de 90 grados. 
      Mantén los pies en perpendicular a los hombros y los brazos pegados al suelo con las palmas de las manos hacia abajo. 
      Después, levanta las caderas buscando que espalda, glúteos y muslos formen una línea recta. 
      La clave está en utilizar los músculos de las piernas. Realiza entre cinco y diez repeticiones en cada serie.
    </div>
    </div>
  );
};

export default Titulo;