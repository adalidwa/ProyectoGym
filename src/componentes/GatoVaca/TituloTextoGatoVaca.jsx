import React from 'react';
import './TituloTextoGatoVaca.css';
import barradeinstruccion from '../../assets/iconos/Barra.png'; 

function Titulo2 () {
  return (
    <div>
      <div className="titulogato">GATO VACA</div>
      <div className="subtitlegato">Instrucciones</div>
      <img  className="imagegato"src={barradeinstruccion} alt="" />
      <div className="textgato">
    Pon las rodillas en el suelo y las manos a la misma altura, que estén perfectamente apoyadas.
    Se trata de dos movimientos complementarios. Comienza arqueando la espalda, agachando la cabeza como si quisieras tocar la barbilla con el pecho y sostén el abdomen hacia adentro.
    El movimiento complementario sería elevar la cabeza, abrir el pecho y elevar la pelvis. La espalda se arquea pero en el sentido contrario al primer movimiento.
    Acompaña la respiración a cada movimiento que hagas.
    </div>
    </div>
  );
};

export default Titulo2;