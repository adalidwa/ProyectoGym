import React from 'react'
import ReactDOM from 'react-dom/client'
import Navigation from './componentes/Routers/Navigation.jsx'
import ClasesDisponibles from './componentes/ClasesDisponibles/ClasesDisponibles.jsx'
import ComponenteReservar from './componentes/ComponenteReservar/ComponenteReservar.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation/>
  </React.StrictMode>,
)
