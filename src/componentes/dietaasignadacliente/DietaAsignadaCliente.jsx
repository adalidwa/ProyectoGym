import React, { useState, useEffect, useRef } from 'react';
import './DietaAsignadaCliente.css';
import DietaFechaCliente from './DietaFechaCliente';
import DietAClienteasignar from './DietaClienteAsignar';
import DietaComentario from './DietaComentario';
import DietaDescripcion from './DietaDescripcion';
import BarraNavegacion from "../BarraNavegacionAll/BarraNavegacion";
import useStore from '../../assets/store/useStore';
import RecomendacionDieta from '../RecomendacionDieta/RecomendacionDieta';
import { NavLink } from 'react-router-dom';

const DietaAsignadaCliente = () => {
  const id = useStore((state) => state.id);

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="contenedor_usuario">
      <BarraNavegacion id={id} />
      <div className="DietaAsignada">
        <DietaFechaCliente />
        <DietaDescripcion />
        <div className="button-container">
          <button onClick={handleButtonClick} className="toggle-button">
            RECOMENDACION DEL DIA
          </button>
        </div>
        {showDropdown && (
          <div className="dropdown" ref={dropdownRef}>
            <div className="dropdown-content show">
              <RecomendacionDieta onClose={() => setShowDropdown(false)} />
            </div>
          </div>
        )}
        <DietAClienteasignar />
        <DietaComentario />
      </div>
    </div>
  );
};

export default DietaAsignadaCliente;
