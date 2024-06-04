import React from "react";
import "./BarraDeNavegacionPerfil.css";
import FotoBarra from "../assets/FotoEt.png";

const BarraDeNavegacionPerfil = () => {
  return (
    <div class="BarraNavegacionPerfil">
      <div class="BarraDeNavegacionContenido">
        <div class="BarraDeNavegacionFoto">
          <img src={FotoBarra} alt="Foto de perfil" />
        </div>
        <p>Jhovany</p>
      </div>
      <hr />
    </div>
  );
};

export default BarraDeNavegacionPerfil;
