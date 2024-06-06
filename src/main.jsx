import React from 'react'
import ReactDOM from 'react-dom/client'

import PerfilEntrenador from './PerfilEntrenador.jsx'
import './PerfilEntrenador.css'


import ClasesCircuitos from './ClasesCircuitos.jsx'
import './ClasesCircuitos.css'


import './ClasesCalendario.css'
import ClasesCalendario from './ClasesCalendario.jsx'


import './DescripcionClaseCita.css'
import DescripcionClaseCita  from './DescripcionClaseCita.jsx'

import './EvaluacionNutricional.css'
import EvaluacionNutricional  from './EvaluacionNutricional.jsx'


import './EvaluacionFisica.css'
import EvaluacionFisica  from './EvaluacionFisica.jsx'
import './PuntuacionEntrenador.css'
import PuntuacionEntrenador from './PuntuacionEntrenador.jsx'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PerfilEntrenador />
    <ClasesCircuitos />
    <ClasesCalendario />
    <DescripcionClaseCita />
    <EvaluacionNutricional />

    <EvaluacionFisica />

    <PuntuacionEntrenador />
    
    
  </React.StrictMode>
)
