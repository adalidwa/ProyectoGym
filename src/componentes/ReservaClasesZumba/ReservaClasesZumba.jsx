import React from 'react'
import ClasesCalendario from "./ClasesCalendario.jsx";
import DescripcionClaseCita from "./DescripcionClaseCita.jsx"
import DescripcionOtra from "./DescripcionOtra.jsx" 
import "./ReservaClasesZumba.css"


const ReservaClasesZumba = () => {
  return (
    <div className="reserva">
        
        <ClasesCalendario/>
        <DescripcionClaseCita/>
        <DescripcionOtra/>
    </div>
  )
}

export default ReservaClasesZumba;