import React, { useState, useEffect } from "react";
import "./DietaUsuarioAsignar.css";

const DietaUsuarioAsignar = () => {
  const [alimentos, setAlimentos] = useState([]);
  const [alimentosSeleccionados, setAlimentosSeleccionados] = useState([]);

  useEffect(() => {
    fetch(`https://666bb77949dbc5d7145afb19.mockapi.io/Alimentos`)
      .then((res) => res.json())
      .then((data) => {
        setAlimentos(data);
        seleccionarAlimentosAleatorios(data);
      })
      .catch((error) => console.error("Error fetching alimentos:", error));
  }, []);

  const seleccionarAlimentosAleatorios = (data) => {
    const cantidadAleatoria = Math.floor(Math.random() * data.length) + 1;
    const seleccionados = data.sort(() => 0.5 - Math.random()).slice(0, cantidadAleatoria);
    setAlimentosSeleccionados(seleccionados);
  };

  return (
    <div className="EjercicioUseAsigdi">
      <p>Alimentos</p>
      <div className="letrasUseAsigdi1">
        {alimentosSeleccionados.map((alimento) => (
          <div key={alimento.id} className="escogertextodi">
          <p>{alimento.nombre}</p>
          <p>{alimento.numero}</p>
          <p>{alimento.peso}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietaUsuarioAsignar;
