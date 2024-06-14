import React from "react";
import "./PerfilProfecionalNutricionista.css";

const PerfilProfecionalNutricionista= ({ descripcion }) => {
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

export default PerfilProfecionalNutricionista;