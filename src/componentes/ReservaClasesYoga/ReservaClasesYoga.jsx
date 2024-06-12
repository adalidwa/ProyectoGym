import React from 'react'
import ClasesCalendario from "./ClasesCalendario.jsx";
import DescripcionClaseCita from "./DescripcionClaseCita.jsx"
import DescripcionOtra from "./DescripcionOtra.jsx" 
import "./ReservaClasesYoga.css"


const ReservaClasesYoga = () => {
  return (
    <div className="reserva">
        
        <ClasesCalendario/>
        <DescripcionClaseCita/>
        <DescripcionOtra/>
    </div>
  )
}

export default ReservaClasesYoga;