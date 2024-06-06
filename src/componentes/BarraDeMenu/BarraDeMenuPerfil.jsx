import React from "react";
import "./BarraDeMenuPerfil.css";

const BarraDeMenuPerfil = ({ name, avatar }) => {
  return (
    <div className="BarraMenuPerfil">
      <div className="BarraDeMenuContenido">
        <div className="BarraDeMenuFoto">
          <img src={avatar} alt="Foto de perfil" />
          <button>Editar</button>
        </div>
        <p>{name}</p>
      </div>
      <hr />
    </div>
  );
};

export default BarraDeMenuPerfil;
