import React from "react";
import "./BarraDeNavegacionPerfil.css";

const BarraDeNavegacionPerfil = ({ name, avatar }) => {
  return (
    <div className="BarraNavegacionPerfil">
      <div className="BarraDeNavegacionContenido">
        <div className="BarraDeNavegacionFoto">
          <img src={avatar} alt="Foto de perfil" />
          <button>Editar</button>
        </div>
        <p>{name}</p>
      </div>
      <hr />
    </div>
  );
};

export default BarraDeNavegacionPerfil;
