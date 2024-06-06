import React, { useState, useEffect } from "react";
import BarraDeNavegacionPerfil from "./BarraDeNavegacionPerfil.jsx";
import BarraDeNavegacionBotones from "./BarraDeNavegacionBotones.jsx";
import BarraDeNavegacionHorario from "./BarraDeNavegacionHorario.jsx";
import "./BarraDeNavegacion.css";

const BarraDeNavegacion = () => {
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
    <div className="BarraDeNavegacion">
      <BarraDeNavegacionPerfil name={profile.name} avatar={profile.avatar} />
      <BarraDeNavegacionBotones />
      <BarraDeNavegacionHorario />
    </div>
  );
};

export default BarraDeNavegacion;
