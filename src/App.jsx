import {useState}from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css'

import TarjetaEstiramiento from './componentes/ejercicioDeEstiramiento/TarjetaEstiramiento.jsx';
import TarjetaRecuperacion from './componentes/ejercicioDeRecuperacion/TarjetaRecuperacion2.jsx';
import PuenteGluteo from './componentes/PuenteGluteo/EstiloPuente.jsx';
import GatoVaca from './componentes/GatoVaca/EstiloGatoVaca.jsx';
import EstiloEquipo from './componentes/equipo/EstiloEquipo.jsx';
import Estiloinstrucciones from './componentes/instrucciones/Estiloinstrucciones.jsx';
import Estilozona from'./componentes/Zona/Estilozona.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
      <Estiloinstrucciones/>

  );
}

export default App;