import React, { useState } from 'react';
import './ClasesCalendario.css';

const Calendario = () => {
  const [fechaActual, setFechaActual] = useState(new Date());

  // Funciones para manejar eventos
  const handleAnterior = () => {
    const nuevaFecha = new Date(fechaActual.getFullYear(), fechaActual.getMonth() - 1, 1);
    setFechaActual(nuevaFecha);
  };

  const handleSiguiente = () => {
    const nuevaFecha = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 1);
    setFechaActual(nuevaFecha);
  };

  // Funciones para obtener información de la fecha
  const obtenerDiasDelMes = (fecha) => {
    const diaPrimero = new Date(fecha.getFullYear(), fecha.getMonth(), 1);
    const diaUltimo = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0);
    const dias = [];

    for (let i = diaPrimero.getDate(); i <= diaUltimo.getDate(); i++) {
      const dia = new Date(fecha.getFullYear(), fecha.getMonth(), i);
      dias.push(dia);
    }

    return dias;
  };

  const obtenerNombreDelMes = (mes) => {
    switch (mes) {
      case 0:
        return 'Enero';
      case 1:
        return 'Febrero';
      case 2:
        return 'Marzo';
      case 3:
        return 'Abril';
      case 4:
        return 'Mayo';
      case 5:
        return 'Junio';
      case 6:
        return 'Julio';
      case 7:
        return 'Agosto';
      case 8:
        return 'Septiembre';
      case 9:
        return 'Octubre';
      case 10:
        return 'Noviembre';
      case 11:
        return 'Diciembre';
      default:
        return '';
    }
  };

  // Función para renderizar los días del mes
  const renderizarDiasDelMes = () => {
    const diasDelMes = obtenerDiasDelMes(fechaActual);
    return (
      <div className="dias-del-mes">
        {diasDelMes.map((dia) => (
          <div key={dia.getDate()} className="dia">
            {dia.getDate()}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="calendario">
      <div className="encabezado">
        <button className="btn-anterior" onClick={handleAnterior}>
          Anterior
        </button>
        <span className="mes">{obtenerNombreDelMes(fechaActual.getMonth())} {fechaActual.getFullYear()}</span>
        <button className="btn-siguiente" onClick={handleSiguiente}>
          Siguiente
        </button>
      </div>
      {renderizarDiasDelMes()}
    </div>
  );
};

export default Calendario;
