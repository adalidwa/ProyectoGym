import React from "react";
import "./BarraDeMenuBotones.css";
import { FaDumbbell } from "react-icons/fa6";
import { IoNutrition } from "react-icons/io5";
import { IoIosChatbubbles } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const BarraDeMenuBotones = (props) => {
  const users=props.users
  return (
    <div className="BarraMenuBotones">
      <p>Principal</p>
      <div className="Barra">


        <div className="opciones">
          <FaDumbbell color='rgba(161, 55, 55, 1)' size={22} style={{ marginLeft: '5px' }}/>
          <NavLink to={`/Entrendores`}>
            <button>Entrenadores</button>
          </NavLink>
        </div>

        <div className="opciones">
          <IoNutrition color='rgba(161, 55, 55, 1)' size={22} style={{ marginLeft: '5px' }} />
          <NavLink to={`/Nutricionistas`}>
          <button>Nutricionistas</button>
          </NavLink>
        </div>
        <div className="opciones1">
          <FaSuitcase color='rgba(161, 55, 55, 1)' size={32} style={{ marginLeft: '5px' }}/>
          <NavLink to={`/Productos`}>
          <button>Recomendacion de suplementos</button>
          </NavLink>
        </div>
        
        <div className="opciones">
         <FaCalendarAlt  color='rgba(161, 55, 55, 1)' size={22} style={{ marginLeft: '5px' }} />
         <NavLink to={`/ClasesDisponibles`}>
          <button>Clases disponibles</button>
         </NavLink>
         
        </div>

        <div className="opciones">
         <IoIosChatbubbles color='rgba(161, 55, 55, 1)' size={22} style={{ marginLeft: '5px' }}/>
         <NavLink to={`/ChatbotNutricion`}>
         <button>NutriSmart</button>
         </NavLink>
        </div>

      </div>
    </div>
  );
};

export default BarraDeMenuBotones;
