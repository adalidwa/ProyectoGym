import React from "react";
import Entrenadores from "./componentes/Entrenador/Entrenadores.jsx";
import PerfilEntrenador from "./componentes/PerfilEntrenador/PerfilEntrenador.jsx";
import BarraDeMenu from "./componentes/BarraDeMenu/BarraDeMenu.jsx";
import Asistencia from "./componentes/Calendario/Asistencia.jsx";
import FondoImagen from "./componentes/img/ImagenFondo.png";
import BarraNavegacion from "./componentes/BarraNavegacion/BarraNavegacion.jsx";
import Navegacion from "./componentes/Router/Navegacion.jsx";
import RutinaAsignada from "./componentes/rutinaAsignada/RutinaAsignada.jsx";
import AsignarRutina from "./componentes/asignarRutina/AsignarRutina.jsx"
import EjeciciosAsignar from "./componentes/ejercicio/EjeciciosAsignar.jsx";
import "./App.css";
const App = () => {
  return (
    <div className="cuadro">
      <EjeciciosAsignar/>
      {/* <AsignarRutina/> */}
      {/* <RutinaAsignada/> */}
      {/* <BarraNavegacion />
      <Navegacion/> */}
      {/* <Entrenadores /> */}
      {/* <PerfilEntrenador/> */}
      {/* <BarraDeMenu /> */}
      {/* <Asistencia/> */}
    </div>
  );
};

export default App;
