import React from 'react'
import ReactDOM from 'react-dom/client'

/* import PerfilEntrenador from './PerfilEntrenador.jsx'
import PuntuacionEntrenador from './PuntuacionEntrenador.jsx'
import EvaluacionFisica  from './EvaluacionFisica.jsx' 
import EvaluacionNutricional  from './EvaluacionNutricional.jsx'  */
/* import ClasesCircuitos from './ClasesCircuitos.jsx' */


import ReservaClasesCircuitos from "./componentes/ReservaClasesCircuitos/ReservaClasesCircuitos.jsx"
import ReservaClasesYoga from './componentes/ReservaClasesYoga/ReservaClasesYoga.jsx'
import ReservaClasesZumba from './componentes/ReservaClasesZumba/ReservaClasesZumba.jsx'
import CalificacionEntrenador from "./componentes/CalificacionEntrenador/CalificacionEntrenador.jsx"
import EvaluacionEntrenador from './componentes/EvaluacionEntrenador/EvaluacionEntrenador.jsx'
import EvaluacionNutricionista from './componentes/EvaluacionNutricionista/EvaluacionNutricionista.jsx'
import ClasesDisponibles from './componentes/ClasesDisponibles/ClasesDisponibles.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
  {/* <ClasesDisponibles/> */}
  {/* <EvaluacionEntrenador/> */}
  {/* <EvaluacionNutricionista/> */}
  <CalificacionEntrenador/>
  {/* <ReservaClasesCircuitos/>  */}
  {/* <ReservaClasesYoga/> */} 
  {/* <ReservaClasesZumba/> */}
     

  {/* <PerfilEntrenador /> */}
  {/* <ClasesCircuitos />  */}
  {/*  {<ClasesCalendario />} */}
  {/* <DescripcionClaseCita /> */}
  {/* <EvaluacionNutricional /> */}
  {/* <EvaluacionFisica /> */}
  {/* <PuntuacionEntrenador /> */}
    
    
  </React.StrictMode>
)
