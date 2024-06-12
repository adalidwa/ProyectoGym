import React from 'react';
import './EvaluacionFisica.css';

const EvaluacionNutricional = () => {
  return (
    <div className="evaluacion-nutricional">
      <h2>EVALUACIÓN FISICA</h2>
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
    </div>
  );
};

export default EvaluacionNutricional;
