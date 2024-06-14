import React from 'react'
import Inicio from '../inicio/Inicio.jsx'
import Inicio_de_secion from '../inicio_de_secion/Inicio_de_secion'
import Registro from '../registro/Registro.jsx'
import Usuario from '../Aususario/Usuario.jsx'
import Entrenadores from '../Entrenador/Entrenadores.jsx'
import PerfilEntrenador from '../PerfilEntrenador/PerfilEntrenador.jsx'
import InicionSesionEntrenador from '../Inicio_de_sesion_Entrenador/InicionSesionEntrenador.jsx'
import InicioSecionNutricionista from '../Inicio_sesion_nutricionista/InicioSecionNutricionista.jsx'
import PerfilNutricionista from '../PerfilNutricionista/PerfilNutricionista.jsx'
import Nutricionistas from '../Nutricionista/Nutricionistas.jsx'
import ProductosPrincipal from '../Productos/ProductosPrincipal.jsx'
import ChatbotNutricion from '../chatbot/ChatbotNutricion.jsx'
import ReservaClasesCircuitos from '../ReservaClasesCircuitos/ReservaClasesCircuitos.jsx'
import TarjetaGrafica from '../graficaDeEvaluacion/TarjetaGrafica.jsx'
import ClasesDisponibles from '../ClasesDisponibles/ClasesDisponibles.jsx'
import AsignarDieta from '../asignarDieta/AsignarDieta.jsx'
import DietaAsignada from '../asignarDieta/DietaAsignada.jsx'
import AlimentosAsignar from '../asignarAlimentos/AlimentosAsignar.jsx'
import TarjetaRutina from '../rutinaAsignada/TarjetaRutina.jsx'
import TarjetaTemporizador from '../temporizador/TarjetaTemporizador.jsx'
import DietaAsignadas from '../DietaAsignada /DietaAsignadas.jsx'
import EjerciciosAsignar from '../asignarEntrenamiento/EjerciciosAsignar.jsx'
import EvaluacionNutricional from '../EvaluacionNutricionista/EvaluacionNutricional.jsx'
import RecomendacionDieta from '../RecomendacionDieta/RecomendacionDieta.jsx'
import CalificacionEntrenador from '../CalificacionEntrenador/CalificacionEntrenador.jsx'
import { HashRouter, Route, Router, Routes } from 'react-router-dom'
import RutinaAsignadaCliente from '../RutinaAsignadaCliente/RutinaAsignadaCliente.jsx'
import Producto from '../Productos/Producto.jsx'
import DietaAsignadaCliente from '../dietaasignadacliente/DietaAsignadaCliente.jsx'
import AsignarEntre from '../asignarEntrenamientoFinal/AsignarEntre.jsx'
function Navigation() {
  return (
    <HashRouter >
        <Routes >
            <Route path="/" element={<Inicio/>} />
            <Route path="/Inicio_de_secion" element={<Inicio_de_secion/>} />
            <Route path="/Registro" element={<Registro/>} />
            <Route path="/Usuario" element={<Usuario/>} />
            <Route path="/InicioDeSesionEntrenador" element={<InicionSesionEntrenador/>} />
            <Route path="/InicioDeSesionNutricionista" element={<InicioSecionNutricionista/>} />
            <Route path="/Entrendores" element={<Entrenadores/>} />
            <Route path="/entrenador/:id" element={<PerfilEntrenador />} />
            <Route path="/Nutricionistas" element={<Nutricionistas/>} />
            <Route path="/Nutricionista/:id" element={<PerfilNutricionista />} />
            <Route path="/Productos" element={<ProductosPrincipal />} />
            <Route path="/Producto" element={<Producto />} />
            <Route path="/ChatbotNutricion" element={<ChatbotNutricion/>} />
            <Route path="/ClasesDisponibles" element={<ClasesDisponibles/>} />
            <Route path="/Reservas" element={<ReservaClasesCircuitos/>} />
            <Route path="/Avances" element={<TarjetaGrafica/>} />
            <Route path="/AsignarDieta" element={<AsignarDieta/>} />
            <Route path="/Asiganrdieta" element={<AlimentosAsignar/>} />
            <Route path="/dietasasignadas" element={<DietaAsignada/>} />
            <Route path="/RutinasAsignadas" element={<TarjetaRutina/>} />
            <Route path="/Informacionderutinas" element={<RutinaAsignadaCliente/>} />
            <Route path="/temporisador" element={<TarjetaTemporizador/>} />
            <Route path="/Calificacion" element={<CalificacionEntrenador/>} />
            <Route path="/DietaAsignadas" element={<DietaAsignadaCliente/>} />
            <Route path="/Recomendacion" element={<RecomendacionDieta />} />
            <Route path="/DietasAsiganadas" element={<DietaAsignada />} />
            <Route path="/EvaluacionNutricional" element={<EvaluacionNutricional/>} />
            <Route path="/EjercicioAsignar" element={<EjerciciosAsignar/>} />
            <Route path="/EjercicioA" element={<AsignarEntre/>} />
            <Route path="/*" element= {<p>Error 404 Recurso no encontrado</p>} />

        </Routes>
    </HashRouter>
  )
}

export default Navigation