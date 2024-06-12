import React from 'react';
import './EvaluacionFisica.css';

const EvaluacionNutricional = () => {
  return (
    <div className="evaluacion-nutricional">
      <div className="condicion-fisica">
        <label htmlFor="condicionFisica">Nivel de condición física:</label>
        <select id="condicionFisica">
          <option value="Bajo">Bajo</option>
          <option value="Medio">Medio</option>
          <option value="Alto">Alto</option>
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
