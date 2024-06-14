import React, { useEffect, useState } from "react";
import "./EscogerAlimentos.css";
import { NavLink } from "react-router-dom";

const EscogerEjercicios = () => {
  const [alimentos, setAlimentos] = useState([]);
  const [filtroTexto, setFiltroTexto] = useState("");

  useEffect(() => {
    fetch(`https://666bb77949dbc5d7145afb19.mockapi.io/ejercicios`)
      .then((res) => res.json())
      .then((data) => setAlimentos(data))
      .catch((error) => console.error("Error fetching alimentos:", error));
  }, []);

  const handleInputChange = (event) => {
    setFiltroTexto(event.target.value);
  };

  const alimentosFiltrados = alimentos.filter((alimento) =>
    alimento.nombre_de_ejercicio.toLowerCase().includes(filtroTexto.toLowerCase())
  );

  return (
    <div className="hola">
    <div className="escogerdi">
      <input
        type="text"
        placeholder="Buscar"
        value={filtroTexto}
        onChange={handleInputChange}
      />
      <div id="alimentosContainer" className="alimentos-container">
        {alimentosFiltrados.map((alimento) => (
          <div key={alimento.id} className="escogertextodi">
            <p>{alimento.nombre_de_ejercicio}</p>
            <p>{alimento.numero}</p>
            <p>{alimento.repeticiones}</p>
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
        ))}
      </div>
      
    </div>
    <div className='BotonAsignarAli'>
      <NavLink to="/RutinaAsigandas">
      <button>Asignar</button>
      </NavLink>
        
    </div>
    </div>

    
  );
};

export default EscogerEjercicios;