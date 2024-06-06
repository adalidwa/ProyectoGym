import React from 'react'
import PerfilProfecionalEntrenador from "./PerfilProfecionalEntrenador.jsx";
import NameFotoEntrenador from './NameFotoEntrenador.jsx';
import ContactosEntrenador from './ContactosEntrenador.jsx';
import BotonPerfilEntrenador from './BotonPerfilEntrenador.jsx';
import './PerfilEntrenador.css'

const PerfilEntrenador = () => {
  return (
    <div className='Perfil'>
        <NameFotoEntrenador/>
        <PerfilProfecionalEntrenador/>
        <ContactosEntrenador/>
        <BotonPerfilEntrenador/>
    </div>
  )
}
export default PerfilEntrenador