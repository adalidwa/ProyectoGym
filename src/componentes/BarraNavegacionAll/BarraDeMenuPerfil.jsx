import React from "react";
import "./BarraDeMenuPerfil.css";

const BarraDeMenuPerfil = ({ name1,name2, avatar }) => {
  return (
    <div className="BarraMenuPerfil">
      <div className="BarraDeMenuContenido">
        <div className="BarraDeMenuFoto">
          <img src={avatar} alt="Foto de perfil" />
          
        </div>
        <p>
          {name1}
          <br />
          {name2}
        </p>
      
      </div>
      <hr />
    </div>
  );
};

export default BarraDeMenuPerfil;
