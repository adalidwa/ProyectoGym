import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./FechaUsuarioDieta.css";
import TrianguloReves from "../../assets/imagens/TrianguloReves.png";

const FechaUsuarioDieta = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (date) => {
    setStartDate(date);
    setShowCalendar(false); // Cierra el calendario después de seleccionar una fecha
  };

  return (
    <div className="FechaUsudi">
      <div className="FechaUsuTextodi">
        <p>ESTADISTICA</p>
        <p>{startDate.toLocaleDateString()}</p>
      </div>
      <div className="FechaUsuImgdi">
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

export default FechaUsuarioDieta;
