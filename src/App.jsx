import React from "react";
import Entrenadores from "./componentes/Entrenador/Entrenadores.jsx";
import PerfilEntrenador from "./componentes/PerfilEntrenador/PerfilEntrenador.jsx";
import BarraDeMenu from "./componentes/BarraDeMenu/BarraDeMenu.jsx";
import Asistencia from "./componentes/Calendario/Asistencia.jsx";
import FondoImagen from "./componentes/img/ImagenFondo.png";
import BarraNavegacion from "./componentes/BarraNavegacion/BarraNavegacion.jsx";
import Navegacion from "./componentes/Router/Navegacion.jsx";
import DietaAsignada from "./componentes/dietaAsignada/DietaAsignada.jsx";
import "./App.css";
const App = () => {
  return (
    <div className="cuadro">
      <DietaAsignada/>
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
