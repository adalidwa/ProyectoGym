import React from "react";
import "./PerfilProfecionalEntrenador.css";

const PerfilProfecionalEntrenador = ({ descripcion }) => {
  return (
    <div className="DatosPerf">
      <h3>PERFIL PROFESIONAL</h3>
      <p>
      {descripcion}
      </p>
      <hr />
    </div>
  );
};

export default PerfilProfecionalEntrenador;