import React, { useState, useEffect } from "react";
import "./BarraNavegacion.css";
import barras from "../../assets/icons/3barritas.png";
import BarraDeMenu from "./BarraDeMenu";
import { NavLink } from "react-router-dom";
import { TiBell } from "react-icons/ti";
import TimelineNovedades from "../TimelineNovedades/TimelineNovedades";
const BarraNavegacion = (props) => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch(`https://6661a6e163e6a0189feaef7e.mockapi.io/Users/${props.id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setMenuVisible(!menuVisible);
  };
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.BarraMenu') && menuVisible) {
        setMenuVisible(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [menuVisible]);

  const [showModal, setShowModal] = useState(false);
  const handleButtonClick = () => {
    setShowModal(!showModal); // Invierte el estado actual de showModal
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="barraDeNavegacion">
      <div className="contenedor">
      <NavLink to= {`/Usuario?id=${props.id}`} className="navlink-no-under">  
        <h1 className="titulo">GYM CENTMAXFIX</h1>
      </NavLink>
      <div className="barra_noti">      
        
        <TiBell color='white' onClick={handleButtonClick}size={28} style={{ marginRight: '5px' }} />
        {showModal && (
                <div className="modal1">
                    <div className="modal-content1">
                        <TimelineNovedades  onClose={handleCloseModal} />
                    </div>
                </div>
        )}

        <img className="barritas " src={barras} alt="" onClick={toggleMenu}/>
      </div>
      </div>
      <BarraDeMenu users={users} isVisible={menuVisible} />
    </div>
  );
};

export default BarraNavegacion;
