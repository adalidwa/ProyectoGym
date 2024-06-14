import React, { useEffect, useState } from 'react'
import "./Usuario.css"
import InformacionUsuario from './InformacionUsuario'
import BarraNavegacion from '../BarraNavegacionAll/BarraNavegacion'
import BotonoesUsuario from './BotonoesUsuario'
import entrenamiento from "../../assets/imagens/Entrenamiento.png"
import dieta from "../../assets/imagens/Dieta.png"
import avances from "../../assets/imagens/AvancesFisicos.png"
import useStore from '../../assets/store/useStore'
import Notificacion from '../Notificacion/Notificacion'
import { NavLink, useSearchParams } from 'react-router-dom'

function Usuario() {
  
  let [searchParams, setSearchParams] = useSearchParams();
  const id=searchParams.get("id")
  
  useStore.setState({ id: id })

  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch(`https://6661a6e163e6a0189feaef7e.mockapi.io/Users/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);


  return (
  
    <div className="contenedor_usuario">
      <BarraNavegacion  id={id}/>
      <Notificacion/>
      <div className="subcontenedor_usuario">
        <div className="targetausuario">
          <p className="bienvenido_usuario">Bienvenido</p>
          <InformacionUsuario users={users} />
          <NavLink to="/RutinasAsignadas" className="navlink-no-under">   
          <BotonoesUsuario backgroundImage={entrenamiento} text="Entrenamiento"/>
          </NavLink>
          <NavLink to="/DietaAsignadas" className="navlink-no-under">
          <BotonoesUsuario backgroundImage={dieta} text="Dieta"/>
          </NavLink>
          <NavLink to="/Avances" className="navlink-no-under">
            <BotonoesUsuario backgroundImage={avances} text="Avnaces Fisicos"/>
          </NavLink>
        </div>
        
      </div>
    </div>
  )
}

export default Usuario