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
import EjeciciosAsignar from "./componentes/asignarEjercicio/EjeciciosAsignar.jsx";
import DietaAsignada from "./componentes/DietaAsignada /DietaAsignada.jsx";
import AsignacionAlimentos from "./componentes/asignarAlimentos/AlimentosAsignar.jsx";
import AsignarDieta from "./componentes/asignarDieta/AsignarDieta.jsx"
import "./App.css";
import DietaAsignadaCliente from "./componentes/dietaasignadacliente/DietaAsignadaCliente.jsx";
const App = () => {
  return (
    <div className="cuadro">
      <DietaAsignadaCliente/>
      {/* <AsignarDieta/> */}
      {/* <AsignacionAlimentos/> */}
      {/* <DietaAsignada/> */}
      {/* <EjeciciosAsignar/> */}
      {/* <AsignarRutina/> */}
     {/*  <RutinaAsignada/> */}
    </div>
  );
};

export default App;
