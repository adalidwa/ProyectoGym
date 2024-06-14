import React, { useState,useEffect } from 'react'
import "./Inicio_de_secion.css"
import Botones_sup_ini from './Botones_sup_ini'
import BotonRojoInicio from './BotonRojoInicio'
import InputContraseña from './InputContraseña'
import InputCorreo from './InputCorreo'
import Inicio from '../inicio/Inicio.jsx'
import { NavLink, redirect, useNavigate } from 'react-router-dom'
function Inicio_de_secion() {

  const [inputValueCorreo, setInputValueCorreo] = useState("")
  const handleChangeCorreo = (event) => {
      setInputValueCorreo(event.target.value);
  };

  const [inputValueContra, setInputValueContra] = useState("")
  const handleChangeContra = (event) => {
      setInputValueContra(event.target.value);
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://6661a6e163e6a0189feaef7e.mockapi.io/Users`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const [entrenadores, setEntrenadores] = useState([])

  useEffect(() => {
    fetch(`https://665fd3625425580055b101dd.mockapi.io/api/v1/Entrenadores`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEntrenadores(data);
      });
  }, []);

  const [nutricionista, setNutricionista] = useState([])

  useEffect(() => {
    fetch(`https://6661a6e163e6a0189feaef7e.mockapi.io/nutricionistas`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setNutricionista(data);
      });
  }, []);

  
  const navigate = useNavigate();
  const verificaionusuario=() =>{
    
    
    {users.map((personajes) => 
      {
        if (personajes.email==inputValueCorreo && personajes.password==inputValueContra)
          {
            console.log("funciona")
            navigate(`/Usuario?id=${personajes.id}`);
          }
          
      }
      
    )}

    {entrenadores.map((personajes) => 
      {
        
        if (personajes.email==inputValueCorreo && personajes.password==inputValueContra)
          {
            console.log("funciona")
            navigate(`/InicioDeSesionEntrenador?id=${personajes.id}`);
          }
          
      }
      
    )}
    {nutricionista.map((personajes) => 
      {
        
        if (personajes.email==inputValueCorreo && personajes.password==inputValueContra)
          {
            console.log("funciona")
            navigate(`/InicioDeSesionNutricionista?id=${personajes.id}`);
          }
          
      }
      
    )}
  } 

  return (
    <div className="contenedor_inicio_de_secion"> 
      <div className="cont_sup_ini">
        <Botones_sup_ini/>
        <p className="bienvenido_sup_ini">BIENVENIDO</p>
      </div>


      <div className="contenedor_inferior_ini_ses">
        <div className="subcontenedor_inf_ini_ses">        
          <InputCorreo 
          inputValueCorreo={inputValueCorreo}  /* OBTENCION DEL VALOR DEL IMPUT DEL CORREO */
          handleChangeCorreo={handleChangeCorreo} 
          />
          <InputContraseña 
          text="contraseña"
          inputValueContra={inputValueContra}  /* OBTENCION DEL VALOR DEL IMPUT DEL CORREO */
          handleChangeContra={handleChangeContra}
          />
        </div>
      </div>
    
      <div className="contenedor_SubInferiorInicioSecion">
        <BotonRojoInicio  click={verificaionusuario}text="Inicio de sesion"/>
      </div>

    </div>

  )
}

export default Inicio_de_secion