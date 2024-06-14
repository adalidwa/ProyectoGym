import React, { useState } from 'react';
import useStore from '../../assets/store/useStore';
import BarraNavegacion from '../BarraNavegacionAll/BarraNavegacion';
import './EvaluacionNutricional.css';

const EvaluacionNutricional = () => {
  const [evaluacion, setEvaluacion] = useState({
    cliente: '',
    fecha: '',
    peso: '',
    altura: '',
    imc: '',
    condicionFisica: '',
    observaciones: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEvaluacion({ ...evaluacion, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log('Evaluación enviada:', evaluacion); // Replace with your actual submission logic
  };
  const id = useStore((state) => state.id);
  return (
    <div className="contenedor_usuario">
      <BarraNavegacion id={id}/>
      <div className="evaluacion-nutricional">
        <h2>EVALUACIÓN FISICA</h2>
        <div className="fecha-cliente">
          <div className="cliente">
            <label htmlFor="cliente">Cliente:</label>
            <input
              type="text"
              id="cliente"
              name="cliente"
              value={evaluacion.cliente}
              onChange={handleInputChange}
            />
          </div>
          <div className="fecha">
            <label htmlFor="fecha">Fecha:</label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={evaluacion.fecha}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="datos-antropometricos">
          <div className="peso-altura">
            <div className="peso">
              <label htmlFor="peso">Peso (kg):</label>
              <input
                type="number"
                id="peso"
                name="peso"
                value={evaluacion.peso}
                onChange={handleInputChange}
              />
            </div>
            <div className="altura">
              <label htmlFor="altura">Altura (cm):</label>
              <input
                type="number"
                id="altura"
                name="altura"
                value={evaluacion.altura}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="imc">
            <label htmlFor="imc">IMC:</label>
            <input
              type="text"
              id="imc"
              name="imc"
              value={evaluacion.imc}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="condicion-fisica">
          <label htmlFor="condicionFisica">Nivel de condición física:</label>
          <select
            id="condicionFisica"
            name="condicionFisica"
            value={evaluacion.condicionFisica}
            onChange={handleInputChange}
          >
            <option value="Bajo">Bajo</option>
            <option value="Medio">Medio</option>
            <option value="Alto">Alto</option>
          </select>
          <div className="observaciones">
            <label htmlFor="observaciones">OBSERVACIONES:</label>
            <input
              type="text"
              id="observaciones"
              name="observaciones"
              value={evaluacion.observaciones}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button className="btn-enviar" onClick={handleSubmit}>
          GUARDAR EVALUACIÓN✅
        </button>
      </div>
    </div>
  );
};

export default EvaluacionNutricional;
