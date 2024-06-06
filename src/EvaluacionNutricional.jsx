import React from 'react';
import './EvaluacionNutricional.css';

const EvaluacionNutricional = () => {
  return (
    <div className="evaluacion-nutricional">
      <h2>EVALUACIÓN NUTRICIONAL</h2>
      <div className="fecha-cliente">
        <div className="cliente">
          <label htmlFor="cliente">Cliente:</label>
          <input type="text" id="cliente" />
        </div>
        <div className="fecha">
          <label htmlFor="fecha">Fecha:</label>
          <input type="date" id="fecha" />
        </div>
      </div>
      <div className="datos-antropometricos">
        <div className="peso-altura">
          <div className="peso">
            <label htmlFor="peso">Peso (kg):</label>
            <input type="number" id="peso" />
          </div>
          
          <div className="altura">
            <label htmlFor="altura">Altura (cm):</label>
            <input type="number" id="altura" />
          </div>
        </div>
        
      </div>
      <div className="condicion-fisica">
        <label htmlFor="condicionFisica">Tipo de Cuerdo:</label>
        <select id="condicionFisica">
          <option value="Bajo">Ectoformo</option>
          <option value="Medio">Mesoformo</option>
          <option value="Alto">Endomorfo</option>
          <option value="Medio">Combinado ectoformo/mesoformo</option>
          <option value="Alto">Combinado mesoformo/Endoformo</option>
        </select>

        <div className="observaciones">
          <label htmlFor="observaciones">OBSERVACIONES:</label>
          <input type="text" id="observaciones" />
        </div>
      </div>
      <button className="btn-enviar">GUARDAR EVALUACIÓN✅</button>
    </div>
  );
};

export default EvaluacionNutricional;
