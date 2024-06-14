import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DietaFechaCliente.css";
import TrianguloReves from "../../assets/imagens/TrianguloReves.png";


const DietaFechaCliente = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (date) => {
    setStartDate(date);
    setShowCalendar(false); // Cierra el calendario después de seleccionar una fecha
  };
  
  return (

      <div className="FechaUsuAsigg">
        
        <div className="FechaUsuTextoAsigg">
        <select className="dropdown1" defaultValue="JUAN">
            <option value="JUAN">Desayuno</option>
            <option value="JUAN">Almuerzo</option>
            <option value="JUAN">Cena</option>
          </select>
          <p>{startDate.toLocaleDateString()}</p>
        </div>
        <div className="FechaUsuImgAsigg">
          <img
            src={TrianguloReves}
            alt=""
            onClick={() => setShowCalendar(!showCalendar)}
            style={{ cursor: "pointer" }}
          />
          {showCalendar && (
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              inline
            />
          )}
        </div>
      </div>
      
    
  );
};

export default DietaFechaCliente;
