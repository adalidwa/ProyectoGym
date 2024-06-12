import React from 'react';
import './EvaluacionFisica.css';

const EvaluacionNutricional = () => {
  return (
    <div className="evaluacion-nutricional">
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
        <div className="imc">
          <label htmlFor="imc">IMC:</label>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default EvaluacionNutricional;
