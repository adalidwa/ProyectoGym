import React from 'react'
import "./VolverAtras.css"
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
function VolverAtras() {
    const navigate = useNavigate();

    const goBack = () => {
      navigate(-1); // -1 indica que debe volver a la página anterior en el historial
    };
  return (
    <div className="contenedor_volver">    
        <MdKeyboardDoubleArrowLeft onClick={goBack} color='rgba(161, 55, 55, 1)' size={50} />
    </div>
  )
}

export default VolverAtras