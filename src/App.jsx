import React from "react";

import Entrenadores from "./componentes/Entrenador/Entrenadores.jsx";
import PerfilEntrenador from "./componentes/PerfilEntrenador/PerfilEntrenador.jsx";
import BarraDeMenu from "./componentes/BarraDeMenu/BarraDeMenu.jsx";
import Asistencia from "./componentes/Calendario/Asistencia.jsx";
import FondoImagen from "./componentes/img/ImagenFondo.png";
import BarraNavegacion from "./componentes/BarraNavegacion/BarraNavegacion.jsx";
import Navegacion from "./componentes/Router/Navegacion.jsx";
import RutinaAsignada from "./componentes/RutinaAsignada/RutinaAsignada.jsx";
import AsignarRutina from "./componentes/asignarRutina/AsignarRutina.jsx";
import EjeciciosAsignar from "./componentes/asignarEjercicio/EjeciciosAsignar.jsx";
import DietaAsignada from "./componentes/DietaAsignada /DietaAsignada.jsx";
import AsignacionAlimentos from "./componentes/asignarAlimentos/AlimentosAsignar.jsx";
import AsignarDieta from "./componentes/asignarDieta/AsignarDieta.jsx";
import "./App.css";
import DietaAsignadaCliente from "./componentes/dietaasignadacliente/DietaAsignadaCliente.jsx";
import Notificacion from "./componentes/Notificacion/Notificacion.jsx";
import RutinaAsignadaCliente from "./componentes/RutinaAsignadaCliente/RutinaAsignadaCliente.jsx";
import InformacionEstiramiento from "./componentes/infomacionEjerciciosEstiramieno/InformacionEstiramiento.jsx";
const App = () => {
  
  return (
    <div className="cuadro">
      {/* <InformacionEstiramiento/> */}
      {/* <Notificacion/> */}
      {<RutinaAsignadaCliente/>}
     {/*  <DietaAsignadaCliente/> */}
      {/* <AsignarDieta/> */}
      {/* <AsignacionAlimentos/> */}
      {/* <DietaAsignada/> */}
      {/* <EjeciciosAsignar/> */}
      {/* <AsignarRutina/> */}
       {/* <RutinaAsignada/> */}
      {/* <ToastContainer /> */}
      
    </div>
  );
};

export default App;
