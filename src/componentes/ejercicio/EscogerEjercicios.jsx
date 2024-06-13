import React from "react";
import "./EscogerEjercicios.css";
const EjerciciosUsuario = () => {
  return (
    <div className="escoger">
      <input type="text" placeholder="Buscar"/>
      <div className="escogertexto">
        <p>Sentadillas</p>
        <p>56</p>
        <p>repeticioness</p>
        <label className="checkbox-container">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
      </div>
    </div>
  );
};

export default EjerciciosUsuario;
