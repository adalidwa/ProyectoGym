import React from "react";
import "./EscogerAlimentos.css";
const EscogerAlimentos = () => {
  return (
    <div className="escogerdi">
      <input type="text" placeholder="Buscar"/>
      <div className="escogertextodi">
        <p>Arroz</p>
        <p>56</p>
        <p>Gramos</p>
        <label className="checkbox-container">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
      </div>
    </div>
  );
};

export default EscogerAlimentos;
