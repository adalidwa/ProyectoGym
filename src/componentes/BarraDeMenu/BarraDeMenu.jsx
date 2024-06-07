import React, { useState, useEffect } from "react";
import BarraDeMenuPerfil from "./BarraDeMenuPerfil.jsx";
import BarraDeMenuBotones from "./BarraDeMenuBotones.jsx";
import BarraDeMenuHorario from "./BarraDeMenuHorario.jsx";
import "./BarraDeMenu.css";

const BarraDeMenu = ({isVisible }) => {
  const [profile, setProfile] = useState({ name: "Jhovany", avatar: "../img/FotoEt.png" });

  useEffect(() => {
    fetch("https://661037cf0640280f219c98cc.mockapi.io/api/v2/clients/3")
      .then(response => response.json())
      .then(data => {
        setProfile({ name: data.name, avatar: data.avatar });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className={`BarraMenu ${isVisible ? 'visible' : ''}`}>
      <BarraDeMenuPerfil name={profile.name} avatar={profile.avatar} />
      <BarraDeMenuBotones />
      <BarraDeMenuHorario />
    </div>
  );
};

export default BarraDeMenu;
